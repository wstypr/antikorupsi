import { getModulMetadata } from "@/app/lib/data";
import Link from "next/link";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ modul: string; slug: string }>;
}) {
  const { modul, slug } = await params;

  const postIndex = Number(slug) - 1;

  const modulMetadata = getModulMetadata(modul);

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-12 px-6 lg:px-12 py-10">
      {/* Main Content (appears second on desktop) */}
      <div className="flex-1 min-w-0 md:order-2">
        <div className="max-w-3xl mx-auto">
          {children}

          <section className="mt-16 pt-10 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
              {/* Pembahasan Sebelumnya */}
              {postIndex !== 0 ? (
                <Link href={`/modul/${modul}/${postIndex}`}>
                  <p className="text-sm text-gray-500 mb-1">
                    Pembahasan Sebelumnya
                  </p>
                  <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 transition-colors hover:text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transform transition-transform hover:translate-x-1"
                    >
                      <path d="M19 12H5" />
                      <path d="M12 19l-7-7 7-7" />
                    </svg>
                    <span>{modulMetadata[postIndex - 1]?.title}</span>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}

              {/* Pembahasan Selanjutnya */}
              {Number(postIndex) !== modulMetadata.length - 1 ? (
                <Link
                  href={`/modul/${modul}/${postIndex + 2}`}
                  className="group sm:text-right"
                >
                  <p className="text-sm text-gray-500 mb-1">
                    Pembahasan Selanjutnya
                  </p>
                  <div className="flex items-center sm:justify-end gap-2 text-lg font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                    <span>{modulMetadata[postIndex + 1]?.title}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transform transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Sidebar Navigation (appears first on desktop, bottom on mobile) */}
      <aside className="w-full md:w-64 lg:w-72 md:flex-shrink-0 pt-12 border-t border-gray-200 md:pt-0 md:border-t-0 md:border-r md:pr-8 md:order-1">
        <nav className="sticky top-10">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 mb-4">
            {modul.toUpperCase().replace("-", " ")}
          </h3>
          <ul className="space-y-2">
            {modulMetadata.map((data, index) => (
              <li key={data?.title}>
                <Link
                  href={`/modul/${modul}/${index + 1}`}
                  className={`block py-1 text-lg transition-colors duration-200 ${
                    index + 1 === Number(slug)
                      ? "text-red-600 font-bold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {data?.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
