# How to add client video testimonials

Upload video files into this folder (`public/videos/`) directly on
GitHub — no coding needed:

1. Open this folder on GitHub: `public/videos/`
2. Click **Add file → Upload files**
3. Drag your video in, **rename it to match one of the exact filenames
   below**, then commit

The Testimonials page (`/testimonials/`) checks for these exact
filenames and shows the video automatically once uploaded — the slot
shows a placeholder until then.

## Exact filenames to use

| Filename | Slot |
| --- | --- |
| `testimonial-1.mp4` | Testimonial 1 |
| `testimonial-2.mp4` | Testimonial 2 |
| `testimonial-3.mp4` | Testimonial 3 |
| `testimonial-4.mp4` | Testimonial 4 |
| `testimonial-5.mp4` | Testimonial 5 |
| `testimonial-6.mp4` | Testimonial 6 |

Need more than 6? Upload with the next number in the sequence
(`testimonial-7.mp4`, etc.) and tell Claude how many slots to add on
the page.

## After uploading

Tell Claude which slot number you used and the client's name, business
name, and city — that text is added next to the video manually since
it can't be read from the video file itself.

## Recommended specs

- MP4 (H.264), vertical (9:16) or landscape (16:9), whichever the
  client recorded in
- Keep each file under ~50MB so the page stays fast — compress with
  HandBrake or similar if needed
- Under 2 minutes is ideal for a testimonial
