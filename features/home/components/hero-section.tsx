"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const SLIDE_DURATION = 6000;
const SPRING = { type: "spring" as const, stiffness: 85, damping: 19, mass: 1.05 };

const slides = [
  {
    id: "heritage",
    eyebrow: "THE ART OF TIMELESS DRESSING",
    chapter: "01 / THE HERITAGE EDIT",
    title: "Elegance, Woven",
    accent: "in Every Thread.",
    description:
      "Discover our curated collection of artisanal unstitched suits, pure zari weaves, and heirloom drapes thoughtfully envisioned for your bespoke silhouette.",
    image: "/images/hero/heritage.png",
    primaryLabel: "Shop Suits",
    primaryHref: "#collection",
    secondaryLabel: "Explore Collection",
    secondaryHref: "#occasion",
  },
  {
    id: "occasion",
    eyebrow: "THE OCCASION EDIT",
    chapter: "02 / CELEBRATE BEAUTIFULLY",
    title: "Every Occasion",
    accent: "Deserves Elegance.",
    description:
      "Explore thoughtfully curated styles for celebrations, cherished moments, and everything in between.",
    image: "/images/hero/occasion.png",
    primaryLabel: "Explore Occasions",
    primaryHref: "#occasion",
    secondaryLabel: "Shop Collection",
    secondaryHref: "#collection",
  },
  {
    id: "craft",
    eyebrow: "THE ISHAALYA ATELIER",
    chapter: "03 / CRAFT & HERITAGE",
    title: "An Ode to",
    accent: "Artful Dressing.",
    description:
      "Explore the textures, details, and enduring beauty of traditional craftsmanship through our curated collections.",
    image: "/images/hero/craftsmanship.png",
    primaryLabel: "Discover Our Story",
    primaryHref: "#craftsmanship",
    secondaryLabel: "View Collection",
    secondaryHref: "#collection",
  },
] as const;

const textReveal = {
  hidden: { opacity: 0, y: 24, filter: "blur(5px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring" as const, stiffness: 125, damping: 18 } },
};

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [direction, setDirection] = useState(1);
  const reducedMotion = useReducedMotion();
  const activeSlide = slides[activeIndex];

  const goToSlide = useCallback((index: number) => {
    const nextIndex = (index + slides.length) % slides.length;
    if (nextIndex === activeIndex) return;
    // Preserve direction even when wrapping from last to first.
    const forward = index > activeIndex;
    setDirection(forward ? 1 : -1);
    setActiveIndex(nextIndex);
    setCycle((value) => value + 1);
  }, [activeIndex]);

  useEffect(() => {
    const timer = window.setTimeout(() => goToSlide(activeIndex + 1), SLIDE_DURATION);
    return () => window.clearTimeout(timer);
  }, [activeIndex, cycle, goToSlide]);

  const nextSlide = () => goToSlide(activeIndex + 1);
  const previousSlide = () => goToSlide(activeIndex - 1);

  return (
    <section
      aria-label="Ishaalya featured collections"
      aria-roledescription="carousel"
      className="relative mt-6 flex min-h-[calc(92svh-24px)] w-full items-center overflow-hidden bg-primary-container"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          nextSlide();
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          previousSlide();
        }
      }}
    >
      {/* Whole-image spring transition with subtle overshoot. */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeSlide.id}
            custom={direction}
            variants={{
              enter: (dir: number) => ({
                x: reducedMotion ? "0%" : `${dir * 16}%`,
                opacity: 0,
                scale: reducedMotion ? 1 : 1.065,
              }),
              center: { x: "0%", opacity: 1, scale: 1 },
              exit: (dir: number) => ({
                x: reducedMotion ? "0%" : `${dir * -12}%`,
                opacity: 0,
                scale: reducedMotion ? 1 : 1.025,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={reducedMotion ? { duration: 0 } : {
              x: SPRING,
              scale: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.75, ease: "easeInOut" },
            }}
            className="absolute inset-0 bg-cover bg-center will-change-transform md:bg-[center_top_20%]"
            style={{ backgroundImage: `url("${activeSlide.image}")` }}
          />
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/65 to-primary/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-primary/20" />
      </div>

      {/* Ornamental gold frame. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-4 z-10 border border-[#D8B77B]/25 sm:inset-7 lg:inset-10">
        <span className="absolute -left-px -top-px h-14 w-14 border-l-2 border-t-2 border-[#E7C98F]" />
        <span className="absolute -right-px -top-px h-14 w-14 border-r-2 border-t-2 border-[#E7C98F]" />
        <span className="absolute -bottom-px -left-px h-14 w-14 border-b-2 border-l-2 border-[#E7C98F]" />
        <span className="absolute -bottom-px -right-px h-14 w-14 border-b-2 border-r-2 border-[#E7C98F]" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-[25%] z-10 hidden lg:block">
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, -12, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-24 w-24 items-center justify-center rounded-full border border-[#E7C98F]/40 bg-primary/10 backdrop-blur-sm"
        >
          <span className="font-serif text-4xl text-[#E7C98F]/70">❦</span>
        </motion.div>
      </div>

      {/* The entire editorial content changes together. */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-10 pb-36 pt-48 sm:px-14 lg:px-margin lg:pb-40 lg:pt-48">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={activeSlide.id}
            custom={direction}
            variants={{
              hidden: (dir: number) => ({
                opacity: 0,
                x: reducedMotion ? 0 : dir * 65,
                y: reducedMotion ? 0 : 24,
                scale: reducedMotion ? 1 : 0.96,
              }),
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: {
                  ...(reducedMotion ? { duration: 0 } : SPRING),
                  staggerChildren: reducedMotion ? 0 : 0.085,
                  delayChildren: reducedMotion ? 0 : 0.12,
                },
              },
              exit: (dir: number) => ({
                opacity: 0,
                x: reducedMotion ? 0 : dir * -45,
                y: reducedMotion ? 0 : -12,
                scale: reducedMotion ? 1 : 1.025,
                transition: { duration: reducedMotion ? 0 : 0.3 },
              }),
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-2xl"
          >
            <motion.div variants={textReveal} className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E7C98F]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E7C98F] sm:text-xs">{activeSlide.eyebrow}</span>
            </motion.div>
            <motion.p variants={textReveal} className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/65">
              {activeSlide.chapter}
            </motion.p>
            <motion.h1 variants={textReveal} className="mb-6 font-display text-[clamp(3.1rem,6vw,6.5rem)] font-normal leading-[1.03] tracking-[-0.045em] text-[#FFF8EE]">
              {activeSlide.title}
              <span className="mt-1 block font-serif italic text-[#E7C98F]">{activeSlide.accent}</span>
            </motion.h1>
            <motion.p variants={textReveal} className="mb-9 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              {activeSlide.description}
            </motion.p>
            <motion.div variants={textReveal} className="flex flex-col gap-4 sm:flex-row">
              <Link href={activeSlide.primaryHref} className="group relative inline-flex min-h-14 items-center justify-center gap-5 overflow-hidden border border-[#E7C98F] bg-[#D8B77B] px-8 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2A0006] transition-colors duration-500 hover:text-[#FFF8EE]">
                <span aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 bg-[#2A0006] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="absolute left-1 top-1 h-2 w-2 border-l border-t border-current opacity-70" />
                <span className="absolute bottom-1 right-1 h-2 w-2 border-b border-r border-current opacity-70" />
                <span className="relative z-10">{activeSlide.primaryLabel}</span>
                <span className="material-symbols-outlined relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1.5">arrow_forward</span>
              </Link>
              <Link href={activeSlide.secondaryHref} className="group relative inline-flex min-h-14 items-center justify-center gap-4 overflow-hidden border border-[#E7C98F]/65 bg-white/5 px-8 text-[11px] font-bold uppercase tracking-[0.18em] text-[#FFF8EE] backdrop-blur-sm transition-all duration-500 hover:border-[#E7C98F] hover:bg-[#E7C98F]/15">
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#E7C98F] transition-transform duration-500 group-hover:scale-x-100" />
                <span className="relative">{activeSlide.secondaryLabel}</span>
                <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">north_east</span>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gold editorial progress and controls. */}
      <div className="absolute bottom-10 left-10 right-10 z-30 sm:left-14 sm:right-14 lg:bottom-14 lg:left-[max(4rem,calc((100vw-80rem)/2))] lg:right-[max(4rem,calc((100vw-80rem)/2))]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex w-full max-w-[540px] items-end gap-3 sm:gap-5">
            <div className="flex shrink-0 items-baseline gap-1 pb-1">
              <span className="font-serif text-3xl leading-none text-[#E7C98F] sm:text-4xl">{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="text-[10px] tracking-widest text-white/50">/ {String(slides.length).padStart(2, "0")}</span>
            </div>
            <div className="flex min-w-0 flex-1 items-end gap-2 sm:gap-3">
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;
                const isCompleted = index < activeIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goToSlide(index)}
                    
                    aria-label={`Go to ${slide.eyebrow}`}
                    aria-current={isActive ? "true" : undefined}
                    className="group relative min-w-0 flex-1 pb-1 text-left "
                  >
                    <div className="mb-2 flex items-center justify-between gap-1">
                      <span className={`text-[9px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${isActive ? "text-[#E7C98F]" : "text-white/55 group-hover:text-[#E7C98F]"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span aria-hidden="true" className={`text-[10px] transition-all duration-300 ${isActive ? "rotate-45 text-[#E7C98F]" : "text-white/25 group-hover:rotate-45 group-hover:text-[#E7C98F]"}`}>◆</span>
                    </div>
                    <div className={`relative h-[5px] overflow-hidden border transition-colors duration-300 ${isActive ? "border-[#E7C98F]/80 bg-[#E7C98F]/15" : "border-white/25 bg-white/10 group-hover:border-[#E7C98F]/50"}`}>
                      {isCompleted && <span className="absolute inset-0 bg-[#E7C98F]/75" />}
                      {isActive && (
                        <motion.span
                          key={`${slide.id}-${cycle}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                          className="absolute inset-0 origin-left bg-gradient-to-r from-[#A98140] via-[#E7C98F] to-[#FFF1CB]"
                        />
                      )}
                    </div>
                    <span className={`mt-1 block h-px transition-all duration-300 ${isActive ? "w-full bg-[#E7C98F]/70" : "w-0 bg-[#E7C98F]/40 group-hover:w-full"}`} />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3 self-end lg:self-auto">
            <span className="mr-3 hidden text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E7C98F]/80 sm:inline">Explore Chapters</span>
            <button type="button" onClick={previousSlide}  aria-label="Previous slide" className="group relative flex h-11 w-11 items-center justify-center overflow-hidden border border-[#E7C98F]/60 bg-primary/20 text-[#E7C98F] backdrop-blur-sm transition-colors duration-300 hover:bg-[#E7C98F] hover:text-primary ">
              <span aria-hidden="true" className="absolute left-0 top-0 h-2 w-2 border-l border-t border-current" />
              <span className="material-symbols-outlined relative z-10 text-xl transition-transform duration-300 group-hover:-translate-x-1">arrow_back</span>
            </button>
            <button type="button" onClick={nextSlide}  aria-label="Next slide" className="group relative flex h-11 w-11 items-center justify-center overflow-hidden border border-[#E7C98F]/60 bg-primary/20 text-[#E7C98F] backdrop-blur-sm transition-colors duration-300 hover:bg-[#E7C98F] hover:text-primary ">
              <span aria-hidden="true" className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-current" />
              <span className="material-symbols-outlined relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 lg:block">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#E7C98F]/70" style={{ writingMode: "vertical-rl" }}>
          ISHAALYA — UNSTITCHED ATELIER
        </span>
      </div>
    </section>
  );
}
