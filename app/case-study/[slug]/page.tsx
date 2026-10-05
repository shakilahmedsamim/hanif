import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/caseStudies";
import BeforeAfterStrip from "@/components/BeforeAfterStrip";
import ContactForm from "@/components/ContactForm";
import { ArrowRightIcon, BarChartIcon, ClockIcon, XCircleIcon } from "@/components/icons";

const challengeIcons = [XCircleIcon, ClockIcon, BarChartIcon];

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return {};
  return {
    title: `${study.industry} Case Study`,
    description: study.headline,
    alternates: { canonical: `/case-study/${study.slug}/` },
  };
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();

  const otherStudies = caseStudies.filter((s) => s.slug !== study.slug).slice(0, 3);

  return (
    <>
      <section className="section pt-10 pb-0">
        <div className="content-wrap px-6">
          <div className="max-w-[760px] mx-auto">
            <Link
              href="/case-study/"
              className="inline-flex items-center gap-1.5 caption-copy text-accent hover:underline mb-6"
            >
              <ArrowRightIcon className="w-3.5 h-3.5 rotate-180" />
              Back to All Case Studies
            </Link>
          </div>
        </div>
      </section>

      <section className="section pt-4 pb-8">
        <div className="content-wrap px-6">
          <div className="max-w-[760px] mx-auto">
            <span className="caption-copy px-2.5 py-1 rounded-full bg-accent/10 text-accent w-fit inline-block mb-4">
              {study.industry} · Case Study
            </span>
            <h1 className="h1-style mb-6">{study.headline}</h1>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-a-call/" className="btn-primary w-fit inline-flex items-center gap-2">
                Get Results Like This
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link href="/case-study/" className="btn-secondary w-fit">
                View All Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6">
        <div className="max-w-[760px] mx-auto flex flex-col gap-10">
          <div>
            <p className="caption-copy uppercase tracking-wider text-neutral mb-3">
              Key Business Impact
            </p>
            <div className="grid grid-cols-3 gap-4 rounded-2xl bg-white border border-border p-6">
              {study.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-[24px] font-semibold text-accent">{stat.value}</p>
                  <p className="caption-copy leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {study.clientBackground && (
            <div>
              <h2 className="h3-style mb-3">Client Background</h2>
              <p className="body-lg-copy text-neutral">{study.clientBackground}</p>
            </div>
          )}

          <div>
            <h2 className="h3-style mb-3">The Starting Problem</h2>
            <p className="body-lg-copy text-neutral">{study.problem}</p>
          </div>

          {study.challenges && (
            <div className="grid sm:grid-cols-3 gap-4">
              {study.challenges.map((item, i) => {
                const Icon = challengeIcons[i % challengeIcons.length];
                return (
                  <div key={item.title} className="rounded-2xl bg-white border border-border p-5 flex flex-col gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#BD081C]/10 text-[#BD081C]">
                      <Icon className="w-4 h-4" />
                    </span>
                    <p className="font-semibold text-ink text-[15px]">{item.title}</p>
                    <p className="body-copy text-neutral">{item.body}</p>
                  </div>
                );
              })}
            </div>
          )}

          <div>
            <h2 className="h3-style mb-3">The Fix</h2>
            <p className="body-lg-copy text-neutral">{study.fix}</p>
          </div>

          {study.approach && (
            <div className="flex flex-col gap-5">
              {study.approach.map((step, i) => (
                <div key={step.title} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white caption-copy !text-white font-semibold shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-semibold text-ink mb-1">{step.title}</p>
                    <p className="body-copy text-neutral">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {study.quote && (
            <div className="rounded-2xl bg-ink p-8">
              <p className="text-white text-[19px] leading-relaxed">&quot;{study.quote}&quot;</p>
            </div>
          )}

          <BeforeAfterStrip />
        </div>
        </div>
      </section>

      {otherStudies.length > 0 && (
        <section className="section pt-0">
          <div className="content-wrap px-6">
            <div className="max-w-[760px] mx-auto">
              <p className="caption-copy uppercase tracking-wider text-neutral mb-4">
                Explore More Results
              </p>
              <div className="flex flex-wrap gap-3">
                {otherStudies.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/case-study/${s.slug}/`}
                    className="caption-copy px-3 py-1.5 rounded-full bg-white border border-border text-ink hover:border-accent hover:text-accent transition-colors"
                  >
                    {s.industry}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section bg-white">
        <div className="content-wrap px-6">
          <div className="max-w-[620px] mx-auto text-center mb-10">
            <h2 className="h2-style mb-3">Stop Guessing. Get Lead Systems That Work.</h2>
            <p className="body-copy text-neutral">
              Tell me what is currently running in your account, and I will
              tell you plainly what to fix first.
            </p>
          </div>
          <div className="max-w-[560px] mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
