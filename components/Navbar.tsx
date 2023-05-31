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
              <div className="p-2 rounded-full hover:bg-zinc-600 dark:hover:bg-zinc-600">
                {" "}
                <Ship
                  size={25}
                  className="stroke-black  dark:stroke-stone-900 hover:dark:stroke-white"
                />
              </div>
              <span className="font-extrabold text-3xl">Polaris</span>
            </div>
          </Link>

          <div className=" flex space-x-3 text-sm">
            <Button className="">
              <Link className="space-x-0 m-0" href="/login">
                <div className="py-1 px-4 m-0 rounded  bg-black text-white dark:text-white dark:bg-white dark:hover:bg-zinc-600 hover:bg-zinc-600 dark:text-black  text-md">
                  Signin
                </div>
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
