"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export function Activities() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex flex-col items-center justify-start lg:flex-row my-8"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="border-b text-4xl md:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            What We Do
          </p>
          <div className="flex lg:flex-row flex-col">
            <div className="flex-1 bg-black/10 m-2 rounded-md backdrop-blur-lg">
              <h2 className="text-3xl md:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center ">
                Journal Club
              </h2>
              <p className="sm:text-md text-xl font-bold relative z-20 bg-clip-text text-transparent bg-neutral-200 p-8 text-center">
                Here we meet to discuss and talk about the latest ongoing
                research in this field. This is conducted weekly on Friday night
                of 2 hours long duration. Where interested students present a
                short talk on some latest articles which they found to be
                interesting to share. This helps significantly in developing and
                maintaining curiosity and in spreading the latest research among
                the campus. Have a look at our activities in the journal club
                here.
              </p>
            </div>
            <div className="flex-1 bg-black/10 m-2 rounded-md backdrop-blur-lg">
              <h2 className="text-3xl md:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center">
                Semester Projects
              </h2>
              <p className="sm:text-md text-xl font-bold relative z-20 bg-clip-text text-transparent bg-neutral-200 p-8 text-center">
                We promote three types of projects:
                <br /> <strong>Replications of previous work:</strong>
                Whether the previous works are reproducible or not plays a great
                role specifically in experimental psychology. We try to target
                some of the most influential results of past research and check
                whether those results can be reproduced or not.
                <br /> <strong>Working on a new idea:</strong> We also support
                some of the projects on the latest ongoing research in our area
                of interest.
                <br /> <strong>Projects for Learning:</strong> Many of the
                projects are encouraged just for learning purposes. To provide
                support and guidance to students who don’t have much experience
                and would like to jump into our area of interest.
              </p>
            </div>
            <div className="flex-1 bg-black/10 m-2 rounded-md backdrop-blur-lg">
              <h2 className="text-3xl md:text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 text-center">
                Talks / Lectures
              </h2>
              <p className="sm:text-md text-xl font-bold relative z-20 bg-clip-text text-transparent bg-neutral-200 p-8 text-center">
                We organize talks and sessions with people who are working in
                this similar area, this includes talks by professors, Post-Docs,
                PhDs, and any other experienced individual. We also conduct
                lectures and workshops to provide the necessary background to
                newbies.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
