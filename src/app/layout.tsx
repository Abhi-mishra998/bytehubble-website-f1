import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import ConsultationModal from "@/components/ConsultationModal";
import { ConsultationModalProvider } from "@/context/ConsultationModalContext";
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
  title: "ByteHubble — AI Agents That Run Your Databases",
  description:
    "ByteHubble is the AI intelligence layer your PostgreSQL stack is missing — combining enterprise knowledge RAG, autonomous DB agents, self-healing incident AI, and world-class database training.",
  keywords: [
    "PostgreSQL",
    "database automation",
    "AI agents",
    "DB intelligence",
    "database operations",
    "DBA training",
    "incident AI",
    "runbook automation",
  ],
  authors: [{ name: "ByteHubble" }],
  openGraph: {
    title: "ByteHubble — AI Agents That Run Your Databases",
    description:
      "The AI intelligence layer your PostgreSQL stack is missing. Autonomous DB agents, self-healing incident AI, and world-class training.",
    url: "https://bytehubble.com",
    siteName: "ByteHubble",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteHubble — DB Intelligence Platform",
    description:
      "AI agents that automate, optimize, and secure your PostgreSQL infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
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
        <ConsultationModalProvider>
          <Navbar />
          <main>{children}</main>
          <Chatbot />
          <ConsultationModal />
        </ConsultationModalProvider>
      </body>
    </html>
  );
}
