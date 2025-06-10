import HomeClient from "@/components/HomeClient";

// ✅ ✅ ✅ 여기 추가: 필수!
export async function generateStaticParams() {
  return ['en', 'kr', 'cn', 'th'].map((locale) => ({ locale }));
}

export default function Home() {
  return <HomeClient />;
}
