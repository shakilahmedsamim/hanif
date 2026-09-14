import type { Metadata } from "next";
import Link from "next/link";
import Faq from "@/components/Faq";
import {
  ArrowRightIcon,
  BarChartIcon,
  CalendarIcon,
  CheckIcon,
  DocumentIcon,
  GearIcon,
  GoogleAdsLogo,
  MapPinIcon,
  SearchIcon,
  ShopifyLogo,
  ShoppingCartIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
  WooCommerceLogo,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Google Ads Management",
  description:
    "End-to-end Google Ads management, from campaign strategy and keyword research to conversion tracking, optimization, and reporting.",
  alternates: { canonical: "/google-ads-management/" },
};

const heroChecklist = [
  "More Qualified Leads",
  "Lower Wasted Spend",
  "Data-Driven Decisions",
  "A Clear Path to Growth",
];

const stages = [
  {
    number: "01",
    icon: SearchIcon,
    color: "#1A73E8",
    title: "Research & Strategy",
    body: "Understand your business, market, customers, and goals.",
    items: [
      { letter: "A", label: "Account & Campaign Audit" },
      { letter: "B", label: "Business Analysis" },
      { letter: "C", label: "Campaign Strategy" },
      { letter: "D", label: "Keyword Research" },
      { letter: "E", label: "Audience & Location Targeting" },
    ],
  },
  {
    number: "02",
    icon: GearIcon,
    color: "#0A7D4F",
    title: "Build & Launch",
    body: "Create targeted campaigns designed to attract the right customers.",
    items: [
      { letter: "F", label: "Campaign Structure" },
      { letter: "G", label: "Ad Groups & Keywords" },
      { letter: "H", label: "Negative Keywords" },
      { letter: "I", label: "Compelling Ad Copy" },
      { letter: "J", label: "Budget & Bidding Setup" },
    ],
  },
  {
    number: "03",
    icon: BarChartIcon,
    color: "#E37400",
    title: "Track & Measure",
    body: "Set up accurate tracking so we know what's actually working.",
    items: [
      { letter: "K", label: "Conversion Tracking" },
      { letter: "L", label: "GA4 & Tag Manager" },
      { letter: "M", label: "Enhanced Conversions" },
      { letter: "N", label: "Call & Form Tracking" },
      { letter: "O", label: "CRM / Offline Tracking" },
    ],
  },
  {
    number: "04",
    icon: TrendingUpIcon,
    color: "#7C5CFC",
    title: "Optimize & Grow",
    body: "Continuously improve performance and reduce wasted spend.",
    items: [
      { letter: "P", label: "Search Term Analysis" },
      { letter: "Q", label: "Keyword Optimization" },
      { letter: "R", label: "Ad Testing" },
      { letter: "S", label: "Landing Page Alignment" },
      { letter: "T", label: "Conversion Rate Optimization" },
    ],
  },
  {
    number: "05",
    icon: DocumentIcon,
    color: "#174EA6",
    title: "Report & Improve",
    body: "Clear reporting and strategic recommendations for long-term growth.",
    items: [
      { letter: "U", label: "Performance Monitoring" },
      { letter: "V", label: "Lead Quality & ROI" },
      { letter: "W", label: "Regular Reporting" },
      { letter: "X", label: "Identify & Remove Waste" },
      { letter: "Y", label: "Year-Round Optimization" },
      { letter: "Z", label: "Data-Driven Decisions" },
    ],
  },
];

const trustPoints = [
  {
    icon: BarChartIcon,
    color: "#1A73E8",
    title: "Strategy Before Spend",
    body: "Every campaign starts with a clear strategy.",
  },
  {
    icon: TargetIcon,
    color: "#0A7D4F",
    title: "Tracking You Can Trust",
    body: "Know which campaigns, keywords, and ads are actually generating conversions.",
  },
  {
    icon: GearIcon,
    color: "#E37400",
    title: "Continuous Optimization",
    body: "Campaigns are regularly reviewed and improved based on data.",
  },
  {
    icon: UsersIcon,
    color: "#7C5CFC",
    title: "Business-Focused Decisions",
    body: "Optimization focuses on meaningful business outcomes, not vanity metrics.",
  },
];

const localItems = [
  "Search campaigns built around the exact services and service area you cover, not broad match guesswork",
  "Local Services Ads setup and Google Guaranteed verification where it fits your trade",
  "Call tracking tied to the keyword and campaign that produced the call, not just a phone number on the page",
  "Negative keyword lists that keep job seekers, DIYers, and out-of-area searches out of your budget",
];

const ecommerceItems = [
  "Shopping and Performance Max campaigns built around your actual product feed and margins, not a single default asset group",
  "Product feed structure and labeling that lets you separate high-margin and low-margin products in bidding",
  "Purchase and add-to-cart tracking verified against your actual order data, not just platform-reported conversions",
  "Campaign structure that protects brand search spend from being cannibalized by broad Performance Max targeting",
];

const faqItems = [
  {
    question: "Do you manage Google Ads for ecommerce stores or only local service businesses?",
    answer:
      "Both. Local service accounts are built around Search and Local Services Ads with call tracking, while ecommerce accounts are built around Shopping and Performance Max with product feed structure and purchase tracking verified against real order data.",
  },
  {
    question: "What platforms do you build ecommerce campaigns for?",
    answer:
      "Campaign management covers Google Ads directly, and conversion tracking is built to work with whatever platform the store runs on, including Shopify and WooCommerce, since accurate purchase and cart data has to come from the store itself, not just the ad platform.",
  },
  {
    question: "How is Google Ads management priced?",
    answer:
      "Pricing depends on account size, catalog size for ecommerce accounts, and how much tracking work is needed, and a specific number is quoted after the free audit rather than a flat rate that ignores what your account actually needs.",
  },
  {
    question: "How long does Local Services Ads verification take?",
    answer:
      "Google Guaranteed verification typically takes anywhere from a few days to a few weeks depending on the trade and how quickly background checks, license verification, and insurance documents come back, so it is started early in the account build rather than left until Search campaigns are already running.",
  },
  {
    question: "What is the difference between Shopping campaigns and Performance Max for ecommerce?",
    answer:
      "Standard Shopping campaigns give more direct control over bids and placements at the product level, while Performance Max lets Google's automation bid across Search, Display, YouTube, and Shopping inventory from one campaign. Most ecommerce accounts here run Performance Max for broad reach with a protected brand Search campaign alongside it, since Performance Max can otherwise cannibalize branded traffic that would have converted for free.",
  },
  {
    question: "Can you take over management of an account that is already running with another agency?",
    answer:
      "Yes. A takeover starts with the same free audit used for any new account, reviewing existing campaign structure, conversion tracking accuracy, and account history before making changes, so nothing that is already working gets disrupted in the handover.",
  },
  {
    question: "How often do you send reports and adjust bids?",
    answer:
      "Bids, budgets, and negative keyword lists are reviewed on an ongoing basis as spend accumulates, not on a fixed monthly schedule alone, while a written report summarizing what was spent, what closed, and what changes next goes out monthly in plain language.",
  },
];

export default function GoogleAdsManagementPage() {
  return (
    <>
      <section className="section pt-12 pb-8">
        <div className="content-wrap px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6">
            <span className="caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent w-fit">
              Google Ads Management
            </span>
            <h1 className="h1-style">
              Your Google Ads, Managed From <span className="text-accent">A to Z</span>
            </h1>
            <p className="body-lg-copy text-neutral">
              From campaign strategy and keyword research to conversion
              tracking, optimization, and reporting — I manage the entire
              Google Ads process with one goal: turning your advertising
              budget into measurable business results.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/book-a-call/" className="btn-primary w-fit inline-flex items-center gap-2">
                Book My Free 30-Minute Audit
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <a
                href="#a-z-process"
                className="w-fit inline-flex items-center gap-2 font-semibold text-ink px-5 py-3 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
              >
                See How I Work
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-border shadow-sm p-6 flex flex-col gap-4">
            <div className="flex items-center gap-5">
              <span className="flex items-center justify-center w-16 h-16 shrink-0" style={{ color: "#4285F4" }}>
                <GoogleAdsLogo className="w-14 h-14" />
              </span>
              <ul className="flex flex-col gap-2">
                {heroChecklist.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-success shrink-0" />
                    <span className="font-semibold text-ink text-[14px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-background border border-border p-4">
              <p className="body-copy text-neutral italic">
                &quot;You shouldn&apos;t have to worry about whether your
                campaigns are targeting the right people, tracking the right
                conversions, or wasting money on irrelevant clicks. I handle
                the complete Google Ads management process — so you can
                focus on running your business.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="a-z-process" className="section pt-0 scroll-mt-20">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mx-auto text-center mb-12">
            <span className="inline-block caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-3">
              My A–Z Process
            </span>
            <h2 className="h2-style mb-3">A Complete System for Better Results</h2>
            <p className="body-copy text-neutral">
              I follow a clear 5-stage process that covers everything from
              strategy to ongoing optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-5">
            {stages.map((stage) => (
              <div key={stage.number} className="flex flex-col gap-4">
                <div className="flex flex-col items-center text-center gap-3">
                  <span
                    className="caption-copy !text-white font-semibold w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: stage.color }}
                  >
                    {stage.number}
                  </span>
                  <span
                    className="flex items-center justify-center w-14 h-14 rounded-2xl"
                    style={{ backgroundColor: `${stage.color}1A`, color: stage.color }}
                  >
                    <stage.icon className="w-6 h-6" />
                  </span>
                  <h3 className="font-semibold text-ink text-[17px]">{stage.title}</h3>
                  <p className="body-copy text-neutral !text-[13px]">{stage.body}</p>
                </div>

                <div className="rounded-2xl bg-white border border-border p-4 flex flex-col gap-3 flex-1">
                  {stage.items.map((item) => (
                    <div key={item.letter} className="flex items-start gap-2.5">
                      <span
                        className="caption-copy !text-white font-semibold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: stage.color }}
                      >
                        {item.letter}
                      </span>
                      <span className="body-copy !text-[13px] leading-snug">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-accent/5 border border-accent/20 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 mt-10">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-border text-accent shrink-0">
              <TargetIcon className="w-6 h-6" />
            </span>
            <p className="body-copy">
              <span className="block font-semibold text-ink text-[17px] mb-1">
                You don&apos;t need another person who simply checks your Google Ads account.
              </span>
              <span className="text-neutral">
                You need someone who understands the entire journey — from
                the moment a customer searches to the moment they become a
                lead or customer.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mx-auto text-center mb-10">
            <span className="inline-block caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-3">
              Why Work With Me
            </span>
            <h2 className="h2-style mb-3">A Smarter Approach to Google Ads</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {trustPoints.map((point) => (
              <div key={point.title} className="rounded-2xl bg-background border border-border p-6 flex flex-col items-center text-center gap-2">
                <span
                  className="flex items-center justify-center w-11 h-11 rounded-full mb-1"
                  style={{ backgroundColor: `${point.color}1A`, color: point.color }}
                >
                  <point.icon className="w-5 h-5" />
                </span>
                <h3 className="font-semibold text-ink text-[16px]">{point.title}</h3>
                <p className="body-copy text-neutral">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mx-auto text-center mb-10">
            <span className="inline-block caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent mb-3">
              Built Around Your Business
            </span>
            <h2 className="h2-style mb-3">A Different Playbook for a Different Business Model</h2>
            <p className="body-copy text-neutral">
              A local service business and an ecommerce store need different
              campaign structures, tracking, and bidding strategies. Each
              one is built the way it actually needs to work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-border p-8 flex flex-col gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent">
                <MapPinIcon className="w-6 h-6" />
              </span>
              <h3 className="h3-style">For Local Service Businesses</h3>
              <ul className="flex flex-col gap-3">
                {localItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                    <span className="body-copy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-border p-8 flex flex-col gap-4">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent">
                <ShoppingCartIcon className="w-6 h-6" />
              </span>
              <h3 className="h3-style">For Ecommerce Brands</h3>
              <ul className="flex flex-col gap-3">
                {ecommerceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                    <span className="body-copy">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 border-t border-border pt-4 mt-1">
                <span className="caption-copy">Tracking built for</span>
                <span className="flex items-center gap-1.5" style={{ color: "#7AB55C" }}>
                  <ShopifyLogo className="w-4 h-4" />
                  <span className="caption-copy !text-inherit font-semibold">Shopify</span>
                </span>
                <span className="flex items-center gap-1.5" style={{ color: "#96588A" }}>
                  <WooCommerceLogo className="w-4 h-4" />
                  <span className="caption-copy !text-inherit font-semibold">WooCommerce</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="content-wrap px-6 max-w-[860px]">
          <h2 className="h2-style text-center mb-10">Common Questions</h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <section className="section">
        <div className="content-wrap px-6">
          <div className="rounded-2xl bg-accent p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15 text-white shrink-0">
              <TrendingUpIcon className="w-6 h-6" />
            </span>
            <div className="flex-1">
              <h2 className="h3-style !text-white mb-2">
                Ready to Stop Guessing Where Your Ad Budget Is Going?
              </h2>
              <p className="body-copy !text-white/85">
                Let&apos;s audit your Google Ads, identify the biggest
                opportunities, and build a clear plan for improving
                performance.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
              <Link
                href="/book-a-call/"
                className="btn-primary bg-none bg-white !text-accent w-fit inline-flex items-center gap-2 hover:bg-white/90"
              >
                Book My Free 30-Minute Audit
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <span className="flex items-center gap-1.5 caption-copy !text-white/70">
                <CalendarIcon className="w-4 h-4" />
                No obligation. Just real insights.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
