"use client";

import { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

type ThemeMode = "system" | "light" | "dark";

const STORAGE_KEY = "pdf-scout-theme";

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === "system") {
    root.removeAttribute("data-theme");
    return;
  }
  root.setAttribute("data-theme", mode);
}

function ThemeIcon({ mode }: { mode: ThemeMode }) {
  if (mode === "light") {
    return <SunIcon aria-hidden="true" className="h-4 w-4" />;
  }

  if (mode === "dark") {
    return <MoonIcon aria-hidden="true" className="h-4 w-4" />;
  }

  return <ComputerDesktopIcon aria-hidden="true" className="h-4 w-4" />;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("system");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    const initialTheme: ThemeMode =
      saved === "light" || saved === "dark" || saved === "system"
        ? saved
        : "system";
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const updateTheme = (mode: ThemeMode) => {
    setTheme(mode);
    localStorage.setItem(STORAGE_KEY, mode);
    applyTheme(mode);
  };

  return (
    <div className="relative inline-block">
      <details className="group">
        <summary
          className="inline-flex h-9 items-center gap-1 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-2 text-[var(--muted)] transition-colors hover:bg-[var(--line)]/30 hover:text-[var(--foreground)]"
          aria-label={`Theme menu. Current: ${theme}`}
        >
          <ThemeIcon mode={theme} />
          <ChevronDownIcon className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
        </summary>
        <div className="absolute right-0 z-50 mt-2 w-28 rounded-lg border border-[var(--line)] bg-[var(--surface)] p-1 shadow-lg items-center justify-center">
          {(["system", "light", "dark"] as ThemeMode[]).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => {
                updateTheme(mode);
                const el = document.activeElement as HTMLElement | null;
                el?.blur();
              }}
              className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 my-1 text-left text-sm capitalize transition-colors cursor-pointer ${
                theme === mode
                  ? "bg-[var(--line)]/35 text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:bg-[var(--line)]/25 hover:text-[var(--foreground)]"
              }`}
            >
              <ThemeIcon mode={mode} />
              <span>{mode}</span>
            </button>
          ))}
        </div>
      </details>
    </div>
  );
}
