import { AboutUs } from "@/components/about";
import { Heading } from "@/components/heading";
import { Spotlight } from "@/components/spotlight";
import { ModeToggle } from "@/components/theme-toggle";
import { Vortex } from "@/components/ui/vortex";
import Image from "next/image";

export default function Home() {
  return (
   <div className="mx-auto rounded-md h-auto overflow-hidden ">
    <Heading />
    <AboutUs />
   </div>
  );
}
