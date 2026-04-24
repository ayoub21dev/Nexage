"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAFA] pt-20">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none dot-pattern opacity-30"></div>
      
      {/* Floating Left Indicator */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center space-y-6 z-20">
        <div className="text-center font-black leading-none flex flex-col items-center">
           <span className="text-xl block text-black">01</span>
           <span className="text-[10px] text-gray-400 block mt-1">/06</span>
        </div>
        <div className="flex flex-col space-y-3 mt-4">
           <div className="w-1.5 h-1.5 bg-nexage-red rounded-full shadow-[0_0_8px_rgba(255,0,0,0.8)]"></div>
           <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
           <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
        </div>
        
        {/* Scroll To Explore Indicator */}
        <div className="absolute top-48 flex flex-col items-center space-y-12">
          <span className="rotate-90 text-[8px] font-black uppercase tracking-[0.6em] text-gray-400 origin-left whitespace-nowrap">
            Scroll to Explore
          </span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-gray-300 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Side Content */}
          <div className="w-full lg:w-5/12 flex flex-col items-start relative z-30 pt-10 lg:pt-0">
            
            {/* Top Label with Brackets */}
            <div className="inline-flex items-center relative px-4 py-2 mb-8">
              <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-nexage-red"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-nexage-red"></div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 font-bold whitespace-nowrap">
                We design. We code. We <span className="text-nexage-red font-black">elevate</span> brands.
              </span>
            </div>

            <h1 className="text-[40px] md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight mb-8 text-black">
              Engineering <br />
              <span className="text-nexage-red">Digital</span> <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-black">Experiences <br className="hidden md:block"/> for the Next Generation.</span>
            </h1>

            <p className="text-gray-600 text-sm md:text-base max-w-[90%] mb-12 leading-relaxed font-medium">
              Nexage is a digital agency crafting high-performance websites and stunning designs that help forward-thinking brands stand out and scale faster.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-6 sm:space-y-0 sm:space-x-10">
              {/* Sci-Fi Button */}
              <Link
                href="#contact"
                className="relative group bg-black text-white px-10 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(255,0,0,0.15)] hover:shadow-[0_0_30px_rgba(255,0,0,0.4)]"
                style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                {/* Red edge accents */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-1/2 bg-nexage-red shadow-[0_0_8px_red]"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-1/2 bg-nexage-red shadow-[0_0_8px_red]"></div>
                
                <span className="relative z-10 flex items-center space-x-4">
                  <span>Start a Project</span>
                  <span className="text-nexage-red text-lg">→</span>
                </span>
              </Link>

              <Link
                href="#work"
                className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-800 group hover:text-nexage-red transition-all"
              >
                <span>View Our Work</span>
                <span className="text-nexage-red text-lg group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Right Side - Mockup Image */}
          <div className="w-full lg:w-7/12 relative mt-20 lg:mt-0 flex justify-end items-center pointer-events-none">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="relative z-10 w-full lg:w-[145%] lg:translate-x-[20%] xl:w-[155%] xl:translate-x-[25%]"
            >
              <Image
                src="/hero_mockup_v2.png"
                alt="Nexage Digital Experience Mockup"
                width={1800}
                height={1350}
                className="object-contain drop-shadow-[0_20px_50px_rgba(255,0,0,0.1)] w-full h-auto"
                priority
              />
            </motion.div>


          </div>

        </div>
      </div>
    </section>
  );
}
