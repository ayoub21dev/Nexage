'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-6"
    >
      <nav className="max-w-[1600px] mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-60 h-18">
          <Image
            src="/assets/logo.svg"
            alt="Nexage Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-semibold text-brand-white/80 hover:text-brand-white hover:glow-text-sm transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth / CTA */}
        <div className="flex items-center gap-8">
          <button className="text-[15px] font-semibold text-brand-white/80 hover:text-brand-white hover:glow-text-sm transition-all duration-200">
            Login
          </button>
          <button className="bg-gradient-to-r from-[#a30202] to-[#5a0100] text-brand-white font-semibold text-sm px-8 py-3 rounded-xl hover:shadow-[0_10px_25px_-10px_rgba(163,2,2,0.4)] transition-all duration-300">
            Let&apos;s Talk
          </button>
        </div>
      </nav>
    </motion.header>
  )
}
