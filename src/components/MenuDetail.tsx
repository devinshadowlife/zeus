"use client";
import Image from "next/image";
import React, { useState } from "react";

const imageList = [
  "/images/price1.jpg",
  "/images/price2.jpg",
  "/images/price3.jpg",
  "/images/price4.jpg",
  "/images/price5.jpg",
  "/images/price6.jpg", // 모달 전용
];

const MenuDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

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
    <div className="flex flex-col items-center justify-center px-4 py-10 gap-8">
      {/* 모바일 전용 layout */}
      <div className="flex flex-col w-full items-center lg:hidden gap-6">
        <Image
          src={imageList[0]}
          width={500}
          height={600}
          alt="main image"
          className="rounded-lg shadow cursor-pointer w-full max-w-md object-cover"
          onClick={() => handleOpen(0)}
        />
        <p className="font-lola text-center text-lg lg:text-2xl font-semibold">MORE DETAIL</p>
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {imageList.slice(1, 5).map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt={`detail image ${idx + 2}`}
              width={200}
              height={300}
              className="object-cover rounded-lg shadow cursor-pointer w-full"
              onClick={() => handleOpen(idx + 1)}
            />
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
<div className="flex flex-col justify-between h-[600px]">
  <div className="flex gap-6">
    {imageList.slice(1, 3).map((src, idx) => (
      <div key={src} className="w-[200px] h-[270px] relative">
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

  {/* 그냥 중간 텍스트 — 효과 없이, 여백 없이 */}
  <p className="text-center text-sm font-semibold leading-tight">MORE DETAIL</p>

  <div className="flex gap-6">
    {imageList.slice(3, 5).map((src, idx) => (
      <div key={src} className="w-[200px] h-[240px] relative">
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
