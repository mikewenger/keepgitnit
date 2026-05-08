import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "keepgitnit — AI Automation for Local Businesses",
  description: "We automate the tedious work slowing down your business — scheduling, follow-ups, invoicing, and marketing. Keep getting it.",
  openGraph: {
    title: "keepgitnit",
    description: "AI automation for local service businesses. Keep your business running tight.",
    url: "https://keepgitnit.com",
    siteName: "keepgitnit",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
