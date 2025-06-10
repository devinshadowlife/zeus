import HomeClient from "@/components/HomeClient";
import en from "@/lib/locales/en.json";
import kr from "@/lib/locales/kr.json";
import cn from "@/lib/locales/cn.json";
import th from "@/lib/locales/th.json";

const translations = { en, kr, cn, th };

// ✅ ✅ ✅ 여기 추가: 필수!
export async function generateStaticParams() {
  return ['en', 'kr', 'cn', 'th'].map((locale) => ({ locale }));
}

export default function Home() {
  return <HomeClient />;
}
