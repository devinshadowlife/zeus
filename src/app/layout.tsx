import type { Metadata } from "next";
import "./globals.css";
import { Cinzel, Lora } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-lora',
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} ${lora.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
