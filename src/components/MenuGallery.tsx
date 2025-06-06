"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const imageList = [
  "/images/Porsche.jpg",
  "/images/Porsche.jpg",
  "/images/Porsche.jpg",
  "/images/Porsche.jpg",
  "/images/Porsche.jpg",
];

export default function MenuGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef<HTMLDivElement | null>(null);
const [textInView, setTextInView] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTextInView(true);
      }
    },
    { threshold: 0.3 }
  );

  if (textRef.current) observer.observe(textRef.current);
  return () => observer.disconnect();
}, []);


  // 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 text-center">
      {/* 메인 이미지 */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-[300px] h-[400px] lg:w-[400px] lg:h-[600px]">
          <Image
            src={imageList[currentIndex]}
            alt="Main Menu Image"
            fill
            className="rounded-lg shadow-xl object-cover transition-all duration-500"
          />
        </div>
      </div>

      {/* 썸네일 리스트 */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {imageList.map((img, idx) => (
          <div
            key={idx}
            className={`relative w-[100px] h-[130px] lg:w-[150px] lg:h-[200px] cursor-pointer transition-transform duration-300 ${
              idx === currentIndex
                ? "ring-1 ring-amber-500 scale-105"
                : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => setCurrentIndex(idx)}
          >
            <Image
              src={img}
              alt={`thumb-${idx}`}
              fill
              className="rounded object-cover"
            />
          </div>
        ))}
      </div>

      <div ref={textRef} className="mt-20">
  <p
    className={`font-cinzel text-3xl font-bold mb-1 opacity-0 ${
      textInView ? "animate-fade-up [animation-delay:0.1s]" : ""
    }`}
  >
    The Best Chef in Ekkamai, Bangkok
  </p>
  <p
    className={`font-lora text-lg font-semibold mb-9 opacity-0 ${
      textInView ? "animate-fade-up [animation-delay:0.3s]" : ""
    }`}
  >
    Korean, Chinese, Japanese and Thai food
  </p>
</div>

    </div>
  );
}
