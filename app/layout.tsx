import type { Metadata } from "next";
import {
  Playfair_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";

import { QueryProvider } from "@/lib/providers/query-provider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "ISHAALYA | Unstitched Atelier",
  description: "ISHAALYA customer storefront",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>

      <body className={`${playfair.variable} ${jakarta.variable}`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}