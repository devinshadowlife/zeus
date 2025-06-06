"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const imageData = [
  {
    src: "/images/service1.jpg",
    title: "Atom",
  },
  {
    src: "/images/service2.jpg",
    title: "Rainbow",
  },
  {
    src: "/images/service3.jpg",
    title: "",
  },
  {
    src: "/images/service4.jpg",
    title: "Nara",
  },
  {
    src: "/images/service5.jpg",
    title: "Nene",
  },
  {
    src: "/images/service6.jpg",
    title: "Pun",
  },
  {
    src: "/images/service7.jpg",
    title: "Sky",
  },
  {
    src: "/images/service8.jpg",
    title: "Famous",
  },
  {
    src: "/images/service9.jpg",
    title: "Oilly",
  },
  {
    src: "/images/service10.jpg",
    title: "Hongly",
  },
  {
    src: "/images/service11.jpg",
    title: "Sofia",
  },
  {
    src: "/images/service12.jpg",
    title: "Bee",
  },
  {
    src: "/images/service13.jpg",
    title: "Ning",
  },
];

export default function YouAndUs() {
  const [selected, setSelected] = useState<null | (typeof imageData)[0]>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.style.animationPlayState = isPaused
        ? "paused"
        : "running";
    }
  }, [isPaused]);

  return (
    <div className="py-16 mt-20">
      <div className="text-center mb-14">
        <p className="font-cinzel text-3xl lg:text-5xl font-semibold mb-5">ONLY YOU & US</p>
        <p className="font-lora lg:text-lg">It&apos;s time for you to be the best.</p>
      </div>

      <div
        className="overflow-hidden relative group py-5"
        onMouseEnter={() => !selected && setIsPaused(true)}
        onMouseLeave={() => !selected && setIsPaused(false)}
      >
        <div
          ref={animationRef}
          className="
            flex w-max gap-4
            animate-slide-slow
            overflow-x-auto overflow-y-hidden scrollbar-hide
          "
        >
          {[...imageData, ...imageData].map((item, idx) => (
            <div
              key={idx}
              className="
    relative shrink-0 
    w-40 h-56
    lg:w-64 lg:h-80
    cursor-pointer
    transition-transform duration-300 hover:-translate-y-2
  "
              onClick={() => {
                setSelected(item);
                setIsPaused(true);
              }}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill // ⬅️ 이거 쓰면 너가 만든 틀(w/h)에 맞게 꽉 채움
                className="rounded-lg shadow-lg object-fill" // ⬅️ 비율 무시하고 찌그러져도 틀 꽉 채움
              />
            </div>
          ))}
        </div>
      </div>

      {/* 디테일 모달 */}
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

            <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
              <Image
                src={selected.src}
                alt={selected.title}
                fill
                className="object-contain"
              />
            </div>

            <h2 className="text-2xl font-bold mb-2 text-amber-400">
              {selected.title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
