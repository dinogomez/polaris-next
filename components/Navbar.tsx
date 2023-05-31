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
    <nav className="sticky top-0 z-10  backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200  dark:border-stone-800">
      <div className="mt-2  px-3 flex justify-around">
        <div className="flex w-full md:w-2/5 justify-between">
          <Link href="/">
            <div className="inline-flex items-center">
              <div className="p-2 rounded-full hover:bg-zinc-600 dark:hover:bg-zinc-600 bg-stone-900 dark:bg-stone-50">
                {" "}
                <Ship
                  size={20}
                  className="stroke-white dark:stroke-stone-900 hover:dark:stroke-white"
                />
              </div>
            </div>
          </Link>

          <div className=" flex space-x-4 text-sm">
            <Button className="p-0">
              <Link className="space-x-0 m-0" href="/login">
                <div className="text-lg">Signin</div>
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
