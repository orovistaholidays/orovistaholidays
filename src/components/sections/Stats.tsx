"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Stats() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl px-3 md:px-3 lg:px-3 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          
          {/* Card 1: Happy Travelers (Image Background) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[24px] xl:rounded-[32px] p-6 md:p-8 flex flex-col justify-between overflow-hidden h-[160px] md:h-[190px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop" 
              alt="Happy Travelers" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
            
            <div className="relative z-10 flex justify-end w-full">
              <div className="flex -space-x-3 mt-1">
                <div className="w-10 h-10 rounded-full border-2 border-white/20 z-10 shadow-sm overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100" className="w-full h-full object-cover" alt="Happy traveler thumbnail 1" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white/20 z-20 shadow-sm overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100" className="w-full h-full object-cover" alt="Happy traveler thumbnail 2" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-2 border-white/20 z-30 shadow-sm">
                  <span className="text-white text-xs font-bold leading-none">+</span>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-[40px] md:text-[48px] font-normal text-white leading-none mb-1 md:mb-2 tracking-tight">35K+</h3>
              <p className="text-white/70 text-[12px] md:text-[14px] font-medium tracking-wide">Happy Travelers</p>
            </div>
          </motion.div>

          {/* Card 2: Destinations (Image Background - Existing) */}
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
            <div className="relative z-10 flex flex-col justify-end h-full">
              <h3 className="text-[40px] md:text-[48px] font-normal text-white leading-none mb-1 md:mb-2 tracking-tight">100+</h3>
              <p className="text-white/70 text-[12px] md:text-[14px] font-medium tracking-wide">Destinations</p>
            </div>
          </motion.div>

          {/* Card 3: Experience (Image Background) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[24px] xl:rounded-[32px] p-6 md:p-8 flex flex-col justify-between overflow-hidden h-[160px] md:h-[190px]"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
              alt="Team Experience" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
            
            <div className="relative z-10 flex justify-end w-full">
              <div className="flex -space-x-3 mt-1">
                <div className="w-10 h-10 rounded-full border-2 border-white/20 z-10 shadow-sm overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100" className="w-full h-full object-cover" alt="Team member experience 1" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white/20 z-20 shadow-sm overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100" className="w-full h-full object-cover" alt="Team member experience 2" />
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-[40px] md:text-[48px] font-normal text-white leading-none mb-1 md:mb-2 tracking-tight">5+</h3>
              <p className="text-white/70 text-[12px] md:text-[14px] font-medium tracking-wide">Years of experience</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
