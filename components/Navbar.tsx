"use client";
import { Ship } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <nav className="">
        <div className=" flex justify-around">
          <div className="flex w-2/5 justify-between">
            <div className="flex p-2 space-x-2">
              <Ship size={20} className="" />
            </div>
            <div className=" flex space-x-4 text-sm">
              <Button className="p-0">
                <Link className="space-x-0 m-0" href="/login">
                  <div className="">Login</div>
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
        <Separator className="w-screen" />
      </nav>
    </div>
  );
}
