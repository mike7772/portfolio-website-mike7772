'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X, ImageOff, Maximize2 } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const GalleryImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}> = ({ src, alt, className = '', onClick }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`flex flex-col items-center justify-center bg-secondary/50 text-center p-4 ${className}`} onClick={onClick}>
        <ImageOff size={18} className="text-muted-foreground mb-2" />
        <span className="text-[10px] text-muted-foreground font-mono">Image not found</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      onError={() => setFailed(true)}
    />
  );
};

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const count = images.length;

  const goPrev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
  const goNext = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      // Stop the underlying Dialog's own Escape handler from also firing,
      // so Escape closes the lightbox first and the modal on a second press.
      e.stopImmediatePropagation();
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey, true);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKey, true);
    };
  }, [lightboxOpen, goPrev, goNext]);

  if (count === 0) {
    return (
      <div className="h-48 rounded-lg bg-secondary/30 border border-border border-dashed flex items-center justify-center">
        <span className="text-muted-foreground text-sm">No screenshots available</span>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Main preview */}
      <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-muted group">
        <GalleryImage
          src={images[index]}
          alt={`${alt} screenshot ${index + 1}`}
          className="w-full h-full object-cover object-top cursor-zoom-in"
          onClick={() => setLightboxOpen(true)}
        />

        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="absolute top-3 right-3 p-1.5 rounded-md bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="View fullscreen"
        >
          <Maximize2 size={14} />
        </button>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
              aria-label="Next screenshot"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/50 text-white text-[10px] font-mono">
              {index + 1} / {count}
            </div>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {count > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`relative shrink-0 w-20 aspect-video rounded-md overflow-hidden border-2 transition-colors ${
                i === index ? 'border-indigo-500' : 'border-transparent hover:border-border'
              }`}
              aria-label={`Go to screenshot ${i + 1}`}
            >
              <GalleryImage src={src} alt={`${alt} thumbnail ${i + 1}`} className="w-full h-full object-cover object-top" />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox */}
      {lightboxOpen && createPortal(
        <div className="fixed inset-0 z-[10050] flex flex-col bg-black/95">
          <div className="flex items-center justify-between p-4 shrink-0">
            <span className="text-xs font-mono text-white/70">{index + 1} / {count}</span>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
              aria-label="Close fullscreen view"
            >
              <X size={20} />
            </button>
          </div>

          <div
            className="flex-1 flex items-center justify-center relative px-4 pb-4 min-h-0"
            onClick={() => setLightboxOpen(false)}
          >
            {count > 1 && (
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            <img
              src={images[index]}
              alt={`${alt} screenshot ${index + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full object-contain rounded-md"
            />
            {count > 1 && (
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
                aria-label="Next screenshot"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          {count > 1 && (
            <div className="flex gap-2 overflow-x-auto p-4 justify-center shrink-0">
              {images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`relative shrink-0 w-16 aspect-video rounded overflow-hidden border-2 transition-colors ${
                    i === index ? 'border-indigo-400' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                  aria-label={`Go to screenshot ${i + 1}`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>,
        document.body
      )}
    </div>
  );
};
