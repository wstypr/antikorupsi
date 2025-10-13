import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const modulDirectory = join(process.cwd(), "posts/moduls");
const articleDirectory = join(process.cwd(), "posts/articles");

export function getAllPostSlugs(type: "moduls" | "articles") {
  const directory = type === "moduls" ? modulDirectory : articleDirectory;

  const postSlugs = fs.readdirSync(directory);
  const slugs = postSlugs.map((postSlug) => postSlug.replace(".md", ""));
  return slugs;
}

export function getPostBySlug(type: "moduls" | "articles", slug: string) {
  const directory = type === "moduls" ? modulDirectory : articleDirectory;

  const postPath = join(directory, `${slug}.md`);
  const source = fs.readFileSync(postPath, "utf8");
  const { content, data } = matter(source);
  return { content, data };
}

export function getAllPostMetadata(type: "moduls" | "articles") {
  const postSlugs = getAllPostSlugs(type);

  const postMetadata = postSlugs.map((postSlug) => {
    const { data } = getPostBySlug(type, postSlug);
    return data;
  });

  return postMetadata;
}

