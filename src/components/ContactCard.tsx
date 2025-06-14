"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaLine, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { SiKakaotalk, SiWechat } from "react-icons/si";

export default function ContactCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [showQR, setShowQR] = useState(false);
  
  useEffect(() => {
    const card = cardRef.current; // Copy ref value
    if (card) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setInView(true);
        },
        { threshold: 0.2 }
      );
      observer.observe(card);

      return () => {
        if (card) {
          observer.unobserve(card); // Use copied value in cleanup
        }
      };
    }
  }, []); // Empty deps since this runs once on mount

  const buttons = [
    {
      icon: <FaLine className="text-white w-6 h-6" />,
      bg: "bg-green-500",
      onClick: () => setShowQR(true),
      title: "LINE",
    },
    {
      icon: <SiWechat className="text-white w-6 h-6" />,
      bg: "bg-green-600",
      href: "weixin://dl/chat?zeus_ekkamai",
      title: "WeChat",
    },
    {
      icon: <FaWhatsapp className="text-white w-6 h-6" />,
      bg: "bg-emerald-500",
      href: "https://wa.me/+66612130971",
      title: "WhatsApp",
    },
    {
      icon: <SiKakaotalk className="text-black w-6 h-6" />,
      bg: "bg-yellow-400",
      href: "https://open.kakao.com/o/scSfEWzf",
      title: "KakaoTalk",
    },
    {
      icon: <FaTelegramPlane className="text-white w-6 h-6" />,
      bg: "bg-blue-500",
      href: "https://t.me/zeusekkamai",
      title: "Telegram",
    },
  ];

  return (
    <>
      {/* 카드 본체 */}
      <div
        ref={cardRef}
        className={`relative z-20 mt-8 bg-white/10 border border-white/20 backdrop-blur-md rounded-lg p-6 text-white w-full max-w-xl mx-auto shadow-lg transition-opacity duration-1000 ${
          inView ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <p className="font-cinzel uppercase text-sm tracking-widest text-amber-400 mb-4 text-center">
          Contact Us
        </p>
        <div className="flex justify-center overflow-x-auto py-2">
          <div className="flex flex-row flex-nowrap gap-3">
            {buttons.map((btn, idx) => {
              const commonStyle = `${btn.bg} w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:scale-110 transform transition shrink-0`;

              return btn.onClick ? (
                <button
                  key={idx}
                  onClick={btn.onClick}
                  title={btn.title}
                  className={commonStyle}
                >
                  {btn.icon}
                </button>
              ) : (
                <a
                  key={idx}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={btn.title}
                  className={commonStyle}
                >
                  {btn.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* LINE QR 모달 */}
      {showQR && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-zinc-900 text-white rounded-xl p-6 shadow-2xl relative w-[90%] max-w-md">
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-3 right-4 text-gray-300 hover:text-white text-2xl"
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <Image
                src="/images/lineQR.jpg"
                alt="LINE QR Code"
                width={280}
                height={280}
                className="rounded-lg border border-white"
              />
              <p className="mt-4 text-sm text-gray-300">
                @zeus_ekkamai
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
