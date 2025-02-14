"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Spotlight } from "./spotlight";
import Image from "next/image";
export function Heading() {
  const words = [
    {
      text: "Brain",
    },
    {
      text: "and",
    },
    {
      text: "Cognitive",
    },
    {
      text: "Society",
    },
  ];
  return (
    <div className="h-[100vh] w-full rounded-md flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.1] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10 max-h-7xl min-h-96 flex items-center justify-center w-full pt-20 md:pt-0">
        <Image
          src="/images/logo.ico"
          alt="Background"
          layout="fill"
          objectFit="contain"
          className="md:rounded-full brightness-50"
          quality={100}
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-80 mix-blend-multiply md:rounded-full"></div> */}
        <h1 className="text-3xl md:text-8xl inset-0 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative">
          Brain and Cognitive <br /> Science Club
        </h1>
        {/* <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, eius?
        </p> */}
      </div>
      {/* <Image src={'/images/logo.jpg'} alt="BCS-LOGO" width={200} height={200}/> */}
    </div>
  );
}
