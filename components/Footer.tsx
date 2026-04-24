"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-1 mb-8">
              <span className="text-3xl font-black tracking-tighter uppercase">
                nexage
                <span className="text-nexage-red">.</span>
              </span>
            </Link>
            <p className="text-gray-500 text-lg max-w-sm mb-10 font-medium leading-relaxed">
              Engineering digital experiences for the next generation of innovative brands.
            </p>
            <div className="flex space-x-8">
              {["Twitter", "LinkedIn", "Instagram", "Dribbble"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-nexage-red transition-all"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-black mb-8 text-black border-l-4 border-nexage-red pl-4">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "Services", "Work", "About Us", "Insights", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 hover:text-nexage-red transition-all"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-black mb-8 text-black border-l-4 border-nexage-red pl-4">
              Contact
            </h4>
            <ul className="space-y-6">
              <li>
                <span className="block text-[8px] uppercase tracking-[0.4em] text-gray-400 font-black mb-1">Email</span>
                <Link href="mailto:hello@nexage.agency" className="text-lg font-black tracking-tight hover:text-nexage-red transition-colors">
                  hello@nexage.agency
                </Link>
              </li>
              <li>
                <span className="block text-[8px] uppercase tracking-[0.4em] text-gray-400 font-black mb-1">Location</span>
                <span className="text-lg font-black tracking-tight leading-tight block">
                  Tech City, TC 10101
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-black">
            © {new Date().getFullYear()} Nexage Agency.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-black hover:text-black">
              Privacy
            </Link>
            <Link href="#" className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-black hover:text-black">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
