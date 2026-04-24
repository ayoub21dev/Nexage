"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Bot,
  Clock,
  Code2,
  Cpu,
  CornerDownLeft,
  CornerDownRight,
  CornerUpLeft,
  CornerUpRight,
  Image as ImageIcon,
  Layout,
  Monitor,
  Network,
  Palette,
  PenTool,
  Rocket,
  Smartphone,
  Terminal,
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
      image: "/hero_mockup_v2.png",
      icons: [
        <Code2 key="web-1" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-700" strokeWidth={2.5} />,
        <Terminal key="web-2" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-700" strokeWidth={2.5} />,
        <Monitor key="web-3" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-700" strokeWidth={2.5} />,
        <Smartphone key="web-4" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-700" strokeWidth={2.5} />,
      ],
    },
    {
      id: "02",
      title: "Graphic\nDesign .",
      description: "Visually compelling designs that communicate, engage, and leave a lasting impression.",
      bullets: ["Brand Identity", "UI/UX Design", "Web & Mobile Design", "Marketing Design", "Motion Graphics"],
      image: "/service_graphic_design.png",
      icons: [
        <PenTool key="design-1" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-700" strokeWidth={2.5} />,
        <Palette key="design-2" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-700" strokeWidth={2.5} />,
        <ImageIcon key="design-3" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-700" strokeWidth={2.5} />,
        <Layout key="design-4" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-700" strokeWidth={2.5} />,
      ],
    },
    {
      id: "03",
      title: "AI\nSolutions .",
      description: "Intelligent automation and machine learning models tailored to optimize your business operations.",
      bullets: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "Process Automation", "AI Consultation"],
      image: "/devweb.png", // Using the existing image as placeholder
      icons: [
        <Cpu key="ai-1" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-700" strokeWidth={2.5} />,
        <Brain key="ai-2" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-700" strokeWidth={2.5} />,
        <Network key="ai-3" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-700" strokeWidth={2.5} />,
        <Bot key="ai-4" className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-700" strokeWidth={2.5} />,
      ],
    },
  ];

  const mainClipPath =
    "polygon(16px 0, calc(50% - 16px) 0, 50% 12px, calc(50% + 16px) 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, calc(50% + 16px) 100%, 50% calc(100% - 12px), calc(50% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)";

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
              style={{ clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)" }}
            >
              <span>Explore All Services</span>
              <ArrowRight className="h-5 w-5 text-nexage-red" strokeWidth={2.4} />
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 mb-8">
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
                  className="relative bg-white h-full w-full p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-8 lg:gap-12"
                  style={{ clipPath: mainClipPath }}
                >
                  {/* Corner Red Accents */}
                  <CornerUpLeft
                    className="absolute top-0 left-0 w-7 h-7 text-nexage-red/70 pointer-events-none group-hover:text-nexage-red transition-colors duration-300"
                    strokeWidth={1.8}
                  />
                  <CornerUpRight
                    className="absolute top-0 right-0 w-7 h-7 text-nexage-red/70 pointer-events-none group-hover:text-nexage-red transition-colors duration-300"
                    strokeWidth={1.8}
                  />
                  <CornerDownRight
                    className="absolute bottom-0 right-0 w-7 h-7 text-nexage-red/70 pointer-events-none group-hover:text-nexage-red transition-colors duration-300"
                    strokeWidth={1.8}
                  />
                  <CornerDownLeft
                    className="absolute bottom-0 left-0 w-7 h-7 text-nexage-red/70 pointer-events-none group-hover:text-nexage-red transition-colors duration-300"
                    strokeWidth={1.8}
                  />

                  {/* Left Side: Text */}
                  <div className="flex-[1] flex flex-col items-start z-10">
                    <span className="text-nexage-red font-black text-lg lg:text-xl mb-4 lg:mb-6 block">{service.id}</span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 lg:mb-6 tracking-tight text-black whitespace-pre-line leading-[1.05]">
                      {titleParts[0]} <span className="text-nexage-red">.</span>
                    </h3>
                    <p className="text-sm lg:text-base text-gray-500 mb-8 font-medium leading-relaxed max-w-[95%]">
                      {service.description}
                    </p>

                    <div className="flex flex-col space-y-3 lg:space-y-4 mb-10">
                      {service.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-nexage-red flex-shrink-0"></div>
                          <span className="text-[11px] lg:text-xs font-bold text-gray-700">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="#"
                      className="mt-auto text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] text-gray-800 hover:text-nexage-red transition-all inline-flex items-center group/link"
                    >
                      <span>Learn More</span>
                      <ArrowRight
                        className="ml-3 h-4 w-4 text-nexage-red transition-transform group-hover/link:translate-x-2"
                        strokeWidth={2.4}
                      />
                    </Link>
                  </div>

                  {/* Right Side: Image */}
                  <div className="flex-[1] relative flex justify-end items-center pointer-events-none mt-12 md:mt-0">
                    {/* Subtle Grid Lines behind image */}
                    <div className="absolute inset-0 pointer-events-none hidden md:block opacity-20">
                      <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-gray-300"></div>
                      <div className="absolute bottom-1/4 left-0 right-0 h-[1px] bg-gray-300"></div>
                      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-gray-300"></div>
                      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-gray-300"></div>
                    </div>

                    <div className={`relative w-full ${service.id === '01' ? 'md:w-[160%] md:-right-[30%] lg:w-[170%] lg:-right-[35%] xl:w-[185%] xl:-right-[40%]' : 'md:w-[140%] md:-right-[20%]'}`}>
                      <Image
                        src={service.image}
                        alt={titleParts[0].replace("\n", " ")}
                        width={800}
                        height={600}
                        className="object-contain w-full h-auto drop-shadow-2xl group-hover:scale-[1.03] transition-transform duration-700 relative z-10"
                      />
                    </div>

                    {/* Lucide Icons Stack */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col space-y-3 translate-x-4 md:translate-x-8 lg:translate-x-12 z-20">
                      {service.icons.map((icon, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 lg:w-14 lg:h-14 bg-white border border-gray-100 shadow-md flex items-center justify-center transition-transform hover:scale-110"
                          style={{ clipPath: "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)" }}
                        >
                          {icon}
                        </div>
                      ))}
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
