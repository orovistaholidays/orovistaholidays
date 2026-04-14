"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const DESTINATIONS = [
  {
    id: 1,
    src: "/192129-891702216.mp4",
    label: "The Swiss Alps",
    coordinates: "46° 33' N | 8° 33' E",
  },
  {
    id: 2,
    src: "/85521-589994823.mp4",
    label: "Maldivian Shores",
    coordinates: "3° 12' N | 73° 13' E",
  },
  {
    id: 3,
    src: "/45569-443244046_medium.mp4",
    label: "Kyoto Sanctuaries",
    coordinates: "35° 00' N | 135° 46' E",
  },
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % DESTINATIONS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const currentDest = DESTINATIONS[currentIdx];

  return (
    <section className="relative min-h-[99vh] flex flex-col justify-end pb-7 md:pb-15 px-3 lg:px-6 overflow-hidden rounded-b-[1rem] lg:rounded-b-[2rem]">
      {/* Background Section with Crossfade */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentDest.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            src={currentDest.src}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105 origin-center"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/20 z-10 transition-all duration-1000"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div> */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-10"></div>
      </div>

      {/* Floating Side Indicators */}
      <div className="absolute top-1/2 right-3 lg:right-6 transform -translate-y-1/2 flex flex-col gap-6 items-end z-30 hidden sm:flex">
        {DESTINATIONS.map((dest, i) => (
          <button
            key={dest.id}
            onClick={() => setCurrentIdx(i)}
            className="flex items-center gap-4 group"
          >
            <span className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 ${i === currentIdx ? "text-white" : "text-white/30"}`}>
              0{i + 1}
            </span>
            <div className={`h-[1px] transition-all duration-500 ${i === currentIdx ? "w-12 bg-white" : "w-4 bg-white/30 group-hover:w-8 group-hover:bg-white/60"}`} />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col justify-end h-full mt-auto">

        {/* Typography */}
        <div className="mb-20">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-headline text-7xl md:text-[100px] xl:text-[140px] font-light text-white tracking-tighter leading-none"
          >
            Explore
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 mt-6 md:mt-10 lg:mt-12 mb-2 pl-2"
            >
              <span className="text-[10px] md:text-xs text-white tracking-[0.3em] uppercase font-light">{currentDest.label}</span>
            </motion.div>
          </AnimatePresence>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-headline text-7xl md:text-[100px] xl:text-[140px] font-light text-white tracking-tighter leading-none"
          >
            <span className="italic pr-4 text-white/90">The World.</span>
          </motion.h1>

        </div>

        {/* Horizontal Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pt-10 border-t border-white/30"
        >
          {/* Action Button & Icon */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#contact" className="bg-white text-foreground px-10 py-4 rounded-full font-bold text-[13px] tracking-widest uppercase hover:scale-105 active:scale-95 transition-all duration-300">
              Book Now
            </a>
            <a href="#packages" className="bg-white text-foreground w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
            </a>
          </div>

          {/* Description Text */}
          <div className="flex-1 w-full text-left lg:px-3 xl:px-5">
            <p className="text-white/80 text-sm md:text-[15px] font-light leading-relaxed max-w-2xl">
              Discover breathtaking destinations, exclusive deals, and seamless bookings. <br className="hidden md:block" />
              Your dream adventure awaits. Start exploring the world with us today!
            </p>
          </div>

          {/* Explore More link */}
          <div className="shrink-0 pt-4 lg:pt-0">
            <a href="#experiences" className="text-white text-sm font-medium tracking-wide relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-white/50 hover:after:bg-white transition-all">
              Explore more
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
