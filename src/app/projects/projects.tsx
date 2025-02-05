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
        <button
          className="text-2xl md:text-3xl font-bold cursor-pointer m-2 mt-3 flex items-center"
          onClick={() => setCompleted(!completed)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          Completed Projects
        </button>
        <motion.div
          initial={false}
          animate={{ height: completed ? "auto" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 place-items-center mx-auto m-5 overflow-hidden "
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
        <button
          className="text-2xl md:text-3xl font-bold cursor-pointer m-2 mt-3 flex items-center"
          onClick={() => setOngoing(!ongoing)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          Ongoing Projects
        </button>
        <motion.div
          initial={false}
          animate={{ height: ongoing ? "auto" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mx-auto m-5 place-items-center overflow-hidden"
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
