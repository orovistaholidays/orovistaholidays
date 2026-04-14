"use client";

import { BLOG_POSTS } from "@/data/mock";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Blog() {
  const featuredPost = BLOG_POSTS.find(post => post.isFeatured);
  const otherPosts = BLOG_POSTS.filter(post => !post.isFeatured);

  return (
    <section id="journal" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-24 space-y-4">
          <span className="text-[10px] font-bold text-primary tracking-[0.4em] uppercase block">The Journal</span>
          <h2 className="font-headline text-5xl md:text-7xl font-light text-foreground tracking-tighter">Travel <i className="italic">Diaries</i></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Featured Post */}
          {featuredPost && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 group relative h-[700px] rounded-2xl overflow-hidden shadow-premium cursor-pointer"
            >
              <Image 
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12 md:p-20 max-w-3xl space-y-8">
                <span className="bg-primary/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase">
                  {featuredPost.category}
                </span>
                <h3 className="text-4xl md:text-6xl font-headline font-light text-white leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-white/70 line-clamp-2 text-lg font-light leading-relaxed">
                  {featuredPost.description}
                </p>
                <Link href="#" className="inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest text-[11px] group">
                  Read Full Story 
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </motion.div>
          )}

          {/* Small Posts */}
          {otherPosts.map((post, i) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group space-y-8 cursor-pointer"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-premium group-hover:shadow-premium-lg transition-all duration-700">
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="space-y-4">
                <span className="text-[9px] font-bold text-primary tracking-[0.3em] uppercase block">
                  {post.category}
                </span>
                <h4 className="text-3xl font-headline font-light text-foreground leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <div className="pt-4 flex items-center gap-4 text-foreground/40 font-bold uppercase tracking-widest text-[9px]">
                  <span>Explore </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
