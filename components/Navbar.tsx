"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const links = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-gray-100" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group flex-1">
          <span className="text-2xl font-black tracking-tighter uppercase">
            nexage
            <span className="text-nexage-red">.</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center justify-center space-x-10 flex-[2]">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[11px] font-black uppercase tracking-[0.25em] text-black/70 hover:text-nexage-red transition-all relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-nexage-red transition-all duration-500 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-end flex-1">
          <Link
            href="#contact"
            className="bg-black text-white px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-nexage-red transition-all duration-300"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </nav>
  );
}
