export type LandingPageExample = {
  name: string;
  industry: string;
  url: string;
  description: string;
};

// Add more real landing pages here as they're built — each shows up as a
// card on /landing-page-optimization/ with a link clients can click through
// to see live. Keep the description to one line.
export const landingPageExamples: LandingPageExample[] = [
  {
    name: "West Florida Cleaning",
    industry: "Window Cleaning",
    url: "https://westfloridacleaning.lovable.app/",
    description:
      "Local service lead-gen page: hero form above the fold, trust bar, service breakdown, and repeated CTAs through to the footer.",
  },
];
