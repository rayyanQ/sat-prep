import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAT Prep",
  description: "Free SAT preparation platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
