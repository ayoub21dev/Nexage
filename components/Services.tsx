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
    <section id="services" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0 pointer-events-none dot-pattern opacity-30"></div>

      <div className="container mx-auto px-8 relative z-10 w-full max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <div className="flex-1">
            <div className="flex items-center relative mb-6">
              <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-nexage-red"></div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gray-800 font-bold ml-4">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-[32px] md:text-4xl lg:text-[42px] font-black leading-[1.1] tracking-tight text-black">
              Solutions That Drive <br />
              Real <span className="text-nexage-red">Results</span>
            </h2>
          </div>

          <div className="flex-1 lg:max-w-md pt-4 lg:pt-0">
            <p className="text-gray-600 text-[13px] font-medium leading-relaxed">
              We combine design, technology, and strategy to deliver digital solutions that are fast, scalable, and built to convert.
            </p>
          </div>

          <div className="flex-none pt-4 lg:pt-0">
            <Link
              href="#services"
              className="inline-flex items-center space-x-4 text-[9px] font-black uppercase tracking-[0.2em] text-black border border-gray-200 bg-white px-8 py-3 transition-all hover:border-nexage-red shadow-sm hover:shadow-md"
              style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
            >
              <span>Explore All Services</span>
              <span className="text-nexage-red text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="relative bg-white border border-gray-200 p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-500 group"
              style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
            >
              {/* Corner Red Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-[2px] border-l-[2px] border-nexage-red"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[2px] border-r-[2px] border-nexage-red"></div>
              <div className="absolute top-1/2 left-0 w-[1px] h-8 bg-gray-200 -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-[1px] h-8 bg-gray-200 -translate-y-1/2"></div>
              <div className="absolute top-0 left-1/2 w-8 h-[1px] bg-gray-200 -translate-x-1/2"></div>
              <div className="absolute bottom-0 left-1/2 w-8 h-[1px] bg-gray-200 -translate-x-1/2"></div>
              
              <div className="flex flex-col sm:flex-row gap-6 h-full">
                {/* Left Side: Text */}
                <div className="flex-[0.8] flex flex-col items-start z-10">
                  <span className="text-nexage-red font-black text-sm mb-4 block">{service.id}</span>
                  <h3 className="text-2xl lg:text-[28px] font-black mb-4 tracking-tight text-black whitespace-pre-line leading-[1.1]">
                    {service.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mb-6 font-medium leading-relaxed max-w-[90%]">
                    {service.description}
                  </p>

                  <div className="flex flex-col space-y-2 mb-8">
                    {service.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-nexage-red rounded-full flex-shrink-0"></div>
                        <span className="text-[10px] font-bold text-gray-600">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#"
                    className="mt-auto text-[9px] font-black uppercase tracking-[0.2em] text-gray-800 hover:text-nexage-red transition-all inline-flex items-center group/link"
                  >
                    <span>Learn More</span>
                    <span className="ml-3 text-nexage-red text-lg group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>

                {/* Right Side: Image */}
                <div className="flex-[1.2] relative flex justify-end items-center pointer-events-none mt-8 sm:mt-0">
                  <div className="relative w-[130%] -right-[15%]">
                    <Image
                      src={service.image}
                      alt={service.title.replace('\n', ' ')}
                      width={600}
                      height={450}
                      className="object-contain w-full h-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Icons Stack for Web Dev */}
                  {service.id === "01" && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col space-y-2 translate-x-4 lg:translate-x-8">
                      {['⚛️', 'NEXT.', 'TS', '≈'].map((icon, i) => (
                        <div key={i} className="w-8 h-8 lg:w-10 lg:h-10 bg-white border border-gray-100 shadow-md flex items-center justify-center text-[8px] lg:text-[10px] font-bold text-gray-600" style={{ clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)' }}>
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

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white border border-gray-200 py-6 px-4 sm:px-8 shadow-sm" 
          style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
        >
           {/* Corner Red Accents */}
           <div className="absolute top-0 left-0 w-3 h-3 border-t-[2px] border-l-[2px] border-nexage-red"></div>
           <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[2px] border-r-[2px] border-nexage-red"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 divide-x divide-gray-100">
            
            <div className="flex items-center space-x-3 lg:space-x-4 pl-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#FAFAFA] flex items-center justify-center border border-gray-100 text-black flex-shrink-0" style={{ clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)' }}>
                <Rocket className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <div className="text-xl lg:text-2xl font-black text-nexage-red leading-none mb-1">50+</div>
                <div className="text-[7px] lg:text-[8px] uppercase tracking-widest text-gray-500 font-bold">Projects Delivered</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 lg:space-x-4 pl-6 lg:pl-12">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#FAFAFA] flex items-center justify-center border border-gray-100 text-black flex-shrink-0" style={{ clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)' }}>
                <Users className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <div className="text-xl lg:text-2xl font-black text-nexage-red leading-none mb-1">30+</div>
                <div className="text-[7px] lg:text-[8px] uppercase tracking-widest text-gray-500 font-bold">Happy Clients</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 lg:space-x-4 pl-6 lg:pl-12">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#FAFAFA] flex items-center justify-center border border-gray-100 text-black flex-shrink-0" style={{ clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)' }}>
                <Trophy className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <div className="text-xl lg:text-2xl font-black text-nexage-red leading-none mb-1">98%</div>
                <div className="text-[7px] lg:text-[8px] uppercase tracking-widest text-gray-500 font-bold">Client Satisfaction</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 lg:space-x-4 pl-6 lg:pl-12">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#FAFAFA] flex items-center justify-center border border-gray-100 text-black flex-shrink-0" style={{ clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)' }}>
                <Clock className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <div className="text-xl lg:text-2xl font-black text-nexage-red leading-none mb-1">5+</div>
                <div className="text-[7px] lg:text-[8px] uppercase tracking-widest text-gray-500 font-bold">Years of Experience</div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
