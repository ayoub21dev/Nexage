'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Eye, Play } from 'lucide-react'
import Image from 'next/image'
import { Constellation } from '@/components/effects/Constellation'

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-black/20 z-10" />
      </div>

      <Constellation />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-20 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center pt-20">
        {/* Left Side (Headline) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col gap-12"
        >
          {/* Headline */}
          <div className="relative space-y-12">
            <h1 className="text-5xl lg:text-[5.5rem] font-bold font-display leading-[1] text-brand-white uppercase">
              Digital <br />
              Products <br />
              Made Easy.
            </h1>

            <div className="flex flex-wrap items-center gap-8 pt-4">
              <button className="group relative bg-gradient-to-r from-[#a30202] to-[#5a0100] text-brand-white font-semibold text-sm px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(163,2,2,0.5)] hover:scale-[1.02] active:scale-95">
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group flex items-center gap-4 bg-brand-white/5 backdrop-blur-md border border-brand-white/10 px-6 py-3 rounded-full text-brand-white font-semibold text-sm transition-all duration-300 hover:bg-brand-white/10 hover:border-brand-white/20">
                <span>View Our Work</span>
                <div className="w-8 h-8 rounded-full border border-brand-crimson flex items-center justify-center group-hover:bg-brand-crimson transition-all duration-300">
                  <Play className="w-3 h-3 fill-brand-crimson text-brand-crimson group-hover:fill-brand-white group-hover:text-brand-white transition-all duration-300 ml-0.5" />
                </div>
              </button>
            </div>
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-4 text-brand-offwhite/60">
            <div className="w-12 h-[1px] bg-brand-offwhite/20" />
            <p className="text-sm font-medium tracking-wider uppercase">Designed for Your Business.</p>
          </div>
        </motion.div>

        {/* Right Side (Description & Stats) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-12 lg:pl-12"
        />
      </div>

      {/* Bottom Ticker/Navigation (Empty) */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        {/* Glowing Arch Visual (CSS) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] aspect-[4/1] bg-brand-crimson/20 blur-[100px] rounded-[100%] -z-10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[1px] bg-gradient-to-r from-transparent via-brand-crimson/40 to-transparent" />
      </div>
    </section>
  )
}
