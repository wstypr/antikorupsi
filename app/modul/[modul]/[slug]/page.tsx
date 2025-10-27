import { getModulBySlug, getModulSlugParams } from "@/app/lib/data";
import { marked } from "marked";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; modul: string }>;
}) {
  const { slug, modul } = await params;

  const { data } = getModulBySlug({ modul, slug });
  return {
    title: `${data.title} | ${modul.replace(
      "-",
      " "
    )} | antikorupsi. Kabupaten Mojokerto`,
    description: data.excerpt,
    keywords: [modul],
    author: "Pusat Edukasi Antikorupsi Pemerintah Kabupaten Mojokerto",
    openGraph: {
      type: "website",
      url: `https://antikorupsi-mojokertokab.netlify.app/modul/${modul}/${slug}`,
      title: `${data.title} | ${modul.replace(
        "-",
        " "
      )} | antikorupsi. Kabupaten Mojokerto`,
      description: data.excerpt,
      images: [
        {
          url: "https://antikorupsi-mojokertokab.netlify.app/og-image.png",
          width: 1200,
          height: 630,
          alt: `${data.title} | ${modul.replace(
            "-",
            " "
          )} | antikorupsi. Kabupaten Mojokerto`,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return getModulSlugParams();
}

export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; modul: string }>;
}) {
  const { slug, modul } = await params;

  const { content, data } = getModulBySlug({ modul, slug });

  return (
    <>
      <header className="mb-3  border-b border-gray-200 pb-6">
        {`MODUL ${modul.replaceAll("-", " ").toUpperCase()} :`}
        <h1 className="text-5xl font-extrabold leading-tight tracking-tighter text-gray-900 mb-4">
          {data.title}
        </h1>
      </header>

      <article
        className={styles["article-content"]}
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></article>
    </>
  );
}
