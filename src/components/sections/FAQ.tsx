"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    number: "01",
    question: "Can I customize my travel itinerary?",
    answer: "Every journey is tailored to your preferences. Our travel designers work one-on-one with you to craft a pace, route, and experience that fits your style — from budget to ultra-luxury."
  },
  {
    number: "02",
    question: "Which countries does Orovista operate in?",
    answer: "We operate across Europe (France, Switzerland, Azerbaijan/Baku), Asia (Vietnam, Laos, Singapore, Malaysia, China, Japan), Middle East (Dubai, Oman, Iran, Iraq), and domestic India (Ladakh, Kashmir, Sikkim, Andaman, Manali, Shimla, Nepal)."
  },
  {
    number: "03",
    question: "What support do I get during the trip?",
    answer: "You get 24/7 on-ground support from our local teams at every destination. Flight delays, accommodation issues, last-minute changes — our team is always reachable and ready to resolve."
  },
  {
    number: "04",
    question: "Do you handle group and corporate travel?",
    answer: "Yes. We specialize in group tours, family packages, school trips, and corporate retreats — each handled with the highest safety standards and fully personalized logistics."
  },
  {
    number: "05",
    question: "How do I book a trip with Orovista?",
    answer: "Simply reach out via WhatsApp, phone, or our contact form. A travel consultant will connect with you within minutes and build a complete custom proposal within 24 hours."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-10 md:py-20 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 md:px-3 lg:px-3">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black/40 italic">Got Questions?</span>
            </div>
            <h2 className="text-[42px] md:text-[64px] lg:text-[80px] font-black text-black leading-[0.88] uppercase tracking-tighter">
              Frequently <br />
              <span className="text-black/10 italic">Asked.</span>
            </h2>
          </div>
          <p className="text-[13px] md:text-[14px] text-black/40 font-bold uppercase tracking-widest leading-relaxed max-w-sm border-l-2 border-primary pl-5">
            Can't find your answer? Message us directly on WhatsApp — we reply within minutes.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                layout
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className={`cursor-pointer border-t border-black/8 py-7 md:py-9 group transition-colors duration-300 ${isOpen ? 'border-black/20' : ''}`}
              >
                <div className="flex items-start gap-6 md:gap-10">

                  {/* Number */}
                  <span className={`text-[11px] font-black tracking-[0.2em] mt-1 shrink-0 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-black/20 group-hover:text-black/40'}`}>
                    {faq.number}
                  </span>

                  {/* Question + Answer */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-6">
                      <h3 className={`text-[16px] md:text-[20px] lg:text-[24px] font-black uppercase tracking-tighter leading-tight transition-colors duration-300 ${isOpen ? 'text-black' : 'text-black/40 group-hover:text-black'}`}>
                        {faq.question}
                      </h3>

                      {/* Toggle Icon */}
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full shrink-0 flex items-center justify-center border transition-all duration-400 ${isOpen ? 'bg-black border-black rotate-45' : 'bg-transparent border-black/10 group-hover:border-black/30'}`}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1V11M1 6H11" stroke={isOpen ? "white" : "black"} strokeOpacity={isOpen ? 1 : 0.4} strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pt-5 text-[14px] md:text-[16px] text-black/50 font-semibold leading-relaxed tracking-tight max-w-3xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </motion.div>
            );
          })}
          {/* Bottom Border */}
          <div className="border-t border-black/8" />
        </div>

      </div>
    </section>
  );
}
