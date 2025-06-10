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

// 언어별 메타데이터 정의 (ZEUS Karaoke, 에까마이로 수정)
const metadataByLocale: Record<string, Metadata> = {
  ko: {
    title: "ZEUS Karaoke 방콕 - 에까마이 최고의 가라오케 & KTV",
    description: "방콕 에까마이의 ZEUS Karaoke에서 프리미엄 가라오케와 KTV를 즐겨보세요! 한국어 노래, VIP 룸, 화려한 호스티스와 함께하는 최고의 밤문화.",
    keywords: [
      "방콕 가라오케",
      "ZEUS Karaoke",
      "에까마이 KTV",
      "한국 노래방",
      "방콕 밤문화",
      "VIP 가라오케",
      "노래방 방콕",
      "한국식 가라오케",
      "에까마이 노래방",
    ],
    alternates: {
      canonical: "https://zeus-karaoke.com/ko",
      languages: {
        "ko-KR": "https://zeus-karaoke.com/ko",
        "en-US": "https://zeus-karaoke.com/en",
        "zh-CN": "https://zeus-karaoke.com/zh",
        "th-TH": "https://zeus-karaoke.com/th",
      },
    },
    openGraph: {
      title: "ZEUS Karaoke 방콕 - 에까마이 프리미엄 가라오케",
      description: "방콕 에까마이 ZEUS Karaoke에서 한국식 가라오케와 VIP KTV를 경험하세요. 한국어 노래와 호스티스와 함께하는 특별한 밤!",
      url: "https://zeus-karaoke.com/ko",
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: "https://zeus-karaoke.com/images/og-ko.jpg",
          width: 1200,
          height: 630,
          alt: "ZEUS Karaoke 방콕 에까마이",
        },
      ],
    },
  },
  en: {
    title: "ZEUS Karaoke Bangkok - Best KTV & Karaoke in Ekkamai",
    description: "Experience premium karaoke and KTV at ZEUS Karaoke in Ekkamai, Bangkok. Enjoy VIP rooms, English songs, and vibrant nightlife with stunning hostesses.",
    keywords: [
      "Bangkok Karaoke",
      "ZEUS Karaoke",
      "Ekkamai KTV",
      "Karaoke Bangkok",
      "Nightlife Bangkok",
      "VIP Karaoke",
      "KTV Thailand",
      "Party Bangkok",
      "Ekkamai Nightlife",
    ],
    alternates: {
      canonical: "https://zeus-karaoke.com/en",
      languages: {
        "ko-KR": "https://zeus-karaoke.com/ko",
        "en-US": "https://zeus-karaoke.com/en",
        "zh-CN": "https://zeus-karaoke.com/zh",
        "th-TH": "https://zeus-karaoke.com/th",
      },
    },
    openGraph: {
      title: "ZEUS Karaoke Bangkok - Premium KTV Experience in Ekkamai",
      description: "Join the ultimate karaoke party at ZEUS Karaoke in Ekkamai, Bangkok. Sing English hits in VIP rooms with top hostesses!",
      url: "https://zeus-karaoke.com/en",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://zeus-karaoke.com/images/og-en.jpg",
          width: 1200,
          height: 630,
          alt: "ZEUS Karaoke Bangkok Ekkamai",
        },
      ],
    },
  },
  zh: {
    title: "曼谷ZEUS卡拉OK - 艾卡迈最佳KTV与卡拉OK",
    description: "在曼谷艾卡迈的ZEUS Karaoke体验顶级KTV和卡拉OK！提供中文歌曲、VIP包房和迷人的派对氛围，尽享夜生活。",
    keywords: [
      "曼谷卡拉OK",
      "ZEUS Karaoke",
      "艾卡迈KTV",
      "曼谷夜生活",
      "VIP卡拉OK",
      "KTV泰国",
      "中文歌曲",
      "派对曼谷",
      "艾卡迈夜生活",
    ],
    alternates: {
      canonical: "https://zeus-karaoke.com/zh",
      languages: {
        "ko-KR": "https://zeus-karaoke.com/ko",
        "en-US": "https://zeus-karaoke.com/en",
        "zh-CN": "https://zeus-karaoke.com/zh",
        "th-TH": "https://zeus-karaoke.com/th",
      },
    },
    openGraph: {
      title: "曼谷ZEUS卡拉OK - 艾卡迈顶级KTV体验",
      description: "在曼谷艾卡迈ZEUS Karaoke享受中文卡拉OK和VIP KTV，体验独特的夜生活与派对！",
      url: "https://zeus-karaoke.com/zh",
      locale: "zh_CN",
      type: "website",
      images: [
        {
          url: "https://zeus-karaoke.com/images/og-zh.jpg",
          width: 1200,
          height: 630,
          alt: "曼谷ZEUS卡拉OK 艾卡迈",
        },
      ],
    },
  },
  th: {
    title: "ZEUS Karaoke กรุงเทพ - คาราโอเกะและ KTV ที่ดีที่สุดในเอกมัย",
    description: "สัมผัสประสบการณ์คาราโอเกะและ KTV ระดับพรีเมียมที่ ZEUS Karaoke เอกมัย กรุงเทพฯ พร้อมห้อง VIP เพลงไทยและโฮสเตสสุดสวย",
    keywords: [
      "คาราโอเกะ กรุงเทพ",
      "ZEUS Karaoke",
      "เอกมัย KTV",
      "สถานบันเทิงยามค่ำคืน กรุงเทพ",
      "คาราโอเกะ VIP",
      "KTV ประเทศไทย",
      "ปาร์ตี้ กรุงเทพ",
      "เพลงไทย",
      "เอกมัย คาราโอเกะ",
    ],
    alternates: {
      canonical: "https://zeus-karaoke.com/th",
      languages: {
        "ko-KR": "https://zeus-karaoke.com/ko",
        "en-US": "https://zeus-karaoke.com/en",
        "zh-CN": "https://zeus-karaoke.com/zh",
        "th-TH": "https://zeus-karaoke.com/th",
      },
    },
    openGraph: {
      title: "ZEUS Karaoke กรุงเทพ - ประสบการณ์คาราโอเกะระดับพรีเมียมในเอกมัย",
      description: "ร้องคาราโอเกะเพลงไทยในห้อง VIP ที่ ZEUS Karaoke เอกมัย กรุงเทพฯ พร้อมโฮสเตสและปาร์ตี้สุดมันส์!",
      url: "https://zeus-karaoke.com/th",
      locale: "th_TH",
      type: "website",
      images: [
        {
          url: "https://zeus-karaoke.com/images/og-th.jpg",
          width: 1200,
          height: 630,
          alt: "ZEUS Karaoke กรุงเทพ เอกมัย",
        },
      ],
    },
  },
};

// 동적 메타데이터 생성 함수
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return metadataByLocale[locale] || metadataByLocale["en"];
}

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
      <body className={`${cinzel.variable} ${lora.variable}`}>
        {children}
      </body>
    </html>
  );
}