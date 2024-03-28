import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Razaqisama - Web Portfolio",
  description: "Welcome to my Portfolio!",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-4 lg:p-8 flex justify-center items-center w-dvw h-dvh">
          {children}
        </main>
      </body>
    </html>
  );
}
