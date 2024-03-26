// Component for adding a dark mode light mode theme throughout

import React, { useContext, useState, createContext } from "react";

const DarkModeContext = createContext();

export const DarkModeTheme = () => {
  const [darkMode, setDarkMode] = useState("light");

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };

  return (
    <DarkModeContext.Provider
      value={{ darkMode, toggleDarkMode }}
    ></DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
