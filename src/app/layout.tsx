import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { RESUME_DATA } from "@/data/resume-data";
import { PostHogProvider } from "./providers";

import "./globals.css";
import React from "react";

// Updated Metadata for better SEO
export const metadata: Metadata = {
  metadataBase: new URL(RESUME_DATA.personalWebsiteUrl), // Set the base URL
  title: {
    default: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    template: `%s | ${RESUME_DATA.name}`, // Template for child pages
  },
  description: RESUME_DATA.summary,
  keywords: [
    "Portfolio Template",
    "Developer Portfolio",
    "Full Stack Developer",
    "React Portfolio",
    "Next.js Template",
    "Ruixen UI",
    RESUME_DATA.name,
    ...Object.values(RESUME_DATA.skills).flat(),
  ],
  openGraph: {
    title: {
      default: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
      template: `%s | ${RESUME_DATA.name}`,
    },
    description: RESUME_DATA.summary,
    url: RESUME_DATA.personalWebsiteUrl,
    siteName: RESUME_DATA.name,
    images: [
      {
        url: "/website_ss.png", // Updated to use website_ss.png
        width: 1200,
        height: 630,
        alt: `${RESUME_DATA.name} - ${RESUME_DATA.about}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
      template: `%s | ${RESUME_DATA.name}`,
    },
    description: RESUME_DATA.summary,
    creator: "@ruixen",
    images: ["/website_ss.png"],
  },
  alternates: {
    canonical: RESUME_DATA.personalWebsiteUrl,
  },
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body>
        <PostHogProvider>
          {children}
          <Analytics /> {/* Vercel Analytics */}
        </PostHogProvider>
      </body>
    </html>
  );
}
