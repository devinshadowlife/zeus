"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import en from "@/lib/locales/en.json";
import ko from "@/lib/locales/ko.json";
import zh from "@/lib/locales/zh.json";
import th from "@/lib/locales/th.json";

const imageList = [
  "/images/price1.jpg",
  "/images/price2.jpg",
  "/images/price3.jpg",
  "/images/price4.jpg",
  "/images/price5.jpg",
  "/images/price6.jpg", // 모달 전용
];

const translations = { en, ko, zh, th };

const MenuDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const detailRef = useRef<HTMLDivElement | null>(null);
  const mobileDetailRef = useRef<HTMLDivElement | null>(null); // 모바일용
  const imageRef = useRef<HTMLDivElement | null>(null);
const [bottlesInView, setBottlesInView] = useState(false);
const bottlesRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  const { locale } = useParams() as { locale: keyof typeof translations };
  const t = translations[locale] || translations.en;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );

    if (detailRef.current) observer.observe(detailRef.current);
    if (mobileDetailRef.current) observer.observe(mobileDetailRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setBottlesInView(true);
      }
    },
    { threshold: 0.3 }
  );

  if (bottlesRef.current) observer.observe(bottlesRef.current);

  return () => {
    if (bottlesRef.current) observer.unobserve(bottlesRef.current);
  };
}, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const handleOpen = (idx: number) => {
    setCurrentIdx(idx);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 lg:pt-20 gap-8 bg-[#1c1a23]">
      <div
        ref={imageRef}
        className={`relative w-full h-[300px] lg:h-[400px] max-w-4xl overflow-hidden rounded-lg shadow-lg opacity-0 ${
          inView ? "animate-fade-down" : ""
        }`}
      >
        <Image
          src="/images/table.png"
          fill
          alt="table"
          className="object-cover w-full"
        />
      </div>
      <div className="mt-20 text-center">
        <p className="font-cinzel text-3xl font-bold mb-1 animate-fade-up">
          The Best Chef
          <br />
          in Ekkamai, Bangkok
        </p>
        <p className="font-lora text-lg font-semibold mb-9 animate-fade-up [animation-delay:0.3s]">
          {t.menu}
        </p>
      </div>
      {/* 모바일 전용 layout */}
      <div className="mt-10 lg:mt-20">
        <p className="font-cinzel text-center mb-6 text-3xl text-amber-500 font-semibold lg:text-5xl">
          MENU DETAIL
        </p>
        <p
          className="text-center text-base lg:text-lg font-light text-gray-500 font-lora px-4 lg:max-w-2xl"
          dangerouslySetInnerHTML={{ __html: t.liquorPromo }}
        />
      </div>

      <div
        ref={mobileDetailRef}
        className="flex flex-col w-full items-center lg:hidden gap-6"
      >
        <Image
          src={imageList[0]}
          width={500}
          height={600}
          alt="main image"
          className={`rounded-lg shadow cursor-pointer w-full max-w-md object-cover opacity-0 ${
            inView ? "animate-fade-right [animation-delay:0.1s]" : ""
          }`}
          onClick={() => handleOpen(0)}
        />

        <p
          className={`font-lora text-gray-600 text-center text-lg lg:text-2xl font-semibold opacity-0 ${
            inView ? "animate-fade-up [animation-delay:0.3s]" : ""
          }`}
        >
          MORE DETAIL
        </p>

        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {imageList.slice(1, 5).map((src, idx) => (
            <div
              key={src}
              className={`relative w-full h-[200px] opacity-0 ${
                inView
                  ? idx % 2 === 0
                    ? `animate-fade-right [animation-delay:${0.4 + idx * 0.2}s]`
                    : `animate-fade-left [animation-delay:${0.4 + idx * 0.2}s]`
                  : ""
              }`}
            >
              <Image
                src={src}
                alt={`detail image ${idx + 2}`}
                fill
                className="object-cover rounded-lg shadow cursor-pointer"
                onClick={() => handleOpen(idx + 1)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 데스크탑 전용 layout */}
      <div className="hidden lg:flex flex-row gap-10">
        {/* 왼쪽: 큰 이미지 */}
        <div className="flex-shrink-0 w-[300px] h-[600px] relative">
          <Image
            src={imageList[0]}
            alt="main image"
            fill
            className="rounded-lg shadow cursor-pointer object-cover"
            onClick={() => handleOpen(0)}
          />
        </div>

        {/* 오른쪽: 썸네일 2-텍스트-2 구조 */}
        {/* 오른쪽: 썸네일 2-텍스트-2 구조 */}
        {/* 오른쪽: 텍스트를 absolute로 띄우고 공간은 이미지가 전부 차지 */}
        {/* 오른쪽: 썸네일 2-텍스트-2 구조 (자연스러운 flow + 더 큰 이미지) */}
        <div
          ref={detailRef}
          className="flex flex-col justify-between h-[600px]"
        >
          {/* 상단 이미지 1, 2 */}
          <div className="flex gap-6">
            {imageList.slice(1, 3).map((src, idx) => (
              <div
                key={src}
                className={`w-[200px] h-[270px] relative opacity-0 ${
                  inView
                    ? idx === 0
                      ? "animate-fade-right [animation-delay:0.1s]"
                      : "animate-fade-left [animation-delay:0.3s]"
                    : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`detail image ${idx + 2}`}
                  fill
                  className="object-cover rounded-lg shadow cursor-pointer"
                  onClick={() => handleOpen(idx + 1)}
                />
              </div>
            ))}
          </div>

          {/* 중간 텍스트 */}
          <p className="text-center text-sm font-semibold leading-tight text-gray-600 font-lora">
            MORE DETAIL
          </p>

          {/* 하단 이미지 3, 4 */}
          <div className="flex gap-6">
            {imageList.slice(3, 5).map((src, idx) => (
              <div
                key={src}
                className={`w-[200px] h-[240px] relative opacity-0 ${
                  inView
                    ? idx === 0
                      ? "animate-fade-right [animation-delay:0.5s]"
                      : "animate-fade-left [animation-delay:0.7s]"
                    : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`detail image ${idx + 4}`}
                  fill
                  className="object-cover rounded-lg shadow cursor-pointer"
                  onClick={() => handleOpen(idx + 3)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`relative mt-10 lg:mt-20 w-full lg:w-[600px] aspect-[4/3] mx-auto opacity-0 ${
          bottlesInView  ? "animate-fade-down" : ""
        }`}
        ref={bottlesRef}
      >
        {" "}
        <Image
          src="/images/bottles.jpg"
          alt="bottles"
          fill /* 이미지가 div를 꽉 채우도록 */
          sizes="(min-width:1024px) 600px, 100vw"
          className="object-cover rounded-lg" /* 필요하면 cover → contain 변경 */
        />
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="relative w-[90vw] h-[90vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-white text-3xl z-50 lg:hidden"
            >
              ✕
            </button>
            <Image
              src={imageList[currentIdx]}
              alt="fullscreen image"
              fill
              className="object-contain rounded-xl"
              priority
            />
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50 hover:scale-125 transition"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50 hover:scale-125 transition"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDetail;
