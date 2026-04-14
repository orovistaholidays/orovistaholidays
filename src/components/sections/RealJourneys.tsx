"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const stories = [
  {
    quote: "Everything was clear, professional, and easy from start to finish. I felt supported the whole way throughout my European expedition.",
    name: "Arjun Rai",
    role: "Adventure Enthusiast",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    heading: "The experience was seamless and genuinely reassuring."
  },
  {
    quote: "Orovista didn't just book a trip; they crafted a masterpiece. From the backwaters of Kerala to the peaks of Ladakh, it was flawless.",
    name: "Sanya Malhotra",
    role: "Luxury Traveler",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    heading: "An absolute masterclass in luxury travel planning."
  },
  {
    quote: "Their ground support is unmatched. When we had a flight delay in Vietnam, the team handled everything before we even asked.",
    name: "David Chen",
    role: "Digital Nomad",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
    heading: "Unrivaled support when it matters the most."
  }
];

export function RealJourneys() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % stories.length);
  const prev = () => setIndex((prev) => (prev - 1 + stories.length) % stories.length);

  return (
    <section id="journeys" className="w-full bg-white py-10 md:py-15 flex flex-col justify-center min-h-[90vh] font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 md:px-3 lg:px-3 w-full">
        
        {/* --- DUAL HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-6 md:mb-8">
           {/* Left Part */}
           <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-2 h-2 rounded-full bg-black shadow-[0_0_10px_rgba(141,214,214,0.5)]" />
                 <span className="text-[11px] font-black uppercase tracking-[0.3em] text-black italic">Real Stories</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.h2 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-[28px] md:text-[42px] lg:text-[54px] font-bold text-black leading-[1.1] tracking-tighter"
                >
                  {stories[index].heading}
                </motion.h2>
              </AnimatePresence>
           </div>

           {/* Right Part (Social Proof) */}
           <div className="lg:max-w-[300px] flex flex-col items-start lg:items-end lg:text-right">
              <div className="flex -space-x-3 mb-3">
                 {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-neutral-200 overflow-hidden shadow-sm">
                       <img src={`https://i.pravatar.cc/100?u=${i+20}`} alt="" />
                    </div>
                 ))}
              </div>
              <div className="flex gap-0.5 text-black mb-3">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="text-[12px] text-black/40 font-semibold leading-relaxed uppercase tracking-tight italic">
                 It saved me time and gave me confidence. I'd absolutely recommend Orovista to others.
              </p>
           </div>
        </div>

        {/* --- MAIN FEATURED CARD --- */}
        <div className="relative bg-[#1c1c1c] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden min-h-[400px] lg:h-[420px] flex flex-col lg:flex-row">
           
           {/* LEFT SIDE: QUOTE & NAVIGATION */}
           <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8">
                 <Quote className="w-8 h-8 text-white/20 fill-current" strokeWidth={0} />
              </div>

              <div className="max-w-xl">
                 <AnimatePresence mode="wait">
                    <motion.p 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="text-[18px] md:text-[24px] lg:text-[32px] font-medium text-white/90 leading-[1.3] tracking-tight mb-8"
                    >
                      "{stories[index].quote}"
                    </motion.p>
                 </AnimatePresence>
              </div>

              <div className="flex items-center gap-6">
                 <div className="flex gap-3">
                    <button 
                      onClick={prev}
                      className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all group"
                    >
                       <ChevronLeft className="w-5 h-5 group-active:-translate-x-1" />
                    </button>
                    <button 
                      onClick={next}
                      className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black hover:bg-primary transition-all group"
                    >
                       <ChevronRight className="w-5 h-5 group-active:translate-x-1" />
                    </button>
                 </div>
                 
                 <div className="flex gap-2">
                    {stories.map((_, i) => (
                       <div 
                        key={i} 
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-4 bg-primary' : 'bg-white/20'}`} 
                       />
                    ))}
                 </div>
              </div>
           </div>

           {/* RIGHT SIDE: IMAGE & BIO */}
           <div className="flex-1 relative min-h-[350px] lg:min-h-0">
              <AnimatePresence mode="wait">
                 <motion.div 
                   key={index}
                   initial={{ opacity: 0, scale: 1.05 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.98 }}
                   transition={{ duration: 0.8 }}
                   className="absolute inset-0 p-3 lg:p-7"
                 >
                    <div className="relative w-full h-full rounded-[1rem] md:rounded-[1.5rem] overflow-hidden">
                       <img 
                          src={stories[index].image} 
                          className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                          alt={stories[index].name}
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                       
                       <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                          <h4 className="text-[18px] md:text-[22px] font-bold text-white uppercase tracking-tight leading-none mb-1">
                             {stories[index].name}
                          </h4>
                          <p className="text-white/50 text-[12px] md:text-[13px] font-medium uppercase tracking-widest italic">{stories[index].role}</p>
                       </div>
                    </div>
                 </motion.div>
              </AnimatePresence>
           </div>

        </div>

      </div>
    </section>
  );
}
