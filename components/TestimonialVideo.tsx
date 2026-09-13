"use client";

import { useState } from "react";
import { PlayIcon } from "./icons";

export default function TestimonialVideo({
  slot,
  name,
  business,
  youtubeId,
}: {
  slot: number;
  name: string;
  business: string;
  youtubeId?: string;
}) {
  const [failed, setFailed] = useState(false);
  const src = `/videos/testimonial-${slot}.mp4`;

  return (
    <div className="rounded-2xl bg-white border border-border overflow-hidden flex flex-col">
      {youtubeId ? (
        <div className="aspect-[9/16] bg-ink">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?controls=1&modestbranding=1&rel=0&iv_load_policy=3&fs=1`}
            title={`${name} testimonial`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : failed ? (
        <div className="aspect-[9/16] bg-background border-b border-dashed border-border flex flex-col items-center justify-center gap-3 px-6 text-center">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-border">
            <PlayIcon className="w-5 h-5 text-neutral" />
          </span>
          <span className="caption-copy">
            Testimonial video placeholder
            <br />
            (public/videos/testimonial-{slot}.mp4)
          </span>
        </div>
      ) : (
        <video
          src={src}
          controls
          preload="metadata"
          playsInline
          className="w-full h-auto max-h-[480px] bg-ink"
          onError={() => setFailed(true)}
        />
      )}
      <div className="p-4">
        <p className="font-semibold text-ink text-[15px]">{name}</p>
        <p className="caption-copy">{business}</p>
      </div>
    </div>
  );
}
