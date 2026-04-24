"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none dot-pattern opacity-30"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - 50% */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="flex items-center space-x-4 mb-8">
               <span className="text-nexage-red font-black text-lg tracking-tighter">01/06</span>
               <div className="h-6 w-[1px] bg-gray-300"></div>
               <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-black">
                 Innovation First
               </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-8 text-black">
              Engineering <br />
              <span className="text-nexage-red">Digital</span> <br />
              <span className="text-2xl md:text-3xl">Experiences for the Next Generation.</span>
            </h1>

            <p className="text-gray-700 text-base md:text-lg max-w-sm mb-12 leading-relaxed font-medium">
              Nexage is a digital agency crafting high-performance websites and stunning designs that help forward-thinking brands stand out and scale faster.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Link
                href="#contact"
                className="bg-black text-white px-10 py-4 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-nexage-red hover:shadow-lg transition-all duration-300"
              >
                Start a Project
              </Link>
              <Link
                href="#work"
                className="flex items-center space-x-3 text-xs font-black uppercase tracking-[0.2em] group hover:text-nexage-red transition-all"
              >
                <span>View Our Work</span>
                <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Right Side - 50% - Contained Mockup */}
          <div className="w-full lg:w-1/2 relative flex justify-center items-center py-12">
            {/* Red Radial Glow Under Mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-red-500/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative z-10 w-full max-w-lg animate-float"
            >
              <Image
                src="/hero_mockup.png"
                alt="Nexage Digital Experience Mockup"
                width={700}
                height={600}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* SYSTEM ONLINE Badge */}
            <div className="absolute top-0 right-0 md:right-10 flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-black/5 px-4 py-1.5 rounded-full">
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">System Online</span>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Text Indicator */}
      <div className="absolute left-6 bottom-20 hidden lg:flex flex-col items-center space-y-12">
        <span className="rotate-90 text-[10px] font-black uppercase tracking-[0.6em] text-gray-300 origin-left whitespace-nowrap">
          Scroll to Explore
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-gray-200 to-transparent"></div>
      </div>
    </section>
  );
}
