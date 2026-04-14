"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Stats() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl px-3 md:px-3 lg:px-3 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          
          {/* Card 1: Happy Travelers (UI Silhouette Avatars) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#f0f0f0] rounded-[24px] xl:rounded-[32px] p-6 md:p-8 flex flex-col justify-between h-[160px] md:h-[190px]"
          >
            <div className="flex justify-end w-full">
              {/* Graphic representation of people */}
              <div className="flex -space-x-3 mt-1">
                <div className="hidden sm:flex w-10 h-10 rounded-full bg-[#d4d4d4] items-center justify-center border-[3px] border-[#f0f0f0] z-10 shadow-sm"></div>
                <div className="w-10 h-10 rounded-full bg-[#cccccc] flex items-center justify-center border-[3px] border-[#f0f0f0] z-20 shadow-sm"></div>
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border-[3px] border-[#f0f0f0] z-30 shadow-sm">
                  <span className="text-white text-lg leading-none mt-[-2px]">+</span>
                </div>
              </div>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-[40px] md:text-[48px] font-normal text-[#1a1a1a] leading-none mb-1 md:mb-2 tracking-tight">35K+</h3>
              <p className="text-[#666666] text-[12px] md:text-[14px] font-medium tracking-wide">Happy Travelers</p>
            </div>
          </motion.div>

          {/* Card 2: Destinations Image Background */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[24px] xl:rounded-[32px] p-6 md:p-8 flex flex-col justify-center overflow-hidden h-[160px] md:h-[190px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop" 
              alt="Destinations" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/5"></div>
            <div className="relative z-10 flex flex-col justify-end h-full">
              <h3 className="text-[40px] md:text-[48px] font-normal text-white leading-none mb-1 md:mb-2 tracking-tight">100+</h3>
              <p className="text-white/80 text-[12px] md:text-[14px] font-medium tracking-wide">Destinations</p>
            </div>
          </motion.div>

          {/* Card 3: Experience (UI Graph) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111111] rounded-[24px] xl:rounded-[32px] p-6 md:p-8 flex flex-col justify-between h-[160px] md:h-[190px]"
          >
            <div className="flex justify-end gap-[6px] items-end h-10 w-full mt-2">
              {/* Animated Growth Graph */}
              <div className="w-[8px] md:w-[10px] bg-white/20 rounded-full h-[30%]"></div>
              <div className="w-[8px] md:w-[10px] bg-white/30 rounded-full h-[50%]"></div>
              <div className="w-[8px] md:w-[10px] bg-white/50 rounded-full h-[70%]"></div>
              <div className="w-[8px] md:w-[10px] bg-white/80 rounded-full h-[85%]"></div>
              <div className="w-[8px] md:w-[10px] bg-[#d4d4d4] rounded-full h-full relative">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
              </div>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-[40px] md:text-[48px] font-normal text-white leading-none mb-1 md:mb-2 tracking-tight">5+</h3>
              <p className="text-[#8c8c8c] text-[12px] md:text-[14px] font-medium tracking-wide">Years of experience</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
