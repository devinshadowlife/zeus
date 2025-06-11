// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";


export const metadata: Metadata = {
  title: "Default Title",
  description: "Default description for the site",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children; // <html>과 <body>를 렌더링하지 않음
}