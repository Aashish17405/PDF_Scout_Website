"use client";

import { useEffect, useState } from "react";

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
    <div className="inline-flex items-center gap-1 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-1">
      {(["system", "light", "dark"] as ThemeMode[]).map((mode) => (
        <button
          key={mode}
          type="button"
          onClick={() => updateTheme(mode)}
          className={`rounded-lg px-3 py-1.5 text-xs font-semibold capitalize transition-colors ${
            theme === mode
              ? "bg-[var(--brand)] text-white"
              : "text-[var(--muted)] hover:bg-[var(--line)]/40"
          }`}
          aria-pressed={theme === mode}
        >
          {mode}
        </button>
      ))}
    </div>
  );
}
