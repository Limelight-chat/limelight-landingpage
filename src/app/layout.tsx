import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

import { Navbar5 } from "@/components/navbar5";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata = {
  metadataBase: new URL("https://www.limelight.chat"),

  title: {
    default: "Limelight – AI Search Engine for Your Business Data",
    template: "%s | Limelight"
  },

  description:
    "Limelight is an AI-powered search engine that helps businesses instantly find and analyze data across documents, emails, and files.",

  keywords: [
    "Limelight",
    "AI search engine",
    "knowledge management",
    "semantic search",
    "RAG",
    "retrieval",
    "document intelligence",
    "AI automation"
  ],

  openGraph: {
    title: "Limelight – AI Search Engine for Your Business Data",
    description:
      "An AI-powered search engine that helps businesses and teams instantly find and analyze data across documents, emails, and files.",
    url: "https://www.limelight.chat",
    siteName: "Limelight",
    images: [
      {
        url: "public/logo.png", 
        width: 1200,
        height: 630,
        alt: "Limelight – AI Search Engine"
      }
    ],
    locale: "en_US",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Limelight – AI Search Engine",
    description:
      "Limelight helps businesses and teams search and analyze data across documents, emails, and files.",
    images: ["public/logo.png"]
  },

  robots: {
    index: true,
    follow: true
  },

  alternates: {
    canonical: "https://www.limelight.chat"
  }
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${syne.variable} antialiased`}>
        <Navbar5 />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
