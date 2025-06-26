import HomeClient from "@/components/HomeClient";
import { Metadata } from "next";
import { metadataByLocale } from "@/lib/localeMeta";

export const metadata: Metadata = metadataByLocale["zh"];

export default function Page() {
  return <HomeClient locale="zh" />;
}