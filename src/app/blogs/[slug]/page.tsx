import path from "path";
import { getContent } from "@/utils/md";

export default async function BlogPostPage({ params } : { params: {slug: string}}) {
  const fullPath = path.join(
    process.cwd(),
    "src",
    "app",
    "blogs",
    "posts",
    `${params.slug}.md`
  );
  const blog = await getContent(fullPath);

  return (
    <div className="w-[100vw] rounded-md flex flex-col md:items-center md:justify-start bg-black/[0.96] antialiased bg-grid-small-white/[0.1] pt-20 relative overflow-hidden ">
      <div className="prose">
        <div dangerouslySetInnerHTML={{ __html: blog }} />
      </div>
    </div>
  );
}
