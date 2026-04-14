"use client";

import Link from "next/link";
import { MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#eeeae7] font-sans overflow-hidden rounded-t-[2rem]">

      {/* Giant Watermark — TOP */}
      <div className="overflow-hidden">
        <p className="text-center mb-5 text-[60px] md:text-[100px] lg:text-[120px] font-black text-black/[0.06] uppercase tracking-tighter leading-none select-none">
          Orovista Holidays
        </p>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 pb-8">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-black/8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-[24px] font-black text-black uppercase tracking-tighter">
                Orovista<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-[12px] text-black/40 font-semibold uppercase tracking-tight leading-relaxed mb-5 max-w-[220px]">
              Seamless travel across 34+ countries with local expertise.
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-primary hover:text-black transition-all mb-5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Plan My Trip
            </a>
            <div className="flex gap-2">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/30 hover:text-black hover:border-black/30 transition-all">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h5 className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30 mb-4">Destinations</h5>
            <ul className="space-y-2.5">
              {["Europe & Baku", "Vietnam & Laos", "Dubai & Oman", "Ladakh & Kashmir", "Nepal & Sikkim", "Andaman & Manali"].map((d, i) => (
                <li key={i}>
                  <Link href="#" className="text-[12px] font-semibold text-black/40 hover:text-black uppercase tracking-tight transition-colors">{d}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30 mb-4">Company</h5>
            <ul className="space-y-2.5">
              {["About Us", "Our Team", "Packages", "Blog", "FAQs"].map((c, i) => (
                <li key={i}>
                  <Link href="#" className="text-[12px] font-semibold text-black/40 hover:text-black uppercase tracking-tight transition-colors">{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30 mb-4">Contact</h5>
            <ul className="space-y-2.5">
              <li><a href="tel:+919876543210" className="text-[12px] font-semibold text-black/40 hover:text-black uppercase tracking-tight transition-colors">+91 98765 43210</a></li>
              <li><a href="mailto:hello@orovista.com" className="text-[12px] font-semibold text-black/40 hover:text-black uppercase tracking-tight transition-colors">hello@orovista.com</a></li>
            </ul>
            <div className="mt-6 space-y-2.5">
              {["Privacy Policy", "Terms of Service"].map((s, i) => (
                <div key={i}><Link href="#" className="text-[12px] font-semibold text-black/40 hover:text-black uppercase tracking-tight transition-colors">{s}</Link></div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/25">
            © 2025 Orovista Holidays. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((item, i) => (
              <Link key={i} href="#" className="text-[10px] font-black uppercase tracking-widest text-black/25 hover:text-black/60 transition-colors">{item}</Link>
            ))}
            <span className="w-px h-3 bg-black/15" />
            <a
              href="https://www.linkedin.com/in/aqib-kha9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-black uppercase tracking-widest text-black/25 hover:text-primary transition-colors"
            >
              Developed by <span className="text-black/40">Aqib</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
