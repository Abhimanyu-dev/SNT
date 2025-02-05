"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Key, useState } from "react";

export default function Collapsible({ projects }: { projects: any }) {
  const [ongoing, setOngoing] = useState<boolean>(true);
  const [completed, setCompleted] = useState<boolean>(true);
  console.log(projects);
  const completed_projects = projects.filter(
    (project: { stat: string }) => project.stat === "completed"
  );
  const ongoing_projects = projects.filter(
    (project: { stat: string }) => project.stat === "ongoing"
  );

  return (
    <div>
      <div>
        <h1
          className="text-2xl md:text-3xl font-bold cursor-pointer"
          onClick={() => setCompleted(!completed)}
        >
          Completed Projects
        </h1>
        <motion.div
          initial={false}
          animate={{ height: completed ? "auto" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mx-auto m-5 overflow-hidden"
        >
          {completed_projects.map(
            (
              project: {
                link: any;
                formattedTitle: string | undefined;
                abstract: string;
                formattedDate: string | undefined;
              },
              index: Key | null | undefined
            ) => (
              <Card
                key={index}
                link={`/projects/${project?.link}`}
                title={project?.formattedTitle}
                abstract={project?.abstract}
                date={project?.formattedDate}
              />
            )
          )}
        </motion.div>
      </div>
      <div>
        <h1
          className="text-2xl md:text-3xl font-bold cursor-pointer"
          onClick={() => setOngoing(!ongoing)}
        >
          Ongoing Projects
        </h1>
        <motion.div
          initial={false}
          animate={{ height: ongoing ? "auto" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mx-auto m-5 overflow-hidden"
        >
          {ongoing_projects.map(
            (
              project: {
                link: any;
                formattedTitle: string | undefined;
                abstract: string;
                formattedDate: string | undefined;
              },
              index: Key | null | undefined
            ) => (
              <Card
                key={index}
                link={`/projects/${project?.link}`}
                title={project?.formattedTitle}
                abstract={project?.abstract}
                date={project?.formattedDate}
              />
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
