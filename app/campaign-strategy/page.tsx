import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import {
  ArrowRightIcon,
  BarChartIcon,
  CheckIcon,
  ClipboardIcon,
  ClockIcon,
  LayersIcon,
  ShieldCheckIcon,
  TargetIcon,
  XCircleIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Campaign Strategy",
  description:
    "How campaign strategy is actually built: Search campaign structure for lead generation, Performance Max structure for ecommerce and high-volume accounts, and the optimization schedule that follows launch.",
  alternates: { canonical: "/campaign-strategy/" },
};

const searchSteps = [
  {
    title: "One campaign, tightly themed ad groups",
    body: "Each ad group covers one service line, not a mix of everything the business offers. A washroom renovation ad group and a basement renovation ad group get separate keywords, separate ads, and separate landing page relevance, instead of one broad group diluting Quality Score across both.",
  },
  {
    title: "Bidding starts on Maximize Clicks, then moves",
    body: "A brand-new campaign has no conversion history for Smart Bidding to learn from. Maximize Clicks runs first to collect real data while keeping bid control, then the account moves to Maximize Conversions once there is enough signal to bid on.",
  },
  {
    title: "Negative keywords from day one",
    body: "Job seekers, DIY searches, free/cheap intent, and course or template searches get excluded before the first dollar spends, not after a month of reviewing wasted clicks in the search terms report.",
  },
  {
    title: "Ads built around the decision, not the feature",
    body: "Messaging leads with what actually gets a homeowner or buyer to pick one contractor over another: experience, craftsmanship, a real consultation, a specific guarantee, not generic descriptions of the service.",
  },
  {
    title: "Extensions filled in before launch",
    body: "Call extensions, sitelinks, callouts, and structured snippets are set up from the start so the ad occupies more of the result and gives Google more signal about relevance.",
  },
  {
    title: "Primary and secondary conversions, both tracked",
    body: "Form submissions and phone calls are the primary signal Smart Bidding optimizes toward. Map clicks, contact page visits, and email clicks are tracked as secondary signals so the account has a fuller picture of intent without diluting the primary conversion.",
  },
];

const pmaxSteps = [
  {
    title: "Asset groups split by category, not one group for everything",
    body: "A single Performance Max asset group covering an entire menu or catalog gives Google's automation nothing to differentiate. Splitting by category (a burger asset group, a shawarma asset group, a specific menu item asset group) gives each its own creative, its own relevance, and its own performance data to optimize against.",
  },
  {
    title: "Retargeting audience signals from launch",
    body: "Website visitors, product or menu page visitors, add-to-cart or order-page visitors, and past customers are fed in as audience signals from day one, since this is the fastest way to help Google's automation find people who already showed intent instead of starting cold.",
  },
  {
    title: "A full creative set per asset group",
    body: "Headlines, long headlines, descriptions, high-quality photos, short promotional video, and a clean logo asset are built out for every asset group, since Performance Max quality is bounded by the weakest asset in the mix.",
  },
  {
    title: "A negative keyword list that actually gets maintained",
    body: "Competitor names, irrelevant categories, recipe or how-to searches, job searches, and wholesale/supplier searches are excluded and reviewed on a schedule, not set once and forgotten.",
  },
  {
    title: "Bidding starts on Maximize Conversions, then moves to value",
    body: "Once enough conversion volume is flowing, the campaign moves from Maximize Conversions to Maximize Conversion Value, so spend shifts toward the orders and leads actually worth more, not just the easiest ones to get.",
  },
];

const kpis = [
  "Cost per Conversion (CPA)",
  "Conversion Rate",
  "Click-Through Rate (CTR)",
  "Conversion Value",
  "Return on Ad Spend (ROAS)",
  "Average CPC",
  "Asset Group / Ad Group Performance",
];

const timeline = [
  {
    window: "Week 1–2",
    items: [
      "Monitor conversion performance and campaign learning",
      "Review Asset Strength (Performance Max) or Quality Score (Search)",
      "Verify audience signals and conversion tracking are firing correctly",
      "Confirm every creative asset and ad is actually serving",
    ],
  },
  {
    window: "Week 3–4",
    items: [
      "Review search term reports and add new negative keywords",
      "Pause low-performing keywords or creative, adjust bids on top performers",
      "Test new ad and creative variations to improve engagement",
      "Switch bidding strategy toward conversions or conversion value once data supports it",
    ],
  },
  {
    window: "Ongoing",
    items: [
      "Monthly written report on what was spent, what closed, and what changes next",
      "Negative keyword list reviewed and updated on a schedule, not left static",
      "Budget and bids adjusted against real bookings, orders, or leads, not platform-reported vanity metrics",
    ],
  },
];

const faqItems = [
  {
    question: "Do you use the same campaign structure for every business?",
    answer:
      "No. Lead-generation businesses (home services, professional services, most local businesses) run on Search campaigns with tightly themed ad groups and call/form tracking. Ecommerce and high-order-volume businesses (restaurants, online stores) run on Performance Max with asset groups split by category and retargeting audience signals, since the two business models need different structures to perform.",
  },
  {
    question: "Why start with Maximize Clicks instead of Maximize Conversions right away?",
    answer:
      "Smart Bidding strategies like Maximize Conversions need conversion history to bid intelligently. A brand-new campaign has none, so it starts on Maximize Clicks to collect real data under manual-style control, then moves to Maximize Conversions once there is enough signal for the automation to actually optimize against.",
  },
  {
    question: "How many negative keywords do you add, and when?",
    answer:
      "A starting negative list goes in before launch, covering the obvious waste for that industry (job searches, DIY/how-to searches, free/cheap intent, competitor names where relevant). It is then reviewed against the actual search terms report on a schedule, not set once and left alone.",
  },
  {
    question: "What counts as a primary vs a secondary conversion?",
    answer:
      "Primary conversions are the actions Smart Bidding should optimize toward, typically form submissions and phone calls for service businesses, or completed orders for ecommerce. Secondary conversions (map clicks, contact page visits, email clicks) are tracked for visibility but kept separate so they do not dilute what the bidding algorithm is actually chasing.",
  },
  {
    question: "How long before you change the bidding strategy?",
    answer:
      "There is no fixed date. The account moves to a conversion-based bidding strategy once there is enough conversion volume for Smart Bidding to have a real signal to learn from, which is usually somewhere in the 2–4 week range but depends on spend level and how often the business actually converts.",
  },
];

export default function CampaignStrategyPage() {
  return (
    <>
      <section className="section pt-12 pb-8">
        <div className="content-wrap px-6">
          <span className="caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent w-fit">
            Campaign Strategy
          </span>
          <h1 className="h1-style max-w-[20ch] mt-4">
            How I Actually Structure a Google Ads Campaign
          </h1>
          <p className="body-lg-copy text-neutral max-w-prose mt-4">
            Not a generic checklist. This is the same structure, ad group
            logic, and bidding sequence used to build real accounts, split
            by the two business models that need genuinely different
            campaign types.
          </p>
          <Link href="/book-a-call/" className="btn-primary w-fit inline-flex items-center gap-2 mt-6">
            Book My Free 30-Minute Audit
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-border p-6 flex flex-col gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-border text-accent">
              <TargetIcon className="w-5 h-5" />
            </span>
            <h2 className="h3-style !text-[19px]">Search Campaigns</h2>
            <p className="body-copy text-neutral">
              For local service businesses and other lead-generation
              accounts, where the goal is qualified phone calls and form
              submissions, not raw traffic.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-border p-6 flex flex-col gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-border text-accent">
              <LayersIcon className="w-5 h-5" />
            </span>
            <h2 className="h3-style !text-[19px]">Performance Max</h2>
            <p className="body-copy text-neutral">
              For ecommerce, restaurants, and high-order-volume businesses,
              where reach across Search, Display, YouTube, Discover, Gmail,
              and Maps drives more total orders.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mb-10">
            <span className="inline-block caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-3">
              Search Campaign Strategy
            </span>
            <h2 className="h2-style mb-3">Built for Qualified Leads, Not Clicks</h2>
            <p className="body-copy text-neutral">
              An illustrative example: a home renovation company running
              Search campaigns for washroom and basement renovation leads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {searchSteps.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-semibold text-[14px] shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink text-[15px]">{step.title}</p>
                  <p className="body-copy text-neutral">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-background border border-border p-6 md:p-8 grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ClipboardIcon className="w-5 h-5 text-accent" />
                <p className="font-semibold text-ink text-[15px]">Example Ad Group Themes</p>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-semibold text-ink text-[14px]">Washroom Renovation</p>
                  <p className="caption-copy">
                    washroom renovation, bathroom remodeling, bathroom contractor, bathroom renovation near me
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-ink text-[14px]">Basement Renovation</p>
                  <p className="caption-copy">
                    basement finishing, basement contractor, basement remodeling, custom basement renovation
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <XCircleIcon className="w-5 h-5 text-[#BD081C]" />
                <p className="font-semibold text-ink text-[15px]">Example Negative Keywords</p>
              </div>
              <p className="caption-copy">
                jobs, salary, training, course, school, DIY, how to, free,
                cheap, ideas, youtube, amazon, materials, wholesale,
                supplier, equipment, template, pdf
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mb-10">
            <span className="inline-block caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-3">
              Performance Max Strategy
            </span>
            <h2 className="h2-style mb-3">Built for Volume Across Every Google Surface</h2>
            <p className="body-copy text-neutral">
              An illustrative example: a restaurant brand running
              Performance Max to increase online orders across menu
              categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {pmaxSteps.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-semibold text-[14px] shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-ink text-[15px]">{step.title}</p>
                  <p className="body-copy text-neutral">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-white border border-border p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <BarChartIcon className="w-5 h-5 text-accent" />
              <p className="font-semibold text-ink text-[15px]">KPIs Tracked Per Campaign</p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {kpis.map((kpi) => (
                <span
                  key={kpi}
                  className="caption-copy px-3 py-1.5 rounded-full bg-background border border-border"
                >
                  {kpi}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mx-auto text-center mb-12">
            <span className="inline-block caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-3">
              After Launch
            </span>
            <h2 className="h2-style mb-3">The Optimization Schedule, Not a One-Time Setup</h2>
            <p className="body-copy text-neutral">
              The same schedule applies to both Search and Performance Max
              accounts once they go live.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((block) => (
              <div key={block.window} className="rounded-2xl bg-background border border-border p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-accent" />
                  <p className="font-semibold text-ink text-[15px]">{block.window}</p>
                </div>
                <ul className="flex flex-col gap-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckIcon className="w-4 h-4 mt-0.5 text-success shrink-0" />
                      <span className="body-copy text-neutral">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-wrap px-6 max-w-[860px]">
          <h2 className="h2-style text-center mb-10">Common Questions</h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <section className="section bg-ink">
        <div className="content-wrap px-6 text-center flex flex-col items-center gap-5">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/15">
            <ShieldCheckIcon className="w-6 h-6 text-white" />
          </span>
          <h2 className="h2-style !text-white max-w-[22ch]">
            Want This Structure Built for Your Account?
          </h2>
          <p className="caption-copy !text-[#B0B0B5]">
            Start with a free audit of what you are running now.
          </p>
          <Link href="/book-a-call/" className="btn-primary bg-accent">
            Book My Free 30-Minute Audit
          </Link>
        </div>
      </section>
    </>
  );
}
