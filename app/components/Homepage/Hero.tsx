export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-none mb-8">
            antikorupsi<span className="text-red-800">.</span>
          </h1>
          <p className="text-2xl md:text-3xl max-w-2xl text-gray-600 mb-10">
            Pusat Edukasi{" "}
            <span className="text-red-800 font-bold">Antikorupsi</span>{" "}
            Pemerintah Kabupaten Mojokerto.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <a
              href="#basic-knowledge"
              className="py-3 px-8 border-2 border-zinc-900 text-base tracking-widest transition-all duration-200 bg-zinc-900 text-white text-center hover:bg-zinc-700 hover:border-zinc-700"
            >
              Mulai Belajar
            </a>
            <a
              href="/kontak"
              className="py-3 px-8 border-2 border-zinc-900 text-base tracking-widest transition-all duration-200 bg-transparent text-zinc-900 text-center hover:bg-gray-100"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
