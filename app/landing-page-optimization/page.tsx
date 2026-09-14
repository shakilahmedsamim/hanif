import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import { landingPageExamples } from "@/lib/landingPageExamples";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  ClipboardIcon,
  GlobeIcon,
  LayersIcon,
  LinkIcon,
  ShieldCheckIcon,
  StarIcon,
  TargetIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Landing Page Optimization",
  description:
    "Landing pages built around message match, real Core Web Vitals, and one clear call to action, so the page an ad sends traffic to actually converts.",
  alternates: { canonical: "/landing-page-optimization/" },
};

const proofPoints = [
  {
    icon: TargetIcon,
    title: "One Call to Action, Repeated",
    body: "This page has exactly one primary action, repeated at the top, middle, and bottom. No competing offer is splitting your attention right now, and that is deliberate.",
  },
  {
    icon: ClockIcon,
    title: "No Delay Before the Page Loads",
    body: "There is no heavy embed loading before this content, no popup blocking the page, and no font-loading flash. That is the same standard applied to every page built for a client.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Built to Pass Real Core Web Vitals",
    body: "Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, Cumulative Layout Shift under 0.1, measured from real visitors, not just a lab score.",
  },
];

const comparisonRows = [
  {
    them: "One homepage sent every ad click, regardless of which ad or keyword it came from",
    us: "Headline and hero copy matched to the exact ad group or campaign the click came from",
  },
  {
    them: "Two or three competing offers on the same screen",
    us: "One clear call to action per screen, repeated, never diversified",
  },
  {
    them: "A Lighthouse score checked once, then never revisited",
    us: "Core Web Vitals checked against real mobile field data on an ongoing basis",
  },
  {
    them: "A contact form with ten fields because more data seemed better",
    us: "Four fields or fewer, since form length is one of the highest-leverage levers on conversion rate",
  },
  {
    them: "Tap targets and forms tested only by resizing a desktop browser",
    us: "Tap targets, forms, and booking widgets tested on an actual phone",
  },
];

const performanceCards = [
  {
    emoji: "🚀",
    value: "1.9s",
    title: "Loads Fast",
    description: "Main content appears quickly",
    metric: "LCP",
  },
  {
    emoji: "⚡",
    value: "140ms",
    title: "Responds Quickly",
    description: "The page reacts quickly to clicks",
    metric: "INP",
  },
  {
    emoji: "✓",
    value: "0.04",
    title: "Stays Stable",
    description: "Content stays in place while loading",
    metric: "CLS",
  },
];

const anatomyItems = [
  {
    icon: LayersIcon,
    title: "Hero and lead form, side by side",
    body: "The offer and the way to claim it sit in the same first screen, above the fold, so a visitor never has to scroll to find out what to do next.",
  },
  {
    icon: ShieldCheckIcon,
    title: "A trust bar directly under the hero",
    body: "Rating, years in business, licensing, and a guarantee, shown as a single scannable strip before anything else, so credibility is established before the pitch continues.",
  },
  {
    icon: ClipboardIcon,
    title: "Services broken out with real photos",
    body: "What is included is shown as separate, named items with actual photos, not one paragraph describing everything at once.",
  },
  {
    icon: TargetIcon,
    title: "A numbered process, three to five steps",
    body: "Removing the guesswork of what happens after someone converts is often the difference between a submitted form and an abandoned tab.",
  },
  {
    icon: CheckIcon,
    title: "A specific reason to choose this business",
    body: "Not generic claims. Specific, checkable differentiators, laid out as a grid, not buried in a paragraph.",
  },
  {
    icon: ClockIcon,
    title: "A real, time-bound offer",
    body: "A discount or bundle with an actual condition attached creates urgency that a generic 'contact us' cannot.",
  },
  {
    icon: StarIcon,
    title: "Testimonials with names, cities, and star ratings",
    body: "Specific, attributed feedback reads as real. A block of unattributed praise reads as filler.",
  },
  {
    icon: GlobeIcon,
    title: "A service-area list",
    body: "Naming every city or neighborhood served gives local searchers an immediate relevance signal and reinforces it for search engines too.",
  },
  {
    icon: ArrowRightIcon,
    title: "The same call to action, repeated",
    body: "Every major section ends with the same offer and the same button, not a new competing idea each time. This page you are reading follows the same rule.",
  },
];

const checklist = [
  "Message match between the ad and the headline the click lands on",
  "Largest Contentful Paint image preloaded so the hero never causes a slow first paint",
  "Fixed-height containers reserved for embeds so nothing shifts while the page loads",
  "One primary call to action per screen, in first person, describing the outcome",
  "Forms kept to four fields or fewer unless there is a specific reason to add more",
  "Every tap target at least 44 by 44 pixels, tested on a real phone, not a resized window",
];

const faqItems = [
  {
    question: "Is landing page optimization included with Google Ads management?",
    answer:
      "It can be, since a well-tracked campaign sending traffic to a slow or unfocused page still underperforms. It is also available on its own for an existing site that already has traffic but a low conversion rate.",
  },
  {
    question: "Do you build new landing pages, or only improve existing ones?",
    answer:
      "Both. An existing page can be audited and improved in place, or a new page can be built from scratch when a campaign needs message match to a specific niche or offer that the current site does not address.",
  },
  {
    question: "What counts as a real Core Web Vitals pass?",
    answer:
      "A real pass means Largest Contentful Paint under 2.5 seconds, Interaction to Next Paint under 200 milliseconds, and Cumulative Layout Shift under 0.1, measured from actual visitor data in Google Search Console or PageSpeed Insights field data, not a one-time lab test.",
  },
  {
    question: "What platform does the landing page need to be built on?",
    answer:
      "Message match and speed fixes can be applied on a custom-built site, WordPress, Shopify, or a page builder such as Webflow or Squarespace. The specific technique changes by platform, but the same standard, message match, load speed, and one clear action, applies regardless of what the page is built on.",
  },
  {
    question: "How does message match actually improve conversion rate?",
    answer:
      "When the headline and hero image on the landing page repeat the exact offer or keyword from the ad someone clicked, the visitor immediately confirms they are in the right place, which lowers bounce rate before the visitor ever reaches the call to action further down the page.",
  },
  {
    question: "Do you test landing pages on real phones or just a resized browser?",
    answer:
      "Tap targets, forms, and the booking widget are tested on an actual phone, since a browser window resized to a phone width does not reproduce how a real mobile keyboard, viewport, or touch target behaves.",
  },
  {
    question: "Is landing page optimization a one-time fix or an ongoing service?",
    answer:
      "An initial pass fixes the message match, speed, and single call-to-action problems most pages have, and Core Web Vitals are then checked against real visitor field data on an ongoing basis, since a page that passed once can regress after a new script or embed gets added later.",
  },
];

export default function LandingPageOptimizationPage() {
  return (
    <>
      <section className="section pt-12 pb-8">
        <div className="content-wrap px-6">
          <div className="max-w-[780px]">
            <span className="caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent w-fit">
              Landing Page Optimization
            </span>
            <h1 className="h1-style mt-4">
              The Page an Ad Sends Traffic to Decides Whether It Was Worth It
            </h1>
            <p className="body-lg-copy text-neutral mt-4 max-w-[640px]">
              A well-tracked, well-targeted ad still fails if the page it
              sends traffic to is slow, unfocused, or saying something
              different from the ad itself. This page was built under the
              same rules described below, so you are looking at the
              standard before you take my word for it.
            </p>
            <Link href="/book-a-call/" className="btn-primary w-fit inline-flex items-center gap-2 mt-6">
              Book My Free 30-Minute Audit
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section pt-0 bg-white">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mx-auto text-center mb-10">
            <span className="inline-block caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-3">
              Landing Page Performance
            </span>
            <h2 className="h2-style mb-3">
              A <span className="text-accent">Fast</span> Page Helps Turn More Ad Clicks Into Customers
            </h2>
            <p className="body-copy text-neutral">
              When someone clicks your Google Ad, your landing page needs
              to load <span className="font-semibold text-ink">quickly</span> and
              respond smoothly. A slow or unstable page can frustrate
              visitors and waste valuable ad spend.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {performanceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-white border border-border p-6 flex flex-col items-center text-center gap-2"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-[22px]">
                  {card.emoji}
                </span>
                <p className="text-[32px] font-heading font-extrabold text-accent leading-none mt-1">
                  {card.value}
                </p>
                <p className="font-semibold text-ink text-[16px]">{card.title}</p>
                <p className="body-copy text-neutral">{card.description}</p>
                <span className="caption-copy px-2.5 py-1 rounded-full bg-success/10 text-success mt-1">
                  Excellent
                </span>
                <span className="caption-copy !text-[11px] text-neutral/70">{card.metric}</span>
              </div>
            ))}
          </div>

          <p className="body-copy text-neutral text-center max-w-[620px] mx-auto mt-8">
            <span className="font-semibold text-ink">What this means:</span>{" "}
            Visitors can see your page quickly, interact with it without
            noticeable delay, and enjoy a stable browsing experience.
          </p>
          <p className="caption-copy text-center mt-3">Based on Google Core Web Vitals</p>
        </div>
      </section>

      <section className="section">
        <div className="content-wrap px-6 grid md:grid-cols-3 gap-6">
          {proofPoints.map((point) => (
            <div key={point.title} className="rounded-2xl bg-white border border-border shadow-sm p-6 flex flex-col gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent">
                <point.icon className="w-5 h-5" />
              </span>
              <h3 className="h3-style !text-[18px]">{point.title}</h3>
              <p className="body-copy text-neutral">{point.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mx-auto text-center mb-12">
            <span className="inline-block caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-3">
              The Anatomy
            </span>
            <h2 className="h2-style mb-3">What a High-Converting Landing Page Actually Includes</h2>
            <p className="body-copy text-neutral">
              Not theory. The same nine elements, pulled from a real
              conversion-focused page built for a local service client.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {anatomyItems.map((item) => (
              <div key={item.title} className="rounded-2xl bg-background border border-border p-6 flex flex-col gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-border text-accent">
                  <item.icon className="w-5 h-5" />
                </span>
                <h3 className="font-semibold text-ink text-[15px]">{item.title}</h3>
                <p className="body-copy text-neutral">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-wrap px-6">
          <h2 className="h2-style text-center mb-10">
            What Most Landing Pages Do vs What This One Does
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[560px]">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="py-3 pr-6 caption-copy uppercase">What most pages do</th>
                  <th className="py-3 caption-copy uppercase">What this page does</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.them} className="border-b border-border">
                    <td className="py-4 pr-6 body-copy text-neutral align-top">{row.them}</td>
                    <td className="py-4 body-copy align-top">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/book-a-call/" className="btn-primary inline-flex items-center gap-2">
              Book My Free 30-Minute Audit
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="content-wrap px-6 max-w-[720px]">
          <h2 className="h2-style text-center mb-10">What Actually Gets Checked</h2>
          <ul className="flex flex-col gap-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                <span className="body-copy">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mx-auto text-center mb-12">
            <span className="inline-block caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-3">
              See It Live
            </span>
            <h2 className="h2-style mb-3">Real Landing Pages I&apos;ve Built</h2>
            <p className="body-copy text-neutral">
              Not mockups. Click through and see the actual page a client&apos;s
              ad traffic lands on.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {landingPageExamples.map((example) => (
              <a
                key={example.url}
                href={example.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-background border border-border p-6 flex flex-col gap-3"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-border text-accent">
                  <GlobeIcon className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink text-[15px]">{example.name}</p>
                  <p className="caption-copy">{example.industry}</p>
                </div>
                <p className="body-copy text-neutral">{example.description}</p>
                <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent mt-1">
                  <LinkIcon className="w-3.5 h-3.5" />
                  View Live Page
                </span>
              </a>
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
          <h2 className="h2-style !text-white max-w-[22ch]">
            See What Your Landing Page Is Actually Costing You
          </h2>
          <Link href="/book-a-call/" className="btn-primary bg-accent">
            Book My Free 30-Minute Audit
          </Link>
        </div>
      </section>
    </>
  );
}
