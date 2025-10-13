import { NAVLINKS } from "@/app/lib/constant";
import { SOCIALLINKS } from "@/app/lib/constant";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h4 className="text-[2rem] font-extrabold">
              antikorupsi<span className="text-red-600">.</span>
            </h4>
            <div className="mt-2 text-gray-700">
              <p className="text-lg">
                Pusat edukasi antikorupsi
                <br />
                Pemerintah Kabupaten Mojokerto
              </p>
              <p className="text-base text-gray-600 mt-2">
                dikelola oleh Inspektorat
                <br />
                Jl. R. A. Basoeni 19C Sooko Kabupaten Mojokerto
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
            <div>
              <h5 className="text-sm font-bold tracking-widest uppercase mb-4 text-black">
                Menu
              </h5>
              <ul className="space-y-3 text-base text-gray-700">
                {NAVLINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-black">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-bold tracking-widest uppercase mb-4 text-black">
                Terhubung
              </h5>
              <ul className="space-y-3 text-base text-gray-700">
                {SOCIALLINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-black">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 text-sm text-gray-500 border-t border-neutral-200 text-center">
          &copy; 2025 Inspektorat Kabupaten Mojokerto
        </div>
      </div>
    </footer>
  );
}
