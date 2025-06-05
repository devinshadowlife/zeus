"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const imageData = [
  {
    src: "/images/Porsche.jpg",
    title: "VIP Room",
    desc: "A luxury room with full privacy",
  },
  {
    src: "/images/Porsche.jpg",
    title: "Private Suite",
    desc: "Perfect for intimate gatherings",
  },
  {
    src: "/images/Porsche.jpg",
    title: "Deluxe Lounge",
    desc: "Chill space with premium service",
  },
  {
    src: "/images/Porsche.jpg",
    title: "Good Service",
    desc: "Cloud nine",
  },
  {
    src: "/images/Porsche.jpg",
    title: "Sweets",
    desc: "Sweeter than life ever",
  },
  {
    src: "/images/Porsche.jpg",
    title: "Affordable Price",
    desc: "Don't waste your time and money, keep your money with the best service",
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
        <p className="text-5xl font-semibold mb-5">ONLY YOU & US</p>
        <p className="text-lg">It&apos;s time for you to be the best.</p>
      </div>

      <div
        className="overflow-hidden relative group py-5"
        onMouseEnter={() => !selected && setIsPaused(true)}
        onMouseLeave={() => !selected && setIsPaused(false)}
      >
        <div
          ref={animationRef}
          className={`flex w-max animate-slide-slow gap-4`}
        >
          {[...imageData, ...imageData].map((item, idx) => (
            <div
              key={idx}
              className="shrink-0 w-64 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
              onClick={() => {
                setSelected(item);
                setIsPaused(true);
              }}
            >
              <Image
                src={item.src}
                width={256}
                height={320}
                alt={item.title}
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 디테일 모달 */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => {
            setSelected(null);
            setIsPaused(false);
          }}
        >
          <div
            className="relative bg-white rounded-xl p-8 shadow-xl text-center w-[300px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
              onClick={() => {
                setSelected(null);
                setIsPaused(false);
              }}
            >
              ×
            </button>
            <img src={selected.src}/>
            <p className="text-2xl font-bold mb-2">{selected.title}</p>
            <p className="text-lg">{selected.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
