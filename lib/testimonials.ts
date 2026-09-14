export type Testimonial = {
  slot: number;
  name: string;
  business: string;
  // A YouTube video/Shorts ID. When set, the slot embeds this YouTube
  // video instead of looking for an uploaded public/videos/ file.
  youtubeId?: string;
};

// Add or edit entries here once real client videos are ready — either
// upload an MP4 to public/videos/testimonial-<slot>.mp4 (see
// public/videos/README.md) or set youtubeId to embed a YouTube link.
export const testimonials: Testimonial[] = [
  { slot: 1, name: "Rehan Mir", business: "Marketing Agency, Denmark", youtubeId: "rUeCKnYxJtU" },
  { slot: 2, name: "Carlton", business: "United Kingdom", youtubeId: "7P5sdlnvg6E" },
  { slot: 3, name: "Jake Dimo", business: "Marketing Agency, Australia", youtubeId: "XQrCyuqkiuo" },
  { slot: 4, name: "[Client name]", business: "[Business name, city]" },
  { slot: 5, name: "[Client name]", business: "[Business name, city]" },
  { slot: 6, name: "[Client name]", business: "[Business name, city]" },
];
