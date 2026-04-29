"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

export function ReadyToExplore() {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
      });

      if (response.ok) {
        setSent(true);
        setPhone("");
        setTimeout(() => setSent(false), 4000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-white py-10 md:py-14 font-sans">
      <div className="max-w-[1400px] mx-auto px-3 md:px-3">

        {/* Cinematic Card */}
        <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden min-h-[380px] md:min-h-[460px] flex items-center justify-center text-center group">

          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
            className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[4000ms]"
            alt="Start your journey with Orovista Holidays - Exclusive travel network"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Content */}
          <div className="relative z-10 px-6 md:px-12 max-w-2xl w-full">
            <h2 className="text-[36px] md:text-[52px] lg:text-[64px] font-bold text-white leading-tight tracking-tight mb-4">
              Your Story Begins <br /> at Orovista.
            </h2>
            <p className="text-[14px] md:text-[16px] text-white/70 font-medium leading-relaxed mb-10 max-w-md mx-auto">
              Join our exclusive network for priority access to curated travel packages and member-only pricing.
            </p>

            {/* Dual Action Pill */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">

              {/* Phone Input + Submit */}
              {sent ? (
                <div className="flex-1 w-full flex items-center justify-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-6 py-3.5">
                  <Send className="w-4 h-4 text-primary" />
                  <span className="text-white font-bold text-[13px] uppercase tracking-widest">We'll call you soon!</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 w-full flex items-center bg-white/15 backdrop-blur-md border border-white/20 rounded-full overflow-hidden pr-1.5 pl-5">
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder:text-white/50 text-[13px] font-medium outline-none py-3.5"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-[12px] uppercase tracking-wider hover:bg-primary transition-all shrink-0 disabled:opacity-70"
                  >
                    {loading ? "Sending..." : "Get Called"}
                  </button>
                </form>
              )}

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919619099699?text=Hi%20Orovista!%20I%27d%20like%20to%20plan%20a%20trip."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-bold text-[12px] uppercase tracking-wider hover:bg-[#1ebe5d] transition-all shrink-0 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
