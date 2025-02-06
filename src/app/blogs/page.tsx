import { Card } from "@/components/ui/card";
import { getPosts } from "@/utils/md";
import path from "path";

export default function Blogs() {
  const dir = path.join(process.cwd(), "src", "app", "blogs", "posts");
  const blogs = getPosts(dir);
  return (
    <div className="w-full rounded-md flex flex-col md:items-center md:justify-start bg-black/[0.96] antialiased bg-grid-small-white/[0.1] pt-20 relative overflow-hidden">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-2">
        Blogs <br />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mx-auto m-5">
        {blogs.map(( blog, index) => (
          <Card
                key={index}
                title={blog?.formattedTitle}
                abstract={blog?.abstract}
                date={blog?.formattedDate} link={`/blogs/${blog?.link}`}          />
        ))}
      </div>
    </div>
  );
}
