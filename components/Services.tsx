"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  CornerDownLeft,
  CornerDownRight,
  CornerUpLeft,
  CornerUpRight,
  Rocket,
  Trophy,
  Users,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Web\nDevelopment .",
      description: "High-performance websites and web applications built with clean code and modern technologies.",
      bullets: ["Custom Websites", "Web Applications", "E-Commerce Solutions", "CMS Development", "Performance Optimization"],
      image: "/devservice.png",
    },
    {
      id: "02",
      title: "Graphic\nDesign .",
      description: "Visually compelling designs that communicate, engage, and leave a lasting impression.",
      bullets: ["Brand Identity", "UI/UX Design", "Web & Mobile Design", "Marketing Design", "Motion Graphics"],
      image: "/Graphicdesign.png",
    },
    {
      id: "03",
      title: "AI\nSolutions .",
      description: "Intelligent automation and machine learning models tailored to optimize your business operations.",
      bullets: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "Process Automation", "AI Consultation"],
      image: "/AIsolution.png",
    },
    {
      id: "04",
      title: "App\nDevelopment .",
      description: "Native and cross-platform mobile apps designed for smooth performance and everyday usability.",
      bullets: ["iOS & Android Apps", "Cross-Platform Builds", "App UI/UX Design", "Backend Integration", "Store Deployment"],
      image: "/devweb.png",
    },
  ];

  const mainClipPath =
    "polygon(16px 0, calc(50% - 16px) 0, 50% 12px, calc(50% + 16px) 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, calc(50% + 16px) 100%, 50% calc(100% - 12px), calc(50% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)";

  return (
    <section id="services" className="scroll-mt-28 py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 z-0 pointer-events-none dot-pattern opacity-30"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-[1560px]">
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
              style={{ clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)" }}
            >
              <span>Explore All Services</span>
              <ArrowRight className="h-5 w-5 text-nexage-red" strokeWidth={2.4} />
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 xl:gap-10 mb-8">
          {services.map((service, idx) => {
            const titleParts = service.title.split(" .");
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="relative bg-gray-200 hover:bg-nexage-red transition-colors duration-500 p-[1px] shadow-sm hover:shadow-xl group"
                style={{ clipPath: mainClipPath }}
              >
                <div
                  className="relative bg-white h-full w-full p-6 sm:p-8 lg:p-10 xl:p-12 2xl:p-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.9fr)] gap-8 lg:gap-10 xl:gap-12 2xl:gap-8"
                  style={{ clipPath: mainClipPath }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-transparent to-nexage-red/5 pointer-events-none"></div>

                  {/* Corner Red Accents */}
                  <CornerUpLeft
                    className="absolute top-5 left-5 w-8 h-8 sm:w-9 sm:h-9 text-nexage-red/55 pointer-events-none group-hover:text-nexage-red/80 transition-colors duration-300"
                    strokeWidth={1.8}
                  />
                  <CornerUpRight
                    className="absolute top-5 right-5 w-8 h-8 sm:w-9 sm:h-9 text-nexage-red/55 pointer-events-none group-hover:text-nexage-red/80 transition-colors duration-300"
                    strokeWidth={1.8}
                  />
                  <CornerDownRight
                    className="absolute bottom-5 right-5 w-8 h-8 sm:w-9 sm:h-9 text-nexage-red/55 pointer-events-none group-hover:text-nexage-red/80 transition-colors duration-300"
                    strokeWidth={1.8}
                  />
                  <CornerDownLeft
                    className="absolute bottom-5 left-5 w-8 h-8 sm:w-9 sm:h-9 text-nexage-red/55 pointer-events-none group-hover:text-nexage-red/80 transition-colors duration-300"
                    strokeWidth={1.8}
                  />

                  {/* Left Side: Content */}
                  <div className="flex flex-col items-start z-10 pt-8 pb-10 sm:pt-10 sm:pb-12">
                    <span className="text-nexage-red font-bold text-lg mb-4 block leading-none">{service.id}</span>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-4xl font-black text-black leading-[1.1] mb-5 tracking-tight uppercase whitespace-pre-line">
                      {titleParts[0]}
                    </h3>
                    <div className="w-2.5 h-2.5 bg-nexage-red rounded-full mb-6"></div>
                    <p className="text-[15px] text-gray-600 leading-relaxed mb-8 max-w-[360px]">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-10">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center space-x-3 text-[13px] font-semibold text-gray-800">
                          <div className="w-1.5 h-1.5 bg-nexage-red flex-shrink-0"></div>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="#"
                      className="mt-auto text-[12px] font-black uppercase tracking-[0.15em] text-black hover:text-nexage-red transition-all inline-flex items-center group/link"
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight
                        className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-2"
                        strokeWidth={2.5}
                      />
                    </Link>
                  </div>

                  {/* Right Side: Laptop Illustration */}
                  <div className="relative flex justify-center lg:justify-end items-center mt-10 lg:mt-0 min-w-0">
                    <div className="relative w-full max-w-[230px] sm:max-w-[280px] lg:max-w-[340px] 2xl:max-w-[320px]">
                      {/* Laptop Screen */}
                      <div className="w-full aspect-[320/215] bg-[#1a1a2e] rounded-t-lg mx-auto relative overflow-hidden border-[3px] border-[#374151] border-b-0 shadow-2xl">

                        <div className="p-3 h-full flex flex-col">
                          {/* Screen Header */}
                          <div className="flex gap-1.5 mb-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          </div>
                          {/* Screen Body */}
                          <div className="flex-1 relative bg-white rounded overflow-hidden">
                            <Image
                              src={service.image}
                              alt={service.title.replace("\n", " ")}
                              fill
                              sizes="(max-width: 640px) 230px, (max-width: 1024px) 280px, (max-width: 1536px) 340px, 320px"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      {/* Laptop Base */}
                      <div className="w-[calc(100%+20px)] max-w-[360px] h-2 bg-[#d1d5db] rounded-b-md mx-auto relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 md:w-10 h-1 bg-[#9ca3af] rounded-b-sm"></div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div
          className="mt-12 bg-gray-200 p-[1px] relative shadow-sm hover:shadow-md transition-shadow duration-300"
          style={{ clipPath: mainClipPath }}
        >
          <div
            className="bg-white h-full w-full py-8 px-6 md:px-12 flex flex-wrap justify-between items-center gap-8 lg:gap-4"
            style={{ clipPath: mainClipPath }}
          >
            <div className="flex items-center space-x-4 w-full sm:w-[calc(50%-1rem)] xl:w-auto">
              <div
                className="w-12 h-12 md:w-14 md:h-14 bg-[#FAFAFA] flex items-center justify-center text-gray-700 shadow-sm border border-gray-100"
                style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
              >
                <Rocket className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-nexage-red leading-none mb-1">50+</div>
                <div className="text-[10px] md:text-[11px] font-black text-gray-500 uppercase tracking-widest">Projects Delivered</div>
              </div>
            </div>

            <div className="hidden xl:block w-[1px] h-12 bg-gray-200"></div>

            <div className="flex items-center space-x-4 w-full sm:w-[calc(50%-1rem)] xl:w-auto">
              <div
                className="w-12 h-12 md:w-14 md:h-14 bg-[#FAFAFA] flex items-center justify-center text-gray-700 shadow-sm border border-gray-100"
                style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
              >
                <Users className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-nexage-red leading-none mb-1">30+</div>
                <div className="text-[10px] md:text-[11px] font-black text-gray-500 uppercase tracking-widest">Happy Clients</div>
              </div>
            </div>

            <div className="hidden xl:block w-[1px] h-12 bg-gray-200"></div>

            <div className="flex items-center space-x-4 w-full sm:w-[calc(50%-1rem)] xl:w-auto">
              <div
                className="w-12 h-12 md:w-14 md:h-14 bg-[#FAFAFA] flex items-center justify-center text-gray-700 shadow-sm border border-gray-100"
                style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
              >
                <Trophy className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-nexage-red leading-none mb-1">98%</div>
                <div className="text-[10px] md:text-[11px] font-black text-gray-500 uppercase tracking-widest">Client Satisfaction</div>
              </div>
            </div>

            <div className="hidden xl:block w-[1px] h-12 bg-gray-200"></div>

            <div className="flex items-center space-x-4 w-full sm:w-[calc(50%-1rem)] xl:w-auto">
              <div
                className="w-12 h-12 md:w-14 md:h-14 bg-[#FAFAFA] flex items-center justify-center text-gray-700 shadow-sm border border-gray-100"
                style={{ clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)" }}
              >
                <Clock className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-black text-nexage-red leading-none mb-1">5+</div>
                <div className="text-[10px] md:text-[11px] font-black text-gray-500 uppercase tracking-widest">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
