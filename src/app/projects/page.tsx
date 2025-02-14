import { Card } from "@/components/ui/card";
import { getPosts } from "@/utils/md";
import path from "path";
import Collapsible from "./projects";

export default function Projects() {
  const dir = path.join(process.cwd(), "src", "app", "projects", "posts");
  const projects = getPosts(dir);
  projects.sort((a, b) =>{
    const dateA = a?.formattedDate ? new Date(a.formattedDate).getTime() : Number.MAX_VALUE;
  const dateB = b?.formattedDate ? new Date(b.formattedDate).getTime() : Number.MAX_VALUE;
  return dateB - dateA;
  });
  return (
    <div className="w-full rounded-md flex flex-col md:items-center md:justify-start bg-black/[0.96] antialiased bg-grid-small-white/[0.1] pt-20 relative overflow-hidden">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-2">
        Projects <br />
      </h1>
      <Collapsible projects={projects}/>
    </div>
  );
}
