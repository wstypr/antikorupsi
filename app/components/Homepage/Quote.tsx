"use client";
import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import { QUOTES } from "@/app/lib/constant";

const playfair = Playfair_Display({ subsets: ["latin"], style: "italic" });

export default function Quote() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to cycle through quotes periodically.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % QUOTES.length);
    }, 7000); // Change quote every 7 seconds.

    // Cleanup interval on component unmount to prevent memory leaks.
    return () => clearInterval(intervalId);
  }, []);

  const currentQuote = QUOTES[currentIndex];

  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-24 text-center">
        <div className="max-w-4xl mx-auto relative">
          {/* Decorative quotation mark */}
          <span
            className={`absolute -top-12 left-1/2 -translate-x-1/2 text-9xl text-gray-200 opacity-75 select-none ${playfair.className}`}
            aria-hidden="true"
          >
            “
          </span>

          {/* The key={currentIndex} is crucial. It tells React to re-render the div when the index changes, which re-triggers the CSS animation. */}
          <div key={currentIndex} className="animate-fade-in">
            <blockquote
              className={`text-3xl md:text-4xl italic text-zinc-800 leading-relaxed ${playfair.className}`}
            >
              {currentQuote.quote}
            </blockquote>
            <cite className="block mt-6 text-xl font-semibold text-zinc-700 not-italic">
              — {currentQuote.author}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
