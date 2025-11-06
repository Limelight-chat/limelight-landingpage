import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar5 } from "@/components/navbar5";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Limelight",
  description: "Search engine for your business data.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <Navbar5 />
        {children}
      </body>
    </html>
  );
}
