import Link from "next/link";
import { TOPICS } from "@/app/lib/constant";

export default function BasicKnowledge() {
  return (
    <section
      className="container mx-auto px-6 lg:px-12 pt-8 pb-24"
      id="basic-knowledge"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Pengetahuan Dasar Antikorupsi
      </h2>
      <div className="w-24 h-1 bg-red-600 mb-6"></div>
      <p className="text-2xl max-w-3xl text-gray-600 mb-16">
        Memahami dasar-dasar antikorupsi adalah langkah pertama untuk membangun
        pemerintahan yang bersih dan akuntabel.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {TOPICS.map((topic, index) => (
          <Link key={index} href={topic.href || "#"}>
            <div className="h-full p-8 border-b-2 border-gray-200 hover:border-red-600 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <h3 className="text-2xl font-bold mb-3">{topic.title}</h3>
              <p className="text-gray-600">{topic.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="text-3xl font-extrabold mb-6">Pintasan Populer</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="#"
            className="group block p-6 border-l-4 border-red-800 hover:shadow-lg transition-all duration-300"
          >
            <h4 className="text-xl text-zinc-900 group-hover:text-red-700 transition-colors duration-300">
              Tutorial Laporan Dugaan Korupsi
            </h4>
          </a>
          <a
            href="#"
            className="group block p-6 border-l-4 border-red-800 hover:shadow-lg transition-all duration-300"
          >
            <h4 className="text-xl text-zinc-900 group-hover:text-red-700 transition-colors duration-300">
              Tutorial Laporan Gratifikasi
            </h4>
          </a>
        </div>
      </div>
    </section>
  );
}
