import type { Metadata } from "next";
import { ThemeProvider } from "./themeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Caballero - Fullstack developer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const setInitialTheme =`
  (function() {
    try {
      if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.add("light");
      }
    } catch (_) {}
  })();
  `
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }}/>
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>

    </html>
  );
}
