// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

import { Cinzel, Lora } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: "ZEUS Karaoke Bangkok - Premium KTV Experience in Ekkamai",
  description:
    "Join the ultimate karaoke party at ZEUS Karaoke in Ekkamai, Bangkok. Sing English hits in VIP rooms with top hostesses!",
  keywords: [
    "#ZeusEkkamai",
    "#Zeusbangkok",
    "#ZeusBangkokKTV",
    "#BangkokClub",
    "#BangkokKTV",
    "#BangkokNightlife",
    "#BangkokBars",
    "#BangkokParty",
    "#BangkokKaraoke",
  ].join(", "),
  openGraph: {
    title: "ZEUS Karaoke Bangkok - Premium KTV Experience in Ekkamai",
    description:
      "Join the ultimate karaoke party at ZEUS Karaoke in Ekkamai, Bangkok. Sing English hits in VIP rooms with top hostesses!",
    url: "https://zeus-karaoke.com/en",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/drrrpatyd/image/upload/v1749629058/S__6922343_ln6mbq.jpg",
        width: 1200,
        height: 630,
        alt: "ZEUS KTV 썸네일",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}