"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Monitor, Layout, Smartphone, Palette, Briefcase, Zap, Globe } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Web Development",
      description: "High-performance websites and web applications built with clean code and modern technologies.",
      bullets: ["Custom Websites", "Web Applications", "E-Commerce", "CMS Systems", "Performance Opt."],
      icons: [Code2, Globe, Zap, Monitor],
      image: "/service_web_dev.png",
      dark: false,
    },
    {
      id: "02",
      title: "Graphic Design",
      description: "Visually compelling designs that communicate, engage, and leave a lasting impression.",
      bullets: ["Brand Identity", "UI/UX Design", "Marketing Assets", "Social Media", "Motion Graphics"],
      icons: [Palette, Layout, Smartphone, Briefcase],
      image: "/service_graphic_design.png",
      dark: true,
    },
  ];

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-black border-l-4 border-nexage-red pl-4">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Solutions That Drive <br />
              Real <span className="text-nexage-red">Results</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="#services"
              className="flex items-center space-x-4 text-[11px] font-black uppercase tracking-[0.4em] group hover:text-nexage-red transition-all"
            >
              <span>Explore All Services</span>
              <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-none p-10 lg:p-16 transition-all duration-500 group border ${
                service.dark 
                  ? "bg-[#0a0a0a] text-white border-white/5" 
                  : "bg-gray-50 text-black border-black/5"
              } hover:-translate-y-2`}
            >
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 h-full">
                <div className="flex-1">
                  <span className="text-2xl font-black text-nexage-red mb-8 block tracking-tighter">{service.id} _</span>
                  <h3 className="text-3xl lg:text-4xl font-black mb-6 tracking-tight">
                    {service.title} <span className="text-nexage-red">.</span>
                  </h3>
                  <p className={`text-base mb-10 max-w-sm font-medium leading-relaxed ${service.dark ? "text-gray-400" : "text-gray-600"}`}>
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12">
                    {service.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-nexage-red rounded-none"></div>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${service.dark ? "text-gray-300" : "text-gray-600"}`}>
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#"
                    className="text-[11px] font-black uppercase tracking-[0.4em] hover:text-nexage-red transition-all inline-flex items-center group/link"
                  >
                    <span>Learn More</span>
                    <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>

                <div className="hidden sm:flex flex-col justify-center space-y-6 pl-8 border-l border-white/5">
                   {service.icons.map((Icon, i) => (
                     <div key={i} className={`p-3 ${service.dark ? "bg-white/5" : "bg-black/5"} hover:bg-nexage-red transition-all group/icon cursor-default`}>
                        <Icon className={`w-5 h-5 transition-colors ${service.dark ? "text-white" : "text-black"} group-hover/icon:text-white`} />
                     </div>
                   ))}
                </div>
              </div>

              {/* Mockup Image Overlay */}
              <div className="absolute right-[-5%] bottom-[-5%] w-[50%] opacity-10 lg:opacity-40 transition-all duration-700 group-hover:scale-105 pointer-events-none">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={400}
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
