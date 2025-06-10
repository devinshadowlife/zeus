"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaLine, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { SiKakaotalk, SiWechat } from "react-icons/si";

export default function ContactCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const buttons = [
    {
      icon: <FaLine className="text-white w-6 h-6" />,
      bg: "bg-green-500",
      href: "https://line.me/ti/p/@zeus_ekkamai",
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
      href: "https://wa.me/zeus_ekkamai",
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
    <div
      ref={cardRef}
      className={`relative z-20 mt-8 bg-white/10 border border-white/20 backdrop-blur-md rounded-lg p-6 text-white w-full max-w-xl mx-auto shadow-lg transition-opacity duration-1000 ${
        inView ? "animate-fade-up" : "opacity-0"
      }`}
    >
      <p className="font-cinzel uppercase text-sm tracking-widest text-amber-400 mb-4 text-center">
        Contact Us
      </p>
      <div className="flex justify-center overflow-x-auto">
        <div className="flex flex-row flex-nowrap gap-3">
          {buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              title={btn.title}
              className={`${btn.bg} w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:scale-110 transform transition shrink-0`}
            >
              {btn.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
