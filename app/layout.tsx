import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

// NOTE: placeholder domain — update once the production domain is known.
const SITE_URL = "https://matco.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MATCO Construction & Architectural Solutions",
    template: "%s | MATCO",
  },
  description:
    "MATCO delivers premium construction, interior & exterior, carpentry, aluminium & UPVC, and steel fabrication solutions in Sanaiya, Sultanate of Oman.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "MATCO Construction & Architectural Solutions",
    title: "MATCO Construction & Architectural Solutions",
    description:
      "Premium construction, interior & exterior, carpentry, aluminium & UPVC, and steel fabrication solutions in Sanaiya, Sultanate of Oman.",
    images: [
      {
        url: "/images/hero/matco-hero.jpg",
        width: 1200,
        height: 630,
        alt: "MATCO Construction & Architectural Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MATCO Construction & Architectural Solutions",
    description:
      "Premium construction, interior & exterior, carpentry, aluminium & UPVC, and steel fabrication solutions in Sanaiya, Sultanate of Oman.",
    images: ["/images/hero/matco-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}