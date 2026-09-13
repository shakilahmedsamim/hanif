import type { Metadata } from "next";
import Link from "next/link";
import TestimonialVideo from "@/components/TestimonialVideo";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Real client video testimonials from businesses that worked with PPC HANIF on Google Ads management and conversion tracking.",
  alternates: { canonical: "/testimonials/" },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="section pt-12 pb-8">
        <div className="content-wrap px-6">
          <h1 className="h1-style max-w-[20ch]">Hear It Directly From Clients</h1>
          <p className="body-lg-copy text-neutral max-w-prose mt-4">
            Real clients talking about the results, in their own words, not
            a written quote picked out of context.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="content-wrap px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialVideo
              key={t.slot}
              slot={t.slot}
              name={t.name}
              business={t.business}
              youtubeId={t.youtubeId}
            />
          ))}
        </div>
      </section>

      <section className="section bg-ink">
        <div className="content-wrap px-6 text-center flex flex-col items-center gap-5">
          <h2 className="h2-style !text-white max-w-[22ch]">
            Want Results Like This for Your Account?
          </h2>
          <p className="caption-copy !text-[#B0B0B5]">Start with a free audit.</p>
          <Link href="/book-a-call/" className="btn-primary bg-accent">
            Book My Free 30-Minute Audit
          </Link>
        </div>
      </section>
    </>
  );
}
