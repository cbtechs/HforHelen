import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "The Structure Police - Helen | Business Optimization Consultant",
    template: "%s | The Structure Police - Helen"
  },
  description: "17+ years Business Optimization Consultant. Structure + Culture = 💰. CEO @samogaconsult. Professional business consulting, HR services, and training.",
  keywords: [
    "business consultant",
    "HR services",
    "business optimization",
    "structure",
    "culture",
    "Nigeria",
    "Samoga Consult",
    "executive coaching",
    "business strategy",
    "organizational development",
    "process automation",
    "recruitment services",
    "payroll services",
    "business documents",
    "staff training"
  ],
  authors: [{ name: "Helen - The Structure Police", url: "https://samogaconsult.com" }],
  creator: "The Structure Police - Helen",
  publisher: "Samoga Consult",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://hforhelen.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "The Structure Police - Helen | Business Optimization Consultant",
    description: "17+ years Business Optimization Consultant. Structure + Culture = 💰",
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hforhelen.vercel.app',
    siteName: "The Structure Police - Helen",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Structure Police - Helen | Business Optimization Consultant',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Structure Police - Helen | Business Optimization Consultant",
    description: "17+ years Business Optimization Consultant. Structure + Culture = 💰",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
