"use client";
import "./globals.css";
import ReduxProvider from "../components/providers/ReduxProvider";
import { ThemeProvider, createTheme } from "@mui/material";
import theme from "@/styles/theme";

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
