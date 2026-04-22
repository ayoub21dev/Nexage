'use client'
import { motion } from 'framer-motion'

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      
      {/* Radial Glows */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-crimson/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-crimson/10 blur-[120px] rounded-full" />
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 animate-scanline opacity-[0.03] pointer-events-none" />
      
      {/* Atmospheric Fog */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black opacity-60" />
    </div>
  )
}
