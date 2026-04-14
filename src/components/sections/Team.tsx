"use client";

import { motion } from 'framer-motion';

export function Team() {
  return (
    <section id="team" className="w-full bg-white overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-3 md:px-3">
        
        {/* Main Team Container - Warmer Beige */}
        <div className="relative bg-[#eeeae7] rounded-[25px] md:rounded-[35px] px-4 md:px-16 pt-10 flex flex-col md:flex-row items-end justify-between overflow-hidden">
          
          {/* Left Principal - Pushed further to the left edge */}
          <div className="relative z-10 w-full md:w-[30%] lg:w-[28%] flex flex-col order-2 md:order-1 mt-8 md:mt-0 md:-ml-6 lg:-ml-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[1/1.2] w-full"
            >
              <img 
                src="/assets/cofounder.png" 
                alt="Jay Britto"
                className="w-full h-full object-cover object-top mix-blend-multiply grayscale-[0.2]"
              />
            </motion.div>
          </div>

          {/* Center Info Block - The Architectural Tab Card */}
          <div className="relative z-20 w-full md:w-[40%] self-stretch flex flex-col justify-end items-center order-1 md:order-2">
            
            {/* The Tab Shape Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full flex flex-col items-center"
            >
              {/* Top Narrow Part */}
              <div className="bg-white px-6 md:px-10 pt-5 md:pt-5 pb-2 rounded-t-[25px] md:rounded-t-[30px] w-[90%] md:w-[85%] flex flex-col items-center">
                <span className="text-[12px] md:text-[16px] lg:text-[18px] font-bold text-black tracking-widest uppercase mb-1">MEET THE</span>
              </div>
              
              {/* Bottom Wide Part */}
              <div className="bg-white w-full md:rounded-t-[30px] px-6 md:px-12 pb-10 md:pb-12 pt-0 text-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center relative">
                 <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-black leading-[0.8] text-black tracking-tighter uppercase mb-6 md:mb-10 font-sans">
                  PRINCIPALS
                </h2>
                
                {/* Fanned Out Pills Gallery */}
                <div className="flex -space-x-4 mb-6 md:mb-10 justify-center">
                   <div className="w-14 md:w-30 h-8 md:h-10 rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400" className="w-full h-full object-cover" alt="" />
                   </div>
                   <div className="w-14 md:w-30 h-8 md:h-10 rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400" className="w-full h-full object-cover" alt="" />
                   </div>
                   <div className="w-8 md:w-30 h-8 md:h-10 rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=400" className="w-full h-full object-cover" alt="" />
                   </div>
                </div>

                <p className="text-[12px] md:text-[14px] leading-relaxed text-black/50 font-medium max-w-[280px] md:max-w-[320px] font-sans mx-auto">
                  As visionaries of elite travel, our founders oversee the day-to-day operations of Orovista Holidays and the curation of our firm's bespoke global luxury itineraries.
                </p>

                {/* INVERTED RADIUS (Ulta Corner) AT THE BOTTOM BASE */}
                {/* This trick uses a small square div containing a rounded corner of the background color. 
                    By placing this over the white card corner, it creates the visual illusion of a concave cutout. */}
                <div className="absolute bottom-0 -right-[25px] w-[25px] h-[25px] bg-white hidden md:block">
                   <div className="w-full h-full bg-[#eeeae7] rounded-bl-[25px]"></div>
                </div>
                <div className="absolute bottom-0 -left-[25px] w-[25px] h-[25px] bg-white hidden md:block">
                   <div className="w-full h-full bg-[#eeeae7] rounded-br-[25px]"></div>
                </div>
              </div>

              {/* Top Shoulder Concave Corners */}
              <div className="absolute top-[38px] md:top-[43px] left-[5%] md:left-[7.5%] w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-white -z-10 -translate-x-full hidden sm:block">
                 <div className="w-full h-full bg-[#eeeae7] rounded-tr-[24px] md:rounded-tr-[32px]"></div>
              </div>
              <div className="absolute top-[38px] md:top-[43px] right-[5%] md:right-[7.5%] w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-white -z-10 translate-x-full hidden sm:block">
                 <div className="w-full h-full bg-[#eeeae7] rounded-tl-[24px] md:rounded-tl-[32px]"></div>
              </div>

            </motion.div>
          </div>

          {/* Right Principal - Pushed further to the right edge */}
          <div className="relative z-10 w-full md:w-[30%] lg:w-[28%] flex flex-col order-3 mt-8 md:mt-0 md:-mr-6 lg:-mr-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[1/1.2] w-full"
            >
              <img 
                src="/assets/founder.png" 
                alt="David Charette"
                className="w-full h-full object-cover object-top mix-blend-multiply grayscale-[0.2]"
              />
            </motion.div>
          </div>

        </div>

        {/* Names Footer - Bold Sans Only */}
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 px-2">
           <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <h4 className="text-[24px] md:text-[32px] lg:text-[42px] font-black tracking-tighter text-black uppercase leading-[0.9] mb-2 font-sans">Jay Britto</h4>
             <p className="text-[10px] md:text-[11px] font-bold text-black/30 tracking-[0.25em] uppercase font-sans">STRATEGIC TRAVEL PARTNER</p>
           </div>
           
           <div className="flex flex-col items-center md:items-end text-center md:text-right">
             <h4 className="text-[24px] md:text-[32px] lg:text-[42px] font-black tracking-tighter text-black uppercase leading-[0.9] mb-2 font-sans">David Charette</h4>
             <p className="text-[10px] md:text-[11px] font-bold text-black/30 tracking-[0.25em] uppercase font-sans">CHIEF TRAVEL CURATOR</p>
           </div>
        </div>

      </div>
    </section>
  );
}
