"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Rocket, Users, Trophy, Clock } from "lucide-react";

const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const target = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = (totalMiliseconds / end);

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function Stats() {
  const stats = [
    { label: "Projects Delivered", value: "50+", icon: Rocket },
    { label: "Happy Clients", value: "30+", icon: Users },
    { label: "Client Satisfaction", value: "98%", icon: Trophy },
    { label: "Years of Experience", value: "5+", icon: Clock },
  ];

  return (
    <section className="py-24 border-y border-gray-100 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.label} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="flex items-center space-x-8 group"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-white border-2 border-gray-100 flex items-center justify-center text-black group-hover:border-nexage-red group-hover:bg-nexage-red/5 transition-all duration-500 rounded-none transform group-hover:rotate-6">
                  <stat.icon className="w-8 h-8 group-hover:text-nexage-red transition-colors" />
                </div>
                {/* Decorative dots */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-nexage-red/10 group-hover:bg-nexage-red transition-colors"></div>
              </div>
              
              <div className="flex flex-col">
                <div className="text-5xl font-black text-black tracking-tighter mb-1">
                  <Counter value={stat.value} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-black whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
