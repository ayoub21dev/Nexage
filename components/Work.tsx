"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Work() {
  const projects = [
    {
      title: "SaaS Dashboard",
      category: "WEB DEVELOPMENT",
      type: "Enterprise Application",
      image: "/project_saas.png",
    },
    {
      title: "E-Commerce Platform",
      category: "ECOMMERCE",
      type: "Online Store",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Fintech Mobile App",
      category: "UI/UX DESIGN",
      type: "Mobile App",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Brand Identity",
      category: "BRANDING",
      type: "Brand Vision",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19255a7a?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id="work" className="scroll-mt-28 py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#111111] z-0"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-black border-l-4 border-nexage-red pl-4">
                OUR WORK
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Digital Experiences <br />
              That Make an <span className="text-nexage-red">Impact.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:items-end"
          >
            <p className="text-gray-400 text-lg max-w-sm mb-8 lg:text-right font-medium">
              We partner with startups and established brands to create digital products that drive growth.
            </p>
            <Link
              href="#work"
              className="group flex items-center space-x-4 bg-white text-black px-8 py-4 rounded-full transition-all duration-300 hover:bg-nexage-red hover:text-white"
            >
              <span className="text-xs font-black uppercase tracking-widest">View All Projects</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-none bg-gray-900 border border-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-nexage-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Pill */}
                <div className="absolute top-6 left-6">
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full">
                    <span className="text-[9px] uppercase font-black tracking-widest text-white">{project.category}</span>
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black mb-1 tracking-tight">{project.title}</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{project.type}</p>
                  </div>
                  <span className="text-4xl font-black text-white/10 group-hover:text-nexage-red transition-colors">0{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
