"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';

export function GlobalPresence() {
   const [activeQuery, setActiveQuery] = useState("Europe, Baku");

   return (
      <section className="relative w-full bg-white py-12 md:py-24 overflow-hidden font-sans border-t border-black/5">
         <div className="max-w-[1400px] mx-auto px-3 md:px-3">

            <div className="grid grid-cols-1 lg:grid-cols-10 gap-5">

               {/* 1. LEFT LARGE CARD (Interactive Global Map) */}
               <div className="lg:col-span-7 relative h-[400px] md:h-[450px] lg:h-[550px] rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden group border border-black/5 bg-[#f0f0f0]">
                  {/* Dynamic Google Map */}
                  <iframe
                     key={activeQuery}
                     src={`https://maps.google.com/maps?q=${encodeURIComponent(activeQuery)}&t=&z=5&ie=UTF8&iwloc=&output=embed`}
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     className="absolute inset-0 grayscale-[0.6] contrast-[1.1] group-hover:grayscale-0 transition-all duration-[2000ms]"
                     allowFullScreen={true}
                     loading="lazy"
                  ></iframe>
                  <div className="absolute inset-0 bg-black/5 pointer-events-none" />

                  <div className="absolute bottom-[-1px] left-[-1px] bg-white p-6 md:p-8 pr-10 md:pr-14 rounded-tr-[2.5rem] md:rounded-tr-[3.5rem] z-10 w-[92%] sm:w-auto max-w-[450px]">
                     {/* Inverted Curves */}
                     <div className="absolute -top-[30px] md:-top-[40px] left-0 w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-white"
                        style={{ maskImage: 'radial-gradient(circle at 100% 0%, transparent 70%, black 72%)', WebkitMaskImage: 'radial-gradient(circle at 100% 0%, transparent 70%, black 72%)' }}
                     />
                     <div className="absolute bottom-0 -right-[30px] md:-right-[40px] w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-white"
                        style={{ maskImage: 'radial-gradient(circle at 100% 0%, transparent 70%, black 72%)', WebkitMaskImage: 'radial-gradient(circle at 100% 0%, transparent 70%, black 72%)' }}
                     />

                     <div className="flex flex-col items-start">
                        
                        <h2 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[52px] font-black text-black leading-[0.95] tracking-tight uppercase">
                           Europe <br />
                           & Baku Hub.
                        </h2>
                        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                           {["Baku Hub", "France", "Switzerland", "Azerbaijan"].map((loc, i) => (
                              <span
                                 key={i}
                                 onMouseEnter={() => setActiveQuery(loc)}
                                 className={`text-[11px] md:text-[12px] font-black uppercase tracking-widest cursor-pointer transition-all flex items-center gap-2 ${activeQuery === loc ? 'text-black' : 'text-black/30 hover:text-black'}`}
                              >
                                 <div className={`w-1 h-1 rounded-full transition-all ${activeQuery === loc ? 'bg-primary scale-150' : 'bg-primary/20'}`} />
                                 {loc}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* 2. RIGHT COLUMN */}
               <div className="lg:col-span-3 flex flex-col gap-5">

                  {/* TOP TEXT CARD (Asian & Middle East) */}
                  <div className="flex-1 bg-[#f5f1ed] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-7 flex flex-col justify-start relative overflow-hidden min-h-[250px]">
                     <div className="inline-flex px-4 py-1.5 border border-black/10 rounded-full mb-6 self-start bg-white/50 text-[10px] font-black uppercase tracking-wider">
                        Asian & Middle East
                     </div>

                     <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-7">
                        {["Vietnam", "Philippines", "Japan", "Dubai", "Oman", "Singapore"].map((loc, i) => (
                           <span
                              key={i}
                              onMouseEnter={() => setActiveQuery(loc)}
                              className={`text-[11px] font-black uppercase tracking-tight flex items-center gap-2 cursor-pointer transition-all ${activeQuery === loc ? 'text-black translate-x-1' : 'text-black/50 hover:text-black'}`}
                           >
                              <div className={`w-1 h-1 rounded-full ${activeQuery === loc ? 'bg-primary scale-125' : 'bg-primary/20'}`} />
                              {loc}
                           </span>
                        ))}
                     </div>

                     <h3 className="text-[24px] md:text-[24px] font-black text-black leading-[1] tracking-tight uppercase mt-auto">
                        Leading our
                        travelers global.
                     </h3>
                  </div>

                  {/* BOTTOM IMAGE CARD (Domestic) */}
                  <div className="flex-1 relative group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-black/5 min-h-[260px]">
                     <img
                        src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200"
                        className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-[2000ms]"
                        alt="Orovista Holidays - Indian Subcontinent luxury travel"
                     />
                     <div className="absolute inset-0 bg-black/40" />

                     <div className="absolute top-8 left-8 right-8">
                        <div className="inline-flex px-4 py-1.5 border border-white/20 rounded-full bg-black/20 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-white mb-6">
                           Indian Subcontinent
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                           {["Ladakh", "Kashmir", "Nepal", "Sikkim", "Manali"].map((loc, i) => (
                              <span
                                 key={i}
                                 onMouseEnter={() => setActiveQuery(loc)}
                                 className={`text-[11px] font-black text-white uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${activeQuery === loc ? 'text-white scale-105' : 'text-white/50 hover:text-white'}`}
                              >
                                 <div className={`w-1 h-1 rounded-full ${activeQuery === loc ? 'bg-primary scale-125' : 'bg-white/20'}`} />
                                 {loc}
                              </span>
                           ))}
                        </div>
                     </div>

                     <div className="absolute bottom-[-1px] right-[-1px] bg-white p-4 md:p-5 pt-6 md:pt-7 pl-6 md:pl-7 rounded-tl-[2.5rem] md:rounded-tl-[3.5rem] z-20">
                        <div className="absolute -top-[30px] md:-top-[40px] right-0 w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-white"
                           style={{ maskImage: 'radial-gradient(circle at 0% 0%, transparent 70%, black 72%)', WebkitMaskImage: 'radial-gradient(circle at 0% 0%, transparent 70%, black 72%)' }}
                        />
                        <div className="absolute bottom-0 -left-[30px] md:-left-[40px] w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-white"
                           style={{ maskImage: 'radial-gradient(circle at 0% 0%, transparent 70%, black 72%)', WebkitMaskImage: 'radial-gradient(circle at 0% 0%, transparent 70%, black 72%)' }}
                        />
                        <button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-primary hover:text-black transition-all group/btn shadow-xl">
                           <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </button>
                     </div>
                  </div>

               </div>

            </div>

            {/* STATS STRIP BELOW */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 px-2">
               {[
                  { label: "European Axis", val: "Europe & Baku" },
                  { label: "Eastern Pulse", val: "Vietnam & Philippines" },
                  { label: "Gulf & Synergy", val: "Dubai & Oman" },
                  { label: "Himalayan Footprint", val: "Ladakh & Kashmir" }
               ].map((stat, i) => (
                  <div key={i} className="flex flex-col group cursor-default border-l border-black/5 pl-6 md:pl-8">
                     <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-black/20 group-hover:text-primary transition-colors mb-2 italic">{stat.label}</span>
                     <span className="text-[16px] sm:text-[18px] md:text-[20px] font-black text-black tracking-tight uppercase leading-none">{stat.val}</span>
                  </div>
               ))}
            </div>

         </div>
      </section>
   );
}
