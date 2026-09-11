import type { Metadata } from "next";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Book a Free Call",
  description:
    "Book a free 30-minute strategy call to review your Google Ads campaigns and get a clear action plan.",
  alternates: { canonical: "/book-a-call/" },
};

const bullets = [
  "Review your Google Ads campaigns and performance",
  "Find areas where your budget may be getting wasted",
  "Identify opportunities to generate more qualified leads",
  "Review your conversion tracking and measurement",
  "Get actionable recommendations—completely free, with no obligation",
];

export default function BookACallPage() {
  return (
    <section className="section pt-12">
      <div className="content-wrap px-6 max-w-[860px] mx-auto text-center flex flex-col items-center gap-6">
        <h1 className="h1-style">Let&rsquo;s Find What&rsquo;s Holding Your Google Ads Back</h1>
        <p className="body-lg-copy text-neutral max-w-prose">
          Book a free 30-minute strategy call to review your campaigns,
          uncover growth opportunities, and get a clear action plan for
          improving your Google Ads performance.
        </p>

        <ul className="flex flex-col gap-2 text-left">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5 body-copy">
              <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      <div className="content-wrap px-6 mt-10">
        <div className="bg-white rounded-2xl border border-border p-4 md:p-6 max-w-[860px] mx-auto">
          <CalendlyEmbed />
        </div>
      </div>
    </section>
  );
}
