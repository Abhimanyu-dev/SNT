import { AboutUs } from "@/components/about";
import { Heading } from "@/components/heading";
import { ModeToggle } from "@/components/theme-toggle";
import { Vortex } from "@/components/ui/vortex";
import Image from "next/image";

export default function Home() {
  return (
   <div className="w-[calc(100%)] mx-auto rounded-md h-auto overflow-hidden">
    <Vortex className="flex items-center flex-col justify-center md:px-10 py-4 w-screen h-screen">
      <Heading />
    </Vortex>
    <AboutUs />
   </div>
  );
}
