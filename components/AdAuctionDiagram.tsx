import { CheckIcon, TargetIcon } from "./icons";

/**
 * Illustrative example of the Google Ads auction mechanic, grounded in
 * Google's own documentation: Ad Rank is not simply bid x Quality Score
 * (Quality Score itself is a diagnostic tool, not an auction input), but
 * bid combined with ad and landing page quality does determine both
 * whether an ad shows and where, and advertisers pay only enough to
 * clear the threshold and beat the next-ranked competitor, not their max
 * bid. Sources: support.google.com/google-ads/answer/6366577,
 * /answer/1722122, /answer/6167118.
 */
const competitors = [
  {
    name: "You",
    url: "www.yoursite.com",
    headline: "Same-day HVAC repair | Call now",
    description: "Certified technicians, same-day scheduling, upfront pricing.",
    bid: 4.5,
    quality: "Great",
    qualityScore: 3,
    isYou: true,
  },
  {
    name: "Competitor B",
    url: "www.competitorb.com",
    headline: "HVAC services available",
    description: "Professional HVAC repair and maintenance services.",
    bid: 6.0,
    quality: "Average",
    qualityScore: 2,
    isYou: false,
  },
  {
    name: "Competitor A",
    url: "www.competitor-a.net",
    headline: "Click here for HVAC services",
    description: "We fix HVAC systems for homes and businesses.",
    bid: 8.0,
    quality: "Poor",
    qualityScore: 1,
    isYou: false,
  },
];

const ranked = competitors
  .map((c) => ({ ...c, adRank: c.bid * c.qualityScore }))
  .sort((a, b) => b.adRank - a.adRank);

const winner = ranked[0];
const runnerUp = ranked[1];
const actualCpc = runnerUp.adRank / winner.qualityScore + 0.01;

const qualityColor: Record<string, string> = {
  Poor: "#BD081C",
  Average: "#E37400",
  Great: "#0A7D4F",
};

export default function AdAuctionDiagram() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid md:grid-cols-3 gap-6">
        {ranked.map((c) => (
          <div
            key={c.name}
            className={
              c.isYou
                ? "bg-accent/5 rounded-2xl border border-accent/20 p-6 flex flex-col gap-3"
                : "bg-white rounded-2xl border border-border p-6 flex flex-col gap-3"
            }
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-border text-accent">
              <TargetIcon className="w-5 h-5" />
            </span>

            <div className="flex flex-col gap-1">
              <p className="caption-copy">{c.url}</p>
              <p className="font-bold text-[15px] text-ink">{c.headline}</p>
              <p className="body-copy text-neutral">{c.description}</p>
            </div>

            <div className="border-t border-border pt-3 mt-1 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <p className={`font-semibold text-[15px] ${c.isYou ? "text-accent" : "text-ink"}`}>
                  {c.name}
                </p>
                {c.isYou && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-success/10 text-success text-[12px] font-semibold">
                    <CheckIcon className="w-3.5 h-3.5" />
                    #1 Position
                  </span>
                )}
              </div>
              <div className="flex flex-col items-end gap-1 caption-copy shrink-0">
                <span>Bid: ${c.bid.toFixed(2)}</span>
                <span style={{ color: qualityColor[c.quality] }}>Quality: {c.quality}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-border p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="flex-1 text-center md:text-left">
          <p className="caption-copy uppercase tracking-wider text-accent mb-1">
            What You Actually Pay
          </p>
          <p className="body-copy text-neutral">
            You only pay enough to clear the threshold and beat the
            advertiser ranked below you, never your full max bid.
          </p>
        </div>
        <div className="flex items-center gap-6 shrink-0">
          <div className="text-center">
            <p className="caption-copy">Max bid</p>
            <p className="text-[22px] font-semibold text-neutral line-through decoration-2">
              ${winner.bid.toFixed(2)}
            </p>
          </div>
          <div className="text-center">
            <p className="caption-copy">You pay</p>
            <p className="text-[22px] font-semibold text-success">
              ${actualCpc.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <p className="caption-copy text-center max-w-[60ch] mx-auto">
        Illustrative example. Google does not publish an exact Ad Rank
        formula; this shows the real mechanic confirmed in Google&apos;s own
        documentation, that bid and quality together determine rank, and
        actual cost is based on the competitor below you, not your max bid.
      </p>
    </div>
  );
}
