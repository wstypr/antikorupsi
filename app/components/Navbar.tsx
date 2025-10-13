"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import { NAVLINKS } from "@/app/lib/constant";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-8 text-base font-medium tracking-wider text-gray-700">
        {NAVLINKS.map((link) => (
          <a
            href={link.href}
            key={link.label}
            className="relative group py-2 hover:text-black transition-colors duration-300"
          >
            <span>{link.label}</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className={`lg:hidden text-3xl cursor-pointer z-50 transition-colors duration-300 ${
          isMenuOpen ? "text-white" : "text-zinc-900"
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? "×" : "≡"}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <nav className="pt-28 px-8">
          <div className="flex flex-col divide-y divide-neutral-200">
            {NAVLINKS.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="py-5 text-2xl font-semibold text-white hover:text-red-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
