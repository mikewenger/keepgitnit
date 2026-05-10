"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  variant?: "dark" | "light";
}

export default function Navbar({ variant = "light" }: Props) {
  const [open, setOpen] = useState(false);

  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-slate-900";
  const bgColor = isDark ? "bg-transparent" : "bg-white border-b border-slate-100";
  const linkHover = isDark ? "hover:text-[#F5B420]" : "hover:text-[#F5B420]";
  const mobileBg = isDark ? "bg-[#111111]" : "bg-white";

  return (
    <nav className={`w-full px-6 py-4 ${bgColor}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/logo.png" alt="KeepGitnIt logo" width={96} height={96} className="object-cover w-full h-full" />
          </div>
          <span className={`text-xl font-black tracking-tight ${textColor}`}>KeepGitnIt.Com</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className={`text-sm font-medium ${textColor} ${linkHover} transition-colors`}>Services</Link>
          <Link href="/roi-calculator" className={`text-sm font-medium ${textColor} ${linkHover} transition-colors`}>ROI Calculator</Link>
          <Link href="/contact" className={`text-sm font-medium ${textColor} ${linkHover} transition-colors`}>Contact</Link>
          <Link
            href="/contact"
            className="bg-[#F5B420] hover:bg-[#D99B10] text-black text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${textColor} p-2`}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={`md:hidden mt-2 px-6 py-4 ${mobileBg} border-t border-white/10 space-y-4`}>
          <Link href="/services" onClick={() => setOpen(false)} className={`block text-sm font-medium ${textColor}`}>Services</Link>
          <Link href="/roi-calculator" onClick={() => setOpen(false)} className={`block text-sm font-medium ${textColor}`}>ROI Calculator</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className={`block text-sm font-medium ${textColor}`}>Contact</Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="inline-block bg-[#F5B420] text-black text-sm font-bold px-5 py-2.5 rounded-full"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
