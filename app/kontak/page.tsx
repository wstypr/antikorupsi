import { Mail, Phone, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Hubungi Kami | antikorupsi | Kabupaten Mojokerto",
  description:
    "Hubungi kami melalui kontak dan media yang tersedia ini | Pusat edukasi antikorupsi Pemerintah Kabupaten Mojokerto",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Main container keeps external padding */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <section>
          {/* Header and Introduction - Constrained to max-w-2xl and centered */}
          <div className="max-w-5xl mx-auto mb-12 md:mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900">
              Hubungi Kami<span className="text-red-600">.</span>
            </h1>
            {/* Reduced max width of separator to align visually with the intro text */}
            <div className="w-24 h-1 bg-red-600 rounded-full mb-8"></div>

            {/* Introduction paragraphs */}
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Kami sangat antusias untuk membangun ekosistem antikorupsi yang
                kuat bersama Anda. Baik Anda memiliki pertanyaan teknis,
                membutuhkan klarifikasi tentang regulasi, atau ingin
                menyampaikan laporan, tim kami siap membantu.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Mari berkontribusi aktif! <br />
                Jangan ragu untuk menyampaikan kritik dan saran untuk perbaikan
                layanan kami, mengirimkan ide konten yang inspiratif, atau
                menawarkan kontribusi konten edukatif lainnya. Setiap masukan
                dari Anda adalah aset berharga bagi integritas Kabupaten
                Mojokerto.
              </p>
            </div>
          </div>

          {/* Main Content Area: Contact Info and Map - Constrained and centered to match introduction */}
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Contact Details Card */}
            <div className="p-6 md:p-10 rounded-xl">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Informasi Kontak & Kantor
              </h2>

              {/* Contact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Kontak Cepat (Quick Contact) */}
                <div>
                  {/* <h3 className="text-xl font-semibold mb-5 text-gray-800 flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-slate-600" />
                    Telepon & Email
                  </h3> */}
                  <ul className="space-y-5 text-lg">
                    {/* WhatsApp Contact */}
                    <li className="flex items-start">
                      <MessageSquare
                        className="w-5 h-5 mt-1 flex-shrink-0 text-slate-500"
                        aria-hidden="true"
                      />
                      <div className="ml-3">
                        <span className="font-medium text-gray-600 block text-base">
                          WhatsApp
                        </span>
                        <a
                          href="https://wa.me/6285975100548"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 font-semibold hover:text-red-600 transition-colors block"
                        >
                          +62 859-7510-0548
                        </a>
                      </div>
                    </li>
                    {/* Email Contact (Inspektorat) */}
                    <li className="flex items-start">
                      <Mail
                        className="w-5 h-5 mt-1 flex-shrink-0 text-slate-500"
                        aria-hidden="true"
                      />
                      <div className="ml-3">
                        <span className="font-medium text-gray-600 block text-base">
                          E-mail
                        </span>
                        <a
                          href="mailto:inspektoratmojokertokab@gmail.com"
                          className="text-gray-900 text-sm md:text-base font-semibold hover:text-red-600 transition-colors block"
                        >
                          inspektoratmojokertokab@gmail.com
                        </a>
                        <a
                          href="mailto:inspektorat.kab.mojokerto@gmail.com"
                          className="text-gray-900 text-sm md:text-base font-semibold hover:text-red-600 transition-colors block"
                        >
                          inspektorat.kab.mojokerto@gmail.com
                        </a>
                      </div>
                    </li>
                    {/* Phone Contact */}
                    <li className="flex items-start">
                      <Phone
                        className="w-5 h-5 mt-1 flex-shrink-0 text-slate-500"
                        aria-hidden="true"
                      />
                      <div className="ml-3">
                        <span className="font-medium text-gray-600 block text-base">
                          Telepon & Fax
                        </span>
                        <div className="text-gray-900 font-semibold">
                          <a
                            href="tel:+62321321000"
                            className="hover:text-red-600 transition-colors"
                          >
                            (0321) 329188
                          </a>
                          <span className="block text-gray-700 font-semibold">
                            Fax: (0321) 321959
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Kantor Kami (Office Address) */}
                <div>
                  {/* <h3 className="text-xl font-semibold mb-5 text-gray-800 flex items-center">
                    <svg
                      className="w-6 h-6 mr-3 text-slate-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Alamat Kantor
                  </h3> */}
                  <div className="text-gray-700 text-lg space-y-3">
                    <p>
                      <strong className="text-gray-900 text-xl font-bold block">
                        Alamat Kantor <br />
                        Inspektorat Kabupaten Mojokerto
                      </strong>
                    </p>
                    <p className="leading-relaxed">
                      Jl. R. A. Basoeni 19C
                      <br />
                      Sooko Kabupaten Mojokerto
                      <br />
                      Jawa Timur 61361, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white py-6 md:p-10 rounded-xl">
            {/* Map container */}
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.405506344707!2d112.42348997404471!3d-7.4925262738927465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e781283ad59c525%3A0x82ff7e132ba33914!2sKantor%20Inspektorat%20Kabupaten%20Mojokerto!5e1!3m2!1sen!2sid!4v1760409881788!5m2!1sen!5sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
