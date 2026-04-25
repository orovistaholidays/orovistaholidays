"use client";

import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="w-full bg-white pb-12 md:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 md:px-3 lg:px-3">
        
        {/* Row 1: The Massive "ABOUT" Title */}
        <div className="w-full mb-[-10px] md:mb-[-20px] lg:mb-[-30px]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[70px] md:text-[100px] lg:text-[140px] font-extrabold leading-none tracking-[0.05em] text-black uppercase"
          >
            About
          </motion.h2>
        </div>

        {/* Row 2: The Modular Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-3 items-start">
          
          {/* Column 1: "US" and Descriptions */}
          <div className="lg:col-span-3 flex flex-col z-10 relative">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[70px] md:text-[100px] lg:text-[140px] font-extrabold leading-none tracking-[0.05em] text-black uppercase mb-8 md:mb-12"
            >
              Us
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-4 max-w-[280px]"
            >
              <p className="text-[11px] md:text-[13px] font-bold text-black uppercase tracking-[0.05em]">
                Premium Global Travel & <br /> Luxury Tour Packages
              </p>
              <p className="text-[14px] md:text-[16px] text-black/60 font-medium leading-relaxed">
                Orovista Holidays specializes in curating bespoke international journeys and premium tour packages. As an elite travel agency, we design extraordinary, high-end vacation experiences tailored to your unique travel lifestyle.
              </p>
            </motion.div>
          </div>

          {/* Column 2: Large Center Image (Aligned with top of "US") */}
          <div className="lg:col-span-6 pt-4 lg:pt-[40px] xl:pt-[60px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/10] w-full rounded-[40px] md:rounded-[50px] overflow-hidden shadow-2xl shadow-black/5 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200" 
                alt="Soneva Jani, Maldives" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-8 md:bottom-10 md:left-12">
                 <p className="text-white text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] drop-shadow-md">Exclusive Retreat</p>
                 <h4 className="text-white text-[20px] md:text-[28px] font-bold tracking-tighter drop-shadow-md">Soneva Jani, Maldives</h4>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Philosophy Block (Aligned with Large Image) */}
          <div className="lg:col-span-3 pt-4 lg:pt-[40px] xl:pt-[60px] flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col gap-5"
            >
              <div className="relative aspect-[16/10] w-full rounded-[32px] md:rounded-[40px] overflow-hidden shadow-xl shadow-black/5 group">
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800" 
                  alt="Grace Hotel, Santorini" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-5 left-6">
                   <p className="text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] drop-shadow-md">Luxury Escape</p>
                   <h4 className="text-white text-[16px] md:text-[20px] font-bold tracking-tighter drop-shadow-md">Grace Hotel, Santorini</h4>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-[20px] md:text-[10px] lg:text-[20px] font-extrabold tracking-tight text-black leading-none">
                  Our Travel Philosophy
                </h3>
                <p className="text-[14px] md:text-[15px] text-black/60 font-medium leading-relaxed">
                  At Orovista Holidays, our mission is to deliver unparalleled luxury and highly personalized itineraries. From exclusive global resorts to immersive cultural tours, we ensure every detail of your luxury holiday is meticulously planned.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
