"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Headset, Map, Palmtree } from 'lucide-react';

const leftAdvantages = [
  {
    icon: <Headset className="w-5 h-5 text-white" />,
    title: "24/7 Ground Sync",
    desc: "Dedicated on-ground teams in every timezone ensuring a seamless journey."
  },
  {
    icon: <Palmtree className="w-5 h-5 text-white" />,
    title: "Handpicked Stays",
    desc: "Personally audited boutique villas and luxury chateaus for your comfort."
  }
];

const rightAdvantages = [
  {
    icon: <Map className="w-5 h-5 text-white" />,
    title: "Expert Local Guides",
    desc: "Connect with the soul of a destination through veteran storytellers."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    title: "Safety Protocols",
    desc: "Highest safety standards with comprehensive insurance and ground security."
  }
];

export function OrovistaAdvantage() {
  return (
    <section id="advantage" className="w-full bg-white pt-20  font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 md:px-3">
        
        {/* --- CENTERED HEADER --- */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[42px] md:text-[64px] font-black text-black leading-tight uppercase tracking-tighter"
          >
            Why Choose <span className="italic text-black/20">Orovista?</span>
          </motion.h2>
          <p className="mt-4 text-[14px] md:text-[16px] text-black/40 font-semibold max-w-xl mx-auto uppercase tracking-widest italic">
            From local expertise to worldwide logistics, we make luxury travel simple and worry-free.
          </p>
        </div>

        {/* --- DYNAMIC LAYOUT --- */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 lg:justify-between">
          
          {/* VISUAL FOR MOBILE (Hidden on Desktop) */}
          <div className="w-full lg:hidden flex justify-center mb-8">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative w-full max-w-[320px] md:max-w-[400px]"
             >
                <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full filter transform scale-75" />
                <img 
                  src="/assets/whyus.png" 
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.1)]"
                  alt="Premium Travel"
                />
             </motion.div>
          </div>

          {/* LEFT COLUMN CARDS */}
          <div className="w-full lg:w-[30%] grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col gap-6 md:gap-8 lg:gap-12">
             {leftAdvantages.map((adv, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
                 className="p-6 md:p-8 border border-black/[0.03] rounded-[2rem] md:rounded-[2.5rem] bg-neutral-50 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 group"
               >
                 <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                    {adv.icon}
                 </div>
                 <h4 className="text-[20px] md:text-[24px] font-black text-black uppercase tracking-tighter mb-3 md:mb-4 leading-none">
                    {adv.title}
                 </h4>
                 <p className="text-[13px] md:text-[14px] text-black/40 font-medium leading-relaxed uppercase tracking-tight italic">
                    {adv.desc}
                 </p>
               </motion.div>
             ))}
          </div>

          {/* CENTER HERO IMAGE (Visible only on Desktop) */}
          <div className="hidden lg:flex lg:w-[35%] justify-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
               className="relative w-full max-w-[450px]"
             >
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full filter" />
                <img 
                  src="/assets/whyus.png" 
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]"
                  alt="Premium Travel"
                />
             </motion.div>
          </div>

          {/* RIGHT COLUMN CARDS */}
          <div className="w-full lg:w-[30%] grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col gap-6 md:gap-8 lg:gap-12">
             {rightAdvantages.map((adv, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
                 className="p-6 md:p-8 border border-black/[0.03] rounded-[2rem] md:rounded-[2.5rem] bg-neutral-50 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 group"
               >
                 <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                    {adv.icon}
                 </div>
                 <h4 className="text-[20px] md:text-[24px] font-black text-black uppercase tracking-tighter mb-3 md:mb-4 leading-none">
                    {adv.title}
                 </h4>
                 <p className="text-[13px] md:text-[14px] text-black/40 font-medium leading-relaxed uppercase tracking-tight italic">
                    {adv.desc}
                 </p>
               </motion.div>
             ))}
          </div>

        </div>

        

      </div>
    </section>
  );
}
