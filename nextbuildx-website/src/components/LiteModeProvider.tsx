"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type LiteModeContextType = {
  isLiteMode: boolean;
  toggleLiteMode: () => void;
};

const LiteModeContext = createContext<LiteModeContextType | undefined>(undefined);

export function LiteModeProvider({ children }: { children: React.ReactNode }) {
  const [isLiteMode, setIsLiteMode] = useState(false);

  useEffect(() => {
    // Check local storage on mount
    const savedMode = localStorage.getItem("lite-mode");
    if (savedMode === "true") {
      setIsLiteMode(true);
      document.body.classList.add("lite-mode");
    }
  }, []);

  const toggleLiteMode = () => {
    setIsLiteMode((prev) => {
      const newState = !prev;
      if (newState) {
        document.body.classList.add("lite-mode");
        localStorage.setItem("lite-mode", "true");
      } else {
        document.body.classList.remove("lite-mode");
        localStorage.setItem("lite-mode", "false");
      }
      return newState;
    });
  };

  return (
    <LiteModeContext.Provider value={{ isLiteMode, toggleLiteMode }}>
      {children}
    </LiteModeContext.Provider>
  );
}

export function useLiteMode() {
  const context = useContext(LiteModeContext);
  if (context === undefined) {
    throw new Error("useLiteMode must be used within a LiteModeProvider");
  }
  return context;
}
