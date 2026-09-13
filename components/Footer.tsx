import Link from "next/link";
import { site } from "@/lib/site";
import {
  ArrowRightIcon,
  FacebookLogo,
  InstagramLogo,
  LinkedInLogo,
  MailIcon,
  ShieldCheckIcon,
  WhatsAppIcon,
} from "./icons";

const socialLinks = [
  { href: site.facebookUrl, label: "Facebook", Icon: FacebookLogo },
  { href: site.instagramUrl, label: "Instagram", Icon: InstagramLogo },
  { href: site.linkedinUrl, label: "LinkedIn", Icon: LinkedInLogo },
];

const siteLinks = [
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/case-study/", label: "Case Study" },
  { href: "/testimonials/", label: "Testimonials" },
  { href: "/contact/", label: "Contact" },
  { href: "/book-a-call/", label: "Book a Free Call" },
];

const serviceLinks = [
  { href: "/google-ads-management/", label: "Google Ads Management" },
  { href: "/google-ads-audit/", label: "Google Ads Audit" },
  { href: "/conversion-tracking/", label: "Conversion Tracking" },
  { href: "/landing-page-optimization/", label: "Landing Page Optimization" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0B1E3D] to-[#081530] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-32 w-[420px] h-[420px] rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-20 w-[420px] h-[420px] rounded-full bg-success/10 blur-3xl"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative content-wrap px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/15">
                <ShieldCheckIcon className="w-5 h-5 text-white" />
              </span>
              <p className="text-[20px] font-semibold text-white">{site.name}</p>
            </div>
            <p className="text-[15px] leading-relaxed text-white/60 max-w-[34ch]">
              Google Ads management and cross-platform conversion tracking
              for local service businesses and B2B companies across the{" "}
              {site.regions}.
            </p>
            <Link
              href="/book-a-call/"
              className="inline-flex items-center gap-1.5 w-fit text-[14px] font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-full px-4 py-2 transition-colors"
            >
              Book a Free Audit Call
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-white/40 mb-4">
              Site
            </p>
            <ul className="flex flex-col gap-3 text-[15px] text-white/75">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-white/40 mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-3 text-[15px] text-white/75">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2.5 text-[15px] text-white/75 hover:text-white transition-colors"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 border border-white/15 shrink-0">
                    <MailIcon className="w-4 h-4" />
                  </span>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[15px] text-white/75 hover:text-white transition-colors"
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 border border-white/15 shrink-0">
                    <WhatsAppIcon className="w-4 h-4" />
                  </span>
                  +{site.whatsappNumber}
                </a>
              </li>
              <li className="pt-1">
                <Link href="/privacy-policy/" className="text-[14px] text-white/50 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-white/45">
            &copy; {new Date().getFullYear()} {site.name}. Serving clients across the UK, US, and Canada.
          </p>
          <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/70 bg-white/5 border border-white/10 rounded-full px-3 py-1">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-success" />
            Google Partner
          </span>
        </div>
      </div>
    </footer>
  );
}
