export type Testimonial = {
  slot: number;
  name: string;
  business: string;
};

// Add or edit entries here once real client videos are uploaded to
// public/videos/testimonial-<slot>.mp4 — see public/videos/README.md.
export const testimonials: Testimonial[] = [
  { slot: 1, name: "[Client name]", business: "[Business name, city]" },
  { slot: 2, name: "[Client name]", business: "[Business name, city]" },
  { slot: 3, name: "[Client name]", business: "[Business name, city]" },
  { slot: 4, name: "[Client name]", business: "[Business name, city]" },
  { slot: 5, name: "[Client name]", business: "[Business name, city]" },
  { slot: 6, name: "[Client name]", business: "[Business name, city]" },
];
