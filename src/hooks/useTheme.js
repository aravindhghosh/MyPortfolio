import { useEffect, useState } from "react";

const THEME_KEY = "theme";

const getSystemPref = () => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
    return "system";
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;

    const apply = (value) => {
      const resolved = value === "system" ? getSystemPref() : value;
      root.classList.toggle("dark", resolved === "dark");
    };

    apply(theme);

    if (theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    if (media.addEventListener) media.addEventListener("change", onChange);
    else media.addListener(onChange);

    return () => {
      if (media.removeEventListener) media.removeEventListener("change", onChange);
      else media.removeListener(onChange);
    };
  }, [theme]);

  const setLight = () => {
    localStorage.setItem(THEME_KEY, "light");
    setTheme("light");
  };

  const setDark = () => {
    localStorage.setItem(THEME_KEY, "dark");
    setTheme("dark");
  };

  const setSystem = () => {
    localStorage.removeItem(THEME_KEY);
    setTheme("system");
  };

  const toggle = () => {
    const resolved = theme === "system" ? getSystemPref() : theme;
    if (resolved === "dark") setLight();
    else setDark();
  };

  return { theme, setLight, setDark, setSystem, toggle };
}
