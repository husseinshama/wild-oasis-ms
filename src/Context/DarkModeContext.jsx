import { createContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

// eslint-disable-next-line react-refresh/only-export-components
export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDark");

  function toggleDarkeMode() {
    setIsDarkMode((on) => !on);
  }

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode, setIsDarkMode],
  );

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleDarkeMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
