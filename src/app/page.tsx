"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import RoomSection from "@/components/DetailModal";
import MenuGallery from "@/components/MenuGallery";
import YouAndUs from "@/components/YouAndUs";
import SectionIndicator from "@/components/SectionIndicator";
import MessengerButton from "@/components/MessengerButton";
import Header from "@/components/Header";
import MenuDetail from "@/components/MenuDetail";

export default function Home() {
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const [aboutVisible, setAboutVisible] = useState(false);
  // 상단

const getSafeVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};


useEffect(() => {
  getSafeVh();
  window.addEventListener("resize", getSafeVh);
  return () => window.removeEventListener("resize", getSafeVh);
}, []);



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
      <video
        src="/videos/hero_video.mp4"
        muted
        autoPlay
        className="
            fixed
            inset-0
            w-full
            h-full
            object-cover
          "
        loop
        playsInline
      />

      <div className="fixed top-0 left-0 w-full h-screen z-20 flex flex-col items-center justify-center text-white text-center pointer-events-none">
        <div
          className="z-10 pt-32 transition-opacity duration-300 animate-fade-up"
          style={{ opacity: fadeOpacity }}
        >
          <Image
            alt="Zeus Logo"
            src="/images/logo.png"
            width={150}
            height={50}
            className="mx-auto w-[240px] sm:w-[280px] md:w-[320px] lg:w-[450px] h-auto"
          />{" "}
          <p className="font-cinzel mb-3 mt-10 text-4xl lg:text-6xl font-bold drop-shadow-lg">
            BE GOD
          </p>
          <p className="font-cinzel text-4xl lg:text-6xl font-bold drop-shadow-lg">
            YOU ARE ZEUS
          </p>
        </div>
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-b from-transparent to-black/90 z-10" />
      </div>

<div
  className="relative z-20 bg-[#000011]"
  style={{ marginTop: 'calc(var(--vh, 1vh) * 100)' }}
>
  <div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-t from-[#000011] to-transparent z-10" />
  <div className="relative z-20 pt-20">
          <div
            id="about"
            className={`flex flex-row gap-32 items-center justify-center pt-10 transition-opacity duration-1000 ${
              aboutVisible ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col gap-2">
              <p className="font-cinzel text-lg lg:text-2xl text-amber-400">
                Be GOD with us
              </p>
              <div className="font-cinzel font-semibold text-center text-2xl lg:text-5xl py-3">
                <p>Welcome to</p>
                <p>ZEUS</p>
              </div>
              <p className="font-lola text-sm lg:text-lg py-2">
                We are one of the best karaoke & KTV in Bangkok
              </p>
              <div className="font-lola lg:text-lg gap-1 text-center">
                <p>
                  You can do A to{" "}
                  <span className="text-red-500 glow-red">Z</span>
                </p>
                <p>
                  You are only ON
                  <span className="text-red-500 glow-red">E</span>
                </p>
                <p>
                  You have to be with{" "}
                  <span className="text-red-500 glow-red">US</span>
                </p>
              </div>
              <p className="text-sm lg:text-lg pt-3 text-center">
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
            <p className="font-cinzel text-3xl">Youtube & TikTok</p>
            <div className="flex flex-row gap-5">
              <p className="text-xl">Youtube Link</p>
              <p className="text-xl">TikTok Link</p>
            </div>
          </div>

          <div id="menu">
            <MenuGallery />

            <MenuDetail />
          </div>

          <div id="map" className="flex flex-col items-center mt-20 px-4 pb-20">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
              Our Location
            </p>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-center mb-6">
              In the Heart of Ekkamai
            </h2>
            <p className="font-lora text-center text-gray-600 max-w-xl mb-10 leading-relaxed">
              Experience an elegant night out at <strong>Zeus Ekkamai</strong> —
              Bangkok&apos;s exclusive destination for premium drinks, private
              karaoke, and refined ambiance.
            </p>

            <div className="w-full max-w-6xl aspect-video rounded-md overflow-hidden border border-gray-300 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.9002112869025!2d100.58624432319237!3d13.730529652408523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17!3m3!1m2!1s0x30e29f001b8f0779%3A0x6e41709ae71870a6!2sZeus%20Ekkamai%20ktv%20karaoke!5e0!3m2!1sen!2skr!4v1749106739132!5m2!1sen!2skr"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Bottom Info Section with Background Image */}
          <div className="relative w-full h-auto mt-24 overflow-hidden">
            {/* Fixed background image */}
            <div
              className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
              style={{ backgroundImage: `url("/images/parking.jpg")` }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-16 text-white gap-10">
              {/* Logo on the left */}
              <div className="w-40 h-40 relative">
                <Image
                  src="/images/logo.png"
                  alt="Zeus Logo"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Info Text on the right */}
              <div className="text-center lg:text-left max-w-2xl space-y-4">
                <p className="text-sm uppercase tracking-widest text-amber-400">
                  Visit Us
                </p>
                <h3 className="font-cinzel text-3xl sm:text-4xl font-bold drop-shadow-md">
                  Your Night Begins at{" "}
                  <span className="text-amber-400">ZEUS</span>
                </h3>
                <p className="font-lora text-gray-200 text-base sm:text-lg leading-relaxed">
                  Whether you&apos;re looking for a private party, premium drinks, or
                  a space to unwind — our doors are open for an unforgettable
                  night in the heart of Bangkok.
                </p>
                <div className="font-lora text-gray-100 text-sm sm:text-base font-light space-y-1 pt-2">
                  <p>
                    <span className="font-semibold">Address:</span> 23/1 Ekkamai
                    12 Alley, Khlong Tan Nuea,
                    <br />
                    Watthana, Bangkok 10110
                  </p>
                  <p>
                    <span className="font-semibold">Hours:</span> 8 PM – 4 AM
                    (Open Daily)
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a
                      href="tel:+66612130971"
                      className="text-amber-400 hover:underline font-medium"
                    >
                      +66 61 213 0971
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Scroll to top button */}
            <div className="relative z-20 flex justify-center pb-10">
              <a
                href="#top"
                className="text-sm text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
              >
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </div>

      <MessengerButton />
    </>
  );
}
