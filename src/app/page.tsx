"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import RoomSection from "@/components/DetailModal";
import MenuGallery from "@/components/MenuGallery";
import YouAndUs from "@/components/YouAndUs";
import SectionIndicator from "@/components/SectionIndicator";
import MessengerButton from "@/components/MessengerButton";
import Header from "@/components/Header";
import MenuDetail from "@/components/MenuDetail";
import ContactCard from "@/components/ContactCard";

export default function Home() {
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [visitVisible, setVisitVisible] = useState(false);
  const visitRef = useRef<HTMLDivElement | null>(null);

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

  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAboutVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisitVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (visitRef.current) observer.observe(visitRef.current);
    return () => {
      if (visitRef.current) observer.unobserve(visitRef.current);
    };
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
        poster="/images/cover.png"
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
          <p className="font-cinzel mb-3 mt-10 text-4xl lg:text-6xl font-bold drop-shadow-lg text-white/70">
            BE GOD
          </p>
          <p className="font-cinzel text-4xl lg:text-6xl font-bold drop-shadow-lg text-white/70">
            YOU ARE ZEUS
          </p>
        </div>
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-b from-transparent to-black/90 z-10" />
      </div>

      <div
        className="relative z-20 bg-[#000011]"
        style={{ marginTop: "calc(var(--vh, 1vh) * 100)" }}
      >
        <div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-t from-[#000011] to-transparent z-10" />
        <div className="relative z-20 pt-20">
          <div
            id="about"
            className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-32 pt-10 px-4"
          >
            {/* 텍스트 영역 */}
            <div className="flex flex-col gap-3 text-center lg:text-left max-w-md">
              <p
                className={`font-cinzel text-lg lg:text-2xl text-yellow-400 tracking-wide opacity-0 ${
                  aboutVisible ? "animate-fade-up [animation-delay:0.1s]" : ""
                }`}
              >
                {" "}
                Be GOD with us
              </p>

              <div
                className={`font-cinzel font-bold text-3xl lg:text-5xl text-white drop-shadow-sm opacity-0 ${
                  aboutVisible ? "animate-fade-up [animation-delay:0.2s]" : ""
                }`}
              >
                {" "}
                <p>Welcome to</p>
                <span className="text-5xl lg:text-8xl">ZEUS</span>
              </div>

              <p
                className={`!font-lora text-sm lg:text-lg text-gray-200 py-2 opacity-0 ${
                  aboutVisible ? "animate-fade-up [animation-delay:0.3s]" : ""
                }`}
              >
                {" "}
                We are one of the best karaoke & KTV in Bangkok
              </p>

              <div
                className={`px-20 !font-lora text-sm lg:text-lg text-gray-100 space-y-1 opacity-0 ${
                  aboutVisible ? "animate-fade-up [animation-delay:0.4s]" : ""
                }`}
              >
                <div className="flex items-center">
                  <p className="flex-1 whitespace-nowrap">You can do A to</p>
                  <span className="inline-block w-6 text-red-400 font-bold glow-red text-center">
                    Z
                  </span>
                </div>
                <div className="flex items-center">
                  <p className="flex-1 whitespace-nowrap">You are only ON</p>
                  <span className="inline-block w-6 text-red-400 font-bold glow-red text-center">
                    E
                  </span>
                </div>
                <div className="flex items-center">
                  <p className="flex-1 whitespace-nowrap">
                    You have to be with
                  </p>
                  <span className="inline-block w-4 text-red-400 font-bold glow-red text-center">
                    US
                  </span>
                </div>
              </div>

              <p
                className={`text-xs lg:text-base pt-3 text-gray-300 font-lora opacity-0 ${
                  aboutVisible ? "animate-fade-up [animation-delay:0.5s]" : ""
                }`}
              >
                {" "}
                Ready to support you in everything you do
              </p>
            </div>

            {/* 이미지 영역 */}
            <div className="relative w-[250px] h-[370px] lg:w-[300px] lg:h-[450px] rounded-xl shadow-lg overflow-hidden">
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

          <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden my-20">
            {/* 데스크탑 전용: bg-fixed */}
            <div
              className="hidden sm:block absolute inset-0 bg-fixed bg-cover bg-center z-0"
              style={{ backgroundImage: `url("/images/counter.jpg")` }}
            />

            {/* 모바일 전용: bg-cover only (fixed 없이 자연스럽게) */}
            <div
              className="block sm:hidden absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url("/images/counter.jpg")` }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/80 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white">
              <p className="text-sm uppercase tracking-widest text-amber-400 mb-2">
                Premium Experience
              </p>
              <h2 className="font-cinzel text-3xl lg:text-5xl font-bold drop-shadow-md">
                The Finest KTV Experience in Bangkok
              </h2>
              <p className="mt-4 font-lora text-gray-300 text-base lg:text-lg max-w-2xl">
                Luxurious ambiance, tailored services, and a wide selection of
                premium drinks — all waiting for you at{" "}
                <span className="text-amber-400 font-semibold">ZEUS</span>.
              </p>
            </div>
          </div>

          <div id="youtube">
            <div className="flex flex-col items-center gap-4 mb-20 mt-28 px-4">
              <p className="font-cinzel text-3xl text-center">
                the Private World of <span className="font-semibold">ZEUS</span>
              </p>
              <p className="font-lora text-gray-500 text-center text-sm sm:text-base max-w-2xl">
                Discover the exclusive ambiance of our private lounges, luxury
                suites, and unforgettable nights — only on our official
                channels.
              </p>
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 mt-4">
                <a
                  href="https://www.youtube.com/@zeusekkamaiktv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase text-sm lg:text-lg tracking-widest border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 hover:text-gray-800 transition text-center"
                >
                  Youtube Link
                </a>
                <a
                  href="https://www.tiktok.com/@zeus.ekkamai.ktv?_t=ZS-8wziE6KcLKM&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase text-sm lg:text-lg tracking-widest border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 hover:text-gray-800 transition text-center"
                >
                  TikTok Link
                </a>
              </div>
            </div>

            <MenuGallery />
          </div>

          <div id="menu">
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

            <div className="w-full max-w-6xl aspect-video rounded-md overflow-hidden border border-gray-300 shadow-md mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.9002112869025!2d100.58624432319237!3d13.730529652408523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17!3m3!1m2!1s0x30e29f001b8f0779%3A0x6e41709ae71870a6!2sZeus%20Ekkamai%20ktv%20karaoke!5e0!3m2!1sen!2skr!4v1749106739132!5m2!1sen!2skr"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a
              href="https://maps.app.goo.gl/HrFH6Gv2CKj3i1WU6"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-xs tracking-widest border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 transition hover:text-gray-800 font-medium mt-5 lg:mt-10"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Bottom Info Section with Stylized Background */}
          {/* Bottom Info Section with Stylized Background */}
          <div
            id="contact"
            className="relative w-full h-auto mt-24 overflow-hidden"
          >
            {/* PC: 타원형 마스킹 */}
            <div className="hidden sm:block absolute inset-0 z-0">
              <div
                className="w-full h-full bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('/images/parking.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/90 mask-ellipse" />
            </div>

            {/* Mobile: 상하 그라데이션 마스킹 */}
            <div className="sm:hidden absolute inset-0 z-0">
              <div
                className="w-full h-full bg-cover bg-center filter grayscale"
                style={{ backgroundImage: "url('/images/parking.jpg')" }}
              />
              <div className="absolute inset-0 bg-black/70 mask-ellipse" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-transparent to-black/95" />
            </div>

            {/* 콘텐츠 영역 */}
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-16 text-white gap-10">
              {/* 로고 */}
              <div className="w-40 h-40 relative">
                <Image
                  src="/images/logo.png"
                  alt="Zeus Logo"
                  fill
                  className="object-contain lg:hidden"
                />
              </div>

              {/* 텍스트 콘텐츠 */}
              <div
                ref={visitRef}
                className="text-center lg:text-left max-w-2xl space-y-4"
              >
                <p
                  className={`text-sm uppercase tracking-widest text-amber-400 opacity-0 ${
                    visitVisible
                      ? "animate-fade-down [animation-delay:.1s]"
                      : ""
                  }`}
                >
                  Visit Us
                </p>
                <h3
                  className={`font-cinzel text-3xl sm:text-4xl font-bold drop-shadow-md opacity-0 ${
                    visitVisible
                      ? "animate-fade-down [animation-delay:.3s]"
                      : ""
                  }`}
                >
                  Your Night Begins at{" "}
                  <span className="text-amber-400">ZEUS</span>
                </h3>
                <p
                  className={`font-lora text-gray-200 text-base sm:text-lg leading-relaxed opacity-0 ${
                    visitVisible
                      ? "animate-fade-down [animation-delay:.5s]"
                      : ""
                  }`}
                >
                  Whether you&apos;re looking for a private party, premium
                  drinks, or a space to unwind — our doors are open for an
                  unforgettable night in the heart of Bangkok.
                </p>
                <div className="font-lora text-gray-100 text-sm sm:text-base font-light space-y-1 pt-2">
                  <p
                    className={`opacity-0 ${
                      visitVisible
                        ? "animate-fade-down [animation-delay:.7s]"
                        : ""
                    }`}
                  >
                    <span className="font-semibold">Address:</span> 23/1 Ekkamai
                    12 Alley, Khlong Tan Nuea,
                    <br />
                    Watthana, Bangkok 10110
                  </p>
                  <p
                    className={`opacity-0 ${
                      visitVisible
                        ? "animate-fade-down [animation-delay:.9s]"
                        : ""
                    }`}
                  >
                    <span className="font-semibold">Hours:</span> 8 PM – 4 AM
                    (Open Daily)
                  </p>
                  <p
                    className={`opacity-0 ${
                      visitVisible
                        ? "animate-fade-down [animation-delay:1.1s]"
                        : ""
                    }`}
                  >
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

              <ContactCard />
            </div>

            {/* 스크롤 업 버튼 */}
            <div className="relative z-10 flex justify-center pb-10">
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
