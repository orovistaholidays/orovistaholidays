"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = "919619099699";
const PHONE_NUMBER = "+919619099699";
const WHATSAPP_MSG = "Hi Orovista! I'd like to plan a trip.";

export function FloatingCTA() {
  const [scrollActive, setScrollActive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrollActive(true);
        setIsScrolling(true);
        clearTimeout(timeout);
        timeout = setTimeout(() => setIsScrolling(false), 1500);
      } else {
        setScrollActive(false);
        setIsScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { window.removeEventListener('scroll', handleScroll); clearTimeout(timeout); };
  }, []);

  const shouldExpand = isScrolling || isHovered;

  return (
    <AnimatePresence>
      {scrollActive && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-5 right-4 md:bottom-8 md:right-10 z-[100]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            animate={{
              width: shouldExpand ? 'auto' : '56px',
              borderRadius: shouldExpand ? '100px' : '28px',
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/95 backdrop-blur-2xl border border-black/8 shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden flex items-center"
          >
            <AnimatePresence mode="wait">
              {shouldExpand ? (
                <motion.div
                  key="full"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-3 px-4 py-3 whitespace-nowrap"
                >
                  {/* Status */}
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="relative w-2.5 h-2.5">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping absolute inset-0 opacity-60" />
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full relative" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] md:text-[16px] font-black text-black tracking-tighter uppercase leading-none">
                        Online
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden sm:block w-px h-5 bg-black/10" />

                  {/* Enquire Button → links to contact section */}
                  <a
                    href="#contact"
                    className="flex items-center gap-1.5 px-4 py-2 bg-black text-white rounded-full hover:bg-primary hover:text-black transition-all group text-[11px] font-black uppercase tracking-widest"
                  >
                    Enquire
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-[#25D366] text-white rounded-full hover:bg-[#1ebe5d] transition-all"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>

                  {/* Call Button */}
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="p-2.5 bg-neutral-100 text-black rounded-full hover:bg-black hover:text-white transition-all"
                    title="Call Us"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key="compact"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="w-14 h-14 flex items-center justify-center cursor-pointer text-primary"
                >
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
