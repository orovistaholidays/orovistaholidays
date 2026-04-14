"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
   X,
   MapPin,
   ArrowRight,
   ChevronRight,
   ChevronLeft,
   ArrowUpRight
} from 'lucide-react';

const packages = [
   {
      id: "vietnam",
      title: "The Dragon's Emerald Trail",
      location: "Vietnam",
      duration: "8 Days Expedition",
      price: "₹1,25,000",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200",
      description: "An elite journey through the pulse of Indochina. Experience luxury amidst ancient limestone wonders."
   },
   {
      id: "ladakh",
      title: "Kingdom of Clouds",
      location: "Ladakh, India",
      duration: "10 Days Journey",
      price: "₹85,000",
      image: "https://images.unsplash.com/photo-1581793746473-04289895186b?q=80&w=1200",
      description: "A high-altitude odyssey of silence and spiritual discovery through ancient monasteries."
   },
   {
      id: "switzerland",
      title: "Grand Alpine Luxe",
      location: "Switzerland",
      duration: "12 Days Luxury",
      price: "₹4,85,000",
      image: "https://images.unsplash.com/photo-1471623322736-a83f9695d051?q=80&w=1200",
      description: "The ultimate European summer. Private mountain guides and palatial Swiss hospitality."
   },
   {
      id: "bali",
      title: "The Island Spirit",
      location: "Indonesia",
      duration: "7 Days Pure Bliss",
      price: "₹1,15,000",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200",
      description: "Lush jungles, emerald rice terraces, and private cliffside villas."
   }
];

export function Packages() {
   const [selectedPackage, setSelectedPackage] = useState<any>(null);
   const scrollContainerRef = useRef<HTMLDivElement>(null);

   const scroll = (direction: 'left' | 'right') => {
      if (scrollContainerRef.current) {
         const { scrollLeft, clientWidth } = scrollContainerRef.current;
         const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
         scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
   };

   return (
      <section id="packages" className="w-full bg-white font-sans overflow-hidden flex flex-col relative z-20">
         <div className="max-w-[1400px] mx-auto px-3 md:px-3 lg:px-3 w-full flex-grow flex flex-col">

            {/* --- Phase 1: Compact Split Header --- */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-12 flex-shrink-0">
               {/* Left Title */}
               <div className="md:col-span-6">
                  <motion.h2
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="text-[36px] md:text-[54px] lg:text-[72px] font-black text-black leading-[0.9] uppercase tracking-tighter"
                  >
                     The Orovista <br />
                     <span className="text-black/20 italic">Portfolio.</span>
                  </motion.h2>
               </div>

               {/* Right Info & Navigation Buttons */}
               <div className="md:col-span-6 flex justify-between items-end gap-12">
                  <p className="hidden md:block text-[14px] text-black/50 font-medium leading-relaxed max-w-[300px]">
                     Explore our hand-picked collection of 300+ crafted journeys designed for the elite traveler.
                  </p>

                  {/* Navigation Arrows */}
                  <div className="flex gap-4">
                     <button
                        onClick={() => scroll('left')}
                        className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
                     >
                        <ChevronLeft className="w-6 h-6" />
                     </button>
                     <button
                        onClick={() => scroll('right')}
                        className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
                     >
                        <ChevronRight className="w-6 h-6" />
                     </button>
                  </div>
               </div>
            </div>

            {/* --- Phase 2: Horizontal Scroll Canvas --- */}
            <div
               ref={scrollContainerRef}
               className="flex-grow flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory"
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
               {packages.map((pkg, index) => (
                  <motion.div
                     key={pkg.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                     className="h-full w-full min-w-full snap-center flex flex-col group cursor-pointer"
                     onClick={() => setSelectedPackage(pkg)}
                  >


                     {/* --- Top Information Block --- */}
                     <div className="pb-8 flex flex-col">
                        <div className="flex justify-between items-center mb-4 border-b border-black/5 pb-4">
                           <div className="flex items-center gap-3">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span className="text-[11px] font-black uppercase tracking-widest text-black/40">{pkg.location}</span>
                           </div>
                           <span className="text-[11px] font-black uppercase tracking-widest text-black/40">{pkg.duration}</span>
                        </div>

                        <h3 className="text-[28px] md:text-[42px] lg:text-[54px] font-black uppercase tracking-tighter text-black leading-none mb-6 group-hover:text-primary transition-colors">
                           {pkg.title.includes(':') ? pkg.title.split(':')[1].trim() : pkg.title}
                        </h3>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0">
                           <div className="flex flex-col">
                              <span className="text-[10px] font-bold text-black/20 uppercase tracking-widest leading-none mb-2">Total Expedition</span>
                              <span className="text-[24px] md:text-[32px] lg:text-[38px] font-black text-black leading-none">{pkg.price}</span>
                           </div>
                           <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-black text-white rounded-full font-black uppercase text-[10px] lg:text-[11px] tracking-widest flex items-center justify-center gap-3 hover:bg-primary hover:text-black transition-all shadow-xl">
                              EXPLORE JOURNEY <ArrowUpRight className="w-4 h-4" />
                           </button>
                        </div>
                     </div>
                     {/* --- Top Cinematic Image (Responsive Height) --- */}
                     <div className="h-[250px] sm:h-[300px] md:h-[300px] lg:h-[380px] w-full overflow-hidden rounded-[24px] md:rounded-[40px] relative shadow-lg mb-8">
                        <img
                           src={pkg.image}
                           className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
                           alt={pkg.title}
                        />
                     </div>

                  </motion.div>
               ))}

               {/* Spacer at the end for scroll padding */}
               <div className="min-w-[10vw]" />
            </div>

         </div>

         {/* --- Detail Overlay remains simple and stable --- */}
         <AnimatePresence>
            {selectedPackage && (
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  className="fixed inset-0 z-[500] bg-white flex flex-col h-screen overflow-hidden font-sans"
               >
                  <div className="flex justify-between items-center px-6 md:px-12 py-8 bg-white border-b border-black/5">
                     <span className="text-[14px] font-black uppercase tracking-widest text-black/40">{selectedPackage.title}</span>
                     <button onClick={() => setSelectedPackage(null)} className="p-3 bg-neutral-100 rounded-full hover:bg-black hover:text-white transition-all shadow-sm">
                        <X className="w-6 h-6" />
                     </button>
                  </div>
                  <div className="flex-grow overflow-y-auto">
                     <div className="max-w-[1400px] mx-auto py-12 md:py-24 px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        <div className="rounded-[24px] md:rounded-[48px] overflow-hidden shadow-2xl h-[300px] sm:h-[450px] lg:h-auto">
                           <img src={selectedPackage.image} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="flex flex-col justify-center">
                           <h2 className="text-[32px] md:text-[54px] lg:text-[72px] font-black text-black uppercase leading-[0.85] tracking-tighter mb-8">{selectedPackage.title}</h2>
                           <p className="text-[16px] md:text-[18px] text-black/60 font-medium leading-relaxed mb-12">{selectedPackage.description}</p>

                           <div className="p-8 md:p-10 bg-[#f8f6f4] rounded-[32px] md:rounded-[48px] flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8 border border-black/5 shadow-inner">
                              <div className="text-center sm:text-left">
                                 <span className="text-[10px] md:text-[11px] font-bold text-black/30 uppercase tracking-widest block mb-1">Elite Starting Point</span>
                                 <span className="text-[28px] md:text-[32px] font-black text-black">{selectedPackage.price}</span>
                              </div>
                              <button
                                 onClick={() => window.open(`https://wa.me/910000000000?text=I'm interested in the ${selectedPackage.title} journey.`, '_blank')}
                                 className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-full font-black text-[11px] md:text-[12px] uppercase tracking-widest hover:bg-primary transition-all shadow-xl flex items-center justify-center gap-3"
                              >
                                 Speak with strategists <ArrowRight className="w-4 h-4" />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

         <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>

      </section>
   );
}
