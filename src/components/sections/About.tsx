"use client";

import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="w-full bg-white pb-32 overflow-hidden">
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
              className="space-y-12 max-w-[280px]"
            >
              <p className="text-[11px] md:text-[13px] font-bold text-black uppercase tracking-[0.05em]">
                Luxurious Travel and <br /> Bespoke Journeys
              </p>
              <p className="text-[14px] md:text-[16px] text-black/60 font-medium leading-relaxed">
                Modern Luxury: Curations featuring clean lines, neutral palettes, and high-quality experiences.
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
              className="relative aspect-[16/10] w-full rounded-[40px] md:rounded-[50px] overflow-hidden shadow-2xl shadow-black/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200" 
                alt="Luxury Lifestyle" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Column 3: Philosophy Block (Aligned with Large Image) */}
          <div className="lg:col-span-3 pt-4 lg:pt-[40px] xl:pt-[60px] flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col gap-10"
            >
              <div className="relative aspect-[16/10] w-full rounded-[32px] md:rounded-[40px] overflow-hidden shadow-xl shadow-black/5">
                <img 
                  src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800" 
                  alt="Our Vision" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-[24px] md:text-[28px] lg:text-[34px] font-extrabold tracking-tight text-black leading-none">
                  Our Philosophy
                </h3>
                <p className="text-[14px] md:text-[15px] text-black/60 font-medium leading-relaxed">
                  At Orovista Holidays, we believe in creating luxurious, personalized environments that reflect our clients' unique tastes and travel lifestyles.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
