"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import en from "@/lib/locales/en.json";
import kr from "@/lib/locales/kr.json";
import cn from "@/lib/locales/cn.json";
import th from "@/lib/locales/th.json";
import { useParams } from "next/navigation";

const translations = { en, kr, cn, th };
const imageData = [
  { src: "/images/service1.jpg", title: "Atom" },
  { src: "/images/service2.jpg", title: "Rainbow" },
  { src: "/images/service3.jpg", title: "" },
  { src: "/images/service4.jpg", title: "Nara" },
  { src: "/images/service5.jpg", title: "Nene" },
  { src: "/images/service6.jpg", title: "Pun" },
  { src: "/images/service7.jpg", title: "Sky" },
  { src: "/images/service8.jpg", title: "Famous" },
  { src: "/images/service9.jpg", title: "Oilly" },
  { src: "/images/service10.jpg", title: "Hongly" },
  { src: "/images/service11.jpg", title: "Sofia" },
  { src: "/images/service12.jpg", title: "Bee" },
  { src: "/images/service13.jpg", title: "Ning" },
];

export default function YouAndUs() {
  const [selected, setSelected] = useState<null | (typeof imageData)[0]>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
const { locale } = useParams() as { locale: keyof typeof translations };
  const t = translations[locale] || translations.en;
  // 자동 스크롤 효과
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setOffset((prev) => {
        const container = containerRef.current;
        const maxScroll = (container?.scrollWidth ?? 0) / 2;
        return (prev - 1) % maxScroll;
      });
    }, 20); // 속도 조절
    return () => clearInterval(interval);
  }, [isPaused]);

  // 화살표 클릭 핸들러 (수동 조작)
  const handleArrow = (dir: "left" | "right") => {
    const delta = dir === "left" ? 200 : -200;
    setOffset((prev) => prev + delta);
  };

  return (
    <div className="py-16 mt-20">
      {/* 헤더 */}
      <div className="text-center mb-14">
        <p className="font-cinzel text-3xl lg:text-5xl font-semibold mb-5">
          ONLY YOU & US
        </p>
        <p className="font-lora text-gray-600 lg:text-lg">
          {t.beTheBest}
        </p>
      </div>

      {/* 이미지 슬라이더 */}
      <div
        className="relative overflow-hidden py-5"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 화살표 */}
        <button
          onClick={() => handleArrow("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 p-2 rounded-full text-white text-xl"
        >
          ‹
        </button>
        <button
          onClick={() => handleArrow("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 p-2 rounded-full text-white text-xl"
        >
          ›
        </button>

        {/* 이미지 흐름 */}
        <div
          ref={containerRef}
          className="flex gap-4 w-max"
          style={{
            transform: `translateX(${offset}px)`,
            transition: isPaused ? "transform 0.3s ease" : "none",
          }}
        >
          {[...imageData, ...imageData].map((item, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 min-w-[160px] h-56 lg:min-w-[256px] lg:h-80 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
              onClick={() => {
                setSelected(item);
                setIsPaused(true);
              }}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="rounded-lg shadow-lg object-fill"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 모달 */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => {
            setSelected(null);
            setIsPaused(false);
          }}
        >
          <div
            className="relative w-[90%] max-w-md rounded-2xl bg-gradient-to-b from-[#111] to-[#1a1a1a] p-6 text-white shadow-2xl border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-2xl text-gray-400 hover:text-red-500 transition"
              onClick={() => {
                setSelected(null);
                setIsPaused(false);
              }}
            >
              ×
            </button>
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[60vh] mb-4 rounded-lg overflow-hidden mx-auto">
              <Image
                src={selected.src}
                alt={selected.title}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="font-cinzel text-2xl font-semibold mb-2 text-amber-400">
              {selected.title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
