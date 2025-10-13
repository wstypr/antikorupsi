"use client";
import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], style: "italic" });

// A collection of quotes related to anti-corruption and integrity.
const quotes = [
  {
    quote:
      "Hampir semua orang bisa menahan kesulitan, tetapi jika Anda ingin menguji karakter seseorang, berilah dia kekuasaan.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "Integritas adalah melakukan hal yang benar, bahkan ketika tidak ada yang melihat.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "Kekuasaan tidak merusak; ketakutan akan kehilangan kekuasaanlah yang merusak.",
    author: "John Steinbeck",
  },
  {
    quote:
      "Kita boleh berselisih faham, tetapi jangan sampai retak. Karena kita adalah saudara.",
    author: "Abdurrahman Wahid (Gus Dur)",
  },
  {
    quote:
      "Jadilah pemimpin yang mengabdi, bukan pemimpin yang ingin dilayani.",
    author: "Soekarno",
  },
  {
    quote: "Kejujuran adalah mata uang yang berlaku di mana-mana.",
    author: "B.J. Habibie",
  },
  {
    quote:
      "Korupsi itu penyakit yang lebih parah dari kanker, karena korupsi menyentuh segala aspek kehidupan.",
    author: "Mohammad Hatta",
  },
  {
    quote:
      "Kemerdekaan hanyalah jembatan, walau pun jembatan emas, di seberang jembatan itu barulah kita menyempurnakan kewajiban kita.",
    author: "Soekarno",
  },
  {
    quote:
      "Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan Anda dapat mengubah dunia.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Perubahan tidak dapat dimulai dari atas; semuanya berawal dari bawah.",
    author: "Tan Malaka",
  },
  {
    quote:
      "Seorang pemimpin sejati adalah orang yang bersedia berkorban untuk kepentingan orang banyak.",
    author: "B.J. Habibie",
  },
];

export default function Quote() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to cycle through quotes periodically.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 7000); // Change quote every 7 seconds.

    // Cleanup interval on component unmount to prevent memory leaks.
    return () => clearInterval(intervalId);
  }, []);

  const currentQuote = quotes[currentIndex];

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
