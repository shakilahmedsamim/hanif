export type CaseStudy = {
  slug: string;
  industry: string;
  headline: string;
  subtitle?: string;
  problem: string;
  fix: string;
  stats: { label: string; value: string }[];
  campaignPeriod?: string;
  quote?: string;
  clientBackground?: string;
  challenges?: { title: string; body: string }[];
  focusAreas?: { title: string; body: string }[];
  approach?: { title: string; body: string }[];
  resultsNarrative?: string;
  resultsSnapshot?: { label: string; value: string }[];
  whatMadeDifference?: string;
  finalTakeaway?: { title: string; body: string };
  ctaHeadline?: string;
  ctaBody?: string;
  ctaButtonLabel?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "home-cleaning-13-conversions-7-days",
    industry: "Home Cleaning Services",
    headline: "Generating 13 Conversions for a Home Cleaning Business in 7 Days",
    subtitle:
      "How we optimized a Google Ads campaign to generate more conversion-focused traffic for a home cleaning business.",
    problem:
      "The campaign had room for improvement across keyword targeting, search intent, negative keywords, and overall campaign targeting. Instead of simply increasing the advertising budget, the focus was on making the existing budget work more efficiently by directing it toward searches with stronger potential to generate home cleaning enquiries.",
    fix:
      "We optimized the Google Ads campaign around high-intent home cleaning searches, refined keyword targeting, improved negative keyword coverage, and focused the available budget on traffic more closely aligned with the business's services.",
    stats: [
      { label: "Conversions", value: "13" },
      { label: "Cost Per Conversion", value: "$33.68" },
      { label: "Clicks", value: "208" },
      { label: "Ad Spend", value: "$437.84" },
    ],
    campaignPeriod: "Sep 28 – Oct 4, 2026",
    clientBackground:
      "A home cleaning business was using Google Ads to generate new customer enquiries. The campaign was already receiving search traffic, but there was an opportunity to improve the quality and relevance of that traffic. The goal was to attract people actively searching for home cleaning services and turn that search intent into more conversion opportunities.",
    focusAreas: [
      {
        title: "High-Intent Search Traffic",
        body: "Focused the campaign around searches that showed stronger intent to hire a home cleaning service.",
      },
      {
        title: "Keyword Optimization",
        body: "Reviewed keyword targeting to reduce exposure to searches that were less relevant to the business.",
      },
      {
        title: "Negative Keyword Management",
        body: "Added and refined negative keywords to help prevent budget from being spent on irrelevant searches.",
      },
      {
        title: "Location & Targeting Optimization",
        body: "Refined campaign targeting to focus the advertising budget more effectively within the intended service area.",
      },
    ],
    approach: [
      {
        title: "Focused on High-Intent Searches",
        body: "The campaign was optimized around searches from users actively looking for home cleaning services, helping improve traffic relevance and reduce wasted clicks.",
      },
      {
        title: "Refined Keyword & Negative Keyword Targeting",
        body: "Keyword targeting was reviewed and negative keywords were added and refined to filter out irrelevant searches and keep the campaign focused on potential customers.",
      },
      {
        title: "Optimized Campaign Targeting",
        body: "Campaign targeting was reviewed to help ensure the advertising budget was being used more efficiently within the intended market.",
      },
      {
        title: "Focused on Conversion Performance",
        body: "Instead of optimizing purely for clicks, the campaign was managed with conversion performance in mind, prioritizing traffic with stronger potential to generate customer enquiries.",
      },
    ],
    resultsNarrative:
      "After the optimization period, the campaign generated 13 conversions from 208 clicks, at a cost per conversion of $33.68, with a total Google Ads spend of $437.84.",
    resultsSnapshot: [
      { label: "Clicks", value: "208" },
      { label: "Conversions", value: "13" },
      { label: "Ad Spend", value: "$437.84" },
      { label: "Cost / Conversion", value: "$33.68" },
      { label: "Avg. CPC", value: "$2.10" },
    ],
    whatMadeDifference:
      "The focus wasn't simply on generating more clicks. The campaign was optimized with a stronger emphasis on relevant search intent, keyword quality, negative keyword coverage, and conversion-focused traffic. This helped the home cleaning business generate 13 conversions from 208 clicks during a 7-day period.",
    finalTakeaway: {
      title: "Better Targeting. Better Traffic. More Conversion Opportunities.",
      body: "For local service businesses, getting Google Ads traffic is only part of the equation. The campaign also needs to reach people who are actively looking for the service and minimize wasted spend on irrelevant searches. In this campaign, the focus was on improving that alignment, resulting in 13 conversions at a $33.68 cost per conversion in just 7 days.",
    },
    ctaHeadline: "Want Results Like This for Your Home Service Business?",
    ctaBody:
      "I can audit your Google Ads campaign, identify wasted spend, and show you opportunities to improve targeting, tracking, and conversion performance.",
    ctaButtonLabel: "Get My Free Google Ads Audit",
  },
  {
    slug: "personal-injury-family-law",
    industry: "Personal Injury & Family Law",
    headline: "Attributing Phone Call Conversions Accurately",
    problem:
      "High cost-per-click keywords were bidding on incomplete data because phone call conversions were not tracked, so the account had no way to connect ad spend to the calls it was actually producing.",
    fix:
      "We implemented call tracking tied to the originating keyword and campaign, feeding qualified calls back into Smart Bidding so the algorithm could optimize toward real enquiries instead of raw clicks.",
    stats: [
      { label: "Qualified Calls", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
    clientBackground:
      "A personal injury and family law firm running Google Ads to generate phone enquiries. Before this engagement, calls were coming in from ads, but the account had no way to connect a specific call back to the keyword or campaign that produced it.",
    challenges: [
      {
        title: "No Link Between Calls and Keywords",
        body: "Phone calls were coming in from ads, but nothing tied a specific call back to the keyword or campaign that produced it.",
      },
      {
        title: "Bidding on Incomplete Data",
        body: "High cost-per-click keywords were being bid on without knowing which of them were actually producing calls worth pursuing.",
      },
      {
        title: "Smart Bidding Had Nothing to Learn From",
        body: "Without call data feeding back into the account, Smart Bidding had no signal to tell it which clicks were turning into real enquiries.",
      },
    ],
    approach: [
      {
        title: "Installed Call Tracking Tied to Source",
        body: "Call tracking was implemented and tied to the originating keyword and campaign, so every call could be traced back to what produced it.",
      },
      {
        title: "Qualified Calls Fed Back Into Smart Bidding",
        body: "Qualified calls were fed back into Smart Bidding as a conversion signal, instead of leaving the algorithm to optimize on clicks alone.",
      },
      {
        title: "Ongoing Review of Call Quality",
        body: "Call data was reviewed on an ongoing basis to keep refining which keywords and campaigns were producing calls worth bidding on.",
      },
    ],
  },
  {
    slug: "medical-aesthetics-cosmetic-dentistry",
    industry: "Medical Aesthetics & Cosmetic Dentistry",
    headline: "Bridging Online Forms to In-Clinic Bookings",
    problem:
      "Online form conversions were tracked, but in-clinic consultations that actually closed were never fed back to the ad account, so Smart Bidding was optimizing toward form fills instead of real bookings.",
    fix:
      "We built an offline conversion import from the booking system so a completed consultation counts as a real conversion, closing the loop between an online form and an in-clinic visit.",
    stats: [
      { label: "Booked Consults", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
    clientBackground:
      "A medical aesthetics and cosmetic dentistry practice running Google Ads to generate consultation bookings. Before this engagement, the account could see form submissions, but had no visibility into which of those actually became paying consultations in the clinic.",
    challenges: [
      {
        title: "Form Fills Tracked, Bookings Were Not",
        body: "Online form conversions were tracked, but there was no way to see which of those form fills actually turned into a booked consultation.",
      },
      {
        title: "In-Clinic Results Never Reached the Ad Account",
        body: "Consultations that closed in the clinic were never fed back to Google Ads, so the account had no record of the outcomes that actually mattered.",
      },
      {
        title: "Bidding Optimized for the Wrong Signal",
        body: "Smart Bidding was optimizing toward form submissions, a weak signal, instead of the completed consultations that represent real business value.",
      },
    ],
    approach: [
      {
        title: "Built an Offline Conversion Import",
        body: "An offline conversion import was built from the booking system, so a completed consultation flows back into Google Ads as a real conversion.",
      },
      {
        title: "Connected Form Fills to Clinic Outcomes",
        body: "Each form fill was connected to its outcome in the booking system, closing the loop between an online enquiry and what happened in the clinic.",
      },
      {
        title: "Shifted Bidding Toward Real Consultations",
        body: "Once offline conversions were flowing in, bidding was shifted to optimize toward completed consultations instead of raw form submissions.",
      },
    ],
  },
  {
    slug: "immigration-family-law",
    industry: "Immigration & Family Law",
    headline: "Adding Tracking Where There Was None",
    problem:
      "The account had no conversion tracking beyond a bare contact form, so Smart Bidding had nothing to optimize toward beyond a generic form submission, regardless of whether it ever turned into a client.",
    fix:
      "We installed Google tag and GA4 event tracking, verified Enhanced Conversions for Leads, and set up offline conversion imports for signed retainers, so the account could finally see which leads became paying clients.",
    stats: [
      { label: "Leads / Month", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
    clientBackground:
      "An immigration and family law firm running Google Ads with essentially no conversion tracking in place. Before this engagement, the account had a bare contact form and no visibility into which leads were actually becoming retained clients.",
    challenges: [
      {
        title: "Tracking Stopped at a Bare Contact Form",
        body: "The only signal in the account was a generic contact form submission, with no tracking beyond it.",
      },
      {
        title: "No Way to See Signed Retainers",
        body: "There was no connection between a lead submitting the form and that lead actually signing on as a client.",
      },
      {
        title: "Smart Bidding Had Nothing to Optimize Toward",
        body: "Without a real conversion signal, Smart Bidding had nothing meaningful to learn from or optimize bids against.",
      },
    ],
    approach: [
      {
        title: "Installed Google Tag & GA4 Event Tracking",
        body: "Google tag and GA4 event tracking were installed from the ground up, giving the account a real foundation to measure from.",
      },
      {
        title: "Verified Enhanced Conversions for Leads",
        body: "Enhanced Conversions for Leads was verified, so lead matching holds up even as browsers restrict third-party cookies.",
      },
      {
        title: "Set Up Offline Conversion Imports for Signed Retainers",
        body: "Offline conversion imports were set up so a signed retainer is fed back to Google Ads, closing the loop between a lead and a real client.",
      },
    ],
  },
  {
    slug: "b2b-professional-managed-services",
    industry: "B2B Professional & Managed Services",
    headline: "Connecting a Long Sales Cycle Back to the Ad Click",
    problem:
      "Deals took weeks to close, so there was no way to prove which campaigns were actually producing signed contracts, and budget decisions were being made without that information.",
    fix:
      "We built a CRM-to-ad-platform pipeline so a deal marked Closed Won pushes an offline conversion back to the ad account, connecting a long sales cycle back to the click that started it.",
    stats: [
      { label: "Closed Deals", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
    clientBackground:
      "A B2B professional and managed services firm running Google Ads to generate sales pipeline. Before this engagement, deals routinely took weeks to close, and the ad account had no way to connect a signed contract back to the campaign that originated it.",
    challenges: [
      {
        title: "A Sales Cycle Too Long for Click Data Alone",
        body: "Deals took weeks to close, far longer than the ad platform's own attribution window could meaningfully track.",
      },
      {
        title: "No Link Between Campaigns and Signed Contracts",
        body: "There was no way to prove which campaigns were actually producing signed contracts, as opposed to just early-stage interest.",
      },
      {
        title: "Budget Decisions Made Without the Full Picture",
        body: "Budget and bidding decisions were being made on click and lead volume alone, without knowing which of those leads were becoming real revenue.",
      },
    ],
    approach: [
      {
        title: "Built a CRM-to-Ad-Platform Pipeline",
        body: "A pipeline was built connecting the CRM to the ad platform, so deal status updates could flow back into the account.",
      },
      {
        title: "Closed Won Deals Pushed Back as Offline Conversions",
        body: "When a deal is marked Closed Won in the CRM, that result is automatically pushed back to Google Ads as an offline conversion.",
      },
      {
        title: "Bidding Reconnected to the Click That Started It",
        body: "With that loop closed, bidding could finally optimize toward the campaigns and keywords that were actually producing signed contracts, not just early-stage leads.",
      },
    ],
  },
  {
    slug: "residential-cleaning-services",
    industry: "Residential Cleaning Services",
    headline: "Rebuilding Campaigns Around High-Intent Local Searches",
    problem:
      "Broad-match keywords were pulling in low-intent clicks and lead volume had stalled, with budget spread across searches that were unlikely to turn into a booked cleaning job.",
    fix:
      "We restructured campaigns around high-intent local search terms and verified call and form tracking, so budget concentrated on the searches most likely to produce a real booking.",
    stats: [
      { label: "Leads / Month", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
    clientBackground:
      "A residential cleaning services business running Google Ads to generate local bookings. Before this engagement, lead volume had stalled, and much of the budget was tied up in broad-match keywords pulling in low-intent clicks.",
    challenges: [
      {
        title: "Broad-Match Keywords Pulling in Low-Intent Clicks",
        body: "Broad-match keywords were generating clicks from searches that were unlikely to ever turn into a booked cleaning job.",
      },
      {
        title: "Lead Volume Had Stalled",
        body: "Lead volume had plateaued, with no clear sense of which campaigns or keywords were actually worth the spend.",
      },
      {
        title: "Call and Form Tracking Not Verified",
        body: "Call and form tracking existed but had not been verified, so it was unclear how much of the reported lead volume was actually real.",
      },
    ],
    approach: [
      {
        title: "Restructured Around High-Intent Local Search Terms",
        body: "Campaigns were rebuilt around high-intent local search terms, instead of the broad-match keywords that were pulling in low-intent traffic.",
      },
      {
        title: "Verified Call and Form Tracking",
        body: "Call and form tracking were verified end to end, so every reported lead could be trusted as a real one.",
      },
      {
        title: "Reallocated Budget to What Was Actually Converting",
        body: "Budget was reallocated toward the keywords and campaigns verified tracking showed were actually producing booked jobs.",
      },
    ],
  },
];
