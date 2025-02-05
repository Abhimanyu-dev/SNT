import path from "path";
import { getContent } from "@/utils/md";

export default async function BlogPostPage({ params } : { params: {slug: string}}) {
  const fullPath = path.join(
    process.cwd(),
    "src",
    "app",
    "events",
    "posts",
    `${params.slug}.md`
  );
  const {contentHTML, title} = await getContent(fullPath);

  return (
    <div className="w-[100vw] rounded-md flex flex-col md:items-center md:justify-start bg-black/[0.96] antialiased bg-grid-small-white/[0.1] pt-20 relative overflow-hidden p-4 mt-2">
      <h1 className="text-center text-2xl md:text-3xl">{title}</h1>
      <div className="prose prose-lg dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
      </div>
    </div>
  );
}
