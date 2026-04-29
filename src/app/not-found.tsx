"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Compass } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf9f6] font-sans">
      <Navbar isSolid={true} />
      
      <main className="flex-grow flex items-center justify-center pt-32 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[14px] font-black uppercase tracking-[0.4em] text-primary mb-6 block">
              Error 404
            </span>
            
            <h1 className="text-[64px] md:text-[120px] font-black uppercase tracking-tighter leading-[0.8] text-black mb-8">
              Lost in <br />
              <span className="text-black/10 italic">Paradise.</span>
            </h1>
            
            <p className="text-[18px] md:text-[22px] text-black/40 font-medium max-w-xl mx-auto mb-12 leading-relaxed">
              The page you are looking for has been moved, deleted, or never existed in our curated itineraries.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/"
                className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full text-[12px] font-black uppercase tracking-widest hover:bg-primary transition-all duration-500 shadow-2xl"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
              
              <Link 
                href="/packages"
                className="group flex items-center gap-4 bg-white text-black border border-black/5 px-10 py-5 rounded-full text-[12px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500 shadow-sm"
              >
                <Compass className="w-4 h-4" />
                Explore Packages
              </Link>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-[0.03] select-none pointer-events-none">
            <span className="text-[400px] font-black italic">404</span>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
