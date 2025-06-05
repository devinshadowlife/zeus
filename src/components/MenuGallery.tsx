"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const imageList = [
  "/images/Porsche.jpg",
  "/images/Porsche.jpg",
  "/images/Porsche.jpg",
  "/images/Porsche.jpg",
  "/images/Porsche.jpg",
];

export default function MenuGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 4000); // 4초 간격

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 text-center">
      {/* 메인 이미지 */}
      <div className="mb-8 flex justify-center">
        <Image
          src={imageList[currentIndex]}
          width={400}
          height={600}
          alt="Main Menu Image"
          className="rounded-lg shadow-xl transition-all duration-500"
        />
      </div>

      {/* 썸네일 리스트 */}
<div className="flex flex-wrap justify-center gap-4 px-4">
        {imageList.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            width={150}
            height={200}
            alt={`thumb-${idx}`}
            className={`rounded cursor-pointer inline-block transition-transform duration-300 ${
              idx === currentIndex
                ? "ring-1 ring-amber-500 scale-105"
                : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
      <p className="text-3xl font-bold mb-1 mt-20">
        The Best Chef in Ekkamai, Bangkok
      </p>
      <p className="mb-9 text-lg font-semibold">Korean, Chinese, Japanese and Thai food</p>
      <p className="mb-6 text-2xl text-amber-500 font-semibold">MENU DETAIL</p>
    </div>
  );
}
