"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export default function Navbar({ isSolid = false }: { isSolid?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const effectiveScrolled = isScrolled || isSolid;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Update scrolled background state
      setIsScrolled(window.scrollY > 20);

      // Hide Nav instantly on scroll
      setIsVisible(false);

      // Show Nav only when scrolling stops (150ms delay to match CTA disappearance)
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsVisible(true);
      }, 150); 
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Packages", href: "#packages" },
    { name: "Destinations", href: "#experiences" },
    { name: "Gallery", href: "/gallery" },
    { name: "Why Us", href: "#advantage" },
    { name: "Journeys", href: "#journeys" },
    { name: "Journal", href: "#journal" },
  ];

  return (
    <header 
      id="main-navbar"
      className={cn(
        "fixed w-full z-50 transition-all duration-700 ease-in-out",
        !isVisible && "translate-y-[-100%]",
        isScrolled 
          ? "top-2 px-2 md:px-4" 
          : "top-0 px-0"
      )}
    >
      <div 
        className={cn(
          "mx-auto flex justify-between items-center transition-all duration-700",
          effectiveScrolled 
            ? "max-w-6.9xl bg-white/90 backdrop-blur-md shadow-premium-lg rounded-full px-8 py-4 border border-border/50" 
            : "max-w-7xl px-4 py-4 bg-transparent"
        )}
      >
        <Link href="/" className="transition-all duration-500 flex items-center">
          <img 
            src="/assets/orovistaholidayslogo.png" 
            alt="Orovista Holidays" 
            className={cn(
              "h-10 md:h-10 w-auto object-contain transition-all duration-500",
              !effectiveScrolled && "brightness-0 invert"
            )}
          />
          <span className={cn(
            "text-[18px] md:text-[22px] font-headline tracking-tighter transition-colors duration-500 leading-none",
            effectiveScrolled ? "text-foreground" : "text-white"
          )}>
            Orovista Holidays
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-10 font-medium text-[11px] uppercase tracking-[0.15em]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all hover:after:w-full",
                effectiveScrolled ? "text-foreground/70" : "text-white/80"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
 
        <div className="flex items-center gap-6">
          <a href="#contact" className={cn(
            "hidden md:block px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-300",
            effectiveScrolled 
              ? "bg-foreground text-white hover:bg-primary hover:text-foreground shadow-md" 
              : "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-foreground"
          )}>
            Plan a Trip
          </a>
          
          <button
            className={cn(
              "md:hidden p-2 transition-colors",
              effectiveScrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-surface z-50 flex flex-col items-center justify-center gap-10 animate-in fade-in duration-500">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-8 right-8 p-3 text-foreground/50 hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[28px] font-black text-black/70 hover:text-primary transition-colors uppercase tracking-tighter"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#journeys"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 bg-black text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-primary hover:text-black transition-all"
          >
            Plan a Trip
          </a>
        </div>
      )}
    </header>
  );
}
