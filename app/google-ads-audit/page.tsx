import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import { ArrowRightIcon, CheckIcon, ClipboardIcon, XCircleIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Google Ads Audit",
  description:
    "A real Google Ads account audit: account settings and security, conversion tracking accuracy, wasted spend, Quality Score factors, and bidding strategy alignment.",
  alternates: { canonical: "/google-ads-audit/" },
};

type Finding = { label: string; status: "pass" | "fail" };

const sampleFindings: Finding[] = [
  { label: "Enhanced Conversions verified, not just switched on", status: "fail" },
  { label: "Conversions not double-counted across GA4 and Ads", status: "fail" },
  { label: "Negative keyword list actively maintained", status: "pass" },
  { label: "Call tracking tied to keyword and campaign", status: "fail" },
  { label: "Account access limited to current team members", status: "pass" },
  { label: "Bidding strategy matched to actual sales cycle", status: "fail" },
];

const auditAreas = [
  {
    title: "Account Structure & Campaign Setup",
    body: "I check your campaign and ad group structure, targeting, settings, budgets, and overall setup to make sure your account is built around your business goals.",
  },
  {
    title: "Keyword & Search Term Performance",
    body: "I identify high-intent opportunities, irrelevant searches, negative keyword gaps, and areas where your budget may be going toward low-quality traffic.",
  },
  {
    title: "Ad Performance & Messaging",
    body: "I review your ads, messaging, assets, and relevance to make sure they match what potential customers are actually searching for.",
  },
  {
    title: "Conversion Tracking & Lead Quality",
    body: "I check whether your conversions are being tracked accurately and whether Google Ads is receiving the right signals to optimize toward valuable leads, not just activity.",
  },
  {
    title: "Bidding, Budget & Optimization",
    body: "I evaluate your bidding strategy, budget allocation, and campaign performance to find opportunities to reduce wasted spend and improve efficiency.",
  },
];

const faqItems = [
  {
    question: "What exactly happens on a Google Ads audit call?",
    answer:
      "We go through your account live, section by section: account settings and security, conversion tracking accuracy, wasted spend, ad quality, and bidding strategy, and you get a written summary of the top issues found afterward.",
  },
  {
    question: "Is the audit really free?",
    answer:
      "Yes. There is no payment required and no obligation to continue afterward. The audit exists to give you an honest, specific answer on what is working and what is not.",
  },
  {
    question: "Do I need to give you access to my Google Ads account?",
    answer:
      "Read-only access is enough for the audit itself, so nothing in your account can be changed during the call.",
  },
  {
    question: "How long does a Google Ads audit take?",
    answer:
      "The live call runs 30 minutes, and the written summary of findings is delivered within one business day afterward, though the depth of the review depends on account size and how many campaigns are active.",
  },
  {
    question: "What are the most common issues found in a Google Ads audit?",
    answer:
      "The most common findings are double-counted conversions between GA4 and Google Ads, Enhanced Conversions switched on but not actually matching, broad match keywords pulling in unrelated searches, and Performance Max campaigns cannibalizing brand search traffic that would have converted for free.",
  },
  {
    question: "Do you audit Performance Max campaigns specifically?",
    answer:
      "Yes. Performance Max is checked for asset group structure, whether it is bidding on brand terms that should be excluded, and whether the conversion data it optimizes against is accurate, since Performance Max automation only performs as well as the data it is given.",
  },
  {
    question: "What happens after the audit if I want to move forward?",
    answer:
      "There is no pressure to continue. If the findings show issues worth fixing, the next step is a specific, quoted plan for the tracking and campaign work needed, not a generic package.",
  },
];

export default function GoogleAdsAuditPage() {
  return (
    <>
      <section className="section pt-12 pb-8">
        <div className="content-wrap px-6 grid lg:grid-cols-[1fr_420px] gap-14 items-start">
          <div className="flex flex-col gap-6">
            <span className="caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent w-fit">
              Google Ads Audit
            </span>
            <h1 className="h1-style max-w-[20ch]">
              Find What&rsquo;s Holding Your Google Ads Back
            </h1>
            <p className="body-lg-copy text-neutral">
              I review your Google Ads account from top to bottom to
              identify wasted spend, missed opportunities, tracking issues,
              and campaign weaknesses that may be limiting your results.
              You&rsquo;ll get a clear picture of what needs attention and
              what to fix first.
            </p>
            <p className="body-copy text-neutral">
              More clicks don&rsquo;t always mean more customers. A campaign
              can generate plenty of traffic while wasting budget on the
              wrong searches, targeting, ads, or bidding strategy. My audit
              focuses on the areas that directly impact lead quality,
              conversion performance, and your overall return on ad spend.
            </p>

            <p className="font-semibold text-ink mt-2">5 Things I Check</p>

            <div className="flex flex-col gap-5">
              {auditAreas.map((area, i) => (
                <div key={area.title} className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-semibold text-[14px] shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{area.title}</p>
                    <p className="body-copy text-neutral">{area.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/book-a-call/" className="btn-primary w-fit inline-flex items-center gap-2 mt-4">
              Book My Free 30-Minute Audit
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="hidden lg:block sticky top-28">
            <div className="rotate-2 rounded-2xl bg-white border border-border shadow-xl p-6">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-border">
                <ClipboardIcon className="w-5 h-5 text-accent" />
                <p className="font-semibold text-ink text-[15px]">Sample Audit Findings</p>
              </div>
              <ul className="flex flex-col gap-4">
                {sampleFindings.map((finding) => (
                  <li key={finding.label} className="flex items-start gap-3">
                    {finding.status === "pass" ? (
                      <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                    ) : (
                      <XCircleIcon className="w-5 h-5 mt-0.5 text-[#BD081C] shrink-0" />
                    )}
                    <span className="text-[14px] text-ink">{finding.label}</span>
                  </li>
                ))}
              </ul>
              <p className="caption-copy mt-5 pt-4 border-t border-border">
                Illustrative example. Your real findings depend on your
                actual account.
              </p>
            </div>
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
          <h2 className="h2-style !text-white max-w-[22ch]">
            See What Your Own Account Is Actually Doing
          </h2>
          <Link href="/book-a-call/" className="btn-primary bg-accent">
            Book My Free 30-Minute Audit
          </Link>
        </div>
      </section>
    </>
  );
}
