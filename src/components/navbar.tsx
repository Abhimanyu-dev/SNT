"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, transition } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Image from "next/image";
import {motion} from "framer-motion"
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 flex items-center justify-evenly mx-auto z-50",
        className
      )}
    >
      <Image
        src={"/images/logo.jpg"}
        alt="logo"
        width={50}
        height={50}
        className="absolute left-8 top-2 z-30 cursor-pointer"
        onClick={() => router.push("/")}
      />
      <div className="hidden md:flex">
        <Menu setActive={setActive}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
            href="/"
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
            href="/projects"
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Blogs"
            href="/blogs"
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Events"
            href="/events"
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item="People"
            href="/people"
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Gallery"
            href="/gallery"
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Resources"
            href="/resources"
          />
        </Menu>
      </div>
      <button
        className="md:hidden flex top-2 right-8 absolute w-10 h-10 text-white focus:outline-none z-30"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <span
            className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
              navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
              navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
              navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
      <motion.div
        initial={{
          y: "-100%",
          opacity: "0"
        }}
        animate={{
          y: navbarOpen ? "0%" : "-100%",
          opacity: navbarOpen ? 1 : 0
        }}
        transition={{duration: 0.5, ease: "easeInOut"}}
        className="w-screen h-screen fixed top-0 bg-black/30 backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-4"
      >
        <Link href={"/"} onClick={() => setNavbarOpen(false)}>Home</Link>
        <Link href={"/projects"} onClick={() => setNavbarOpen(false)}>Projects</Link>
        <Link href={"/blogs"} onClick={() => setNavbarOpen(false)}>Blogs</Link>
        <Link href={"/events"} onClick={() => setNavbarOpen(false)}>Events</Link>
        <Link href={"/people"} onClick={() => setNavbarOpen(false)}>People</Link>
        <Link href={"/gallery"} onClick={() => setNavbarOpen(false)}>Gallery</Link>
        <Link href={"/resources"} onClick={() => setNavbarOpen(false)}>Resources</Link>
      </motion.div>
    </div>
  );
}
