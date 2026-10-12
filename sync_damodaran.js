/**
 * Damodaran Online Automated Sync Engine (Node.js)
 * Fetches live Musings on Markets blog feed & scrapes NYU Stern pages
 * to discover new materials, spreadsheets, and updates.
 */

const fs = require('fs');
const path = require('path');

const BLOG_FEED_URL = 'https://aswathdamodaran.blogspot.com/feeds/posts/default?alt=json';

const CORE_PAGES = [
  { name: 'Current Datasets (2026)', url: 'https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datacurrent.html', cat: 'Datasets' },
  { name: 'Main Data Portal', url: 'https://pages.stern.nyu.edu/~adamodar/New_Home_Page/data.html', cat: 'Datasets' },
  { name: 'Valuation & Finance Tools', url: 'https://pages.stern.nyu.edu/~adamodar/New_Home_Page/tools.html', cat: 'Tools' },
  { name: 'Writing & Publications', url: 'https://pages.stern.nyu.edu/~adamodar/New_Home_Page/writing.html', cat: 'Writing' },
  { name: 'Teaching Portal', url: 'https://pages.stern.nyu.edu/~adamodar/New_Home_Page/teaching.html', cat: 'Teaching' }
];

const KNOWN_URL_SNIPPETS = [
  'fcffsimpleginzu.xlsx', 'fcffginzu.xlsx', 'fcfeginzu.xls', 'divginzu.xls',
  'wacccalc.xls', 'capbudg.xls', 'capstru.xlsx', 'apv.xls', 'dividends.xls',
  'histretsp.xls', 'histimpl.xls', 'erpbymonth.xlsx', 'ctrypremjuly26.xlsx',
  'betas.xlsx', 'totalbeta.xlsx', 'wacc.xlsx', 'eva.xlsx', 'dbtflag.xlsx',
  'covratio.xlsx', 'divsh.xlsx', 'buyback.xlsx', 'capex.xlsx', 'wc.xlsx',
  'fundgr.xlsx', 'histgr.xlsx', 'pedata.xlsx', 'vebitda.xlsx', 'corpgov.xlsx',
  'optvar.xlsx', 'expand.xls', 'delay.xls', 'bstobin.xls', 'uvalue.html'
];

async function fetchBlogPosts() {
  console.log('1. Fetching Musings on Markets live blog feed...');
  try {
    const res = await fetch(BLOG_FEED_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 DamodaranSyncBot/2.0' }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const entries = data.feed?.entry || [];
    
    return entries.slice(0, 15).map(e => {
      const title = e.title?.$t || 'Untitled Post';
      const date = (e.published?.$t || '').substring(0, 10);
      const rawSummary = (e.summary?.$t || e.content?.$t || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      const summary = rawSummary.length > 180 ? rawSummary.substring(0, 180) + '...' : rawSummary;
      const altLink = (e.link || []).find(l => l.rel === 'alternate')?.href || 'https://aswathdamodaran.blogspot.com';
      return { title, date, url: altLink, summary };
    });
  } catch (err) {
    console.error('   -> Error fetching blog feed:', err.message);
    return [];
  }
}

async function scrapePageLinks(page) {
  try {
    const res = await fetch(page.url, {
      headers: { 'User-Agent': 'Mozilla/5.0 DamodaranSyncBot/2.0' }
    });
    if (!res.ok) return [];
    const html = await res.text();
    
    const items = [];
    // Match <a href="...">text</a>
    const linkRegex = /<a\s+[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/gis;
    let match;
    
    while ((match = linkRegex.exec(html)) !== null) {
      const rawHref = match[1].trim();
      const rawText = match[2].replace(/<[^>]+>/g, '').trim();
      
      let fullUrl = rawHref;
      if (!rawHref.startsWith('http://') && !rawHref.startsWith('https://')) {
        fullUrl = new URL(rawHref, page.url).href;
      }
      
      const lowerHref = rawHref.toLowerCase();
      let fileType = null;
      if (lowerHref.endsWith('.xlsx') || lowerHref.endsWith('.xls')) fileType = 'Excel Model';
      else if (lowerHref.endsWith('.pdf')) fileType = 'Document / Notes';
      else if (lowerHref.endsWith('.mp4')) fileType = 'Video Webcast';
      else if (lowerHref.includes('youtube.com') || lowerHref.includes('youtu.be')) fileType = 'YouTube Lecture';
      
      if (fileType) {
        const filename = fullUrl.split('/').pop().toLowerCase();
        const isKnown = KNOWN_URL_SNIPPETS.some(k => filename.includes(k));
        if (!isKnown) {
          items.push({
            title: rawText || filename,
            url: fullUrl,
            filename: filename,
            type: fileType,
            source: page.name,
            category: page.cat
          });
        }
      }
    }
    return items;
  } catch (err) {
    console.error(`   -> Error scraping ${page.name}:`, err.message);
    return [];
  }
}

async function runSync() {
  console.log('=== Damodaran Online Automated Sync Engine ===');
  const startTime = new Date();
  
  const blogPosts = await fetchBlogPosts();
  console.log(`   -> Fetched ${blogPosts.length} recent Musings on Markets posts.`);
  
  console.log('2. Inspecting NYU Stern portals for newly discovered materials...');
  const discoveredMap = new Map();
  
  for (const page of CORE_PAGES) {
    const pageItems = await scrapePageLinks(page);
    for (const item of pageItems) {
      if (!discoveredMap.has(item.url)) {
        discoveredMap.set(item.url, item);
      }
    }
  }
  
  const additionalMaterials = Array.from(discoveredMap.values());
  console.log(`   -> Found ${additionalMaterials.length} additional/unmapped resources.`);
  
  const outputData = {
    sync_metadata: {
      last_synced: startTime.toISOString(),
      last_synced_human: startTime.toUTCString(),
      engine_version: '2.0.0 (Node.js)',
      status: 'operational',
      monitored_endpoints: CORE_PAGES.length + 1,
      total_blog_posts: blogPosts.length,
      total_additional_items: additionalMaterials.length
    },
    recent_blog_posts: blogPosts,
    additional_materials: additionalMaterials.slice(0, 40),
    annual_dataset_logs: [
      {
        year: '2026',
        status: 'Current Live Datasets',
        update_date: 'January 9, 2026',
        notes: 'Full annual global dataset refresh across 90+ sectors (US, Europe, Emerging Markets, Japan, Global).'
      },
      {
        year: '2027',
        status: 'Scheduled Next Major Release',
        update_date: 'Early January 2027',
        notes: 'Annual update tracking interest rate shifts, updated ERPs, and sovereign debt spreads.'
      }
    ]
  };
  
  const outPath = path.join(__dirname, 'updates_feed.json');
  fs.writeFileSync(outPath, JSON.stringify(outputData, null, 2), 'utf-8');
  console.log(`SUCCESS: Saved sync feed to ${outPath}`);
}

runSync();
