"use client";

import Link from "next/link";
import Image from "next/image";
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
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/assets/orovistaholidayslogo.png"
                alt="Orovista Holidays - Elite Travel Agency Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-8 brightness-0 invert grayscale"
              />
            </Link>
            <p className="text-[12px] text-black/40 font-semibold uppercase tracking-tight leading-relaxed mb-5 max-w-[220px]">
              Seamless travel across 34+ countries with local expertise.
            </p>
            <a
              href="https://wa.me/919619099699"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-primary hover:text-black transition-all mb-5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Plan My Trip
            </a>
            <div className="flex gap-2">
              <a href="https://www.instagram.com/orovistaholidays?utm_source=qr&igsh=MTA4d3p5aDlhOGszNQ==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/30 hover:text-black hover:border-black/30 transition-all">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.facebook.com/share/18XPXxkZx3/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/30 hover:text-black hover:border-black/30 transition-all">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/30 hover:text-black hover:border-black/30 transition-all">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h5 className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30 mb-4">Destinations</h5>
            <ul className="space-y-2.5">
              {[
                { name: "Europe & Baku", href: "#experiences" },
                { name: "Vietnam & Laos", href: "#experiences" },
                { name: "Dubai & Oman", href: "#experiences" },
                { name: "Ladakh & Kashmir", href: "#experiences" },
                { name: "Nepal & Sikkim", href: "#experiences" },
                { name: "Andaman & Manali", href: "#experiences" }
              ].map((d, i) => (
                <li key={i}>
                  <Link href={d.href} className="text-[12px] font-semibold text-black/40 hover:text-black uppercase tracking-tight transition-colors">{d.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30 mb-4">Company</h5>
            <ul className="space-y-2.5">
              {[
                { name: "About Us", href: "#about" },
                { name: "Our Team", href: "#team" },
                { name: "Packages", href: "#packages" },
                { name: "Blog", href: "#journal" },
                { name: "FAQs", href: "#faq" }
              ].map((c, i) => (
                <li key={i}>
                  <Link href={c.href} className="text-[12px] font-semibold text-black/40 hover:text-black uppercase tracking-tight transition-colors">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30 mb-4">Contact</h5>
            <ul className="space-y-2.5">
              <li><a href="tel:+919619099699" className="text-[12px] font-semibold text-black/40 hover:text-black uppercase tracking-tight transition-colors">+91 96190 99699</a></li>
              <li><a href="mailto:Orovistaholidays@gmail.com" className="text-[12px] font-semibold text-black/40 hover:text-black uppercase tracking-tight transition-colors">Orovistaholidays&#64;gmail.com</a></li>
              <li className="text-[12px] font-semibold text-black/30 uppercase tracking-tight leading-relaxed pt-2">
                107, First Floor, Crescent Business Park, Off Telephone Exchange Lane, Behind Fairfield Hotel, Saki Naka, Mumbai, Maharashtra 400072
              </li>
            </ul>
            <div className="mt-6 space-y-2.5">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms-of-service" }
              ].map((s, i) => (
                <div key={i}><Link href={s.href} className="text-[12px] font-semibold text-black/40 hover:text-black uppercase tracking-tight transition-colors">{s.name}</Link></div>
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
            {[
              { name: "Privacy", href: "/privacy-policy" },
              { name: "Terms", href: "/terms-of-service" },
              { name: "Cookies", href: "/privacy-policy" }
            ].map((item, i) => (
              <Link key={i} href={item.href} className="text-[10px] font-black uppercase tracking-widest text-black/25 hover:text-black/60 transition-colors">{item.name}</Link>
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
