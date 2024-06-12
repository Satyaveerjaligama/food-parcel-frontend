"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "../components/providers/ReduxProvider";
import { alexandria } from "@/utilities/fonts";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `${alexandria.style.fontFamily}`,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
