import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import remarkHtml from "remark-html";
import rehypeParse from "rehype-parse";
import { remark } from "remark";

export function getPosts(dir: string) {
  const files = fs.readdirSync(dir);
  const allPostsData = files.map((fileName) => {
    const match = fileName.match(/^(\d{4})-(\d{1,2})-(\d{1,2})-(.+)\.md$/);
    if (!match) return null;
    const formattedDate = `${match[1]}-${match[2].padStart(
      2,
      "0"
    )}-${match[3].padStart(2, "0")}`;
    const formattedTitle = match[4].replace(/-/g, " ");

    const fullPath = path.join(dir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);
    const link = fileName.replace(/\.md$/, "");

    return {
      link,
      formattedDate,
      formattedTitle,
      abstract: matterResult.data.abstract,
      ...matterResult.data
    };
  });

  return allPostsData;
}

export async function getContent(file: string) {
  const fileContents = fs.readFileSync(file, "utf-8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(matterResult.content);

  const contentHTML = processedContent.toString();

  return contentHTML;
}
