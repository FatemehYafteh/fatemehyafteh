"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Responsive screenshot gallery with a small lightbox built on the native
 * <dialog> element (no library). The first image is shown large and loads
 * eagerly; every other image is lazy. The lightbox image is only rendered
 * while it is open, so it costs nothing on first load.
 */
export default function ProjectGallery({ images }) {
  const [openIndex, setOpenIndex] = useState(null);
  const dialogRef = useRef(null);
  const isOpen = openIndex !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && dialog && !dialog.open) dialog.showModal();
  }, [isOpen]);

  const close = () => dialogRef.current?.close();
  const step = (delta) =>
    setOpenIndex((i) => (i === null ? i : (i + delta + images.length) % images.length));

  function handleKeyDown(event) {
    if (images.length < 2) return;
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  }

  const current = isOpen ? images[openIndex] : null;

  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((image, index) => {
          const isPortrait = image.height > image.width;
          const isFeatured = index === 0;
          return (
            <li key={image.src} className={isFeatured ? "sm:col-span-2" : ""}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Enlarge screenshot: ${image.alt}`}
                className="block w-full cursor-zoom-in overflow-hidden rounded-xl border border-background-lighter bg-background-light transition hover:border-accent"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes={
                    isFeatured
                      ? "(min-width: 768px) 720px, 100vw"
                      : "(min-width: 640px) 360px, 100vw"
                  }
                  loading={isFeatured ? "eager" : "lazy"}
                  className={
                    isPortrait
                      ? "mx-auto h-72 w-auto max-w-full object-contain py-2 sm:h-64"
                      : "h-auto w-full"
                  }
                />
              </button>
            </li>
          );
        })}
      </ul>

      {isOpen && (
        <dialog
          ref={dialogRef}
          aria-label="Screenshot viewer"
          onClose={() => setOpenIndex(null)}
          onKeyDown={handleKeyDown}
          onClick={(event) => event.target === dialogRef.current && close()}
          className="m-auto max-h-[95vh] w-full max-w-6xl bg-transparent p-3 backdrop:bg-black/85 md:p-6"
        >
          <div className="flex flex-col items-center gap-4">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="(min-width: 1152px) 1100px, 95vw"
              className="h-auto max-h-[78vh] w-auto max-w-full rounded-lg object-contain"
            />
            <div className="flex items-center gap-3 text-sm">
              {images.length > 1 && (
                <button type="button" onClick={() => step(-1)} className="btn-outline px-4! py-2!">
                  Previous
                </button>
              )}
              <span className="text-secondary" aria-live="polite">
                {openIndex + 1} / {images.length}
              </span>
              {images.length > 1 && (
                <button type="button" onClick={() => step(1)} className="btn-outline px-4! py-2!">
                  Next
                </button>
              )}
              <button type="button" onClick={close} className="btn-primary px-4! py-2!">
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
