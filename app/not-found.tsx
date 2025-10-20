import Link from "next/link";

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

export default function Page() {
  return (
    <div className=" flex items-center justify-center text-gray-900 p-4">
      <div className="max-w-4xl w-full text-center p-8 sm:p-12 md:p-16">
        <div className="mb-10">
          <p className="text-[12rem] md:text-[18rem] font-extrabold text-slate-700 opacity-20 leading-none mb-0">
            404
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 -mt-16 md:-mt-24">
            Oops! Halaman yang anda cari tidak ditemukan.
          </h2>

          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Sepertinya anda salah memasukkan alamat halaman.
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold leading-6 text-white bg-slate-700 border border-transparent rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-slate-800 hover:shadow-lg hover:scale-105 transform"
          >
            <HomeIcon />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
