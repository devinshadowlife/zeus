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

  return (
    <div
      ref={cardRef}
      className={`relative z-20 mt-8 bg-white/10 border border-white/20 backdrop-blur-md rounded-lg p-6 text-white w-full max-w-xl mx-auto shadow-lg transition-opacity duration-1000 ${
        inView ? "animate-fade-up" : "opacity-0"
      }`}
    >
      {" "}
      <p className="font-cinzel uppercase text-sm tracking-widest text-amber-400 mb-4 text-center">
        Contact Us
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-center sm:text-left font-lora">
        <div className="flex items-center gap-2">
          <FaLine className="text-white w-5 h-5" />
          <span className="font-semibold">Line:</span>{" "}
          <span className="text-white/90">zeus_ekkamai</span>
        </div>
        <div className="flex items-center gap-2">
          <SiWechat className="text-white w-5 h-5" />
          <span className="font-semibold">WeChat:</span>{" "}
          <span className="text-white/90">zeus_ekkamai</span>
        </div>
        <div className="flex items-center gap-2">
          <FaWhatsapp className="text-white w-5 h-5" />
          <span className="font-semibold">WhatsApp:</span>{" "}
          <span className="text-white/90">zeus_ekkamai</span>
        </div>
        <div className="flex items-center gap-2">
          <SiKakaotalk className="text-white w-5 h-5" />
          <span className="font-semibold">Kakao:</span>{" "}
          <span className="text-white/90">zeusekkamai</span>
        </div>
        <div className="flex items-center gap-2">
          <FaTelegramPlane className="text-white w-5 h-5" />
          <span className="font-semibold">Telegram:</span>{" "}
          <span className="text-white/90">@zeusekkamai</span>
        </div>
      </div>
    </div>
  );
}
