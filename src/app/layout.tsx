import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "./theme-provider";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rizky Novan | Personal Website",
  description:
    "a self-taught Full Stack Web Developer. High level experience in product and web development knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className=" scroll-smooth">
      <head />
      <body className={`${fira.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
