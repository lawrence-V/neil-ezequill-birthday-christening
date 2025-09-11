import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Little Boss - Birthday & Christening Celebration",
  description: "Join us as our little CEO turns one and receives God's blessing! A special weekend celebrating our Little Boss's birthday party and christening ceremony.",
  openGraph: {
    title: "Little Boss - Birthday & Christening Celebration 🎉",
    description: "Join us as our little CEO turns one and receives God's blessing! A special weekend celebrating our Little Boss's birthday party and christening ceremony. 👶🎂✨",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Little Boss Birthday & Christening Celebration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Boss - Birthday & Christening Celebration 🎉",
    description: "Join us as our little CEO turns one and receives God's blessing! 👶🎂✨",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
