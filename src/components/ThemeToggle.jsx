import React from "react";

const KEY = "bunkeshwar-theme";
const THEMES = ["light", "dark", "yellow"];
const DEFAULT = "light";

/**
 * Three themes: light (white), dark (black) and yellow.
 * Light is the default on a first visit; a visitor's choice is remembered in
 * localStorage. The saved value is ALSO applied by a small inline script in
 * index.html before React mounts, so there's no flash of the wrong colours.
 *
 * Kept in a context so the nav, hero and footer all read one source of truth
 * (separate useState copies would drift apart).
 */
const ThemeContext = React.createContext({ theme: DEFAULT, setTheme: () => {} });

const LOGOS = {
  light: "/logo-light.png",   // black wordmark + black tagline, for white
  dark: "/logo-dark.png",     // yellow tagline, for black
  yellow: "/logo-yellow.png", // black plate + yellow wordmark, for yellow
};

const BAR_COLOR = { light: "#FFFFFF", dark: "#0B0A08", yellow: "#FFD100" };

function readInitial() {
  if (typeof window === "undefined") return DEFAULT;
  const saved = window.localStorage.getItem(KEY);
  return THEMES.includes(saved) ? saved : DEFAULT;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(readInitial);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(KEY, theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", BAR_COLOR[theme]);
  }, [theme]);

  const value = React.useMemo(
    () => ({ theme, setTheme, logo: LOGOS[theme] }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return React.useContext(ThemeContext);
}

const Sun = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-14a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm0 15.5a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-1.5a1 1 0 0 1 1-1zM21 12a1 1 0 0 1-1 1h-1.5a1 1 0 1 1 0-2H20a1 1 0 0 1 1 1zM5.5 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1zm12.72-6.22a1 1 0 0 1 0 1.41l-1.06 1.06a1 1 0 1 1-1.42-1.41l1.07-1.06a1 1 0 0 1 1.41 0zM8.26 15.74a1 1 0 0 1 0 1.42l-1.07 1.06a1 1 0 0 1-1.41-1.41l1.06-1.07a1 1 0 0 1 1.42 0zm9.96 2.48a1 1 0 0 1-1.41 0l-1.07-1.06a1 1 0 0 1 1.42-1.42l1.06 1.07a1 1 0 0 1 0 1.41zM8.26 8.26a1 1 0 0 1-1.42 0L5.78 7.19a1 1 0 0 1 1.41-1.41l1.07 1.06a1 1 0 0 1 0 1.42z" />
  </svg>
);

const Moon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21.5 14.1A9 9 0 1 1 9.9 2.5a7 7 0 0 0 11.6 11.6z" />
  </svg>
);

const Drop = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.7c3.4 4 6.5 7.6 6.5 11.1a6.5 6.5 0 0 1-13 0c0-3.5 3.1-7.1 6.5-11.1z" />
  </svg>
);

const OPTIONS = [
  { id: "light", label: "Light", Icon: Sun },
  { id: "dark", label: "Dark", Icon: Moon },
  { id: "yellow", label: "Yellow", Icon: Drop },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="themes" role="group" aria-label="Colour theme">
      {OPTIONS.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => setTheme(id)}
          aria-pressed={theme === id}
          aria-label={`${label} theme`}
          title={`${label} theme`}
        >
          <Icon />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
