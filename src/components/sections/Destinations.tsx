"use client";

import { DESTINATIONS } from "@/data/mock";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Destinations() {
  return (
    <section id="experiences" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-primary tracking-[0.4em] uppercase block">Elite Collections</span>
            <h2 className="font-headline text-5xl md:text-7xl font-light text-foreground tracking-tighter">Popular <i className="italic">Destinations</i></h2>
          </div>
          <button className="group flex items-center gap-3 text-foreground/40 font-bold uppercase tracking-[0.2em] text-[10px] hover:text-primary transition-colors">
            Explore all <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors"><ArrowRight className="w-4 h-4" /></div>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DESTINATIONS.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-700 cursor-pointer"
            >
              <Image
                src={dest.image}
                alt={dest.title}
                fill
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                <p className="font-bold text-xs text-white tracking-widest leading-none">{dest.price}</p>
              </div>

              <div className="absolute bottom-0 p-8 w-full text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="space-y-1 mb-6">
                  <p className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-70 mb-1">{dest.location}</p>
                  <h3 className="font-headline text-2xl font-light leading-tight">{dest.title}</h3>
                </div>
                
                <button className="w-full py-4 bg-white text-foreground rounded-full text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-primary hover:text-foreground">
                  Discover Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
