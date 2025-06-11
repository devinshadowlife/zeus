"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import en from "@/lib/locales/en.json";
import ko from "@/lib/locales/ko.json";
import zn from "@/lib/locales/zn.json";
import th from "@/lib/locales/th.json";
import { useParams } from "next/navigation";

const translations = { en, ko, zn, th };

const roomData = [
  { image: "/images/room1.jpg" },
  { image: "/images/room2.jpg" },
  { image: "/images/room3.jpg" },
  { image: "/images/room4.jpg" },
  { image: "/images/room5.jpg" },
  { image: "/images/room6.jpg" },
];

export default function RoomSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
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

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-24 pb-20 lg:pt-40 lg:pb-28 mt-20 bg-[#1c1a23]">
        <p className="font-cinzel text-3xl mb-3 lg:text-6xl lg:mb-5">
          From private to party
        </p>
        <p className="font-lora mb-10 text-xl lg:text-4xl lg:mb-16">
          {t.roomSizes}
        </p>

        <div
          ref={containerRef}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 px-4"
        >
          {roomData.map((room, index) => (
            <div
              key={index}
              className={`relative cursor-pointer group overflow-hidden rounded-lg shadow-lg opacity-0 ${
                inView
                  ? `animate-fade-up [animation-delay:${index * 0.15}s]`
                  : ""
              }`}
              onClick={() => setSelectedImage(room.image)}
            >
              <Image
                src={room.image}
                alt={`Room ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* 모달 */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-[90vw] max-w-[1000px] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Room fullscreen"
              fill
              priority
              className="rounded-xl object-cover"
              sizes="(max-width: 768px) 90vw, 1000px"
            />
          </div>
        </div>
      )}
    </>
  );
}
