"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 flex items-center justify-evenly mx-auto z-50",
        className
      )}
    >
      <Menu setActive={() => {}}>
        <MenuItem
          setActive={() => {}}
          active={null}
          item="BCS IITK"
          href="/"
        />
      </Menu>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home" href="/" />
        <MenuItem
          setActive={setActive}
          active={active}
          item="Projects"
          href="/projects"
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
      <Menu setActive={() => {}}>
        <MenuItem
          setActive={() => {}}
          active={null}
          item="Join our Mailing List"
          href="/"
        />
      </Menu>
    </div>
  );
}
