import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import DataFlowDiagram from "@/components/DataFlowDiagram";
import {
  ArrowRightIcon,
  BarChartIcon,
  CheckIcon,
  GoogleAdsLogo,
  GoogleAnalyticsLogo,
  LinkedInLogo,
  MetaLogo,
  PinterestLogo,
  ShieldCheckIcon,
  TikTokLogo,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Analytics & Conversion Tracking",
  description:
    "Google Ads and Meta conversion tracking, GA4 setup and custom reporting, TikTok, LinkedIn, and Pinterest pixels, plus first-party server-side tracking.",
  alternates: { canonical: "/conversion-tracking/" },
};

const overviewServices = [
  {
    icon: GoogleAdsLogo,
    color: "#4285F4",
    title: "Google Ads Conversion Tracking",
    body: "Online and offline conversions tied back to the exact click, keyword, and campaign that earned them.",
  },
  {
    icon: MetaLogo,
    color: "#0467DF",
    title: "Meta Pixel & Conversions API",
    body: "Browser pixel and server-side API firing together under one event ID, so Meta never double-counts or drops an event.",
  },
  {
    icon: GoogleAnalyticsLogo,
    color: "#E37400",
    title: "Google Analytics 4 Setup",
    body: "A GA4 property built around your business, with the events and conversions that actually matter marked and verified.",
  },
  {
    icon: BarChartIcon,
    color: "#1A73E8",
    title: "GA4 Custom Reports",
    body: "Explorations, funnels, and dashboards built around the questions you actually ask, not GA4's default views.",
  },
  {
    icon: TikTokLogo,
    color: "#010101",
    title: "Social Media Pixel Tracking",
    body: "TikTok Pixel, LinkedIn Insight Tag, Pinterest Tag, and other platform pixels installed and verified.",
  },
  {
    icon: ShieldCheckIcon,
    color: "#0A7D4F",
    title: "Server-Side Tracking",
    body: "Events routed through a first-party tagging server so tracking survives ad blockers and browser privacy limits.",
  },
];

const googleOnlineItems = [
  {
    title: "Every form, call, and purchase tracked",
    body: "Google tag and GA4 event tracking installed for form submissions, calls, and purchases as they happen on the site.",
  },
  {
    title: "Leads still matched after a cookie is blocked",
    body: "Enhanced Conversions for Leads pairs the click ID with encrypted contact data, so matching holds up as browsers restrict cookies.",
  },
  {
    title: "No conversion counted twice",
    body: "Checked so the same conversion is not counted in both GA4 and Google Ads before the account starts optimizing against it.",
  },
];

const googleOfflineItems = [
  {
    title: "Every lead's ad click saved automatically",
    body: "The click ID is captured the moment a lead comes in and stored on their CRM record, so it is never lost track of.",
  },
  {
    title: "Closed deals reported back to Google Ads",
    body: "When a lead becomes a signed contract, completed consultation, or closed deal, that result is fed back to Google Ads automatically.",
  },
  {
    title: "Built on Google's current upload method",
    body: "Offline results are uploaded through Google's current Data Manager API, since the older upload method is being phased out.",
  },
];

const metaItems = [
  {
    title: "One event counted once, not twice",
    body: "The Meta Pixel and the Conversions API are connected with a shared ID, so the same action never gets reported to Meta twice.",
  },
  {
    title: "Match quality checked, not assumed",
    body: "Meta's own match-quality score is reviewed and improved by sending more of the customer details Meta actually uses to match a sale to an ad.",
  },
  {
    title: "Tracking survives iPhone privacy settings",
    body: "Customer email and phone data is sent encrypted, so matching still works even when iOS privacy settings or an ad blocker would drop the pixel alone.",
  },
];

const ga4SetupItems = [
  {
    title: "Set up around your business, not a template",
    body: "The GA4 property structure is built around what your business actually sells or does, not Google's default e-commerce template.",
  },
  {
    title: "The right actions marked as conversions",
    body: "Key actions are marked as conversions inside GA4, so that data is usable everywhere it flows to, including Google Ads.",
  },
  {
    title: "Numbers that are not thrown off by noise",
    body: "Staff visits and subdomain hops are filtered out, so traffic and session numbers reflect real visitors, not internal noise.",
  },
];

const ga4ReportingItems = [
  {
    title: "Reports built for your real questions",
    body: "Custom reports built around the questions the business actually asks, not GA4's generic default reports.",
  },
  {
    title: "See exactly where visitors give up",
    body: "Funnel and path reports show exactly where visitors drop off before converting, not just that they did.",
  },
  {
    title: "The numbers, without logging into GA4",
    body: "Shareable dashboards put the numbers that matter in front of you, without needing to dig through GA4 to find them.",
  },
];

const socialPixelItems = [
  {
    logo: TikTokLogo,
    color: "#010101",
    name: "TikTok Pixel",
    body: "Pixel and Events API installed for accounts running TikTok Ads, with standard and custom events mapped to real actions.",
  },
  {
    logo: LinkedInLogo,
    color: "#0A66C2",
    name: "LinkedIn Insight Tag",
    body: "Installed for B2B accounts that need matched audiences and conversion tracking on LinkedIn campaigns.",
  },
  {
    logo: PinterestLogo,
    color: "#E60023",
    name: "Pinterest Tag",
    body: "Installed and verified for accounts running Pinterest campaigns, with event matching set up the same way as every other platform.",
  },
];

const sameOriginPoints = [
  {
    title: "Tracking runs from your own website",
    body: "The tracking server lives on your own domain instead of a generic outside one, so it is treated as part of your site, not a stranger.",
  },
  {
    title: "Survives Safari and iPhone privacy settings",
    body: "Because it looks like part of your site, this tracking is far less likely to get blocked by Safari or iPhone privacy settings, where most lost conversions come from.",
  },
  {
    title: "A cleaner, faster website too",
    body: "With fewer outside connections happening on the page, the site itself also loads a little cleaner and faster.",
  },
];

const faqItems = [
  {
    question: "Why does Google Ads tracking come before Meta tracking in your setup?",
    answer:
      "Because Google Ads is the platform actually being managed and bid against, so its tracking, online and offline, has to be correct first. Meta and other platform tracking is built on top of that once the Google Ads side is verified.",
  },
  {
    question: "What does same-origin or first-party server-side tracking actually mean?",
    answer:
      "It means the tracking server lives on your own website's domain instead of a generic outside one. Browsers like Safari treat it as part of your site rather than a stranger, so it is far less likely to be blocked.",
  },
  {
    question: "Can offline sales really be tracked back to a specific ad click?",
    answer:
      "Yes. The ad click that brought in each lead is saved to their CRM record the moment they come in. Once that lead becomes a closed deal, an automation reports it back to Google Ads, closing the loop between the offline sale and the ad click that started it.",
  },
  {
    question: "What is the difference between GA4 event tracking and Google Ads conversion tracking?",
    answer:
      "GA4 measures and reports on events across the whole site regardless of traffic source, while Google Ads conversion tracking specifically ties an event back to the ad click, keyword, and campaign that produced it so Smart Bidding can optimize against it. Both are usually set up together, but GA4 alone does not feed the Google Ads bidding algorithm.",
  },
  {
    question: "Is customer data like email and phone sent to Google or Meta as plain text?",
    answer:
      "No. Email and phone data is scrambled into an unreadable code before it ever leaves your site, so Google and Meta receive a code used only for matching, never the original readable value.",
  },
  {
    question: "How do I verify conversion tracking is actually working, not just installed?",
    answer:
      "A tag firing is not proof it is accurate. Google's and Meta's own diagnostic tools are used to confirm a fired event was actually received and matched to a real ad click, not just that the tag ran.",
  },
  {
    question: "Is server-side tagging required for every account, or only larger ones?",
    answer:
      "Server-side tagging pays for itself once an account is spending enough that browser tracking prevention and ad blockers are hiding a meaningful share of conversions. Smaller accounts are usually better served by getting standard Google tag, GA4, and Enhanced Conversions fully correct first.",
  },
  {
    question: "Do you set up GA4 even for accounts you are not managing ads for?",
    answer:
      "Yes. GA4 setup, event configuration, and custom reporting are handled as a standalone service, separate from managing an ad account, for anyone who needs accurate analytics and reporting regardless of which platform runs the ads.",
  },
  {
    question: "Which social platforms can you install tracking for besides Google and Meta?",
    answer:
      "TikTok Pixel and Events API, LinkedIn Insight Tag, and Pinterest Tag are set up on request, plus any other ad platform's pixel or conversion API using the same event-matching approach applied to Google and Meta.",
  },
];

export default function ConversionTrackingPage() {
  return (
    <>
      <section className="section pt-12 pb-8">
        <div className="content-wrap px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <span className="caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent w-fit">
              Analytics & Conversion Tracking
            </span>
            <h1 className="h1-style">
              Tracking Built for Google Ads First, Then Every Other Platform
            </h1>
            <p className="body-lg-copy text-neutral">
              Google Ads conversion tracking, online and offline, is built
              and verified first, since that is the platform your budget is
              actually bid against. GA4, Meta Conversions API, TikTok,
              LinkedIn, Pinterest, and first-party server-side delivery are
              layered on top for every other platform your data needs to
              reach.
            </p>
            <Link
              href="/book-a-call/"
              className="btn-primary w-fit inline-flex items-center gap-2"
            >
              Book My Free 30-Minute Audit
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-2xl bg-white border border-border shadow-sm p-6 flex flex-col gap-4">
            <div className="rounded-xl bg-accent/5 border border-accent/20 p-5 flex flex-wrap items-center gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white border border-border shrink-0">
                <span className="flex" style={{ color: "#4285F4" }}>
                  <GoogleAdsLogo className="w-6 h-6" />
                </span>
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-ink whitespace-nowrap">Google Ads</p>
                <p className="caption-copy">Online + offline, verified first</p>
              </div>
              <span className="caption-copy px-2.5 py-1 rounded-full bg-accent text-white shrink-0 basis-full text-center sm:basis-auto sm:ml-auto">
                Priority 1
              </span>
            </div>

            <div className="flex justify-center">
              <ArrowRightIcon className="w-4 h-4 text-neutral rotate-90" />
            </div>

            <div className="rounded-xl bg-background border border-border p-5 flex flex-wrap items-center gap-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-border shrink-0">
                <span className="flex" style={{ color: "#0467DF" }}>
                  <MetaLogo className="w-5 h-5" />
                </span>
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-ink text-[15px] whitespace-nowrap">Meta CAPI</p>
                <p className="caption-copy">Server-side, layered on top</p>
              </div>
              <span className="caption-copy px-2.5 py-1 rounded-full bg-white border border-border shrink-0 basis-full text-center sm:basis-auto sm:ml-auto">
                Priority 2
              </span>
            </div>

            <div className="flex justify-center">
              <ArrowRightIcon className="w-4 h-4 text-neutral rotate-90" />
            </div>

            <div className="rounded-xl bg-background border border-border p-5 flex flex-wrap items-center gap-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-border shrink-0">
                <span className="flex" style={{ color: "#E37400" }}>
                  <GoogleAnalyticsLogo className="w-5 h-5" />
                </span>
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-ink text-[15px] whitespace-nowrap">GA4 & Social Pixels</p>
                <p className="caption-copy">TikTok, LinkedIn, Pinterest &amp; more</p>
              </div>
              <span className="caption-copy px-2.5 py-1 rounded-full bg-white border border-border shrink-0 basis-full text-center sm:basis-auto sm:ml-auto">
                Priority 3
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mx-auto text-center mb-10">
            <span className="inline-block caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-3">
              What I Handle
            </span>
            <h2 className="h2-style mb-3">Every Platform, One Tracking Setup</h2>
            <p className="body-copy text-neutral">
              From the Google Ads account that spends the budget to every
              other platform reporting on it, all of it is built and
              verified under the same standard.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {overviewServices.map((service) => (
              <div key={service.title} className="rounded-2xl bg-white border border-border p-6 flex flex-col gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-border">
                  <span className="flex" style={{ color: service.color }}>
                    <service.icon className="w-5 h-5" />
                  </span>
                </span>
                <h3 className="font-semibold text-ink text-[16px]">{service.title}</h3>
                <p className="body-copy text-neutral">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mx-auto text-center mb-10">
            <h2 className="h2-style mb-3">
              One Server-Side Path, Every Platform Fed From It
            </h2>
            <p className="body-copy text-neutral">
              Events are captured once, from your website, store, or CRM,
              and delivered server-side from a tagging container hosted on
              your own domain, not a generic third-party one.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-border p-6 md:p-10">
            <DataFlowDiagram />
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-border">
              <span className="flex" style={{ color: "#4285F4" }}>
                <GoogleAdsLogo className="w-5 h-5" />
              </span>
            </span>
            <h2 className="h2-style !text-[28px] md:!text-[32px]">
              Google Ads Conversion Tracking
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-border p-8 flex flex-col gap-5">
              <h3 className="h3-style">Online</h3>
              <ul className="flex flex-col gap-4">
                {googleOnlineItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                    <span>
                      <span className="block font-semibold text-ink">{item.title}</span>
                      <span className="body-copy text-neutral">{item.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-border p-8 flex flex-col gap-5">
              <h3 className="h3-style">Offline</h3>
              <ul className="flex flex-col gap-4">
                {googleOfflineItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                    <span>
                      <span className="block font-semibold text-ink">{item.title}</span>
                      <span className="body-copy text-neutral">{item.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-background border border-border">
              <span className="flex" style={{ color: "#0467DF" }}>
                <MetaLogo className="w-5 h-5" />
              </span>
            </span>
            <h2 className="h2-style !text-[24px] md:!text-[28px]">
              Meta Conversions API and Server-Side Setup
            </h2>
          </div>
          <p className="body-copy text-neutral max-w-prose mb-8">
            Once Google Ads tracking is verified, the same discipline
            applies to Meta, for accounts that also run it or need it
            tracked even without us managing the ad spend.
          </p>
          <ul className="flex flex-col gap-5 max-w-[720px]">
            {metaItems.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                <span>
                  <span className="block font-semibold text-ink">{item.title}</span>
                  <span className="body-copy text-neutral">{item.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-border">
              <span className="flex" style={{ color: "#E37400" }}>
                <GoogleAnalyticsLogo className="w-5 h-5" />
              </span>
            </span>
            <h2 className="h2-style !text-[24px] md:!text-[28px]">
              Google Analytics 4 Setup and Custom Reporting
            </h2>
          </div>
          <p className="body-copy text-neutral max-w-prose mb-8">
            GA4 is set up around your business, with the events and
            conversions that matter marked from the start, then turned into
            reports built to answer real questions, not GA4&apos;s defaults.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-border p-8 flex flex-col gap-5">
              <h3 className="h3-style">Setup</h3>
              <ul className="flex flex-col gap-4">
                {ga4SetupItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                    <span>
                      <span className="block font-semibold text-ink">{item.title}</span>
                      <span className="body-copy text-neutral">{item.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-border p-8 flex flex-col gap-5">
              <h3 className="h3-style">Custom Reporting</h3>
              <ul className="flex flex-col gap-4">
                {ga4ReportingItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                    <span>
                      <span className="block font-semibold text-ink">{item.title}</span>
                      <span className="body-copy text-neutral">{item.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mx-auto text-center mb-10">
            <span className="inline-block caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-3">
              Beyond Google &amp; Meta
            </span>
            <h2 className="h2-style mb-3">Social Media Pixel Tracking</h2>
            <p className="body-copy text-neutral">
              Running ads on other platforms is not an excuse for untracked
              spend. Each pixel is installed and verified with the same
              standard applied to Google and Meta.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {socialPixelItems.map((platform) => (
              <div key={platform.name} className="rounded-2xl bg-background border border-border p-6 flex flex-col gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-border">
                  <span className="flex" style={{ color: platform.color }}>
                    <platform.logo className="w-5 h-5" />
                  </span>
                </span>
                <h3 className="font-semibold text-ink text-[16px]">{platform.name}</h3>
                <p className="body-copy text-neutral">{platform.body}</p>
              </div>
            ))}
          </div>
          <p className="body-copy text-neutral text-center mt-6">
            Any other ad platform&apos;s pixel or conversion API is added on
            request, using the same event-matching approach.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mx-auto text-center mb-12">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mx-auto mb-4">
              <ShieldCheckIcon className="w-6 h-6" />
            </span>
            <h2 className="h2-style mb-3">Why Same-Origin Delivery Matters</h2>
            <p className="body-copy text-neutral">
              Server-side tagging can still lose accuracy if it runs on a
              generic third-party domain. Hosting it on your own domain is
              what actually closes the gap.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sameOriginPoints.map((point) => (
              <div key={point.title} className="rounded-2xl bg-white border border-border p-6 flex flex-col gap-2">
                <h3 className="h3-style !text-[18px]">{point.title}</h3>
                <p className="body-copy text-neutral">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6 max-w-[860px]">
          <h2 className="h2-style text-center mb-10">Common Questions</h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <section className="section bg-ink">
        <div className="content-wrap px-6 text-center flex flex-col items-center gap-5">
          <h2 className="h2-style !text-white max-w-[22ch]">
            Find Out What Your Account Is Actually Tracking
          </h2>
          <Link href="/book-a-call/" className="btn-primary bg-accent">
            Book My Free 30-Minute Audit
          </Link>
        </div>
      </section>
    </>
  );
}
