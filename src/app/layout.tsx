import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "News App",
  description: "News App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased smooth scroll-smooth bg-background`}
      >
        <main className="h-screen px-4 sm:px-0 border-4 border-red-500">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
