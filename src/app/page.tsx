"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import RoomSection from "@/components/DetailModal";
import MenuGallery from "@/components/MenuGallery";
import YouAndUs from "@/components/YouAndUs";
import SectionIndicator from "@/components/SectionIndicator";
import MessengerButton from "@/components/MessengerButton";
import Header from "@/components/Header";

export default function Home() {
  const [fadeOpacity, setFadeOpacity] = useState(1);
const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200; // 이 값 넘으면 완전 투명
      const newOpacity = Math.max(1 - scrollY / maxScroll, 0);
      setFadeOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
  const handleScroll = () => {
    const element = document.getElementById("about");
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const triggerHeight = window.innerHeight * 0.9; // 👈 90% 지점에 걸리면 발동

    if (rect.top < triggerHeight) {
      setAboutVisible(true);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 첫 진입에도 실행
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <Header />
      <div className="fixed top-0 left-0 w-full h-screen z-10 flex flex-col items-center justify-center text-white text-center">
        <video
          src="/videos/hero_video.mp4"
          muted
          autoPlay
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          loop
          playsInline
        />
        <div
          className="z-10 pt-32 transition-opacity duration-300 animate-fade-up"
          style={{ opacity: fadeOpacity }}
        >
          {" "}
          <p className="text-6xl font-bold drop-shadow-lg">BE GOD</p>
          <p className="text-6xl font-bold drop-shadow-lg">YOU ARE ZEUS</p>
        </div>
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-b from-transparent to-black/90 z-10" />
      </div>

      <div className="relative z-20 mt-[100vh] bg-white">
        <div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-30" />
        <div className="relative z-40 pt-20">
          <div
            id="about"
            className={`flex flex-row gap-32 items-center justify-center pt-10 transition-opacity duration-1000 ${
              aboutVisible ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col gap-2">
              <p className="text-2xl text-amber-400">Be GOD with us</p>
              <div className="text-center text-5xl py-3">
                <p>Welcome to</p>
                <p>ZEUS</p>
              </div>
              <p className="text-lg py-2">
                We are one of the best karaoke & KTV in Bangkok
              </p>
              <div className="text-lg gap-1 text-center">
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
              <p className="text-lg pt-3 text-center">
                Ready to support you in everything you do
              </p>
            </div>

            <div className="relative w-[300px] h-[450px]">
              <Image
                src="/images/Porsche.jpg"
                fill
                alt="poster"
                className="object-cover"
              />
            </div>
          </div>

          <div id="room">
            <RoomSection />
          </div>

          <SectionIndicator />

          <div id="service">
            <YouAndUs />
          </div>

          <div id="youtube" className="flex flex-col items-center gap-4 my-20">
            <p className="text-3xl">Youtube & TikTok</p>
            <div className="flex flex-row gap-5">
              <p className="text-xl">Youtube Link</p>
              <p className="text-xl">TikTok Link</p>
            </div>
          </div>

          <div id="menu">
            <MenuGallery />

            <div className="flex flex-row justify-center gap-7">
              <Image
                src="/images/Porsche.jpg"
                width={300}
                height={400}
                alt="image"
              />

              <div className="flex flex-col gap-7">
                <div className="flex flex-row gap-7">
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
                <p className="text-center text-lg font-semibold">MORE DETAIL</p>
                <div className="flex flex-row gap-7">
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

          <div
            id="map"
            className="flex flex-col justify-center items-center mt-20 pb-20"
          >
            <p className="text-4xl mb-10">Maps</p>
            <div className="w-full h-[500px] flex flex-row justify-center gap-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.9002112869025!2d100.58624432319237!3d13.730529652408523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17!3m3!1m2!1s0x30e29f001b8f0779%3A0x6e41709ae71870a6!2sZeus%20Ekkamai%20ktv%20karaoke!5e0!3m2!1sen!2skr!4v1749106739132!5m2!1sen!2skr"
                width="40%"
                height="100%"
                allowFullScreen
                loading="lazy"
                className="rounded-md border-2 border-gray-300"
              ></iframe>
              <p className="text-lg">
                Address : 23/1 Ekkamai 12 Alley, Khlong Tan Nuea, <br />
                Watthana, Bangkok 10110, Thailand
              </p>
            </div>
          </div>
        </div>
      </div>

      <MessengerButton />
    </>
  );
}
