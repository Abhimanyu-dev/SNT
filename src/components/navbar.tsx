"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl flex items-center justify-center mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home" href="/">
        </MenuItem> 
        <MenuItem setActive={setActive} active={active} item="About Us" href="/about">
        </MenuItem> 
        <MenuItem setActive={setActive} active={active} item="Clubs">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/clubs/aeromodelling">Aeromodelling Club</HoveredLink>
            <HoveredLink href="/clubs/astronomy">Astronomy Club</HoveredLink>
            <HoveredLink href="/clubs/electronics">Electronics Club</HoveredLink>
            <HoveredLink href="/clubs/finance">Finance And Analytics Club</HoveredLink>
            <HoveredLink href="/clubs/programming">Programming Club</HoveredLink>
            <HoveredLink href="/clubs/robotics">Robotics Club</HoveredLink>
            <HoveredLink href="/clubs/speedcubing">Speedcubing Club</HoveredLink>
          </div>
        </MenuItem> 
        <MenuItem setActive={setActive} active={active} item="Societies">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/societies/bcs">Brain and Cognitive Society</HoveredLink>
            <HoveredLink href="/societies/descon">Descon Society</HoveredLink>
            <HoveredLink href="/societies/games">Game Development Society</HoveredLink>
            <HoveredLink href="/societies/consult">IITK Consulting Group</HoveredLink>
            <HoveredLink href="/societies/sch">Science Coffee House</HoveredLink>
          </div>
        </MenuItem> 
        <MenuItem setActive={setActive} active={active} item="Teams">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/teams/ar">Aerial Robotics IITK</HoveredLink>
            <HoveredLink href="/teams/auv">AUV IITK</HoveredLink>
            <HoveredLink href="/teams/era">Era IITK</HoveredLink>
            <HoveredLink href="/teams/humanoid">Humanoid IITK</HoveredLink>
            <HoveredLink href="/teams/vision">Vision IITK</HoveredLink>
            <HoveredLink href="/teams/raset">RASET IITK</HoveredLink>
          </div>
        </MenuItem> 
        <MenuItem setActive={setActive} active={active} item="Wings">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/wings/outreach">Outreach Cell</HoveredLink>
            <HoveredLink href="/wings/web">Web Division</HoveredLink>
          </div>
        </MenuItem> 
        <MenuItem setActive={setActive} active={active} item="Inter IIT" href="/interiit">
        </MenuItem> 
        <MenuItem setActive={setActive} active={active} item="Gallery" href="/gallery">
        </MenuItem> 
        <MenuItem setActive={setActive} active={active} item="Contact" href="/contact">
        </MenuItem> 
        <MenuItem setActive={setActive} active={active} item="Feedback" href="/feedback">
        </MenuItem> 
      </Menu>
    </div>
  );
}
