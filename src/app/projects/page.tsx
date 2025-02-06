import { Card } from "@/components/ui/card";
import { getPosts } from "@/utils/md";
import path from "path";
import Collapsible from "./projects";

export default function Projects() {
  const dir = path.join(process.cwd(), "src", "app", "projects", "posts");
  const projects = getPosts(dir);
  return (
    <div className="w-full rounded-md flex flex-col md:items-center md:justify-start bg-black/[0.96] antialiased bg-grid-small-white/[0.1] pt-20 relative overflow-hidden">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-2">
        Projects <br />
      </h1>
      <Collapsible projects={projects}/>
    </div>
  );
}
