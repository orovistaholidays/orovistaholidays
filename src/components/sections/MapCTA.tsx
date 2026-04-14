"use client";

import { motion } from "framer-motion";
import { PlaneTakeoff, MoveRight } from "lucide-react";
import Image from "next/image";

export function MapCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-[#1a1a1a] rounded-xxl flex flex-col lg:flex-row relative overflow-hidden shadow-premium-lg">
          {/* Content Column */}
          <div className="p-12 md:p-20 lg:w-1/2 space-y-10 z-10 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-[10px] font-bold text-primary tracking-[0.4em] uppercase block">Exploration</span>
              <h2 className="font-headline text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-tighter">
                Map Your Dream <br /> <i className="italic">Escape</i>
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg font-light leading-relaxed max-w-md"
            >
              Browse our interactive map and discover the world's most breathtaking retreats at your fingertips.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-6"
            >
              <button className="bg-primary text-foreground px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[11px] transition-all hover:scale-105 active:scale-95">
                Explore Map
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[11px] transition-all hover:bg-white hover:text-foreground">
                Talk To Us
              </button>
            </motion.div>
          </div>

          {/* Map/Image Space */}
          <div className="lg:w-1/2 min-h-[500px] relative overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
              alt="World Map"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
            />
            {/* Floating Flight Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-premium-lg w-80 space-y-6 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center">
                  <PlaneTakeoff className="text-primary w-6 h-6 font-light" />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-foreground/40 uppercase tracking-widest">Next Expedition</p>
                  <p className="font-headline text-xl font-light text-foreground tracking-tight">HL-2024</p>
                </div>
              </div>
              <div className="h-px bg-border"></div>
              <div className="flex justify-between items-center text-foreground">
                <div>
                  <p className="text-3xl font-headline font-light">LHR</p>
                  <p className="text-[9px] text-foreground/40 uppercase font-bold tracking-widest">London</p>
                </div>
                <MoveRight className="text-primary/40 w-6 h-6" />
                <div className="text-right">
                  <p className="text-3xl font-headline font-light">MLE</p>
                  <p className="text-[9px] text-foreground/40 uppercase font-bold tracking-widest">Male</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
