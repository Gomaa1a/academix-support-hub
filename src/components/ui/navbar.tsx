
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

interface NavbarProps {
  onScrollToServices?: () => void;
  onScrollToDemo?: () => void;
  onScrollToContact?: () => void;
}

export function Navbar({
  onScrollToServices,
  onScrollToDemo,
  onScrollToContact,
}: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 border-b border-orange-500/40 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-tighter">
            ACADEMIX.AI
          </span>
          <div className="flex gap-2 sm:gap-3 items-center">
            <Button
              variant="ghost"
              className="text-white hover:text-orange-400 px-4"
              onClick={onScrollToServices}
            >
              Services
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-orange-400 px-4"
              onClick={onScrollToDemo}
            >
              Demo
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:text-orange-400 px-4"
              onClick={onScrollToContact}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
