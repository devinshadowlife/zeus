// app/[locale]/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { Cinzel, Lora } from "next/font/google";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  icons: {
    icon: "images/logo.png", // 기본 파비콘
  },
};

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

// ✅ 반드시 async + await params 필요
export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${cinzel.variable} ${lora.variable}`}>{children}</body>
    </html>
  );
}
