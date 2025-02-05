"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"

export function AboutUs() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="flex flex-col items-center justify-start lg:flex-row my-8">
      <div className="flex flex-col items-center justify-center">
        <p className="border-b text-4xl md:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          A Little About Us
        </p>
        <p className="sm:text-lg text-2xl font-bold relative z-20 bg-clip-text text-transparent bg-neutral-200 p-8 text-center">
          The Brain and Cognitive Science Club (BCS @IITK) is a Science and
          Technology Club at IIT Kanpur. We aim at studying Brain Science to
          reverse engineer human intelligence to create more general and
          intelligent AIs for the future world. To achieve this we try to probe
          it from both ways i.e. developing better computational models of human
          cognition as well as relating the individual functionality of
          artificial computational models with that of humans. Our work is
          highly interdisciplinary and thrives at the intersection of cognitive
          neuroscience, cognitive psychology, and computational cognition.
        </p>
      </div>
      <Image
        src={"/images/brain.jpg"}
        alt="brain"
        height={1920}
        width={1080}
        className="rounded-2xl w-[90vw] lg:w-1/2 lg:m-5 h-auto mb-8 shadow-lg"
      />
    </div>
  );
}
