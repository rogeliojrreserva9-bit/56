import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Rara Reserva | Personal Site",
  description: "A personal site built with Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <nav className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-5xl items-center gap-6 px-6 py-4">
            <Link href="/" className="font-semibold hover:text-blue-700">
              Home
            </Link>
            <Link href="/about" className="font-semibold hover:text-blue-700">
              About
            </Link>
            <Link href="/projects" className="font-semibold hover:text-blue-700">
              Projects
            </Link>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
