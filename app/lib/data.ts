import matter from "gray-matter";
import fs from "fs";
import { join } from "path";

export function getModulSlugParams() {
  const directory = join(process.cwd(), "posts/moduls");

  const params: { modul: string; slug: string }[] = [];

  const moduls = fs.readdirSync(directory);

  moduls.forEach((modul) => {
    const files = fs.readdirSync(join(directory, modul));

    files.forEach((file) => {
      if (file.endsWith(".md")) {
        params.push({
          modul: modul,
          slug: file.replace(".md", ""),
        });
      }
    });
  });

  return params;
}

export function getModulMetadata(modul: string) {
  const directory = join(process.cwd(), "posts", "moduls", modul);

  const files = fs.readdirSync(directory);

  const metadata = files.map((file) => {
    if (file.endsWith(".md")) {
      const { data } = matter.read(join(directory, file));
      return data;
    }
  });

  return metadata;
}

export function getModulBySlug({
  modul,
  slug,
}: {
  modul: string;
  slug: string;
}) {
  const directory = join(process.cwd(), "posts", "moduls", modul);
  const file = fs.readFileSync(join(directory, `${slug}.md`), "utf-8");
  const modulData = matter(file);
  return modulData;
}

export function getArtikelBySlug({ artikelSlug }: { artikelSlug: string }) {
  const directory = join(process.cwd(), "posts", "articles");
  const file = fs.readFileSync(join(directory, `${artikelSlug}.md`), "utf-8");
  const artikelData = matter(file);
  return artikelData;
}

export function getArtikelSlugParams() {
  const directory = join(process.cwd(), "posts", "articles");
  const articles = fs.readdirSync(directory);

  return articles.map((article) => {
    return {
      artikelSlug: article.replace(".md", ""),
    };
  });
}

export function getArtikelMetadata() {
  const directory = join(process.cwd(), "posts", "articles");

  const files = fs.readdirSync(directory);

  const metadata = files.map((file) => {
    if (file.endsWith(".md")) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data } = matter.read(join(directory, file)) as any as {
        data: {
          title: string;
          excerpt: string;
          datePublished: string;
          image: string;
        };
      };
      return {
        ...data,
        slug: file.replace(".md", ""),
      };
    }
  });

  return metadata;
}
