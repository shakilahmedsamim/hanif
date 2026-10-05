export type CaseStudy = {
  slug: string;
  industry: string;
  headline: string;
  problem: string;
  fix: string;
  stats: { label: string; value: string }[];
  quote?: string;
  clientBackground?: string;
  challenges?: { title: string; body: string }[];
  approach?: { title: string; body: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "hvac-plumbing-home-services",
    industry: "Home Services",
    headline: "Fixing Tracking Before Scaling Spend",
    problem:
      "The client was struggling to generate consistent, qualified leads from Google Ads. Campaign performance was affected by broad and low-intent traffic, inefficient keyword targeting, and ad spend going toward searches that were not driving meaningful enquiries.",
    fix:
      "We restructured and optimized the Google Ads campaign around high-intent search terms, refined location targeting, added negative keywords, improved ad messaging, and continuously optimized bids and budgets based on conversion performance.",
    stats: [
      { label: "Leads / Month", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
    clientBackground:
      "A home services business running Google Ads to generate local leads. Before this engagement, the account had been live for a while, but campaign structure and targeting had not been revisited since launch, and lead volume had become inconsistent.",
    challenges: [
      {
        title: "Broad, Low-Intent Traffic",
        body: "A large share of clicks were coming from broad and low-intent search terms that were unlikely to turn into a real job.",
      },
      {
        title: "Inefficient Keyword Targeting",
        body: "Keyword targeting had not been refined around the services and search terms that were actually producing valuable leads.",
      },
      {
        title: "Spend Going to the Wrong Searches",
        body: "Budget was going toward searches that were not driving meaningful enquiries, instead of the intent-driven searches that matter.",
      },
    ],
    approach: [
      {
        title: "Rebuilt Around High-Intent Search Terms",
        body: "Campaigns were restructured around high-intent search terms and refined location targeting, so budget focused on searches that were actually likely to convert.",
      },
      {
        title: "Added Negative Keywords & Improved Ad Messaging",
        body: "Negative keywords were added to filter out irrelevant traffic, and ad messaging was improved to match what high-intent searchers were actually looking for.",
      },
      {
        title: "Continuous Bid & Budget Optimization",
        body: "Bids and budgets were continuously optimized based on real conversion performance, not just click volume.",
      },
    ],
  },
  {
    slug: "personal-injury-family-law",
    industry: "Personal Injury & Family Law",
    headline: "Attributing Phone Call Conversions Accurately",
    problem:
      "[Client to supply the one-sentence starting problem, for example: high cost-per-click keywords were bidding on incomplete data because phone call conversions were not tracked.]",
    fix:
      "[Client to supply the specific fix applied, for example: implemented call tracking tied to the originating keyword and campaign, feeding qualified calls back into Smart Bidding.]",
    stats: [
      { label: "Qualified Calls", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
  },
  {
    slug: "medical-aesthetics-cosmetic-dentistry",
    industry: "Medical Aesthetics & Cosmetic Dentistry",
    headline: "Bridging Online Forms to In-Clinic Bookings",
    problem:
      "[Client to supply the one-sentence starting problem, for example: online form conversions were tracked, but in-clinic consultations that closed were never fed back to the ad account.]",
    fix:
      "[Client to supply the specific fix applied, for example: built an offline conversion import from the booking system so a completed consultation counts as a real conversion.]",
    stats: [
      { label: "Booked Consults", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
  },
  {
    slug: "immigration-family-law",
    industry: "Immigration & Family Law",
    headline: "Adding Tracking Where There Was None",
    problem:
      "[Client to supply the one-sentence starting problem, for example: the account had no conversion tracking beyond a bare contact form, so Smart Bidding had nothing to optimize toward.]",
    fix:
      "[Client to supply the specific fix applied, for example: installed Google tag and GA4 event tracking, verified Enhanced Conversions for Leads, and set up offline conversion imports for signed retainers.]",
    stats: [
      { label: "Leads / Month", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
  },
  {
    slug: "b2b-professional-managed-services",
    industry: "B2B Professional & Managed Services",
    headline: "Connecting a Long Sales Cycle Back to the Ad Click",
    problem:
      "[Client to supply the one-sentence starting problem, for example: deals took weeks to close, so there was no way to prove which campaigns were actually producing signed contracts.]",
    fix:
      "[Client to supply the specific fix applied, for example: built a CRM-to-ad-platform pipeline so a deal marked Closed Won pushes an offline conversion back to the ad account.]",
    stats: [
      { label: "Closed Deals", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
  },
  {
    slug: "residential-cleaning-services",
    industry: "Residential Cleaning Services",
    headline: "Rebuilding Campaigns Around High-Intent Local Searches",
    problem:
      "[Client to supply the one-sentence starting problem, for example: broad-match keywords were pulling in low-intent clicks and lead volume had stalled.]",
    fix:
      "[Client to supply the specific fix applied, for example: restructured campaigns around high-intent local search terms and verified call and form tracking.]",
    stats: [
      { label: "Leads / Month", value: "TBD" },
      { label: "Cost Per Lead", value: "TBD" },
      { label: "CPL Change", value: "TBD" },
    ],
  },
];
