"use client"

import RoomSection from "@/components/DetailModal";
import MenuGallery from "@/components/MenuGallery";
import YouAndUs from "@/components/YouAndUs";
import Image from "next/image";

export default function Home() {
  
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          src="/videos/hero_video.mp4"
          muted
          autoPlay
          className="absolute top-0 left-0 w-full h-full object-cover"
          loop
          playsInline
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-32 text-white text-center">
          <p className="text-6xl font-bold drop-shadow-lg">BE GOD</p>
          <p className="text-6xl font-bold drop-shadow-lg">YOU ARE ZEUS</p>
        </div>
        <div className="absolute inset-0 bg-black/30 z-[5]" />
      </div>

      <div className="flex flex-row gap-3 items-center justify-center">
        <div className="flex flex-col gap-2">
          <p className="text-2xl text-amber-300">Be GOD with us</p>
          <div className="text-center text-5xl">
            <p>Welcome to</p>
            <p>ZEUS</p>
          </div>
          <p>We are one of the best karaoke & KTV in Bangkok</p>
          <div>
            <p>
              You can do A to <span className="text-red-800">Z</span>
            </p>
            <p>
              You are only ON<span className="text-red-800">E</span>
            </p>
            <p>
              You have to be with <span className="text-red-800">US</span>
            </p>
          </div>
          <p>Ready to support you in everything you do</p>
        </div>
        <div>
          <Image
            src="/images/Porsche.jpg"
            width={200}
            height={400}
            alt="poster"
          />
        </div>
      </div>

      <RoomSection />

      <YouAndUs />

      <div className="flex flex-col items-center gap-4">
        <p className="text-3xl">Youtube & TikTok</p>
        <div className="flex flex-row gap-5">
          <p className="text-xl">Youtube Link</p>
          <p className="text-xl">TikTok Link</p>
        </div>
      </div>

      <div>
        <MenuGallery />

        <div className="flex flex-row">
          <Image
            src="/images/Porsche.jpg"
            width={200}
            height={400}
            alt="image"
          />

          <div className="flex flex-col">
            <div className="flex flex-row">
              <Image
                src="/images/Porsche.jpg"
                width={200}
                height={400}
                alt="image"
              />
              <Image
                src="/images/Porsche.jpg"
                width={200}
                height={400}
                alt="image"
              />
            </div>
            <p>MORE DETAIL</p>
            <div className="flex flex-row">
              <Image
                src="/images/Porsche.jpg"
                width={200}
                height={400}
                alt="image"
              />
              <Image
                src="/images/Porsche.jpg"
                width={200}
                height={400}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>Maps</p>
      </div>
    </>
  );
}
