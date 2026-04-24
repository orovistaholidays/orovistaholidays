"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, X, Maximize2, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GALLERY_ITEMS = [
  {
    id: 1,
    type: "image",
    url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200",
    location: "Maldives",
    category: "Luxury",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    type: "video",
    url: "https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-over-the-water-4334-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
    location: "Tahiti",
    category: "Resort",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    type: "image",
    url: "https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=800",
    location: "Cappadocia, Turkey",
    category: "Adventure",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    type: "video",
    url: "https://assets.mixkit.co/videos/preview/mixkit-beautiful-aerial-view-of-a-resort-in-the-maldives-24701-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800",
    location: "Maldives",
    category: "Aerial",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    type: "image",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    location: "Bora Bora",
    category: "Tropical",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    type: "video",
    url: "https://assets.mixkit.co/videos/preview/mixkit-luxury-hotel-swimming-pool-at-sunset-1249-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800",
    location: "Dubai",
    category: "Elite",
    span: "md:col-span-1 md:row-span-1",
  }
];

export function Gallery() {
  const [dbItems, setDbItems] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch('/api/gallery');
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setDbItems(data.data);
        }
      } catch (error) {
        console.error('Error fetching gallery:', error);
      }
    };
    fetchGallery();
  }, []);

  const displayItems = dbItems.length > 0 ? dbItems : GALLERY_ITEMS;

  return (
    <section id="gallery" className="w-full bg-white py-24 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
             <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20 mb-4 block"
             >
                Captured Moments
             </motion.span>
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-[42px] md:text-[64px] font-black uppercase tracking-tighter leading-[0.9] text-black"
             >
                The Tour <br />
                <span className="text-black/20 italic">Gallery.</span>
             </motion.h2>
          </div>
          <div className="max-w-[350px] flex flex-col items-start md:items-end md:text-right">
             <p className="text-[14px] text-black/50 font-medium leading-relaxed italic mb-8">
                A visual narrative of the extraordinary journeys taken by our elite travelers across the globe.
             </p>
             <Link 
               href="/gallery"
               className="inline-flex items-center gap-3 text-black font-black uppercase tracking-[0.2em] text-[10px] group border-b border-black/10 pb-2 hover:border-black transition-all"
             >
               Explore Full Gallery
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-3 md:gap-4 h-auto md:h-[680px]">
          {displayItems.map((item, index) => (
            <motion.div
              key={item._id || item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-[20px] md:rounded-[48px] group cursor-pointer aspect-square md:aspect-auto ${item.span}`}
              onClick={() => setSelectedItem(item)}
            >
              <Image 
                src={item.type === 'video' ? item.thumbnail : item.url}
                alt={item.location}
                fill
                className="object-cover transition-all duration-[2000ms] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />
              
              {/* Type Indicator */}
              {item.type === 'video' && (
                <div className="absolute top-6 left-6 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                   <Play className="w-4 h-4 fill-white" />
                </div>
              )}

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                 <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div>
                       <span className="text-[9px] font-black uppercase tracking-widest text-white/60 mb-2 block">{item.category}</span>
                       <div className="flex items-center gap-2 text-white">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-[18px] font-black uppercase tracking-tighter">{item.location}</span>
                       </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                       <Maximize2 className="w-5 h-5" />
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedItem(null)}
            >
              <button 
                className="absolute top-8 right-8 p-4 bg-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all"
                onClick={() => setSelectedItem(null)}
              >
                <X className="w-6 h-6" />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-full max-w-[1200px] aspect-video md:aspect-[21/9] rounded-[32px] md:rounded-[64px] overflow-hidden shadow-2xl bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedItem.type === 'video' ? (
                  <video 
                    src={selectedItem.url}
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image 
                    src={selectedItem.url} 
                    alt={selectedItem.location}
                    fill
                    className="object-cover"
                  />
                )}
                
                <div className="absolute bottom-12 left-12">
                   <span className="text-[12px] font-black uppercase tracking-[0.4em] text-white/60 mb-4 block">{selectedItem.category}</span>
                   <h3 className="text-[32px] md:text-[64px] font-black uppercase tracking-tighter text-white leading-none">
                     {selectedItem.location}
                   </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
