"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

import { themes } from "@/styles/theme";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" value={{ ...themes }}>
      {children}
    </ThemeProvider>
  );
}
