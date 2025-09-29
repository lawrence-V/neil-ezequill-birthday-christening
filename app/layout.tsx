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

// Get the base URL for Open Graph images
const baseUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : process.env.NODE_ENV === 'production'
  ? 'https://neil-ezequill-birthday-christening.vercel.app'
  : 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Little Boss - Birthday & Christening Celebration",
  description: "Join us as our little CEO turns one and receives God's blessing! A special weekend celebrating our Little Boss's birthday party and christening ceremony.",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Little Boss - Birthday & Christening Celebration 🎉",
    description: "Join us as our little CEO turns one and receives God's blessing! A special weekend celebrating our Little Boss's birthday party and christening ceremony. 👶🎂✨",
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Little Boss Celebration",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Little Boss Birthday & Christening Celebration",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Boss - Birthday & Christening Celebration 🎉",
    description: "Join us as our little CEO turns one and receives God's blessing! 👶🎂✨",
    images: [`${baseUrl}/og-image.jpg`],
    creator: "@littleboss",
    site: "@littleboss",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Little Boss - Birthday & Christening Celebration",
    "description": "Join us as our little CEO turns one and receives God's blessing! A special weekend celebrating our Little Boss's birthday party and christening ceremony.",
    "image": `${baseUrl}/og-image.jpg`,
    "startDate": "2024-12-15T14:00:00",
    "endDate": "2024-12-16T12:00:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Family Garden Venue & St. Mary's Church"
    },
    "organizer": {
      "@type": "Person",
      "name": "Little Boss Family"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
