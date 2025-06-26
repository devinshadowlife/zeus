// app/[locale]/page.tsx
import type { Metadata } from "next";

const hashtags = {
  en: [
    "#ZeusEkkamai",
    "#Zeusbangkok",
    "#ZeusBangkokKTV",
    "#BangkokClub",
    "#BangkokKTV",
    "#BangkokNightlife",
    "#BangkokBars",
    "#BangkokParty",
    "#BangkokKaraoke"
  ],
  ko: [
    "#ZeusEkkamai",
    "#Zeusbangkok",
    "#ZeusBangkokKTV",
    "#방콕가라오케",
    "#방콕KTV",
    "#방콕노래방",
    "#태국가라오케",
    "#방콕밤문화",
    "#방콕파티",
    "#방콕클럽",
    "#제우스방콕가라오케",
    "#방콕제우스가라오케",
  ],
  th: [
    "#ZeusEkkamai",
    "#Zeusbangkok",
    "#ZeusBangkokKTV",
    "#BangkokKTV",
    "#เอกมัย",
    "#ปาร์ตี้กรุงเทพ",
    "#คาราโอเกะหรู",
    "#เที่ยวกลางคืน",
  ],
  zh: [
    "#曼谷夜生活",
    "#曼谷酒吧",
    "#曼谷夜店",
    "#曼谷KTV",
    "#泰国夜生活",
    "＃泰国美女",
    "#曼谷俱乐部",
    "#曼谷",
    "#ZeusBangkokKTV",
  ],
};

// ✅ locale별 메타데이터 정의
export const metadataByLocale: Record<string, Metadata> = {
  en: {
    title: "ZEUS Karaoke Bangkok - Premium KTV Experience in Ekkamai",
    description:
      "Join the ultimate karaoke party at ZEUS Karaoke in Ekkamai, Bangkok. Sing English hits in VIP rooms with top hostesses!",
    keywords: hashtags.en.join(", "),

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
  },
  ko: {
    title: "ZEUS KTV 방콕 - 고급 프리미엄 노래방",
    description:
      "에까마이에 위치한 ZEUS에서 최고의 프라이빗 KTV 경험을 느껴보세요. 한국 노래 완비, 고급룸 보유!",
    keywords: hashtags.ko.join(", "),

    openGraph: {
      title: "ZEUS KTV 방콕 - 고급 프리미엄 노래방",
      description:
        "에까마이에 위치한 ZEUS에서 최고의 프라이빗 KTV 경험을 느껴보세요. 한국 노래 완비, 고급룸 보유!",
      url: "https://zeus-karaoke.com/ko",
      locale: "ko_KR",
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
  },
  th: {
    title: "ZEUS คาราโอเกะหรู ย่านเอกมัย กรุงเทพฯ",
    description:
      "สนุกกับค่ำคืนสุดหรูที่ ZEUS Karaoke เอกมัย ห้อง VIP และบริการระดับพรีเมียม",
    keywords: hashtags.th.join(", "),

    openGraph: {
      title: "ZEUS คาราโอเกะหรู ย่านเอกมัย กรุงเทพฯ",
      description:
        "สนุกกับค่ำคืนสุดหรูที่ ZEUS Karaoke เอกมัย ห้อง VIP และบริการระดับพรีเมียม",
      url: "https://zeus-karaoke.com/th",
      locale: "th_TH",
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
  },
  zh: {
    title: "ZEUS 卡拉OK 曼谷 - 高级KTV体验",
    description:
      "在曼谷Ekkamai的ZEUS卡拉OK享受顶级的KTV体验。豪华包间，中文歌曲应有尽有。",
    keywords: hashtags.zh.join(", "),

    openGraph: {
      title: "ZEUS 卡拉OK 曼谷 - 高级KTV体验",
      description:
        "在曼谷Ekkamai的ZEUS卡拉OK享受顶级的KTV体验。豪华包间，中文歌曲应有尽有。",
      url: "https://zeus-karaoke.com/zh",
      locale: "zh_CN",
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
  },
};
