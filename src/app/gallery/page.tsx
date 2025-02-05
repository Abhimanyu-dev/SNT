"use client"

import Image from "next/image";
import { gallery } from "../../../public/images";

export default function Gallery() {
  return (
    <div className="w-full rounded-md flex flex-col md:items-center md:justify-start bg-black/[0.96] antialiased bg-grid-small-white/[0.02] pt-20 relative overflow-hidden">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Gallery <br />
      </h1>
      <div className="flex flex-col w-full max-w-7xl m-5">
        <h1 className="text-3xl md:text-4xl font-bold">SNT Pavilion</h1>
        <div className="flex flex-row flex-wrap items-center justify-evenly m-5">
          {gallery.PAV.map((image) => <Image src={image} alt="image" height={1200} width={1600} className="h-96 w-[30rem] rounded-lg m-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
        )}
        </div>
      </div>
      <div className="flex flex-col w-full max-w-7xl m-5">
        <h1 className="text-3xl md:text-4xl font-bold">Sessions</h1>
        <div className="flex flex-row flex-wrap items-center justify-evenly m-5">
          {gallery.SES.map((image) => <Image src={image} alt="image" height={1200} width={1600} className="h-96 w-[30rem] rounded-lg m-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
        )}
        </div>
      </div>
      <div className="flex flex-col w-full max-w-7xl m-5">
        <h1 className="text-3xl md:text-4xl font-bold">Ask And Retrieve</h1>
        <div className="flex flex-row flex-wrap items-center justify-evenly m-5">
          {gallery.AR.map((image) => <Image src={image} alt="image" height={1200} width={1600} className="h-96 w-[30rem] rounded-lg m-4 cursor-pointer hover:-translate-y-2 transition-transform"/>
        )}
        </div>
      </div>
    </div>
  );
}
