"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isLight = resolvedTheme === `light`;
  const oppositeTheme = isLight ? `dark` : `light`;

  const toggleTheme = () => setTheme(oppositeTheme);

  return (
    <Button className="p-0" onClick={toggleTheme}>
      {oppositeTheme === "light" ? (
        <Sun
          className="fill-current hover:fill-yellow-400 hover:stroke-yellow-400"
          size={25}
        />
      ) : (
        <Moon
          className="fill-current hover:fill-zinc-600 hover:stroke-zinc-600 "
          size={25}
        />
      )}
    </Button>
  );
};
