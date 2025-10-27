import Hero from "@/app/components/Homepage/Hero";
import BasicKnowledge from "@/app/components/Homepage/BasicKnowledge";
import Quote from "./components/Homepage/Quote";

export const metadata = {
  title: "antikorupsi | Kabupaten Mojokerto",
  description: "Pusat edukasi antikorupsi Pemerintah Kabupaten Mojokerto",
  openGraph: {
    type: "website",
    url: "https://antikorupsi-mojokertokab.netlify.app/",
    title: "antikorupsi | Kabupaten Mojokerto",
    description: "Pusat edukasi antikorupsi Pemerintah Kabupaten Mojokerto",
    images: [
      {
        url: "https://antikorupsi-mojokertokab.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "antikorupsi | Kabupaten Mojokerto",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <hr className="container mx-auto border-neutral-200 my-16" />
      <BasicKnowledge />
      <Quote />
    </>
  );
}
