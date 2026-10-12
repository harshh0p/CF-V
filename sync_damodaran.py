#!/usr/bin/env python3
"""
Damodaran Online Automated Sync Engine
Scrapes Prof. Aswath Damodaran's NYU Stern portal & Musings on Markets blog,
discovers new materials and spreadsheets, and outputs updates_feed.json.
"""

import urllib.request
import urllib.parse
import json
import re
import datetime
from html.parser import HTMLParser

BASE_URL = "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/"
BLOG_FEED = "https://aswathdamodaran.blogspot.com/feeds/posts/default?alt=json"

CORE_PAGES = [
    {"name": "Current Datasets", "url": "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datacurrent.html", "cat": "Datasets"},
    {"name": "Data Portal", "url": "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/data.html", "cat": "Datasets"},
    {"name": "Valuation & Finance Tools", "url": "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/tools.html", "cat": "Tools"},
    {"name": "Writing & Publications", "url": "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/writing.html", "cat": "Writing"},
    {"name": "Teaching Portal", "url": "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/teaching.html", "cat": "Teaching"}
]

KNOWN_URL_SNIPPETS = {
    "fcffsimpleginzu.xlsx", "fcffginzu.xlsx", "fcfeginzu.xls", "divginzu.xls",
    "wacccalc.xls", "capbudg.xls", "capstru.xlsx", "apv.xls", "dividends.xls",
    "histretsp.xls", "histimpl.xls", "erpbymonth.xlsx", "ctrypremjuly26.xlsx",
    "betas.xlsx", "totalbeta.xlsx", "wacc.xlsx", "eva.xlsx", "dbtflag.xlsx",
    "covratio.xlsx", "divsh.xlsx", "buyback.xlsx", "capex.xlsx", "wc.xlsx",
    "fundgr.xlsx", "histgr.xlsx", "pedata.xlsx", "vebitda.xlsx", "corpgov.xlsx",
    "optvar.xlsx", "expand.xls", "delay.xls", "bstobin.xls", "uvalue.html"
}

class LinkExtractor(HTMLParser):
    def __init__(self, base_url):
        super().__init__()
        self.base_url = base_url
        self.links = []
        self._current_tag = None
        self._current_href = None
        self._current_text = []

    def handle_starttag(self, tag, attrs):
        if tag.lower() == 'a':
            self._current_tag = 'a'
            self._current_text = []
            for k, v in attrs:
                if k.lower() == 'href' and v:
                    self._current_href = v.strip()

    def handle_data(self, data):
        if self._current_tag == 'a':
            self._current_text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == 'a':
            if self._current_href:
                full_url = urllib.parse.urljoin(self.base_url, self._current_href)
                anchor = ' '.join(''.join(self._current_text).split()).strip()
                self.links.append((self._current_href, full_url, anchor))
            self._current_tag = None
            self._current_href = None
            self._current_text = []

def fetch_url(url):
    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) DamodaranSyncBot/2.0"}
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=12) as res:
            return res.read().decode('utf-8', errors='replace')
    except Exception as e:
        print(f"Warning: Failed to fetch {url}: {e}")
        return ""

def get_blog_posts():
    posts = []
    tk = chr(36) + 't'
    raw = fetch_url(BLOG_FEED)
    if not raw:
        return posts
    try:
        data = json.loads(raw)
        entries = data.get('feed', {}).get('entry', [])
        for e in entries:
            title = e.get('title', {}).get(tk, 'Untitled')
            pub_date = e.get('published', {}).get(tk, '')[:10]
            summary = e.get('summary', {}).get(tk, '') or e.get('content', {}).get(tk, '')
            clean_summary = re.sub(r'<[^>]+>', ' ', summary)
            clean_summary = ' '.join(clean_summary.split())[:180] + '...' if len(clean_summary) > 180 else clean_summary
            
            links = [l.get('href') for l in e.get('link', []) if l.get('rel') == 'alternate']
            link = links[0] if links else 'https://aswathdamodaran.blogspot.com'
            posts.append({
                "title": title,
                "date": pub_date,
                "url": link,
                "summary": clean_summary
            })
    except Exception as e:
        print(f"Error parsing blog JSON: {e}")
    return posts

def scrape_discovered_content():
    discovered = []
    seen_urls = set()

    for page in CORE_PAGES:
        html = fetch_url(page['url'])
        if not html:
            continue
        
        parser = LinkExtractor(page['url'])
        parser.feed(html)
        
        for rel_href, full_url, text in parser.links:
            clean_href = rel_href.lower()
            if full_url in seen_urls:
                continue
            
            file_type = None
            if clean_href.endswith(('.xlsx', '.xls')):
                file_type = "Excel Model"
            elif clean_href.endswith('.pdf'):
                file_type = "Document / Notes"
            elif clean_href.endswith('.mp4'):
                file_type = "Video Webcast"
            elif 'youtube.com' in clean_href or 'youtu.be' in clean_href:
                file_type = "YouTube Lecture"
            
            if file_type or ('htm' in clean_href and text and len(text) > 4):
                filename = full_url.split('/')[-1].lower()
                is_known = any(k in filename for k in KNOWN_URL_SNIPPETS)
                
                if file_type and not is_known:
                    seen_urls.add(full_url)
                    discovered.append({
                        "title": text or filename,
                        "url": full_url,
                        "filename": filename,
                        "type": file_type,
                        "source": page['name'],
                        "category": page['cat']
                    })

    return discovered

def main():
    print('Starting Damodaran Online Automated Sync...')
    now_iso = datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%d %H:%M:%S UTC')
    
    print('1. Fetching Musings on Markets live blog feed...')
    blog_posts = get_blog_posts()
    print(f'   -> Fetched {len(blog_posts)} recent articles.')
    
    print('2. Inspecting NYU Stern portals for newly discovered materials...')
    discovered = scrape_discovered_content()
    print(f'   -> Found {len(discovered)} additional/unmapped resources.')
    
    output_data = {
        "sync_metadata": {
            "last_synced": now_iso,
            "engine_version": "2.0.0",
            "status": "active",
            "monitored_endpoints": len(CORE_PAGES) + 1,
            "total_blog_posts": len(blog_posts),
            "total_additional_items": len(discovered)
        },
        "recent_blog_posts": blog_posts[:12],
        "additional_materials": discovered[:35],
        "annual_dataset_logs": [
            {
                "year": "2026",
                "status": "Current Live Datasets",
                "update_date": "January 9, 2026",
                "notes": "Full annual global dataset refresh across 90+ sectors (US, Europe, Emerging Markets, Japan, Global)."
            },
            {
                "year": "2027",
                "status": "Scheduled Next Major Release",
                "update_date": "Early January 2027",
                "notes": "Annual update tracking interest rate shifts, updated ERPs, and sovereign debt spreads."
            }
        ]
    }
    
    with open('updates_feed.json', 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)
        
    print('SUCCESS: Output saved to updates_feed.json')

if __name__ == '__main__':
    main()
