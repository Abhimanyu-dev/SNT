import { Card } from "@/components/ui/card";
import { getPosts } from "@/utils/md";
import path from "path";

export default function Blogs() {
  const dir = path.join(process.cwd(), "src", "app", "projects", "posts");
  const blogs = getPosts(dir);
  return (
    <div className="w-full rounded-md flex flex-col md:items-center md:justify-start bg-black/[0.96] antialiased bg-grid-small-white/[0.02] pt-20 relative overflow-hidden">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Projects <br />
      </h1>
      <div className="flex flex-row flex-wrap items-center justify-evenly m-5">
        {blogs.map((blog) => (
          <Card
            link={`/projects/${blog?.link}`}
            title={blog?.formattedTitle}
            abstract={blog?.abstract}
            date={blog?.formattedDate}
          />
        ))}
      </div>
    </div>
  );
}
