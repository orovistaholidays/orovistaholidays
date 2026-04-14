"use client";

import { TESTIMONIALS } from "@/data/mock";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  return (
    <section className="py-32 bg-primary/10">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[10px] font-bold text-primary tracking-[0.4em] uppercase block">Guest Stories</span>
          <h2 className="font-headline text-5xl md:text-7xl font-light text-foreground tracking-tighter">Voices of <i className="italic">Luxury</i></h2>
        </div>

        <div className="relative">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="text-center space-y-12"
            >
              <div className="relative inline-block">
                <blockquote className="font-headline text-2xl md:text-4xl font-light text-foreground leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-premium">
                  <Image 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-foreground text-sm uppercase tracking-widest">{testimonial.name}</p>
                  <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-[0.2em]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
