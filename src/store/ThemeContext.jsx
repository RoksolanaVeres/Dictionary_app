import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

const THEME_KEY = "themeIsDark";

export default function ThemeContextProvider({ children }) {
  const storedTheme = JSON.parse(localStorage.getItem(THEME_KEY));

  const [darkTheme, setDarkTheme] = useState(storedTheme || false);

  const body = document.querySelector("body");
  if (darkTheme) {
    body.setAttribute("data-theme", "dark");
  } else {
    body.removeAttribute("data-theme");
  }

  useEffect(() => {
    localStorage.setItem(THEME_KEY, darkTheme);
  }, [darkTheme]);

  const value = { darkTheme, setDarkTheme };
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
