"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const roomData = [
  { label: "S", desc: "MORE", images: ["/images/s1.jpg"] },
  {
    label: "M",
    desc: "MORE",
    images: ["/images/m1.jpg", "/images/m2.jpg", "/images/m3.jpg"],
  },
  {
    label: "VIP",
    desc: "MORE",
    images: ["/images/vip1.jpg", "/images/vip2.jpg"],
  },
];

export default function RoomSection() {
  type Room = (typeof roomData)[number];
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const [currentIdx, setCurrentIdx] = useState(0);

  const modalContentRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target as Node)
      ) {
        setSelectedRoom(null);
        setCurrentIdx(0);
      }
    };

    if (selectedRoom) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedRoom]);

  const handleNext = () => {
    if (!selectedRoom) return;
    setCurrentIdx((prev) =>
      prev === selectedRoom.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (!selectedRoom) return;
    setCurrentIdx((prev) =>
      prev === 0 ? selectedRoom.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-24 pb-20 lg:pt-40 lg:pb-28 mt-20 bg-[#1c1a23]">
        <p className="font-cinzel text-3xl mb-3 lg:text-6xl lg:mb-5">
          From private to party
        </p>
        <p className="font-lora mb-10 text-xl lg:text-4xl lg:mb-16">
          various room sizes
        </p>

        <div
  ref={containerRef}
  className="flex flex-row gap-4 mx-3 lg:gap-16"
>
  {roomData.map((room, index) => (
    <div
      key={index}
      className={`flex flex-col items-center cursor-pointer transition-transform hover:scale-105 opacity-0
        ${inView ? `animate-fade-down [animation-delay:${index * 0.2}s]` : ""}`}
      onClick={() => {
        setSelectedRoom(room);
        setCurrentIdx(0);
      }}
    >
      <Image
        src={room.images[0]}
        width={200}
        height={400}
        alt={room.label}
        className="mb-4 lg:mb-8"
      />
      <p className="font-lora font-bold lg:text-4xl">{room.label}</p>
      <p className="font-lora text-sm lg:text-lg">{room.desc}</p>
    </div>
  ))}
</div>

      </div>

      {selectedRoom && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => {
            setSelectedRoom(null);
            setCurrentIdx(0);
          }}
        >
          <div
            className="relative w-[90vw] max-w-[1000px] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedRoom.images[currentIdx]}
              alt={selectedRoom.label}
              fill
              priority
              className="rounded-xl object-cover"
              sizes="(max-width: 768px) 90vw, 1000px"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50 hover:scale-125 transition"
            >
              ›
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50 hover:scale-125 transition"
            >
              ‹
            </button>
          </div>
        </div>
      )}
    </>
  );
}
