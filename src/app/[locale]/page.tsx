// app/[locale]/page.tsx
import HomeClient from "@/components/HomeClient";
import type { Metadata } from "next";

// ✅ SSG로 locale별 HTML 미리 생성
export function generateStaticParams() {
  return ["en", "ko", "th", "zh"].map((locale) => ({ locale }));
}

// ✅ locale별 메타데이터 정의
const metadataByLocale: Record<string, Metadata> = {
  en: {
    title: "ZEUS Karaoke Bangkok - Premium KTV Experience in Ekkamai",
    description:
      "Join the ultimate karaoke party at ZEUS Karaoke in Ekkamai, Bangkok. Sing English hits in VIP rooms with top hostesses!",
    openGraph: {
      title: "ZEUS Karaoke Bangkok - Premium KTV Experience in Ekkamai",
      description:
        "Join the ultimate karaoke party at ZEUS Karaoke in Ekkamai, Bangkok. Sing English hits in VIP rooms with top hostesses!",
      url: "https://zeus-karaoke.com/en",
      locale: "en_US",
      type: "website",
    },
  },
  ko: {
    title: "ZEUS KTV 방콕 - 고급 프리미엄 노래방",
    description: "에까마이에 위치한 ZEUS에서 최고의 프라이빗 KTV 경험을 느껴보세요. 한국 노래 완비, 고급룸 보유!",
    openGraph: {
      title: "ZEUS KTV 방콕 - 고급 프리미엄 노래방",
      description:
        "에까마이에 위치한 ZEUS에서 최고의 프라이빗 KTV 경험을 느껴보세요. 한국 노래 완비, 고급룸 보유!",
      url: "https://zeus-karaoke.com/ko",
      locale: "ko_KR",
      type: "website",
    },
  },
  th: {
    title: "ZEUS คาราโอเกะหรู ย่านเอกมัย กรุงเทพฯ",
    description: "สนุกกับค่ำคืนสุดหรูที่ ZEUS Karaoke เอกมัย ห้อง VIP และบริการระดับพรีเมียม",
    openGraph: {
      title: "ZEUS คาราโอเกะหรู ย่านเอกมัย กรุงเทพฯ",
      description:
        "สนุกกับค่ำคืนสุดหรูที่ ZEUS Karaoke เอกมัย ห้อง VIP และบริการระดับพรีเมียม",
      url: "https://zeus-karaoke.com/th",
      locale: "th_TH",
      type: "website",
    },
  },
  zh: {
    title: "ZEUS 卡拉OK 曼谷 - 高级KTV体验",
    description: "在曼谷Ekkamai的ZEUS卡拉OK享受顶级的KTV体验。豪华包间，中文歌曲应有尽有。",
    openGraph: {
      title: "ZEUS 卡拉OK 曼谷 - 高级KTV体验",
      description:
        "在曼谷Ekkamai的ZEUS卡拉OK享受顶级的KTV体验。豪华包间，中文歌曲应有尽有。",
      url: "https://zeus-karaoke.com/zh",
      locale: "zh_CN",
      type: "website",
    },
  },
};

// ✅ locale별 메타데이터 반환
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return metadataByLocale[locale] || metadataByLocale.en;
}


// ✅ 페이지 본문
export default function Home() {
  return <HomeClient />;
}
