
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

import type { ProductImage } from "../types/product.types";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const sortedImages = useMemo(
    () =>
      [...images].sort(
        (a, b) =>
          Number(b.isPrimary) - Number(a.isPrimary) ||
          a.sortOrder - b.sortOrder
      ),
    [images]
  );

  const [selectedImageId, setSelectedImageId] = useState<string | null>(
    null
  );
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

  const fullscreenCloseRef = useRef<HTMLButtonElement>(null);

  const selectedImage =
    sortedImages.find((image) => image.id === selectedImageId) ??
    sortedImages[0];

  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    fullscreenCloseRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen]);

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = event.currentTarget.getBoundingClientRect();

    setZoomPosition({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  }

  function selectImage(imageId: string) {
    setSelectedImageId(imageId);
    setIsZoomed(false);
  }

  if (!selectedImage) {
    return (
      <div className="flex aspect-[3/4] items-center justify-center rounded-lg bg-surface-container">
        <span className="font-body-md text-body-md text-on-surface-variant">
          Product image unavailable
        </span>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-space-md">
        <div className="grid grid-cols-1 gap-space-md md:grid-cols-12">
          {/* Thumbnail strip */}
          <div className="order-2 flex gap-space-sm overflow-x-auto pb-2 md:order-1 md:col-span-2 md:flex-col md:overflow-visible md:pb-0">
            {sortedImages.map((image, index) => {
              const isSelected = selectedImage.id === image.id;

              return (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => selectImage(image.id)}
                  aria-label={`View image ${index + 1} of ${productName}`}
                  aria-pressed={isSelected}
                  className={[
                    "relative h-20 w-16 shrink-0 overflow-hidden rounded border transition-all",
                    "md:h-24 md:w-full",
                    isSelected
                      ? "border-secondary/30 opacity-100 ring-2 ring-primary"
                      : "border-secondary/20 opacity-80 hover:border-secondary hover:opacity-100",
                  ].join(" ")}
                >
                  <Image
                    src={image.url}
                    alt={image.altText || `${productName} image ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 64px, 120px"
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  />

                  <span className="absolute inset-x-0 bottom-0 bg-primary/80 py-0.5 text-center font-label-sm text-[8px] uppercase tracking-widest text-on-primary">
                    {image.isPrimary ? "Front" : `View ${index + 1}`}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Main image viewport */}
          <div className="group relative order-1 overflow-hidden rounded-lg bg-surface-container shadow-sm md:order-2 md:col-span-10">
            <div
              className="relative aspect-[3/4] w-full cursor-zoom-in overflow-hidden bg-primary/5"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <Image
                src={selectedImage.url}
                alt={selectedImage.altText || productName}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 45vw"
                className="object-cover object-top transition-transform duration-300 ease-out"
                style={{
                  transform: isZoomed ? "scale(1.8)" : "scale(1)",
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }}
              />

              {/* Image controls */}
              <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsZoomed((value) => !value)}
                  aria-label="Zoom product image"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface/90 text-primary shadow-sm backdrop-blur transition-transform hover:scale-105"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    zoom_in
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsFullscreen(true)}
                  aria-label="View product image fullscreen"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface/90 text-primary shadow-sm backdrop-blur transition-transform hover:scale-105"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    fullscreen
                  </span>
                </button>
              </div>

              {/* Bottom gallery information */}
              <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 rounded bg-surface/90 px-3 py-1.5 text-on-surface backdrop-blur-md">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    touch_app
                  </span>

                  <span className="font-label-sm text-[10px] uppercase tracking-widest">
                    Hover to inspect fabric
                  </span>
                </div>

                <div className="rounded bg-primary/90 px-3 py-1.5 font-label-sm text-[10px] uppercase tracking-widest text-on-primary">
                  {sortedImages.length}{" "}
                  {sortedImages.length === 1 ? "Image" : "Images"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen preview */}
      {isFullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${productName} image preview`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
        >
          <button
            ref={fullscreenCloseRef}
            type="button"
            onClick={() => setIsFullscreen(false)}
            aria-label="Close fullscreen preview"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
          >
            <span className="material-symbols-outlined">
              close
            </span>
          </button>

          <div className="relative h-[85vh] w-full max-w-5xl">
            <Image
              src={selectedImage.url}
              alt={selectedImage.altText || productName}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
