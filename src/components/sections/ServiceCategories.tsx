"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowUpRight,
  X,
  CheckCircle2,
  Users,
  ShieldCheck,
  Map,
  Zap,
  Globe,
  Heart,
  Smartphone,
  ChevronRight,
  ArrowRight,
  Quote,
  Star,
  Plus
} from 'lucide-react';

const categories = [
  {
    id: "01",
    title: "Group Tours",
    description: "Fun and exciting trips for everyone. We plan everything perfectly so you can enjoy the world with a great group of people.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800",
    color: "bg-[#eeeae7]",
    span: "md:col-span-8",
    details: {
      headline: "The Social Way to See the World.",
      philosophy: "We believe the best stories are made together. Our group journeys are built on the foundation of shared discovery, premium comfort, and absolute safety.",
      quote: "A group of strangers becomes a family of travelers within 48 hours of an Orovista journey.",
      features: [
        { title: "Intimate Group Sizes", desc: "No crowded buses. We limit groups to 12-18 people for a boutique feel." },
        { icon: <Heart />, title: "Personality Matching", desc: "We use a smart-match system to ensure you travel with like-minded explorers." },
        { icon: <ShieldCheck />, title: "Local Guardians", desc: "Two expert guides per group to ensure 24/7 support and security." },
        { icon: <Star />, title: "Elite Lodging", desc: "Shared experiences shouldn't mean shared bathrooms. Only 5-star heritage hotels." }
      ],
      process: ["Profile Registration", "Itinerary Customization", "The Pre-Trip Meet", "Global Departure"],
      faqs: [
        { q: "Can I travel solo?", a: "Absolutely. 40% of our travelers are solo explorers. We ensure safe, comfortable rooming options." },
        { q: "Are there hidden costs?", a: "No. From airport transfers to tips for local porters, everything is pre-cleared." }
      ]
    }
  },
  {
    id: "02",
    title: "Private Luxe",
    description: "Premium trips just for you and your family. Enjoy total privacy with the best luxury hotels and personal care.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800",
    color: "bg-white",
    span: "md:col-span-4",
    details: {
      headline: "Absolute Privacy. Unmatched Luxury.",
      philosophy: "Luxury is personal. For our private clients, we don't just book trips—we architect moments that stay with you forever.",
      quote: "Privacy is the ultimate luxury. We ensure your world remains yours, even at the edge of the world.",
      features: [
        { title: "Private Concierge", desc: "A dedicated destination manager available 24/7 via private secure line." },
        { icon: <Map />, title: "White-Glove Transfers", desc: "From private jets to luxury yachts, your transit is as exclusive as your stay." },
        { icon: <ShieldCheck />, title: "Closed-Gate Access", desc: "Private tours of museums and monuments after hours, just for your party." },
        { icon: <Zap />, title: "On-the-Spot Pivot", desc: "Change your entire day's plan on a whim. Our team handles the logistics instantly." }
      ],
      process: ["Elite Consultation", "Whiteboard Strategy", "Vendor Audits", "Seamless Execution"],
      faqs: [
        { q: "Is security provided?", a: "If requested, we provide certified private security and armored transit for high-profile clients." }
      ]
    }
  },
  {
    id: "03",
    title: "Corporate",
    description: "10+ Years of B2B Excellence. We handle high-stakes office meetings, team events, and rewarding tours with architectural precision.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800",
    color: "bg-white",
    span: "md:col-span-4",
    details: {
      headline: "10 Years of B2B Mastery.",
      philosophy: "Corporate travel shouldn't be a chore. We turn MICE into 'Experiences' that drive loyalty, team synergy, and results.",
      quote: "The best ideas are often born 30,000 miles away from the boardroom.",
      features: [
        { title: "10yr B2B Track Record", desc: "A decade of serving Fortune 500 companies with zero-error logistics." },
        { icon: <Globe />, title: "Global Scale", desc: "Whether it's a 20-person offsite or a 500-person summit, we scale perfectly." },
        { icon: <CheckCircle2 />, title: "GST & Tax Logic", desc: "Perfect corporate billing, international tax compliance, and transparent reporting." },
        { icon: <Zap />, title: "Branded Experiences", desc: "We integrate your brand identity into every touchpoint of the journey." }
      ],
      process: ["Strategy Session", "Budget Optimization", "On-Ground Management", "Impact Assessment"],
      faqs: [
        { q: "Do you handle Visas?", a: "Yes. Our in-house visa cell handles bulk processing for employees across all jurisdictions." }
      ]
    }
  },
  {
    id: "04",
    title: "School IV",
    description: "Safe and educational tours for schools. Students learn by visiting new places and having real-world adventures.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800",
    color: "bg-[#eeeae7]",
    span: "md:col-span-8",
    details: {
      headline: "Safe Steps into the Great Unknown.",
      philosophy: "We treat every student like they are our own. Our Industrial Visits (IV) are built on a bedrock of safety and curiosity.",
      quote: "Education isn't filling a bucket, but lighting a fire. We provide the spark through travel.",
      features: [
        { title: "24/7 Security Ring", desc: "Dedicated security officers and medically trained staff accompany every tour." },
        { icon: <Map />, title: "Curriculum Synergy", desc: "Trips designed around history, science, and geography school board syllabus." },
        { icon: <Smartphone />, title: "Parent Tracker", desc: "Live updates, photos, and location tracking for parents via Orovista App." },
        { icon: <ShieldCheck />, title: "Verified Partners", desc: "Hotels and vendors audited specifically for child-safety and food hygiene." }
      ],
      process: ["Safety Audit", "Route Mapping", "Educational Briefing", "Supervised Discovery"],
      faqs: [
        { q: "Is medical help available?", a: "Every school group has a certified paramedic and a 24-hour emergency vehicle on standby." }
      ]
    }
  }
];

export function ServiceCategories() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="w-full bg-white py-32 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 md:px-3">

        {/* Editorial Section Header */}
        <div className="relative mb-24 md:mb-32">
          <div className="absolute -top-12 -left-4 text-[120px] md:text-[200px] font-black text-black/[0.03] select-none pointer-events-none tracking-tighter italic leading-none">
            04
          </div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[40px] md:text-[54px] lg:text-[72px] font-bold leading-[0.8] text-black tracking-tighter uppercase flex flex-col"
                >
                  <span>Mastering</span>
                  <span className="text-[60px] md:text-[80px] lg:text-[110px] font-black leading-[0.8] text-black tracking-tighter uppercase md:ml-12 lg:ml-20 mt-4">THE ART OF</span>
                  <span className="text-[40px] md:text-[54px] lg:text-[72px] font-bold leading-[0.8] text-black tracking-tighter uppercase self-end md:self-start md:ml-40 lg:ml-60 mt-4">TRAVEL.</span>
                </motion.h2>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-[320px] pb-4 flex gap-6"
            >
              <div className="w-[1px] h-20 bg-black/10 hidden md:block" />
              <p className="text-[14px] md:text-[16px] text-black/50 font-medium leading-relaxed">
                We turn your dream trips into reality. From picking the best hotels to managing your travel, we handle everything for you.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Modular Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[450px]">

          {/* Card 01 - Group Tours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-[#eeeae7] rounded-[24px] overflow-hidden flex flex-col md:flex-row group border border-black/5"
          >
            <div className="p-10 md:w-1/2 flex flex-col justify-between">
              <div>
                <span className="text-[14px] font-black text-black/20 italic mb-4 block">#01</span>
                <h3 className="text-[32px] md:text-[42px] font-black tracking-tighter text-black uppercase leading-none mb-6">Group <br /> Tours</h3>
                <p className="text-[14px] text-black/50 font-medium leading-relaxed max-w-[280px]">{categories[0].description}</p>
              </div>
              <button
                onClick={() => setSelectedService(categories[0])}
                className="mt-8 flex items-center gap-2 text-black font-black uppercase text-[11px] tracking-widest cursor-pointer group-hover:gap-4 transition-all"
              >
                LEARN MORE <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="md:w-1/2 relative overflow-hidden p-3">
              <div className="w-full h-full overflow-hidden rounded-[30px]">
                <img src={categories[0].image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt="Group Tours - Social luxury travel experience" />
              </div>
            </div>
          </motion.div>

          {/* Card 02 - Private Luxe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-white border border-black/5 rounded-[24px] overflow-hidden group flex flex-col shadow-sm"
          >
            <div className="p-10 pb-0">
              <div className="flex justify-between items-start">
                <span className="text-[14px] font-black text-black/20 mb-4 block tracking-tighter italic">#02</span>
                <button onClick={() => setSelectedService(categories[1])} className="text-black/40 hover:text-black">
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>
              <h3 className="text-[28px] md:text-[32px] font-black tracking-tighter text-black uppercase leading-none mb-4">Private <br /> Luxe</h3>
            </div>
            <div className="mt-auto relative h-[250px] overflow-hidden rounded-t-[30px]">
              <img src={categories[1].image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt="Private Luxe - Personalized premium travel" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent flex items-end p-10">
                <p className="text-[13px] text-black/60 font-bold leading-tight uppercase tracking-tight">{categories[1].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Card 03 - Corporate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-white border border-black/5 rounded-[24px] overflow-hidden group flex flex-col shadow-sm"
          >
            <div className="p-10 pb-0">
              <div className="flex justify-between items-start">
                <span className="text-[14px] font-black text-black/20 mb-4 block tracking-tighter italic">#03</span>
                <button onClick={() => setSelectedService(categories[2])} className="text-black/40 hover:text-black">
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>
              <h3 className="text-[28px] md:text-[32px] font-black tracking-tighter text-black uppercase leading-none mb-4">Corporate <br /> Events</h3>
            </div>
            <div className="mt-auto relative h-[250px] overflow-hidden rounded-t-[40px]">
              <img src={categories[2].image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt="Corporate Events - B2B travel excellence" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent flex items-end p-10">
                <p className="text-[13px] text-black/60 font-bold leading-tight uppercase tracking-tight">{categories[2].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Card 04 - School IV */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 bg-[#eeeae7] rounded-[24px] overflow-hidden group flex flex-col md:flex-row-reverse shadow-sm border border-black/5"
          >
            <div className="p-10 md:w-1/2 flex flex-col justify-between">
              <div>
                <span className="text-[14px] font-black text-black/20 italic mb-4 block">#04</span>
                <h3 className="text-[32px] md:text-[42px] font-black tracking-tighter text-black uppercase leading-none mb-6">School <br /> IV Tours</h3>
                <p className="text-[14px] text-black/50 font-medium leading-relaxed max-w-[280px]">{categories[3].description}</p>
              </div>
              <button
                onClick={() => setSelectedService(categories[3])}
                className="mt-8 flex items-center gap-2 text-black font-black uppercase text-[11px] tracking-widest cursor-pointer group-hover:gap-4 transition-all"
              >
                LEARN MORE <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="md:w-1/2 relative overflow-hidden p-3">
              <div className="w-full h-full overflow-hidden rounded-[30px]">
                <img src={categories[3].image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt="School IV Tours - Safe and educational student travel" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Simplified Service Detail Overlay --- */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="fixed inset-0 z-[300] bg-white flex flex-col h-screen overflow-hidden font-sans"
            >
              {/* Top Navigation */}
              <div className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-black/5 z-[310] bg-white">
                <div className="flex items-center gap-4">
                  <span className="text-[14px] font-black text-black uppercase tracking-widest">{selectedService.title} Details</span>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-3 bg-neutral-100 text-black rounded-full hover:bg-black hover:text-white transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-grow overflow-y-auto">
                <div className="max-w-[1400px] mx-auto">

                  {/* Hero & Philosophy Split */}
                  <div className="flex flex-col lg:flex-row min-h-[60vh] border-b border-black/5">
                    <div className="lg:w-1/2 h-[40vh] lg:h-auto overflow-hidden">
                      <img src={selectedService.image} className="w-full h-full object-cover" alt={`${selectedService.title} Detail View`} />
                    </div>
                    <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-[#f8f6f4]">
                      <span className="text-amber-600 text-[12px] font-bold uppercase tracking-[0.3em] mb-4">Our Approach</span>
                      <h2 className="text-[32px] md:text-[48px] font-black text-black leading-tight uppercase mb-6">
                        {selectedService.details.headline}
                      </h2>
                      <p className="text-[16px] md:text-[18px] text-black/60 font-medium leading-relaxed max-w-xl">
                        {selectedService.details.philosophy}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid - Clean & Normal */}
                  <div className="p-8 md:p-16 py-24">
                    <h3 className="text-[24px] md:text-[32px] font-black text-black uppercase mb-12 tracking-tight">What We Offer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {selectedService.details.features.map((feature: any, i: number) => (
                        <div key={i} className="p-8 rounded-[32px] border border-black/5 bg-white hover:border-black/10 transition-all shadow-sm">
                          <div className="p-4 bg-neutral-50 rounded-2xl w-fit text-black mb-6">
                            {feature.icon || <Plus className="w-5 h-5" />}
                          </div>
                          <h5 className="text-[18px] font-bold text-black uppercase mb-3">{feature.title}</h5>
                          <p className="text-[14px] text-black/50 leading-relaxed font-medium">{feature.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process & CTA Split */}
                  <div className="flex flex-col md:flex-row border-t border-black/5 p-8 md:p-16 gap-16 bg-neutral-50">
                    <div className="md:w-1/2">
                      <h4 className="text-[20px] font-bold text-black uppercase mb-8">How it works</h4>
                      <div className="space-y-8">
                        {selectedService.details.process.map((step: string, i: number) => (
                          <div key={i} className="flex gap-6 items-start">
                            <span className="text-[14px] font-black text-black/20 mt-1">0{i + 1}</span>
                            <p className="text-[16px] font-extrabold text-black uppercase tracking-tight">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-1/2 flex items-center">
                      <div className="bg-black p-12 rounded-[48px] w-full text-white">
                        <h4 className="text-[24px] font-black uppercase mb-4">Ready to plan?</h4>
                        <p className="text-white/50 text-[14px] mb-10 leading-relaxed">Contact our travel strategists today to start your personalized {selectedService.title.toLowerCase()} journey.</p>
                        <button
                          onClick={() => {
                            const message = `Hello Orovista Holidays, I would like to enquire about the ${selectedService.title} service.`;
                            window.open(`https://wa.me/910000000000?text=${encodeURIComponent(message)}`, '_blank');
                          }}
                          className="w-full py-5 bg-white text-black rounded-full font-black uppercase text-[12px] tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-amber-400 transition-all font-sans"
                        >
                          Speak with Us <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
