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
