"use client";

import { useEffect, useRef, useState } from "react";
import { ImageIcon } from "./icons";

export default function FounderPhoto() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    // The <img> already has its src in the server-rendered HTML, so the
    // browser can finish loading it before this component hydrates and
    // attaches onLoad/onError — check the already-settled state directly.
    const img = imgRef.current;
    if (img && img.complete) {
      if (img.naturalWidth > 0) {
        setLoaded(true);
      } else {
        setFailed(true);
      }
    }
  }, []);

  return (
    <div className="w-full aspect-square rounded-2xl bg-white border border-dashed border-border flex flex-col items-center justify-center gap-3 overflow-hidden relative">
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src="/images/about-founder.jpg"
          alt="Founder"
          className={`absolute inset-0 w-full h-full object-cover ${loaded ? "block" : "hidden"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
      {!loaded && (
        <>
          <ImageIcon className="w-8 h-8 text-neutral" />
          <span className="caption-copy px-6 text-center">
            Founder photo placeholder
            <br />
            (public/images/about-founder.jpg)
          </span>
        </>
      )}
    </div>
  );
}
