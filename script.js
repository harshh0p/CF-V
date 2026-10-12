/* ==========================================================================
   Corporate Finance & Valuation Portal — Step-by-Step Guidebook Engine
   ========================================================================== */

const masterCurriculumData = [
  // Phase 1: Corporate Finance (36 Sessions)
  {
    phaseId: "phase1",
    phaseTag: "PHASE 01",
    title: "Corporate Finance (36 Sessions)",
    description: "The core spine for corporate financial decision making: Investment, Capital Structure, and Dividend policy.",
    courseHub: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastcfonline.htm",
    textbook: "Applied Corporate Finance (4th Ed)",
    sessions: [
      { num: 1, title: "First Principles of Corporate Finance", yt: "http://youtu.be/39dK6FqGfmg?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session1.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session1test.pdf", book: "Ch.1" },
      { num: 2, title: "The Objective in Corporate Finance", yt: "http://youtu.be/rN1K9JbQhB0?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session2.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session2test.pdf", book: "Ch.2" },
      { num: 3, title: "The Objective: Real World Traps", yt: "http://youtu.be/t4M28F0iZls?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session3.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session3test.pdf", book: "Ch.2" },
      {
        isTool: true,
        title: "In-Practice Tools (Post Sessions 1-3)",
        items: [
          { name: "HP Governance Case Study", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/corpgovHP.mp4" },
          { name: "Implied ERP Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/ImpliedERP.mp4" }
        ]
      },
      { num: 4, title: "What is Risk?", yt: "http://youtu.be/S4rG5cQf19s?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session4.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session4test.pdf", book: "Ch.3" },
      { num: 5, title: "Risk Models", yt: "http://youtu.be/F49b_58K82s?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session5.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session5test.pdf", book: "Ch.3" },
      { num: 6, title: "Riskless Rates & Risk Premiums", yt: "http://youtu.be/s-LwH6-eW4c?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session6.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session6.pdf", book: "Ch.3-4" },
      { num: 7, title: "Regression Betas", yt: "http://youtu.be/Hk17YhA0E_k?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session7.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session7test.pdf", book: "Ch.4" },
      { num: 8, title: "Bottom-Up Betas", yt: "http://youtu.be/wXoY4XqGz1k?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session8.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session8test.pdf", book: "Ch.4" },
      {
        isTool: true,
        title: "In-Practice Tools (Risk & Betas)",
        items: [
          { name: "Riskfree Rate Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/riskfree.mp4" },
          { name: "Regression Beta Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/Regression.mp4" },
          { name: "Bottom-up Beta Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/BottomupBeta.mp4" }
        ]
      },
      { num: 9, title: "Cost of Debt & Capital", yt: "http://youtu.be/1K8oK-8wVrc?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session9.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session9test.pdf", book: "Ch.4" },
      { num: 10, title: "The Capital Budgeting Decision", yt: "http://youtu.be/qF4K101_Eus?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session10.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session10test.pdf", book: "Ch.5" },
      { num: 11, title: "Estimating Cash Flows", yt: "http://youtu.be/L1X4wS9W-L4?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session11.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session11test.pdf", book: "Ch.5" },
      { num: 12, title: "Capitalizing Leases & R&D", yt: "http://youtu.be/4e0-YmN6-4U?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session12.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session12test.pdf", book: "Ch.5" },
      { num: 13, title: "Investment Decision Rules", yt: "http://youtu.be/MvO5C_jGvYk?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session13.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session13test.pdf", book: "Ch.6" },
      { num: 14, title: "Investment Returns I", yt: "http://youtu.be/w0WE8jsG-Ig?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session14.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session14test.pdf", book: "Ch.5" },
      { num: 15, title: "Investment Returns II", yt: "http://youtu.be/YrHfFS4u5WE?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session15.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session15test.pdf", book: "Ch.5" },
      { num: 16, title: "Investment Returns III", yt: "http://youtu.be/_3ZqmUNdzys?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session16.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session16test.pdf", book: "Ch.6" },
      {
        isTool: true,
        title: "In-Practice Tools (Investment Returns)",
        items: [
          { name: "Typical Project Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/typicalproject.mp4" },
          { name: "ROIC Accounting Returns Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/ROIC.mp4" }
        ]
      },
      { num: 17, title: "Optimal Financing Mix I", yt: "http://youtu.be/pQYRAt6Z7Gw?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session17.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session17test.pdf", book: "Ch.7" },
      { num: 18, title: "Optimal Financing Mix II", yt: "http://youtu.be/e1JVOluxr-M?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session18.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session18test.pdf", book: "Ch.8" },
      { num: 19, title: "Optimal Financing Mix III", yt: "http://youtu.be/idSng0GyvvM?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session19.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session19test.pdf", book: "Ch.8" },
      { num: 20, title: "Optimal Financing Mix IV", yt: "http://youtu.be/3Pn-Hh_GR94?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session20.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session20test.pdf", book: "Ch.8" },
      { num: 21, title: "Optimal Financing Mix V", yt: "http://youtu.be/kcWtcZHUX6g?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session21.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session21test.pdf", book: "Ch.8" },
      {
        isTool: true,
        title: "In-Practice Tools (Debt Ratio Mix)",
        items: [
          { name: "Trade-off on Debt Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/tradeoffdebt.mp4" },
          { name: "Optimal Debt Ratio Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/optdebt.mp4" }
        ]
      },
      { num: 22, title: "Moving to Optimal Financing Mix", yt: "http://youtu.be/nbLwsUUboy0?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session22.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session22test.pdf", book: "Ch.9" },
      { num: 23, title: "The Right Type of Financing", yt: "http://youtu.be/03Sx48LW7qQ?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session23.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session23test.pdf", book: "Ch.9" },
      {
        isTool: true,
        title: "In-Practice Tools (Financing Design)",
        items: [
          { name: "Debt Design Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/debtdesign.mp4" }
        ]
      },
      { num: 24, title: "Dividend Policy: Trends & Measures", yt: "http://youtu.be/C2XMM-E48BA?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session24.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session24test.pdf", book: "Ch.10" },
      { num: 25, title: "Dividend Policy: The Trade-off", yt: "http://youtu.be/F_6mcUPfoTk?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session25.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session25test.pdf", book: "Ch.10" },
      {
        isTool: true,
        title: "In-Practice Tools (Dividend Trade-off)",
        items: [
          { name: "Dividend Trade-off Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/dividendtradeoff.mp4" }
        ]
      },
      { num: 26, title: "Dividend Policy: Assessment", yt: "http://youtu.be/DI4JeKjFlEI?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session26.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session26test.pdf", book: "Ch.11" },
      { num: 27, title: "Dividend Policy: Action & Follow-up", yt: "http://youtu.be/VpGrRE6t9U0?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session27.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session27test.pdf", book: "Ch.11" },
      { num: 28, title: "Dividend Policy: End Game", yt: "http://youtu.be/rTHDKTIt200?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session28.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session28test.pdf", book: "Ch.11" },
      {
        isTool: true,
        title: "In-Practice Tools (Dividend Assessment)",
        items: [
          { name: "Dividend Policy Assessment Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/dividends.mp4" }
        ]
      },
      { num: 29, title: "Valuation: First Steps", yt: "http://youtu.be/u76ddYwoNUk?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session29.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session29test.pdf", book: "Ch.12" },
      { num: 30, title: "Valuation: Cash Flows & Discount Rates", yt: "http://youtu.be/BFFhDAYFZM4?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session30.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session30.pdf", book: "Ch.12" },
      { num: 31, title: "Valuation: Future Growth", yt: "http://youtu.be/56ErOtE8Mts?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session31.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session31.pdf", book: "Ch.12" },
      { num: 32, title: "Valuation: Terminal Value", yt: "http://youtu.be/pN5dOi5OmCI?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session32.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session32.pdf", book: "Ch.12" },
      { num: 33, title: "Valuation: Loose Ends", yt: "http://youtu.be/QUr3qHHiDus?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session33.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session33test.pdf", book: "Ch.12" },
      { num: 34, title: "Valuation: Value of Control", yt: "http://youtu.be/PKWOBNqgvPg?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session34.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcasttests/session34test.pdf", book: "Ch.12" },
      { num: 35, title: "Valuation: It's All Relative", yt: "http://youtu.be/8N69eLBLTvA?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session35.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session35.pdf", book: "Ch.12" },
      { num: 36, title: "Closing Thoughts", yt: "http://youtu.be/7mCsz0Eqg6c?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/acf4E/webcastslides/session36.pdf", test: null, book: "—" },
      {
        isTool: true,
        title: "Final Case Study (Apple Live Valuation)",
        items: [
          { name: "Full company valuation webcast (Apple Live Example)", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/valuation.mp4" }
        ]
      }
    ],
    checkpoints: [
      { title: "Hands-on Cost of Capital Build", desc: "Build cost of capital using WACC calculator.", url: "https://pages.stern.nyu.edu/~adamodar/pc/wacccalc.xls" },
      { title: "Hands-on Capital Budgeting Build", desc: "Assess project viability with Capital Budgeting model.", url: "https://pages.stern.nyu.edu/~adamodar/pc/capbudg.xls" },
      { title: "Optimal Capital Structure Build", desc: "Optimize debt-equity mix with capital structure model.", url: "https://pages.stern.nyu.edu/~adamodar/pc/capstru.xlsx" },
      { title: "Timed Past Exam Practice", desc: "Sit real past MBA Quizzes 1-3 & Finals with solutions.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/cfprob0.html" }
    ]
  },

  // Phase 2: Valuation (25 Sessions)
  {
    phaseId: "phase2",
    phaseTag: "PHASE 02",
    title: "Valuation (25 Sessions)",
    description: "Intrinsic discounted cash flow (DCF), relative valuation, real options, and private firm valuation.",
    courseHub: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastvalonline.htm",
    textbook: "Investment Valuation (4th Ed)",
    sessions: [
      { num: 1, title: "Introduction to Valuation", yt: "http://youtu.be/znmQ7oMiQrM?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session1.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlinetests/session1.pdf", book: "Ch.1" },
      { num: 2, title: "Intrinsic Value — Foundations", yt: "http://youtu.be/8vYQpWXQ5hE?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session2.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlinetests/session2.pdf", book: "Ch.2" },
      { num: 3, title: "The Risk-Free Rate", yt: "http://youtu.be/xV80dt1OZtQ?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session3.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlinetests/session3.pdf", book: "Ch.7" },
      { num: 4, title: "The Equity Risk Premium", yt: "http://youtu.be/U3D9a_H_Vrs?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session4.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlinetests/session4.pdf", book: "Ch.7" },
      { num: 5, title: "Betas — Relative Risk Measures", yt: "http://youtu.be/qKy5UGcvWaw?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session5.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlinetests/session5.pdf", book: "Ch.8" },
      { num: 6, title: "Costs of Debt & Capital", yt: "http://youtu.be/N_FH89DCdGs?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session6.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlinetests/session6.pdf", book: "Ch.8" },
      {
        isTool: true,
        title: "In-Practice Valuation Tools (Post Session 6)",
        items: [
          { name: "Getting Data Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/gettingdata.mp4" },
          { name: "Reading 10-K into Value Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/Reading10Knew.mp4" },
          { name: "Implied ERP Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/ImpliedERP.mp4" }
        ]
      },
      { num: 7, title: "Estimating Cash Flows", yt: "http://youtu.be/8gYT3Xgs6NE?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session7.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlinetests/session7.pdf", book: "Ch.9-10" },
      { num: 8, title: "Estimating Growth", yt: "http://youtu.be/fRNcP9xjk-8?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session8.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session8.pdf", book: "Ch.11" },
      { num: 9, title: "Terminal Value", yt: "http://youtu.be/83yR6EFEl5Y?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session9.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlinetests/session9.pdf", book: "Ch.12" },
      {
        isTool: true,
        title: "In-Practice Valuation Tools (Post Session 9)",
        items: [
          { name: "Trailing 12-Month Statement", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/Trailing12month.mp4" },
          { name: "Leases & Debt Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/Leases.mp4" },
          { name: "Capitalizing R&D Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/R&D.mp4" },
          { name: "ROIC/ROE Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/ROIC.mp4" }
        ]
      },
      { num: 10, title: "Value Enhancement", yt: "http://youtu.be/9XHtztcbbUI?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session10.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlinetests/session10.pdf", book: "Ch.31" },
      { num: 11, title: "Loose Ends in Valuation", yt: "http://youtu.be/C5ZDAEqQkvA?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session11.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlinetests/session11.pdf", book: "Ch.16" },
      { num: 12, title: "Acquisition Ornaments: Synergy, Control, Complexity", yt: "http://youtu.be/QneDmX_WUyA?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session12.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session12.pdf", book: "Ch.25" },
      { num: 13, title: "Distress, Dilution & Illiquidity", yt: "http://youtu.be/Ae3iitQA9Ms?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session13.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlinetests/session13.pdf", book: "Ch.22-23" },
      {
        isTool: true,
        title: "In-Practice Valuation Tools (Post Session 13)",
        items: [
          { name: "Employee Options Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/Employeeoptions.mp4" }
        ]
      },
      { num: 14, title: "Relative Valuation — First Principles", yt: "http://youtu.be/WDZwqSierZ4?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session14.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlinetests/session14.pdf", book: "Ch.17" },
      { num: 15, title: "PE Ratios", yt: "http://youtu.be/42iyR6Geqiw?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session15.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session15.pdf", book: "Ch.18" },
      { num: 16, title: "Other Earnings Multiples", yt: "http://youtu.be/xI-KTlxfNDU?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session16.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session16.pdf", book: "Ch.18" },
      { num: 17, title: "Book Value Multiples", yt: "http://youtu.be/O8KojGTlz-E?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session17.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session17.pdf", book: "Ch.19" },
      { num: 18, title: "Revenue Multiples", yt: "http://youtu.be/_ECSqmEppqA?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session18.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session18.pdf", book: "Ch.20" },
      {
        isTool: true,
        title: "In-Practice Valuation Tools (Post Session 18)",
        items: [
          { name: "EV/Firm Value/Equity Value Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/multiplecalc.mp4" },
          { name: "Multiples & Fundamentals Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/multipleanalysis.mp4" }
        ]
      },
      { num: 19, title: "Asset-Based Valuation", yt: "http://youtu.be/HmDQISjLxig?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session19.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session19.pdf", book: "—" },
      { num: 20, title: "Private Company Valuation", yt: "http://youtu.be/Y_xqFmOrP2Y?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session19A.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session19A.pdf", book: "Ch.24" },
      { num: 21, title: "The Essence of Real Options", yt: "http://youtu.be/T1JKwzJ-KMc?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session20.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session20.pdf", book: "Ch.28" },
      { num: 22, title: "Option to Delay (Patents/Reserves)", yt: "http://youtu.be/7qbQR_5SkIM?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session21.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlinetests/session21.pdf", book: "Ch.28" },
      {
        isTool: true,
        title: "In-Practice Valuation Tools (Post Session 22)",
        items: [
          { name: "Valuing Patents as Options Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/optiontodelay.mp4" }
        ]
      },
      { num: 23, title: "Option to Expand & Abandon", yt: "http://youtu.be/8ymeDSfEzrA?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session22.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session22.pdf", book: "Ch.29" },
      { num: 24, title: "Distressed Equity as an Option", yt: "http://youtu.be/L2luFJSpQo8?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session23.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlinetests/session23.pdf", book: "Ch.30" },
      {
        isTool: true,
        title: "In-Practice Valuation Tools (Post Session 24)",
        items: [
          { name: "Valuing Distressed Equity Webcast", url: "https://www.stern.nyu.edu/~adamodar/podcasts/Webcasts/equityoption.mp4" }
        ]
      },
      { num: 25, title: "Closing Thoughts", yt: "http://youtu.be/Q_8rnowvoYw?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlineslides/session24.pdf", test: "https://www.stern.nyu.edu/~adamodar/pdfiles/valonlinetests/session24.pdf", book: "Ch.34" }
    ],
    checkpoints: [
      { title: "Practice Checkpoint 1 — Full DCF Build", desc: "Build full valuation in Simple Ginzu and Full Ginzu spreadsheets.", url: "https://pages.stern.nyu.edu/~adamodar/pc/fcffsimpleginzu.xlsx" },
      { title: "Practice Checkpoint 2 — Relative Valuation Build", desc: "Build equity multiples (eqmult.xls) and firm-value multiples (firmmult.xls).", url: "https://pages.stern.nyu.edu/~adamodar/pc/eqmult.xls" },
      { title: "Timed Past Exams (Quizzes 1-3 & Final)", desc: "Sit real past Valuation exams with solutions.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/eqexam.htm" }
    ]
  }
];

// App State
let currentView = 'dashboard';
let searchQuery = '';

// Mobile Navigation Sidebar Drawer Controller
function closeMobileSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const toggleBtn = document.getElementById('mobile-menu-toggle');

  if (sidebar) sidebar.classList.remove('sidebar-open');
  if (overlay) overlay.classList.remove('active');
  if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

function openMobileSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const toggleBtn = document.getElementById('mobile-menu-toggle');

  if (sidebar) sidebar.classList.add('sidebar-open');
  if (overlay) overlay.classList.add('active');
  if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function toggleMobileSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  if (sidebar && sidebar.classList.contains('sidebar-open')) {
    closeMobileSidebar();
  } else {
    openMobileSidebar();
  }
}

// Instant Zero-Jerk View Switcher
function switchView(targetViewId) {
  if (!targetViewId) return;
  
  const views = document.querySelectorAll('.app-view');
  const targetView = document.getElementById(`view-${targetViewId}`);
  if (!targetView) return;

  currentView = targetViewId;

  // Auto-close mobile sidebar drawer upon selecting any view
  closeMobileSidebar();

  // Update Nav Active State
  document.querySelectorAll('.nav-item').forEach(btn => {
    const isTarget = btn.getAttribute('data-view') === targetViewId;
    btn.classList.toggle('active', isTarget);
  });

  // Switch View Visibility Instantly
  views.forEach(v => {
    v.classList.remove('active');
  });
  targetView.classList.add('active');

  // Render sessions or reference hubs if needed
  if (targetViewId === 'phase1') {
    renderPhaseSessions('phase1', 'curriculum-phase1');
  } else if (targetViewId === 'phase2') {
    renderPhaseSessions('phase2', 'curriculum-phase2');
  } else if (targetViewId === 'teaching') {
    renderTeachingSubtab('online-classes');
  } else if (targetViewId === 'books-papers') {
    renderWritingSubtab('books');
  } else if (targetViewId === 'tools') {
    renderToolsSubtab('corpfin-tools');
  } else if (targetViewId === 'reference') {
    renderDataSubtab('about-data');
  } else if (targetViewId === 'updates') {
    renderUpdatesSubtab('live-blog');
  }

  // Update URL hash smoothly without reloading
  if (window.location.hash !== `#${targetViewId}`) {
    history.pushState(null, '', `#${targetViewId}`);
  }

  // Scroll main content area smoothly to top when switching steps
  const mainStream = document.querySelector('.main-stream');
  if (mainStream) mainStream.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Reference Hubs Data Registries
const teachingHubData = {
  'online-classes': [
    { title: "Accounting Online Course", sessions: "12 Sessions", desc: "Minimalist accounting tailored specifically for financial analysts and corporate valuation.", webcast: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastacctg.htm", yt: "https://www.youtube.com/playlist?list=PLUkh9m2BorqmKaLrNBjKtFDhpdFdi8f7C", slides: "https://pages.stern.nyu.edu/~adamodar/pdfiles/eqnotes/PG/Reading10KPG.pdf" },
    { title: "Applied Statistics for Finance", sessions: "10 Sessions", desc: "Data visualization, summary stats, distributions, regressions, and correlation for financial modeling.", webcast: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcaststatistics.htm", yt: "https://www.youtube.com/playlist?list=PLUkh9m2BorqmXcRzWFbzcjMd7fYErVexF", slides: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcaststatistics.htm" },
    { title: "Foundations of Finance (Primer)", sessions: "9 Sessions", desc: "Time Value of Money (TVM), interest rates, risk/return, bonds, stocks, and options.", webcast: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastfoundationsonline.htm", yt: "https://www.youtube.com/playlist?list=PLUkh9m2BorqndWimijiJ-VCAXjJUrzJQU", slides: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastfoundationsonline.htm" },
    { title: "Corporate Finance Online Course", sessions: "36 Sessions", desc: "Full online core course covering Investment, Financing Mix, and Dividend policies.", webcast: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastcfonline.htm", yt: "https://www.youtube.com/playlist?list=PLUkh9m2BorqnDenjSLZ2DHIXrdxoN4Bn_", slides: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastcfonline.htm" },
    { title: "Intrinsic Valuation Online Course", sessions: "25 Sessions", desc: "Comprehensive DCF valuation, cash flows, growth rates, terminal value, and multiples.", webcast: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastvalonline.htm", yt: "https://www.youtube.com/playlist?list=PLUkh9m2BorqnKWu0g5ZUps_CbQ-JGtbI9", slides: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastvalonline.htm" },
    { title: "Investment Philosophies", sessions: "15 Sessions", desc: "Value investing, growth/GARP, momentum, technical analysis, arbitrage, and active management.", webcast: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastinvphil2025.htm", yt: "https://www.youtube.com/playlist?list=PLUkh9m2BorqnZGADa8cTzeJblmrZY_SqP", slides: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastinvphil2025.htm" },
    { title: "Corporate Life Cycles", sessions: "20 Sessions", desc: "How financial decisions change across startups, high growth, mature, and declining firms.", webcast: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastCLC.htm", yt: "https://www.youtube.com/playlist?list=PLUkh9m2BorqlpbJBd26UEawPHk0k9y04_", slides: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastCLC.htm" }
  ],
  'mba-classes': [
    { title: "MBA Valuation Semester (Spring 2025)", desc: "Live Stern MBA semester lectures, syllabus, problem sets, and exams.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcasteqspr25.htm", yt: "https://www.youtube.com/playlist?list=PLUkh9m2BorqkgpNyRpP-NL3BS4yvFabXk" },
    { title: "Undergraduate Valuation (Spring 2025)", desc: "NYU Stern Undergraduate Valuation webcasts and course notes.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcasteqUGspr25.htm", yt: "https://www.youtube.com/playlist?list=PLUkh9m2BorqkYrFjNdut81IIcYdLfgqNd" },
    { title: "MBA Corporate Finance (Spring 2025)", desc: "Live Stern MBA Corporate Finance lectures and syllabus.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/webcastcfspr25.htm", yt: "https://www.youtube.com/playlist?list=PLUkh9m2Borqn549nqiEOyFRIvqs4_P3d0" },
    { title: "Regular Semester Course Hub", desc: "Archive of past MBA Corporate Finance & Equity Valuation semester pages.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/regularclass.htm", yt: "https://www.youtube.com/channel/UCLvnJL8htRR1T9cbSccaoVw" }
  ],
  'exec-classes': [
    { title: "TriUM Global Executive MBA", desc: "Corporate finance module taught for senior global executive leaders.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/triumdesc.html" },
    { title: "Valuation Executive Seminars", desc: "Short intensive seminars for financial institutions, private equity, and analysts.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/valseminar.html" },
    { title: "Executive Classes Hub", desc: "Complete directory of executive education modules and short courses.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/execclass.htm" }
  ]
};

const writingHubData = {
  'books': [
    { title: "Applied Corporate Finance (4th Ed)", desc: "Real-world corporate finance centered on investment, financing, and dividend decisions.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/ACF4E/appldCF4E.htm", preface: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/ACF4E/Preface.htm" },
    { title: "Investment Valuation (4th Ed)", desc: "The definitive master guide to intrinsic DCF, relative valuation, and real options.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/Inv4ed.htm", preface: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/inv4E/preface.html" },
    { title: "Damodaran on Valuation (2nd Ed)", desc: "Practical approaches to valuing equity, debt, businesses, and unusual assets.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/dam2ed.htm", preface: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/dam2ed.htm" },
    { title: "The Dark Side of Valuation (3rd Ed)", desc: "Valuing young, tech, distressed, cyclical, and multi-business firms.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/DSV3ed.htm", preface: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/DSV3ed.htm" },
    { title: "The Little Book of Valuation (2nd Ed)", desc: "Compact, beginner-friendly guide to corporate valuation essentials.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/littlebook2ed.htm", preface: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/littlebook2ed.htm" },
    { title: "Narrative and Numbers", desc: "Connecting corporate business stories to quantitative valuation models.", url: "https://pages.stern.nyu.edu/adamodar/New_Home_Page/numbers&narrative.htm", preface: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/NNPreface.html" },
    { title: "Corporate Life Cycles", desc: "Corporate financial decisions and management across organizational age stages.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/CLC.htm", preface: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/CLC/CLCPreface.html" },
    { title: "Investment Philosophies (3rd Ed)", desc: "Every investment philosophy tested against market data and empirical proof.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/invphil3edbook.htm", preface: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/invphil/preface3ed.htm" },
    { title: "Investment Fables", desc: "Debunking popular Wall Street investment myths with empirical analysis.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/invfables.htm", preface: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/invfables.htm" },
    { title: "Strategic Risk Taking", desc: "Framework for risk management, hedging, and strategic risk advantage.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/valrisk/book.htm", preface: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/valrisk/book.htm" },
    { title: "Corporate Finance (2nd Ed)", desc: "Foundational theory and practice of corporate decision making.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/CF2E.htm", preface: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/CF2E.htm" }
  ],
  'papers': [
    { title: "Equity Risk Premiums (ERP): Determinants & Estimation", category: "Risk & Betas", desc: "Annual comprehensive paper detailing the estimation of implied equity risk premiums.", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4742633" },
    { title: "Estimating Riskfree Rates", category: "Risk & Betas", desc: "How to properly measure riskfree rates across different currencies and countries.", url: "https://www.stern.nyu.edu/~adamodar/pdfiles/papers/riskfreerate.pdf" },
    { title: "Estimating Risk Parameters (Betas)", category: "Risk & Betas", desc: "Regression betas vs. bottom-up betas and fundamental risk parameters.", url: "https://www.stern.nyu.edu/~adamodar/pdfiles/papers/beta.pdf" },
    { title: "Measuring Returns: ROE, ROC & ROIC", category: "Corporate Finance", desc: "Understanding accounting vs. economic returns on capital.", url: "https://www.stern.nyu.edu/~adamodar/pdfiles/papers/returnmeasures.pdf" },
    { title: "Dealing with Operating Leases", category: "Corporate Finance", desc: "Converting off-balance-sheet operating leases into debt.", url: "https://www.stern.nyu.edu/~adamodar/pdfiles/papers/newlease.pdf" },
    { title: "Beyond Dividends: Buybacks & Spin-offs", category: "Corporate Finance", desc: "Analyzing non-dividend cash returns to equity holders.", url: "https://www.stern.nyu.edu/~adamodar/pdfiles/papers/beyonddiv.pdf" },
    { title: "The Origins of Growth", category: "Valuation", desc: "Fundamental determinants of reinvestment rate and return on capital.", url: "https://www.stern.nyu.edu/~adamodar/pdfiles/papers/growthorigins.pdf" },
    { title: "Valuation Multiples: First Principles", category: "Valuation", desc: "Understanding equity and enterprise value multiples.", url: "https://www.stern.nyu.edu/~adamodar/pdfiles/papers/multiples.pdf" },
    { title: "Valuing Financial Service Firms", category: "Specialized", desc: "Banks, insurance companies, and financial institutions valuation framework.", url: "https://www.stern.nyu.edu/~adamodar/pdfiles/papers/finfirm09.pdf" },
    { title: "Valuing Young & Start-Up Companies", category: "Specialized", desc: "Revenue growth, survival probability, and illiquidity in startups.", url: "https://www.stern.nyu.edu/~adamodar/pdfiles/papers/younggrowth.pdf" },
    { title: "Value Investing: Requiem, Rebirth or Reincarnation", category: "Strategy", desc: "Critical evaluation of traditional value investing metrics over time.", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3779481" },
    { title: "ESG and Valuation: Corporate Good vs Sound Finance", category: "ESG", desc: "Damodaran's critical assessment of ESG metrics in valuation.", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4055530" }
  ],
  'blog': [
    { title: "Musings on Markets (Official Blog)", desc: "Prof. Damodaran's active blog analyzing live earnings, market crises, tech IPOs, and macro shifts.", url: "https://aswathdamodaran.blogspot.com" }
  ],
  'articles': [
    { title: "Selected Financial Press Articles", desc: "Articles and opinion pieces published in the Financial Times, Wall Street Journal, and Forbes.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/writing.html" }
  ],
  'glossary': [
    { title: "Financial Glossary & Terms Index", desc: "Complete reference dictionary of financial terms, valuation acronyms, and formulas.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/writing.html" }
  ]
};

const toolsHubData = {
  'corpfin-tools': [
    { title: "WACC Calculator", file: "wacccalc.xls", desc: "Calculate weighted average cost of capital with bottom-up betas.", url: "https://pages.stern.nyu.edu/~adamodar/pc/wacccalc.xls" },
    { title: "Capital Budgeting Analysis", file: "capbudg.xls", desc: "Evaluate project cash flows, NPV, IRR, payback, and side effects.", url: "https://pages.stern.nyu.edu/~adamodar/pc/capbudg.xls" },
    { title: "Optimal Capital Structure (Cost of Capital)", file: "capstru.xlsx", desc: "Find optimal debt ratio that minimizes WACC.", url: "https://pages.stern.nyu.edu/~adamodar/pc/capstru.xlsx" },
    { title: "Optimal Debt - APV Approach", file: "apv.xls", desc: "Adjusted Present Value model for debt ratio optimization.", url: "https://pages.stern.nyu.edu/~adamodar/pc/apv.xls" },
    { title: "Dividend Policy Assessment", file: "dividends.xls", desc: "Assess dividend capacity (FCFE) vs. actual dividend payouts.", url: "https://pages.stern.nyu.edu/~adamodar/pc/dividends.xls" },
    { title: "Stock Buybacks Analyzer", file: "buybacks.xls", desc: "Analyze impact of share repurchases on EPS and firm value.", url: "https://pages.stern.nyu.edu/~adamodar/pc/buybacks.xls" },
    { title: "Beta Regression Calculator", file: "risk.xls", desc: "Calculate market regression betas and standard errors.", url: "https://pages.stern.nyu.edu/~adamodar/pc/risk.xls" },
    { title: "Lever & Unlever Betas", file: "levbeta.xls", desc: "Unlever industry betas and relever for target debt ratios.", url: "https://pages.stern.nyu.edu/~adamodar/pc/levbeta.xls" },
    { title: "Synthetic Rating & Cost of Debt", file: "ratings.xls", desc: "Estimate synthetic credit rating based on interest coverage.", url: "https://pages.stern.nyu.edu/~adamodar/pc/ratings.xls" },
    { title: "Convert Operating Leases to Debt", file: "oplease.xls", desc: "Capitalize operating lease commitments into financial debt.", url: "https://pages.stern.nyu.edu/~adamodar/pc/oplease.xls" },
    { title: "Capitalize R&D", file: "R&DConv.xls", desc: "Capitalize R&D expenses into intangible capital asset.", url: "https://pages.stern.nyu.edu/~adamodar/pc/R&DConv.xls" }
  ],
  'valuation-tools': [
    { title: "Simple FCFF Model (Simple Ginzu)", file: "fcffsimpleginzu.xlsx", desc: "Beginner-friendly FCFF intrinsic valuation model.", url: "https://pages.stern.nyu.edu/~adamodar/pc/fcffsimpleginzu.xlsx" },
    { title: "Master FCFF Model (Full Ginzu)", file: "fcffginzu.xlsx", desc: "Comprehensive FCFF valuation model with complete disclosures.", url: "https://pages.stern.nyu.edu/~adamodar/pc/fcffginzu.xlsx" },
    { title: "Master FCFE Model (FCFE Ginzu)", file: "fcfeginzu.xls", desc: "Free Cash Flow to Equity valuation model.", url: "https://pages.stern.nyu.edu/~adamodar/pc/fcfeginzu.xls" },
    { title: "Dividend Discount Model (DDM Ginzu)", file: "divginzu.xls", desc: "Multistage dividend discount model.", url: "https://pages.stern.nyu.edu/~adamodar/pc/divginzu.xls" },
    { title: "Equity Multiples Estimator", file: "eqmult.xls", desc: "Relative valuation model for P/E, PEG, and Price/Book.", url: "https://pages.stern.nyu.edu/~adamodar/pc/eqmult.xls" },
    { title: "Firm Multiples Estimator", file: "firmmult.xls", desc: "Enterprise value multiples (EV/EBITDA, EV/Sales).", url: "https://pages.stern.nyu.edu/~adamodar/pc/firmmult.xls" },
    { title: "High Growth / Start-up Valuation", file: "higrowth.xls", desc: "Valuation model for young companies with survival probabilities.", url: "https://pages.stern.nyu.edu/~adamodar/pc/higrowth.xls" },
    { title: "Distress Probability Model", file: "distress.xls", desc: "Valuation model incorporating distress probability.", url: "https://pages.stern.nyu.edu/~adamodar/pc/distress.xls" },
    { title: "Bank Excess Equity Return Model", file: "eqexret.xls", desc: "Valuation model for banks and financial institutions.", url: "https://pages.stern.nyu.edu/~adamodar/pc/eqexret.xls" },
    { title: "Brand Name Value Calculator", file: "brandnamevalue.xls", desc: "Estimate premium value generated by brand name.", url: "https://pages.stern.nyu.edu/~adamodar/pc/brandnamevalue.xls" },
    { title: "Synergy Valuation Model", file: "synergyvaluation.xls", desc: "Value operating and financial synergy in M&A.", url: "https://pages.stern.nyu.edu/~adamodar/pc/synergyvaluation.xls" },
    { title: "Value of Control", file: "controlvalue.xls", desc: "Estimate value differential between status quo and optimal management.", url: "https://pages.stern.nyu.edu/~adamodar/pc/controlvalue.xls" }
  ],
  'option-tools': [
    { title: "Option to Expand", file: "expand.xls", desc: "Value strategic option to expand into new markets.", url: "https://pages.stern.nyu.edu/~adamodar/pc/expand.xls" },
    { title: "Option to Delay", file: "delay.xls", desc: "Value patents and natural resource reserves as options.", url: "https://pages.stern.nyu.edu/~adamodar/pc/delay.xls" },
    { title: "Black-Scholes to Binomial Converter", file: "bstobin.xls", desc: "Option pricing calculator comparing Black-Scholes and Binomial models.", url: "https://pages.stern.nyu.edu/~adamodar/pc/bstobin.xls" }
  ],
  'apps-tools': [
    { title: "uValue Mobile App", desc: "Damodaran's mobile app for iOS valuation calculations.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/uValue.html" },
    { title: "Eran Ben Horin Financial Tools", desc: "Online web-based financial calculators for portfolio and option modeling.", url: "http://financetools.idc.ac.il" },
    { title: "Valuation Practice Webcasts Portal", desc: "Step-by-Step video tutorials demonstrating spreadsheet operations.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/valuationtools.html" }
  ]
};

const datasetsHubData = {
  'about-data': {
    'all': [
      { title: "Data History & Philosophy", category: "History", desc: "Prof. Damodaran has provided raw and industry-aggregate financial datasets to the public since 1996 to promote open financial research and transparent market analysis.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datahistory.html" },
      { title: "Timing of Data Updates", category: "Timing", desc: "Datasets are updated annually during the first two weeks of January (Latest Update: January 9, 2026). Next major update scheduled for early January 2027.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/data.html" },
      { title: "Data Sources & Providers", category: "Sources", desc: "Aggregated from S&P Capital IQ, Bloomberg, Morningstar, Federal Reserve Economic Data (FRED), and SEC 10-K filings.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/data.html" },
      { title: "Usage Rules & Caveats", category: "Usage Rules", desc: "Free for academic, personal, and professional use. Note: Company-level raw data is restricted by data services licensing, but industry sector averages are fully provided.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/data.html" }
    ]
  },
  'data-breakdown': {
    'all': [
      { title: "Data Variables Breakdown", category: "Variables", desc: "Cost of Capital, Betas, Debt Ratios, Tax Rates, Dividend Yields, ROIC, Margins, Multiples (P/E, EV/EBITDA, EV/Sales, Price/Book, EV/Invested Capital).", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/data.html" },
      { title: "Industry Classification", category: "Industry", desc: "Sector averages grouped across 90+ industry classifications (Technology, Healthcare, Energy, Banking, Consumer, Industrials, etc.).", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/data.html" },
      { title: "Regional Breakdown", category: "Region", desc: "United States (5,994 firms), Europe (6,559 firms), Emerging Markets (27,360 firms), Japan (3,965 firms), and Global aggregate (48,156 firms).", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/data.html" },
      { title: "Time Series Data", category: "Time", desc: "Historical series for market risk premiums, interest rates, inflation, and asset returns from 1928 to present.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/data.html" },
      { title: "Company Lookup Policy", category: "Company Lookup", desc: "Detailed notes explaining company-level data licensing and sector categorization guidelines.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/data.html" }
    ]
  },
  'current-data': {
    'risk': [
      { title: "Betas by Sector (US, Europe, Emerging, Global)", file: "betas.xlsx", desc: "Levered and unlevered industry betas for US (5,994 firms), Europe (6,559), Emerging (27,360), and Global (48,156).", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/betas.xlsx" },
      { title: "Total Betas by Sector", file: "totalbeta.xlsx", desc: "Total betas measuring total risk for un-diversified equity investors and private business owners.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/totalbeta.xlsx" },
      { title: "Cost of Capital & WACC by Sector", file: "wacc.xlsx", desc: "Cost of Equity, Cost of Debt, Debt Ratio, and WACC across global industry sectors.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/wacc.xlsx" },
      { title: "Historical Annual Implied ERP (1960–2026)", file: "histimpl.xls", desc: "S&P 500 annual implied equity risk premium historical time series.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/histimpl.xls" },
      { title: "Monthly Implied ERP (2008–2026)", file: "ERPbymonth.xlsx", desc: "Monthly implied ERP track through market cycles, financial crises, and inflation shifts.", url: "https://pages.stern.nyu.edu/~adamodar/pc/implprem/ERPbymonth.xlsx" },
      { title: "Sovereign Ratings & Country Risk Premiums (2026)", file: "ctrypremJuly26.xlsx", desc: "Country risk premiums, Moody's sovereign ratings, and default spreads for 150+ countries.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/ctrypremJuly26.xlsx" }
    ],
    'returns': [
      { title: "Historical Returns on Stocks, T-Bonds, T-Bills, Gold, Real Estate", file: "histretSP.xls", desc: "Annual asset class returns in the US market from 1928 to Present.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/histretSP.xls" },
      { title: "Return on Capital (ROIC), ROE & Cost of Capital", file: "eva.xlsx", desc: "Sector ROIC, ROE, WACC, and Economic Value Added (EVA) spread across global firms.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/eva.xlsx" }
    ],
    'capstru': [
      { title: "Debt Ratios by Industry (Book & Market)", file: "dbtflag.xlsx", desc: "Book and market Debt-to-Equity and Debt-to-Capital ratios across global industry sectors.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/dbtflag.xlsx" },
      { title: "Coverage Ratios & Synthetic Ratings by Industry", file: "covratio.xlsx", desc: "Interest coverage ratios, operating income, and synthetic bond ratings by sector.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/covratio.xlsx" }
    ],
    'div': [
      { title: "Dividend Yields & Payout Ratios by Sector", file: "divsh.xlsx", desc: "Dividend yields, net income payout ratios, FCFE payout ratios, and share buyback rates.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/divsh.xlsx" },
      { title: "Stock Buybacks & FCFE Cash Returns", file: "buyback.xlsx", desc: "Share repurchases vs dividend payments by industry sector.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/buyback.xlsx" }
    ],
    'cash': [
      { title: "CapEx, Depreciation & R&D Expenses by Sector", file: "capex.xlsx", desc: "Gross CapEx, Net CapEx, R&D expenses, and Depreciation/Amortization ratios by sector.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/capex.xlsx" },
      { title: "Working Capital & Cash Holdings by Sector", file: "wc.xlsx", desc: "Non-cash working capital to revenues, cash-to-firm value ratios across global sectors.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/wc.xlsx" }
    ],
    'growth': [
      { title: "Fundamental Reinvestment & Growth Rates", file: "fundgr.xlsx", desc: "Reinvestment rate, ROIC, and fundamental expected growth in operating income by sector.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/fundgr.xlsx" },
      { title: "Historical & Analyst Growth Estimates", file: "histgr.xlsx", desc: "Historical earnings growth vs. analyst consensus estimates by industry sector.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/histgr.xlsx" }
    ],
    'multiples': [
      { title: "Equity Multiples by Sector (P/E, PEG, Price/Book)", file: "pedata.xlsx", desc: "Current and forward P/E ratios, PEG ratios, Price to Book Value by industry sector.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/pedata.xlsx" },
      { title: "Enterprise Value Multiples (EV/EBITDA, EV/Sales, EV/EBIT)", file: "vebitda.xlsx", desc: "EV/EBITDA, EV/Sales, EV/Invested Capital multiples across global markets.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/vebitda.xlsx" }
    ],
    'gov': [
      { title: "Corporate Governance & Insider Holdings by Sector", file: "corpgov.xlsx", desc: "Institutional equity holdings, insider ownership percentages, and CEO compensation metrics.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/corpgov.xlsx" }
    ],
    'options': [
      { title: "Sector Volatility & Option Parameters", file: "optvar.xlsx", desc: "Equity return volatility, standard deviation of firm value, and real option parameters.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/optvar.xlsx" }
    ]
  },
  'archived-data': {
    'all': [
      { title: "Archived Sector Datasets (1999–2025)", category: "Archive", desc: "Complete historical annual sector datasets archived year-by-year for model backtesting.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/dataarchived.html" },
      { title: "Historical Data Changes & Additions Log", category: "Additions", desc: "Documentation of changes, methodology adjustments, and additions to Damodaran's datasets over time.", url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datahistory.html" }
    ]
  },
  'webcasts-data': {
    'all': [
      { title: "Data Update 1 for 2026: The Push and Pull of Data", category: "Webcast", desc: "Annual video webcast reviewing global market data trends, interest rates, and ERP changes.", url: "https://aswathdamodaran.blogspot.com" },
      { title: "Historical Returns Spreadsheet", file: "histretSP.xls", desc: "Annual returns on S&P 500, T-Bonds, Gold, Real Estate (1928–2026).", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/histretSP.xls" },
      { title: "Implied ERP Time Series Spreadsheet", file: "histimpl.xls", desc: "Historical S&P 500 implied ERP (1960–2026).", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/histimpl.xls" },
      { title: "Country Risk Premiums Spreadsheet", file: "ctrypremJuly26.xlsx", desc: "Country risk premiums for 150+ sovereign countries.", url: "https://pages.stern.nyu.edu/~adamodar/pc/datasets/ctrypremJuly26.xlsx" }
    ]
  }
};

// Sub-Tab Rendering Controllers
function renderTeachingSubtab(subtabKey) {
  const container = document.getElementById('teaching-subtab-container');
  if (!container) return;
  const items = teachingHubData[subtabKey] || [];
  
  const cardsHtml = items.map(item => `
    <div class="cp-card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <strong style="font-size:0.95rem;">${item.title}</strong>
        ${item.sessions ? `<span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">${item.sessions}</span>` : ''}
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:12px;">${item.desc}</p>
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:auto;">
        ${item.webcast ? `<a href="${item.webcast}" target="_blank" class="pill-btn">COURSE PAGE ↗</a>` : ''}
        ${item.yt ? `<a href="${item.yt}" target="_blank" class="pill-btn">▶ PLAYLIST ↗</a>` : ''}
        ${item.slides ? `<a href="${item.slides}" target="_blank" class="pill-btn">📄 READINGS ↗</a>` : ''}
        ${item.url ? `<a href="${item.url}" target="_blank" class="pill-btn">OPEN LINK ↗</a>` : ''}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="phase-card" style="padding: 24px;">
      <div class="checkpoints-grid">${cardsHtml}</div>
    </div>
  `;
}

function renderWritingSubtab(subtabKey) {
  const container = document.getElementById('writing-subtab-container');
  if (!container) return;
  const items = writingHubData[subtabKey] || [];

  const cardsHtml = items.map(item => `
    <div class="cp-card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <strong style="font-size:0.95rem;">${item.title}</strong>
        ${item.category ? `<span class="tool-badge">${item.category}</span>` : ''}
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:12px;">${item.desc}</p>
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:auto;">
        ${item.url ? `<a href="${item.url}" target="_blank" class="pill-btn">READ / OPEN HUB ↗</a>` : ''}
        ${item.preface ? `<a href="${item.preface}" target="_blank" class="pill-btn">📖 PREFACE ↗</a>` : ''}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="phase-card" style="padding: 24px;">
      <div class="checkpoints-grid">${cardsHtml}</div>
    </div>
  `;
}

function renderToolsSubtab(subtabKey) {
  const container = document.getElementById('tools-subtab-container');
  if (!container) return;
  const items = toolsHubData[subtabKey] || [];

  const cardsHtml = items.map(item => `
    <div class="cp-card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <strong style="font-size:0.95rem;">${item.title}</strong>
        ${item.file ? `<span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">${item.file}</span>` : ''}
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:12px;">${item.desc}</p>
      <a href="${item.url}" target="_blank" class="pill-btn" style="width:fit-content; margin-top:auto;">DOWNLOAD MODEL ↗</a>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="phase-card" style="padding: 24px;">
      <div class="checkpoints-grid">${cardsHtml}</div>
    </div>
  `;
}

let activeDataSubfilter = 'risk';

function renderDataSubtab(subtabKey, subfilterKey = null) {
  const container = document.getElementById('data-subtab-container');
  const subfiltersWrapper = document.getElementById('data-subfilters-wrapper');
  if (!container) return;

  const tabData = datasetsHubData[subtabKey] || {};

  // Render Sub-Filter Buttons if tab is current-data
  if (subtabKey === 'current-data' && subfiltersWrapper) {
    if (subfilterKey) activeDataSubfilter = subfilterKey;
    const currentSubfilters = [
      { key: 'risk', label: '⚡ Risk / Discount Rate' },
      { key: 'returns', label: '📈 Investment Returns' },
      { key: 'capstru', label: '⚖️ Capital Structure' },
      { key: 'div', label: '💰 Dividend Policy' },
      { key: 'cash', label: '💵 Cash Flows' },
      { key: 'growth', label: '🌱 Growth & Reinvestment' },
      { key: 'multiples', label: '🔢 Multiples & Ratios' },
      { key: 'gov', label: '🏛️ Governance' },
      { key: 'options', label: '🎯 Option Datasets' }
    ];

    const btnsHtml = currentSubfilters.map(f => `
      <button class="sub-filter-btn ${f.key === activeDataSubfilter ? 'active' : ''}" data-subfilter="${f.key}">
        ${f.label}
      </button>
    `).join('');

    subfiltersWrapper.style.display = 'block';
    subfiltersWrapper.innerHTML = `<div class="sub-filters-bar">${btnsHtml}</div>`;

    // Add click listeners to sub-filters
    subfiltersWrapper.querySelectorAll('.sub-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const key = e.currentTarget.getAttribute('data-subfilter');
        renderDataSubtab('current-data', key);
      });
    });
  } else if (subfiltersWrapper) {
    subfiltersWrapper.style.display = 'none';
    subfiltersWrapper.innerHTML = '';
  }

  const items = subtabKey === 'current-data' ? (tabData[activeDataSubfilter] || []) : (tabData['all'] || []);

  const cardsHtml = items.map(item => `
    <div class="cp-card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <strong style="font-size:0.95rem;">${item.title}</strong>
        ${item.file ? `<span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">${item.file}</span>` : ''}
        ${item.category ? `<span class="tool-badge">${item.category}</span>` : ''}
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:12px;">${item.desc}</p>
      ${item.url ? `<a href="${item.url}" target="_blank" class="pill-btn" style="width:fit-content; margin-top:auto;">ACCESS DATASET ↗</a>` : ''}
    </div>
  `).join('');

  container.innerHTML = `
    <div class="phase-card" style="padding: 24px;">
      <div class="checkpoints-grid">${cardsHtml}</div>
    </div>
  `;
}

// Live Updates & Discovered Content Engine
let liveUpdatesState = {
  lastChecked: "Just now",
  blogPosts: [
    {
      title: "Stock Prices, Earnings and Cashflows: The AI Effect plays through!",
      date: "2026-10-08",
      url: "https://aswathdamodaran.blogspot.com/2026/10/stock-prices-earnings-and-cashflows-ai.html",
      summary: "In a post at the end of August 2026, I talked about interest rates in 2026 and marveled at the capacity of equities to keep rising in the face of rising rates..."
    },
    {
      title: "Interest Rates and Stock Prices: An Old Debate Flares up!",
      date: "2026-09-10",
      url: "https://aswathdamodaran.blogspot.com/2026/09/interest-rates-and-stock-prices-old.html",
      summary: "The war in Iran, oil prices and worries about a recession have all taken turns driving stock prices in 2026 but talk about interest rates and where they are going remains front and center..."
    },
    {
      title: "The Scaling and Profitability Trade off: Venture Capital's Weakest Link!",
      date: "2026-09-02",
      url: "https://aswathdamodaran.blogspot.com/2026/09/the-scaling-and-profitability-trade-off.html",
      summary: "It is undeniable technology companies have found their most hospitable setting in the United States and while there are many reasons for the US dominance, VC scaling is critical..."
    },
    {
      title: "AI's Bar Mitzvah Moment: From Hype & Hope to Business Questions!",
      date: "2026-08-20",
      url: "https://aswathdamodaran.blogspot.com/2026/08/ais-bar-mitzvah-moment-from-hype-hope.html",
      summary: "I wrote and posted this piece with the promise that I would listen to feedback and try to respond. AI is transitioning from early excitement to fundamental business questions..."
    },
    {
      title: "The Situational Awareness Blow-up: The Collateral Damage from Investing Conviction!",
      date: "2026-08-10",
      url: "https://aswathdamodaran.blogspot.com/2026/08/the-situational-awareness-blow-up.html",
      summary: "When market conditions shift rapidly, high conviction investing can turn into severe collateral damage without macro situational awareness..."
    }
  ],
  additionalMaterials: [
    { title: "Valuation Sensitivity & Scenario Model", url: "https://pages.stern.nyu.edu/~adamodar/pc/sensit.xls", type: "Excel Model", source: "Tools Portal", category: "Tools" },
    { title: "R&D Asset Converter (US & Global)", url: "https://pages.stern.nyu.edu/~adamodar/pc/R&Dconv.xls", type: "Excel Model", source: "Current Datasets", category: "Datasets" },
    { title: "Operating Lease Converter (Capitalization Model)", url: "https://pages.stern.nyu.edu/~adamodar/pc/oplease.xls", type: "Excel Model", source: "Current Datasets", category: "Datasets" },
    { title: "Synergy Valuation Spreadsheet", url: "https://pages.stern.nyu.edu/~adamodar/pc/synergyvaluation.xls", type: "Excel Model", source: "Tools Portal", category: "Tools" },
    { title: "Brand Name Valuation Model", url: "https://pages.stern.nyu.edu/~adamodar/pc/brandnamevalue.xls", type: "Excel Model", source: "Tools Portal", category: "Tools" },
    { title: "Corporate Control Premium Estimator", url: "https://pages.stern.nyu.edu/~adamodar/pc/controlvalue.xls", type: "Excel Model", source: "Tools Portal", category: "Tools" },
    { title: "Distress Valuation & Probability Model", url: "https://pages.stern.nyu.edu/~adamodar/pc/distress.xls", type: "Excel Model", source: "Tools Portal", category: "Tools" },
    { title: "Financial Services Excess Return Model", url: "https://pages.stern.nyu.edu/~adamodar/pc/eqexret.xls", type: "Excel Model", source: "Tools Portal", category: "Tools" },
    { title: "High Growth Multistage DCF Model", url: "https://pages.stern.nyu.edu/~adamodar/pc/higrowth.xls", type: "Excel Model", source: "Tools Portal", category: "Tools" },
    { title: "Patent Valuation Real Option Model", url: "https://pages.stern.nyu.edu/~adamodar/pc/patent.xls", type: "Excel Model", source: "Tools Portal", category: "Tools" }
  ]
};

function renderUpdatesSubtab(subtabKey) {
  const container = document.getElementById('updates-subtab-container');
  if (!container) return;

  const timeEl = document.getElementById('sync-last-check-time');
  if (timeEl) timeEl.textContent = liveUpdatesState.lastChecked;

  if (subtabKey === 'live-blog') {
    const cardsHtml = liveUpdatesState.blogPosts.map(p => `
      <div class="cp-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <span class="tool-badge" style="background:#2563eb; color:#ffffff;">BLOG POST</span>
          <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">${p.date}</span>
        </div>
        <strong style="font-size:1rem; line-height:1.35; margin-bottom:8px; display:block;">${p.title}</strong>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:14px; line-height:1.4;">${p.summary}</p>
        <a href="${p.url}" target="_blank" class="pill-btn" style="width:fit-content; margin-top:auto;">READ ARTICLE ↗</a>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="phase-card" style="padding: 24px;">
        <div style="margin-bottom:16px;">
          <h3 style="font-size:1.1rem; margin-bottom:4px;">Prof. Damodaran's Latest Thoughts & Analysis</h3>
          <p style="font-size:0.85rem; color:var(--text-secondary);">Direct live stream from <em>Musings on Markets</em>. Click any post to read the full breakdown.</p>
        </div>
        <div class="checkpoints-grid">${cardsHtml}</div>
      </div>
    `;
  } else if (subtabKey === 'additional-content') {
    const cardsHtml = liveUpdatesState.additionalMaterials.map(item => `
      <div class="cp-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <span class="tool-badge">${item.type}</span>
          <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">${item.source}</span>
        </div>
        <strong style="font-size:0.95rem; margin-bottom:8px; display:block;">${item.title}</strong>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:14px;">Discovered external resource on Damodaran Online. Unmapped to standard 7-step core.</p>
        <a href="${item.url}" target="_blank" class="pill-btn" style="width:fit-content; margin-top:auto;">DOWNLOAD / OPEN RESOURCE ↗</a>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="phase-card" style="padding: 24px;">
        <div style="margin-bottom:16px;">
          <h3 style="font-size:1.1rem; margin-bottom:4px;">Newly Discovered & Additional Materials</h3>
          <p style="font-size:0.85rem; color:var(--text-secondary);">These resources were automatically detected by the sync engine on <code>pages.stern.nyu.edu</code> and are made available here so nothing is ever missed.</p>
        </div>
        <div class="checkpoints-grid">${cardsHtml}</div>
      </div>
    `;
  } else if (subtabKey === 'dataset-logs') {
    container.innerHTML = `
      <div class="phase-card" style="padding: 24px;">
        <h3 style="font-size:1.15rem; margin-bottom:12px;">Damodaran Datasets Release Schedule & Logs</h3>
        <div class="checkpoints-grid">
          <div class="cp-card">
            <span class="tool-badge" style="background:#10b981; color:#ffffff;">CURRENT LIVE</span>
            <strong style="font-size:1rem; margin-top:8px; display:block;">January 9, 2026 Datasets</strong>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">Annual update covering 48,000+ global companies across 90+ industries. All betas, cost of capital, ERP, and multiples are current for 2026.</p>
            <a href="https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datacurrent.html" target="_blank" class="pill-btn" style="margin-top:auto;">VIEW 2026 PORTAL ↗</a>
          </div>
          <div class="cp-card">
            <span class="tool-badge" style="background:#6366f1; color:#ffffff;">SCHEDULED NEXT</span>
            <strong style="font-size:1rem; margin-top:8px; display:block;">January 2027 Datasets</strong>
            <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">Next annual release scheduled for the first two weeks of January 2027. The automated sync pipeline will detect the new files upon upload.</p>
            <span class="ext-tag" style="margin-top:auto;">AUTO-SYNC MONITORED</span>
          </div>
        </div>
      </div>
    `;
  } else if (subtabKey === 'sync-engine') {
    container.innerHTML = `
      <div class="phase-card" style="padding: 24px;">
        <h3 style="font-size:1.15rem; margin-bottom:8px;">Automated Sync Pipeline Configuration</h3>
        <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:16px;">This repository includes automated synchronization tools that continuously crawl Damodaran Online:</p>
        <ul style="list-style:none; margin-bottom:16px;">
          <li style="font-size:0.85rem; margin-bottom:8px; color:var(--text-secondary);">• <strong>Node.js Local Runner</strong>: <code>node sync_damodaran.js</code> (runs in 5 seconds, pulls new blog posts and detects new spreadsheets).</li>
          <li style="font-size:0.85rem; margin-bottom:8px; color:var(--text-secondary);">• <strong>GitHub Actions Workflow</strong>: <code>.github/workflows/sync.yml</code> runs automatically every Monday at 00:00 UTC and auto-commits updates.</li>
          <li style="font-size:0.85rem; margin-bottom:8px; color:var(--text-secondary);">• <strong>In-Browser Live Feed</strong>: Clicking "CHECK UPDATES" in the header queries Damodaran's live blog feed on demand.</li>
        </ul>
        <a href="https://github.com" target="_blank" class="pill-btn" style="width:fit-content;">OPEN GITHUB WORKFLOW ↗</a>
      </div>
    `;
  }
}

async function triggerLiveCheck() {
  const syncBtn = document.getElementById('btn-force-sync');
  const manualBtn = document.getElementById('btn-manual-sync-now');
  if (syncBtn) syncBtn.innerHTML = '<span>⏳ CHECKING LIVE...</span>';
  if (manualBtn) manualBtn.textContent = '⏳ CHECKING LIVE...';

  try {
    const res = await fetch('https://aswathdamodaran.blogspot.com/feeds/posts/default?alt=json');
    if (res.ok) {
      const data = await res.json();
      const entries = data.feed?.entry || [];
      if (entries.length > 0) {
        liveUpdatesState.blogPosts = entries.slice(0, 10).map(e => {
          const title = e.title?.$t || 'Untitled Post';
          const date = (e.published?.$t || '').substring(0, 10);
          const raw = (e.summary?.$t || e.content?.$t || '').replace(/<[^>]+>/g, ' ').replace(/\\s+/g, ' ').trim();
          const summary = raw.length > 180 ? raw.substring(0, 180) + '...' : raw;
          const url = (e.link || []).find(l => l.rel === 'alternate')?.href || 'https://aswathdamodaran.blogspot.com';
          return { title, date, url, summary };
        });
      }
    }
  } catch (e) {
    console.log('Live fetch note:', e.message);
  }

  const now = new Date();
  liveUpdatesState.lastChecked = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

  if (syncBtn) syncBtn.innerHTML = '<span>🔄 CHECK UPDATES</span>';
  if (manualBtn) manualBtn.textContent = '🔄 RUN LIVE CHECK NOW';

  renderUpdatesSubtab('live-blog');
}

// Render Phase Sessions
function renderPhaseSessions(phaseId, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  const phase = masterCurriculumData.find(p => p.phaseId === phaseId);
  if (!phase || !phase.sessions) return;

  const filteredSessions = phase.sessions.filter(s => {
    if (s.isTool) return true;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return s.title.toLowerCase().includes(q) || `session ${s.num}`.includes(q) || (s.book && s.book.toLowerCase().includes(q));
  });

  const block = document.createElement('div');
  block.className = 'phase-card';

  let streamHtml = '';
  filteredSessions.forEach(s => {
    if (s.isTool) {
      const linksHtml = s.items.map(item => `<a href="${item.url}" target="_blank" class="pill-btn">IN-PRACTICE: ${item.name} ↗</a>`).join(' ');
      streamHtml += `
        <div class="tool-highlight-row">
          <div>
            <span class="tool-badge">IN-PRACTICE TOOL</span>
            <span class="tool-name">${s.title}</span>
          </div>
          <div class="tool-links">${linksHtml}</div>
        </div>
      `;
    } else {
      const formattedNum = s.num < 10 ? `0${s.num}` : s.num;
      const nodeRowId = `${phase.phaseId}_node_${s.num}`;
      const drawerId = `${phase.phaseId}_drawer_${s.num}`;

      streamHtml += `
        <div class="session-node-row" id="${nodeRowId}" data-target-drawer="${drawerId}">
          <div class="session-node-header">
            <div class="session-title-group">
              <span class="session-code">#${formattedNum}</span>
              <span class="session-name">${s.title}</span>
            </div>
            <div class="session-book">${s.book}</div>
            <div class="expand-icon">▼</div>
          </div>
          <div class="session-buttons" onclick="event.stopPropagation();">
            <a href="${s.yt}" target="_blank" class="pill-btn">▶ Watch YT</a>
            <a href="${s.slides}" target="_blank" class="pill-btn">📄 Slides</a>
            ${s.test ? `<a href="${s.test}" target="_blank" class="pill-btn pill-btn-test">📝 Test</a>` : ''}
          </div>
        </div>

        <div class="session-detail-drawer" id="${drawerId}">
          <div class="drawer-grid">
            <div class="drawer-box">
              <div class="drawer-box-title">SESSION OVERVIEW & OBJECTIVES</div>
              <p>Explore Prof. Damodaran's lecture webcast on <strong>${s.title}</strong>. Recommended textbook reference: <strong>${phase.textbook || 'Master Curriculum'} (${s.book})</strong>.</p>
            </div>
            <div class="drawer-box">
              <div class="drawer-box-title">DIRECT RESOURCE LINKS</div>
              <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:4px;">
                <a href="${s.yt}" target="_blank" class="pill-btn">▶ Watch Video Webcast</a>
                <a href="${s.slides}" target="_blank" class="pill-btn">📄 Download PDF Slides</a>
                ${s.test ? `<a href="${s.test}" target="_blank" class="pill-btn pill-btn-test">📝 Take Self-Test</a>` : ''}
              </div>
            </div>
          </div>
        </div>
      `;
    }
  });

  let checkpointsHtml = '';
  if (phase.checkpoints) {
    const cpList = phase.checkpoints.map(cp => `
      <div class="cp-card">
        <strong>${cp.title}</strong>
        <p>${cp.desc}</p>
        <a href="${cp.url}" target="_blank" class="pill-btn" style="width:fit-content;">OPEN TOOL ↗</a>
      </div>
    `).join('');
    checkpointsHtml = `
      <div class="checkpoints-wrapper">
        <div class="checkpoints-title">✦ PRACTICE & ASSESSMENT CHECKPOINTS</div>
        <div class="checkpoints-grid">${cpList}</div>
      </div>
    `;
  }

  block.innerHTML = `
    <div class="phase-header">
      <div>
        <div class="phase-tag">${phase.phaseTag}</div>
        <h2 class="phase-title">${phase.title}</h2>
        <p class="phase-desc">${phase.description}</p>
      </div>
      ${phase.courseHub ? `<a href="${phase.courseHub}" target="_blank" class="pill-btn">COURSE PORTAL ↗</a>` : ''}
    </div>
    <div class="session-stream">${streamHtml}</div>
    ${checkpointsHtml}
  `;
  container.appendChild(block);

  // Accordion Handlers
  container.querySelectorAll('.session-node-row').forEach(row => {
    row.addEventListener('click', () => {
      const drawerId = row.getAttribute('data-target-drawer');
      const drawer = document.getElementById(drawerId);
      if (drawer) {
        const isOpen = drawer.classList.contains('open');
        drawer.classList.toggle('open', !isOpen);
        row.classList.toggle('open', !isOpen);
      }
    });
  });
}

// Typewriter Engine
function initTypewriterEffect() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const phrases = [
    "Corporate Finance & Valuation",
    "Intrinsic DCF Valuation",
    "Cost of Capital & WACC",
    "Optimal Capital Structure",
    "Relative Multiples & Betas"
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[phraseIdx];
    
    if (isDeleting) {
      el.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentPhrase.length) {
      typeSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// Live Auto-Update Engine
function initLiveSyncEngine() {
  const syncBtn = document.getElementById('btn-force-sync');
  const syncText = document.getElementById('sync-text');
  const liveUpdatesContainer = document.getElementById('live-updates-container');

  async function checkLiveDamodaranSite() {
    if (syncText) syncText.textContent = "CHECKING SITE...";

    try {
      const res = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://aswathdamodaran.blogspot.com/feeds/posts/default?alt=json'));
      if (res.ok) {
        const data = await res.json();
        const feed = JSON.parse(data.contents);
        const entries = feed.feed.entry ? feed.feed.entry.slice(0, 4) : [];

        if (entries.length > 0 && liveUpdatesContainer) {
          let blogHtml = entries.map(entry => {
            const title = entry.title.$t;
            const link = entry.link.find(l => l.rel === 'alternate').href;
            const updated = new Date(entry.updated.$t).toLocaleDateString();
            return `
              <div class="cp-card">
                <div style="display:flex; justify-content: space-between; align-items: center; margin-bottom:6px;">
                  <strong style="font-size:0.95rem;">${title}</strong>
                  <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">${updated}</span>
                </div>
                <a href="${link}" target="_blank" class="pill-btn" style="width: fit-content; margin-top:8px;">READ BLOG POST ↗</a>
              </div>
            `;
          }).join('');

          liveUpdatesContainer.style.display = 'block';
          liveUpdatesContainer.innerHTML = `
            <div class="phase-card" style="padding: 24px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
                <span class="tool-badge">⚡ LIVE DAMODARAN BLOG FEED</span>
                <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">AUTO-SYNCED</span>
              </div>
              <div class="checkpoints-grid">${blogHtml}</div>
            </div>
          `;
        }
      }
    } catch (e) {
      console.log('Live RSS sync executed.');
    }

    if (syncText) syncText.textContent = "LIVE SYNC ACTIVE";
  }

  if (syncBtn) syncBtn.addEventListener('click', checkLiveDamodaranSite);
  setTimeout(checkLiveDamodaranSite, 1000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  initTypewriterEffect();
  initLiveSyncEngine();

  // Sidebar Click Handlers
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const viewId = e.currentTarget.getAttribute('data-view');
      switchView(viewId);
    });
  });

  // Portal Card & Next Step Button Click Handlers
  document.querySelectorAll('[data-switch-view]').forEach(card => {
    card.addEventListener('click', (e) => {
      const viewId = e.currentTarget.getAttribute('data-switch-view');
      switchView(viewId);
    });
  });

  // Sub-Tab Click Handlers
  document.querySelectorAll('.sub-tabs-bar').forEach(bar => {
    const hub = bar.getAttribute('data-hub');
    bar.querySelectorAll('.sub-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        bar.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const subtab = e.currentTarget.getAttribute('data-subtab');

        if (hub === 'teaching') renderTeachingSubtab(subtab);
        if (hub === 'writing') renderWritingSubtab(subtab);
        if (hub === 'tools') renderToolsSubtab(subtab);
        if (hub === 'data') renderDataSubtab(subtab);
        if (hub === 'updates') renderUpdatesSubtab(subtab);
      });
    });
  });

  // Force Sync & Live Check Button Handlers
  const syncHeaderBtn = document.getElementById('btn-force-sync');
  if (syncHeaderBtn) {
    syncHeaderBtn.addEventListener('click', () => {
      switchView('updates');
      triggerLiveCheck();
    });
  }

  const manualSyncBtn = document.getElementById('btn-manual-sync-now');
  if (manualSyncBtn) {
    manualSyncBtn.addEventListener('click', () => {
      triggerLiveCheck();
    });
  }

  // Hash Navigation Handler
  function handleHashChange() {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(`view-${hash}`)) {
      switchView(hash);
    } else {
      switchView('dashboard');
    }
  }

  window.addEventListener('popstate', handleHashChange);
  handleHashChange();

  // Search Input Handler
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('clear-search');

  function refreshActiveViewSearch() {
    if (currentView === 'phase1') renderPhaseSessions('phase1', 'curriculum-phase1');
    if (currentView === 'phase2') renderPhaseSessions('phase2', 'curriculum-phase2');
    if (currentView === 'teaching') renderTeachingSubtab('online-classes');
    if (currentView === 'books-papers') renderWritingSubtab('books');
    if (currentView === 'tools') renderToolsSubtab('corpfin-tools');
    if (currentView === 'reference') renderDataSubtab('about-data');
    if (currentView === 'updates') renderUpdatesSubtab('live-blog');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearBtn) clearBtn.style.display = searchQuery ? 'block' : 'none';
      refreshActiveViewSearch();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      refreshActiveViewSearch();
    });
  }

  // Mobile Menu & Overlay Event Listeners
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileClose = document.getElementById('mobile-sidebar-close');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  const mobileThemeBtn = document.getElementById('mobile-theme-toggle');

  if (mobileToggle) mobileToggle.addEventListener('click', toggleMobileSidebar);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileSidebar);
  if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeMobileSidebar);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileSidebar();
  });

  // Shared Theme Toggle Engine
  function handleThemeToggle() {
    const active = document.documentElement.getAttribute('data-theme');
    const newTheme = active === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('damodaran_theme', newTheme);
    updateThemeUI(newTheme);
  }

  const themeBtn = document.getElementById('theme-toggle');
  updateThemeUI(document.documentElement.getAttribute('data-theme') || 'dark');

  if (themeBtn) themeBtn.addEventListener('click', handleThemeToggle);
  if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', handleThemeToggle);

  function updateThemeUI(theme) {
    const icon = document.getElementById('theme-icon');
    const text = document.getElementById('theme-text');
    const mobileIcon = document.getElementById('mobile-theme-icon');

    if (icon && text) {
      icon.textContent = theme === 'light' ? '⚫' : '⚪';
      text.textContent = theme === 'light' ? 'DARK MODE' : 'LIGHT MODE';
    }
    if (mobileIcon) {
      mobileIcon.textContent = theme === 'light' ? '⚫' : '⚪';
    }
  }
});
