"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <Button variant="ghost" size="icon" className=" flex justify-center">
        <div onClick={() => setTheme("dark")}>
          <Sun className=" absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </div>
        <div onClick={() => setTheme("light")}>
          <Moon className=" absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </div>

        <span className="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenu>
  );
}
