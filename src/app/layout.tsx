import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Structure Police - Helen | Business Optimization Consultant",
  description: "17+ years Business Optimization Consultant. Structure + Culture = 💰. CEO @samogaconsult. Professional business consulting, HR services, and training.",
  keywords: "business consultant, HR services, business optimization, structure, culture, Nigeria, Samoga Consult",
  authors: [{ name: "Helen - The Structure Police" }],
  openGraph: {
    title: "The Structure Police - Helen | Business Optimization Consultant",
    description: "17+ years Business Optimization Consultant. Structure + Culture = 💰",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Structure Police - Helen | Business Optimization Consultant",
    description: "17+ years Business Optimization Consultant. Structure + Culture = 💰",
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
