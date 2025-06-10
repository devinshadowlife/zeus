// app/[locale]/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import { Cinzel, Lora } from "next/font/google";
import { ReactNode } from "react";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lora",
});

export default function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html>
      <body className={`${cinzel.variable} ${lora.variable}`}>
        {children}
      </body>
    </html>
  );
}
