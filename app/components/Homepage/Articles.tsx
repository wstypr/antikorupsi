import Link from "next/link";
import { getArtikelMetadata } from "@/app/lib/data";

const articleMetadataList = getArtikelMetadata();

export default function Articles() {
  return (
    <section
      className="container mx-auto px-6 lg:px-12 pt-8 pb-24"
      id="basic-knowledge"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Artikel</h2>
      <div className="w-24 h-1 bg-red-600 mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
        {articleMetadataList.map((article, index) => (
          <Link key={index} href={`/artikel/${article?.slug}`}>
            <div className="h-full p-8 border-b-2 border-gray-200 hover:border-red-600 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <h3 className="text-2xl font-bold mb-3">{article?.title}</h3>
              <p className="text-gray-600">{article?.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
