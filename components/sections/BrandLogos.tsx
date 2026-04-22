'use client'
import { motion } from 'framer-motion'
import { Cloud, Zap, Shield, Cpu, Activity, LayoutGrid } from 'lucide-react'

const brands = [
  { name: 'ArcBase', icon: LayoutGrid },
  { name: 'CloudNova', icon: Cloud },
  { name: 'UltraSlash', icon: Zap },
  { name: 'Pixelate', icon: Shield },
  { name: 'Flowbase', icon: Activity },
  { name: 'Vertex', icon: Cpu },
]

export function BrandLogos() {
  return (
    <div className="py-12 border-y border-brand-crimson/5 bg-brand-black relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap justify-between items-center gap-8 lg:gap-12 grayscale opacity-50">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 group hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            <brand.icon className="w-5 h-5 text-brand-white group-hover:text-brand-crimson transition-colors" />
            <span className="text-sm font-semibold tracking-widest uppercase font-display text-brand-white group-hover:text-brand-crimson transition-colors">
              {brand.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
