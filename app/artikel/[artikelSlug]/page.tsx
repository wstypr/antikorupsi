import { getArtikelBySlug, getArtikelSlugParams } from "@/app/lib/data";
import { marked } from "marked";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ artikelSlug: string }>;
}) {
  const { artikelSlug } = await params;

  const { data } = getArtikelBySlug({ artikelSlug });
  return {
    title: `${data.title} | antikorupsi. Kabupaten Mojokerto`,
    description: data.excerpt,
    author: "Pusat Edukasi Antikorupsi Pemerintah Kabupaten Mojokerto",
    openGraph: {
      type: "website",
      url: `https://antikorupsi-mojokertokab.netlify.app/modul/${artikelSlug}`,
      title: `${data.title} | antikorupsi. Kabupaten Mojokerto`,
      description: data.excerpt,
      images: [
        {
          url: "https://antikorupsi-mojokertokab.netlify.app/og-image.png",
          width: 1200,
          height: 630,
          alt: `${data.title} | antikorupsi. Kabupaten Mojokerto`,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return getArtikelSlugParams();
}

export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: Promise<{ artikelSlug: string }>;
}) {
  const { artikelSlug } = await params;

  const { content, data } = getArtikelBySlug({ artikelSlug });

  const [normalContent, genZContent] = content.split("---gen-z---");

  return (
    <>
      <header className="mb-3  border-b border-gray-200 pb-6">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tighter text-gray-900 mb-1">
          {data.title}
        </h1>
        <p className="text-gray-500 mb-4">
          Ditulis oleh {data.author} pada{" "}
          {new Intl.DateTimeFormat("id-ID", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }).format(new Date(data.datePublished))}
        </p>
      </header>
      <input id="genz-mode" type="checkbox" className={styles["genz-mode"]} />
      <label htmlFor="genz-mode" className="text-sm text-slate-400">
        Mode Gen-Z
      </label>

      <article
        className={styles["article-content"] + " " + styles["normal-content"]}
        dangerouslySetInnerHTML={{ __html: marked(normalContent) }}
      ></article>

      <article
        className={styles["article-content"] + " " + styles["genz-content"]}
        dangerouslySetInnerHTML={{ __html: marked(genZContent) }}
      ></article>
    </>
  );
}
