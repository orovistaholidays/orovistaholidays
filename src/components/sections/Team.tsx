"use client";

import { motion } from 'framer-motion';

export function Team() {
  return (
    <section id="team" className="w-full bg-white overflow-hidden font-sans pt-6 pb-20 md:py-0">
      <div className="max-w-[1400px] mx-auto px-4 md:px-3">
        
        {/* --- DESKTOP LAYOUT (Hidden on Mobile) --- */}
        <div className="hidden md:flex relative bg-[#eeeae7] rounded-[35px] px-16 pt-10 flex-row items-end justify-between overflow-hidden">
          {/* Left Principal - Vision Block to fill space */}
          <div className="relative z-10 w-[28%] flex flex-col -ml-10 mb-20 self-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start"
            >
              <div className="h-20 w-[1px] bg-black/10 mb-6 ml-1"></div>
              <span className="text-[10px] font-bold text-black/30 tracking-[0.4em] uppercase mb-4">Our Vision</span>
              <h3 className="text-[28px] font-serif italic text-black/60 leading-tight max-w-[240px]">
                "Crafting journeys that transcend the ordinary."
              </h3>
              <p className="mt-6 text-[11px] font-medium text-black/40 tracking-wider uppercase">Elite Traveler Excellence</p>
            </motion.div>
          </div>

          {/* Center Info Block */}
          <div className="relative z-30 w-[40%] self-stretch flex flex-col justify-end items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full flex flex-col items-center"
            >
              <div className="bg-white px-10 pt-5 pb-2 rounded-t-[30px] w-[85%] flex flex-col items-center">
                <span className="text-[18px] font-bold text-black tracking-widest uppercase mb-1">MEET THE</span>
              </div>
              <div className="bg-white w-full rounded-t-[30px] px-12 pb-12 pt-0 text-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center relative">
                <h3 className="text-[64px] font-black leading-[0.8] text-black tracking-tighter uppercase mb-10">FOUNDERS</h3>
                <div className="flex -space-x-4 mb-10 justify-center">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-30 h-10 rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm flex-shrink-0">
                      <img src={`https://images.unsplash.com/photo-${i === 1 ? '1560250097-0b93528c311a' : i === 2 ? '1472099645785-5658abf4ff4e' : '1519085360753-af0119f7cbe7'}?q=80&w=400`} className="w-full h-full object-cover" alt={`Team Member ${i}`} />
                    </div>
                  ))}
                </div>
                <p className="text-[14px] leading-relaxed text-black/50 font-medium max-w-[320px] mx-auto italic">As visionaries of elite travel, our founders oversee the curation of our firm&apos;s bespoke global luxury itineraries.</p>
                <div className="absolute bottom-0 -right-[25px] w-[25px] h-[25px] bg-white"><div className="w-full h-full bg-[#eeeae7] rounded-bl-[25px]"></div></div>
                <div className="absolute bottom-0 -left-[25px] w-[25px] h-[25px] bg-white"><div className="w-full h-full bg-[#eeeae7] rounded-br-[25px]"></div></div>
              </div>
              <div className="absolute top-[43px] left-[7.5%] w-[40px] h-[40px] bg-white -z-10 -translate-x-full"><div className="w-full h-full bg-[#eeeae7] rounded-tr-[32px]"></div></div>
              <div className="absolute top-[43px] right-[7.5%] w-[40px] h-[40px] bg-white -z-10 translate-x-full"><div className="w-full h-full bg-[#eeeae7] rounded-tl-[32px]"></div></div>
            </motion.div>
          </div>

          {/* Right Principal */}
          <div className="relative z-10 w-[28%] flex flex-col -mr-10 mb-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[1/1.1] w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/20"
            >
              <img src="/assets/ceo_image.jpeg" alt="Aafaque Shaikh" className="w-full h-full object-cover object-center" />
            </motion.div>
          </div>
        </div>

        {/* --- DESKTOP FOOTER (Hidden on Mobile) --- */}
        <div className="hidden md:flex mt-12 flex-row justify-between items-start gap-8 px-2">
           <div className="flex flex-col items-start text-left">
             <h4 className="text-[42px] font-black tracking-tighter text-black uppercase leading-[0.9] mb-2">Zainab Ali Hussain</h4>
             <p className="text-[11px] font-bold text-black/30 tracking-[0.25em] uppercase">CO-FOUNDER</p>
           </div>
           <div className="flex flex-col items-end text-right">
             <h4 className="text-[42px] font-black tracking-tighter text-black uppercase leading-[0.9] mb-2">Aafaque Shaikh</h4>
             <p className="text-[11px] font-bold text-black/30 tracking-[0.25em] uppercase">CEO AND FOUNDER</p>
           </div>
        </div>

        {/* --- MOBILE LAYOUT (Only for Mobile) --- */}
        <div className="flex md:hidden flex-col gap-6">
           {/* Mobile Header */}
           <div className="flex flex-col mb-4">
              <span className="text-[10px] font-black text-black/30 tracking-[0.4em] uppercase mb-1">Expert Curators</span>
              <h3 className="text-[42px] font-black text-black leading-none tracking-tighter uppercase">THE TEAM</h3>
           </div>

           {/* Principal 1: Zainab Ali Hussain */}
           <div className="group">
              <div className="bg-[#eeeae7] rounded-[35px] overflow-hidden py-10 px-4 flex flex-col items-center">
                 <div className="text-center">
                    <h4 className="text-[34px] font-black text-black tracking-tighter uppercase leading-none">Zainab Ali Hussain</h4>
                    <p className="text-[10px] font-bold text-black/40 tracking-[0.15em] uppercase mt-2">Co-Founder</p>
                 </div>
              </div>
           </div>

           {/* Principal 2: Aafaque Shaikh */}
           <div className="group">
              <div className="bg-[#eeeae7] rounded-[35px] overflow-hidden pt-8 px-4 flex flex-col items-center">
                 <div className="text-center mb-6">
                    <h4 className="text-[34px] font-black text-black tracking-tighter uppercase leading-none">Aafaque Shaikh</h4>
                    <p className="text-[10px] font-bold text-black/40 tracking-[0.15em] uppercase mt-2">Ceo and founder</p>
                 </div>
                 <div className="w-full aspect-square relative rounded-[30px] overflow-hidden shadow-xl">
                    <img src="/assets/ceo_image.jpeg" alt="Aafaque Shaikh" className="w-full h-full object-cover object-center" />
                 </div>
              </div>
           </div>

           {/* Mobile Philosophy */}
           <div className="px-2 mt-4">
              <p className="text-[14px] leading-relaxed text-black/50 font-medium italic border-l-2 border-[#eeeae7] pl-4">
                As visionaries of elite travel, our founders oversee the curation of our firm&apos;s bespoke global luxury itineraries and world-class logistics.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}
