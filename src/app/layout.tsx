import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";

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
        <Banner />
        <main className="h-screen px-4 sm:px-0 md:container">
          <Header />
          <div className="flex gap-3">
            <Sidebar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
