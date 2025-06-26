import { redirect } from "next/navigation";
import { Metadata } from "next";
import { metadataByLocale } from "@/lib/localeMeta";

export const metadata: Metadata = metadataByLocale["en"];

export default function Page() {
  redirect("/en");
  return null;
}