"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const buttonClass =
    "h-[1.2rem] w-[1.2rem]  rotate-0 scale-100 transition-all ";
  return (
    <button
      className={`w-fit  top-2 p-2 border  rounded-md hover:scale-110 active:scale-100 duration-200 `}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <Sun className={` bg-primary-foreground text-primary ${buttonClass}`} />
      ) : (
        <Moon
          className={` bg-primary-foreground text-primary ${buttonClass}`}
        />
      )}
    </button>
  );
};
