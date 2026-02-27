"use client";

import { LucideMoon, LucideSun } from "lucide-react";
import { Button } from "./button";
import { useThemeStore } from "@/store/themeStore";
import { useEffect } from "react";

export default function ThemeButton() {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    if(theme === 'light'){
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    
  }, [theme]);

  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? <LucideMoon /> : <LucideSun />}
    </Button>
  );
}
