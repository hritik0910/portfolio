import { Unbounded, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "../data/site";

const display = Unbounded({ subsets: ["latin"], variable: "--font-display", weight: ["500", "700"] });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: `${site.name} – ${site.role}`,
  description: "Software engineer building data and analytics products with Angular, .NET and Elasticsearch.",
};

// Runs before first paint so the page never flashes the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}