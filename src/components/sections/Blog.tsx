"use client";

import { useState, useEffect } from 'react';
import { BLOG_POSTS } from "@/data/mock";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Blog() {
  const [dbPosts, setDbPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setDbPosts(data.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchPosts();
  }, []);

  const displayPosts = (dbPosts.length > 0 ? dbPosts : BLOG_POSTS).slice(0, 3);

  return (
    <section id="journal" className="w-full bg-white py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 md:px-3">
        
        {/* --- Header Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end mb-12 md:mb-16">
          <div className="md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[36px] md:text-[54px] lg:text-[64px] font-black text-black leading-[0.9] uppercase tracking-tighter"
            >
              The Travel <br />
              <span className="text-black/20 italic">Diaries.</span>
            </motion.h2>
          </div>
          <div className="md:col-span-5 flex flex-col items-start md:items-end md:text-right">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-black shadow-[0_0_10px_rgba(0,0,0,0.2)]" />
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-black italic">The Journal</span>
             </div>
             <p className="text-[14px] text-black/50 font-medium leading-relaxed max-w-[320px] mb-8">
                Immerse yourself in stories of discovery.
             </p>
             <Link 
               href="/journal"
               className="inline-flex items-center gap-3 text-black font-black uppercase tracking-[0.2em] text-[10px] group border-b border-black/10 pb-2 hover:border-black transition-all"
             >
               Explore All Diaries
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
          {displayPosts.map((post, i) => (
            <Link key={post._id || post.id} href={`/journal/${post._id || post.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col"
              >
                {/* Image Block */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] md:rounded-[32px] mb-6 shadow-sm group-hover:shadow-xl transition-all duration-700">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md text-black px-5 py-2 rounded-full text-[9px] font-black tracking-widest uppercase shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-[24px] md:text-[32px] font-black uppercase tracking-tighter text-black leading-tight mb-4 group-hover:text-primary transition-colors duration-500">
                    {post.title}
                  </h3>
                  <p className="text-[14px] text-black/40 font-medium leading-relaxed mb-8 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-3 text-black group-hover:gap-5 transition-all duration-500">
                    <span className="text-[10px] font-black uppercase tracking-widest">Read Article</span>
                    <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
