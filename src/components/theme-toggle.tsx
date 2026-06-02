"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { toggleTheme, mounted, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl hover:bg-foreground/8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {/* Renderizamos ambos íconos pero solo mostramos el correcto
          TRAS la hidratación (mounted). Antes: placeholder sin parpadeo. */}
      {!mounted ? (
        <span className="h-5 w-5 rounded-full bg-foreground/20 animate-pulse" />
      ) : theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary" />
      ) : (
        <Moon className="h-5 w-5 text-primary" />
      )}
    </button>
  );
}
