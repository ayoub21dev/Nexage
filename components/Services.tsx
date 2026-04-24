"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Users, Trophy, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Web\nDevelopment .",
      description: "High-performance websites and web applications built with clean code and modern technologies.",
      bullets: ["Custom Websites", "Web Applications", "E-Commerce Solutions", "CMS Development", "Performance Optimization"],
      image: "/service_web_dev.png",
    },
    {
      id: "02",
      title: "Graphic\nDesign .",
      description: "Visually compelling designs that communicate, engage, and leave a lasting impression.",
      bullets: ["Brand Identity", "UI/UX Design", "Web & Mobile Design", "Marketing Design", "Motion Graphics"],
      image: "/service_graphic_design.png",
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0 pointer-events-none dot-pattern opacity-30"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-[1400px]">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 lg:mb-24 gap-8 lg:gap-16">
          <div className="flex-[1.2]">
            <div className="flex items-center relative mb-6 lg:mb-8">
              <div className="absolute top-0 left-0 w-3 h-3 border-t-[2px] border-l-[2px] border-nexage-red"></div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-800 font-black ml-6">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-black">
              Solutions That Drive <br />
              Real <span className="text-nexage-red">Results</span>
            </h2>
          </div>

          <div className="flex-1 pt-4 lg:pt-0">
            <p className="text-gray-600 text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-xl">
              We combine design, technology, and strategy to deliver digital solutions that are fast, scalable, and built to convert.
            </p>
          </div>

          <div className="flex-none pt-4 lg:pt-0">
            <Link
              href="#services"
              className="inline-flex items-center space-x-4 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-black border border-gray-200 bg-white px-8 md:px-10 py-4 md:py-5 transition-all hover:border-nexage-red shadow-sm hover:shadow-lg"
              style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
            >
              <span>Explore All Services</span>
              <span className="text-nexage-red text-xl">→</span>
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 mb-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="relative bg-white border border-gray-200 p-8 md:p-12 lg:p-16 shadow-sm hover:shadow-xl transition-all duration-500 group"
              style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
            >
              {/* Corner Red Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-[3px] border-l-[3px] border-nexage-red"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-[3px] border-r-[3px] border-nexage-red"></div>
              <div className="absolute top-1/2 left-0 w-[1px] h-12 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
              <div className="absolute top-1/2 right-0 w-[1px] h-12 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
              <div className="absolute top-0 left-1/2 w-12 h-[1px] bg-gray-200 -translate-x-1/2 hidden md:block"></div>
              <div className="absolute bottom-0 left-1/2 w-12 h-[1px] bg-gray-200 -translate-x-1/2 hidden md:block"></div>
              
              <div className="flex flex-col md:flex-row gap-8 lg:gap-12 h-full">
                {/* Left Side: Text */}
                <div className="flex-[1] flex flex-col items-start z-10">
                  <span className="text-nexage-red font-black text-lg lg:text-xl mb-4 lg:mb-6 block">{service.id}</span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 lg:mb-6 tracking-tight text-black whitespace-pre-line leading-[1.05]">
                    {service.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-500 mb-8 font-medium leading-relaxed max-w-[95%]">
                    {service.description}
                  </p>

                  <div className="flex flex-col space-y-3 lg:space-y-4 mb-10">
                    {service.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-nexage-red rounded-full flex-shrink-0"></div>
                        <span className="text-[11px] lg:text-xs font-bold text-gray-700">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#"
                    className="mt-auto text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] text-gray-800 hover:text-nexage-red transition-all inline-flex items-center group/link"
                  >
                    <span>Learn More</span>
                    <span className="ml-3 text-nexage-red text-xl group-hover/link:translate-x-2 transition-transform">→</span>
                  </Link>
                </div>

                {/* Right Side: Image */}
                <div className="flex-[1] relative flex justify-end items-center pointer-events-none mt-12 md:mt-0">
                  <div className="relative w-full md:w-[140%] md:-right-[20%]">
                    <Image
                      src={service.image}
                      alt={service.title.replace('\n', ' ')}
                      width={800}
                      height={600}
                      className="object-contain w-full h-auto drop-shadow-2xl group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>

                  {/* Icons Stack for Web Dev */}
                  {service.id === "01" && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col space-y-3 translate-x-4 md:translate-x-8 lg:translate-x-12">
                      {['⚛️', 'NEXT.', 'TS', '≈'].map((icon, i) => (
                        <div key={i} className="w-10 h-10 lg:w-14 lg:h-14 bg-white border border-gray-100 shadow-md flex items-center justify-center text-[10px] lg:text-xs font-black text-gray-600" style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}>
                          {icon}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}
