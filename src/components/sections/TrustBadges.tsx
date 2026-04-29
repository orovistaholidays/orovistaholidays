"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Award, Lock, CheckCircle2, Star, ArrowUpRight } from 'lucide-react';

const trustPillars = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Government Recognized",
    desc: "A fully licensed and Ministry of Tourism approved travel firm."
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Financial Security",
    desc: "Secured payment gateways and comprehensive trip insurance for total peace of mind."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "10+ Years Excellence",
    desc: "Over a decade of B2B mastery and elite ground operations worldwide."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "100% Audited Partners",
    desc: "Every hotel, vehicle, and guide is personally vetted for quality and safety."
  }
];

export function TrustBadges() {
  return (
    <section className="w-full bg-white font-sans overflow-hidden ">
      <div className="max-w-[1400px] mx-auto px-3 md:px-3 lg:px-3">
        
        {/* --- STANDARD DUAL HEADER --- */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="flex gap-0.5 text-black">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-2 md:w-2.5 h-2 md:h-2.5 fill-current" />)}
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black/40 italic">Verified Assurance</span>
            </div>
            <h2 className="text-[34px] md:text-[52px] lg:text-[64px] font-light text-black leading-[1.1] tracking-tighter">
              Trust & <br />
              <span className="text-black/20 italic">Excellence.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-[13px] md:text-[14px] text-black/40 font-bold uppercase tracking-widest leading-relaxed max-w-sm border-l-2 border-primary pl-5"
          >
            Every journey we craft is backed by a decade of B2B expertise and official governmental recognition.
          </motion.p>
        </div>

        {/* --- TITLE TOP, NUMBER MID, DESC BOTTOM --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 md:gap-y-16">
          {trustPillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left group"
            >
              {/* Heading at the TOP */}
              <div className="mb-3 md:mb-4">
                 <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-black group-hover:text-primary transition-colors duration-500">
                   {pillar.title}
                 </h4>
              </div>

              {/* Number in the MIDDLE */}
              <div className="mb-6 md:mb-8">
                <span className="text-[90px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-medium leading-[0.8] tracking-tighter text-black select-none">
                  0{i + 1}
                </span>
              </div>

              {/* Description at the BOTTOM */}
              <div className="border-t border-black/5 pt-6 md:pt-8 w-full">
                <p className="text-[13px] md:text-[14px] text-black/50 font-medium leading-relaxed max-w-full lg:max-w-[240px] group-hover:text-black transition-colors duration-500">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SIGNATURE & ACCREDITATIONS FOOTER --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-16 md:mt-24 pt-10 md:pt-12 border-t border-black/5 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-[40px] md:text-[50px] lg:text-[60px] font-signature text-black opacity-90 select-none">Orovista Holidays</span>
            <p className="text-[9px] md:text-[10px] font-black text-black/20 uppercase tracking-[0.4em] md:tracking-[0.5em] mt-1 md:mt-2">The Orovista Promise of Quality</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-30 grayscale transition-all hover:opacity-100">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/IATA_logo.svg/1200px-IATA_logo.svg.png" className="h-5 md:h-8 lg:h-10 w-auto" alt="IATA - International Air Transport Association Member" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Incredible_India_Logo.svg" className="h-5 md:h-8 lg:h-10 w-auto" alt="Incredible India - Ministry of Tourism Approved" />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/PATA_logo.svg/1200px-PATA_logo.svg.png" className="h-5 md:h-8 lg:h-10 w-auto" alt="PATA - Pacific Asia Travel Association Member" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
