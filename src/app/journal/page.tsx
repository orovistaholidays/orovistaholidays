"use client";

import { useEffect, useState } from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Search, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/mock";

export default function JournalPage() {
  const [dbPosts, setDbPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/blogs', { cache: 'no-store' });
        const data = await res.json();
        if (data.success) {
          setDbPosts(data.data);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const displayPosts = dbPosts.length > 0 ? dbPosts : BLOG_POSTS;
  const filteredPosts = displayPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#faf9f6] font-sans">
      <Navbar isSolid={true} />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Header */}
          <div className="mb-20">
            <motion.span 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block"
            >
               The Journal
            </motion.span>
            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-[48px] md:text-[84px] font-black uppercase tracking-tighter leading-[0.9] text-black mb-12"
            >
               Explore Our <br />
               <span className="text-black/20 italic">Stories.</span>
            </motion.h1>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between border-t border-black/5 pt-12">
               <div className="relative w-full md:w-[400px]">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20" />
                  <input 
                     type="text"
                     placeholder="Search articles..."
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full bg-white rounded-full px-14 py-4 text-[14px] font-bold outline-none border border-black/5 focus:border-black/20 transition-all shadow-sm"
                  />
               </div>
               <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-black/40">
                  <span>Scroll to Discover</span>
                  <div className="w-12 h-[1px] bg-black/10" />
               </div>
            </div>
          </div>

          {/* Grid */}
          {loading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[1, 2, 3, 4, 5, 6].map(i => (
                   <div key={i} className="aspect-[16/10] bg-black/5 rounded-[32px] animate-pulse" />
                ))}
             </div>
          ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredPosts.map((post, i) => (
                  <Link key={post._id || post.id} href={`/journal/${post.slug || post._id || post.id}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="group cursor-pointer flex flex-col h-full bg-white p-4 rounded-[40px] border border-black/5 hover:shadow-2xl transition-all duration-700"
                    >
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] mb-8">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-md text-black px-4 py-1.5 rounded-full text-[8px] font-black tracking-widest uppercase shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-grow px-4 pb-4">
                        <h3 className="text-[24px] md:text-[28px] font-black uppercase tracking-tighter text-black leading-tight mb-4 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-[14px] text-black/40 font-medium leading-relaxed mb-8 line-clamp-2">
                          {post.description}
                        </p>
                        
                        <div className="mt-auto flex items-center justify-between">
                           <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                              <span className="text-[9px] font-black uppercase tracking-widest text-black/20">Read Time: 5 Min</span>
                           </div>
                           <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                              <ArrowRight className="w-4 h-4" />
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
             </div>
          )}

          {filteredPosts.length === 0 && !loading && (
             <div className="py-24 text-center">
                <p className="text-[14px] font-black uppercase tracking-[0.2em] text-black/20">No articles found matching your search.</p>
             </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
