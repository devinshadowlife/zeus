"use client";

import { useState } from "react";
import { FaCommentDots, FaInstagram, FaLine } from "react-icons/fa";
import { SiKakaotalk } from "react-icons/si";

export default function MessengerButton() {
  const [open, setOpen] = useState(false);

  const buttons = [
    {
      icon: <SiKakaotalk className="text-black w-5 h-5" />,
      bg: "bg-yellow-400",
      title: "KakaoTalk",
      delay: "delay-100",
    },
    {
      icon: <FaLine className="text-white w-5 h-5" />,
      bg: "bg-green-500",
      title: "LINE",
      delay: "delay-200",
    },
    {
      icon: <FaInstagram className="text-white w-5 h-5" />,
      bg: "bg-pink-500",
      title: "Instagram",
      delay: "delay-300",
    },
  ];

  return (
    <div className="fixed left-5 bottom-5 z-50">
      <div className="flex flex-col items-center gap-3 mb-2">
        {buttons.map((btn, i) => (
          <a
            key={i}
            href="#"
            title={btn.title}
            className={`
              ${btn.bg} p-2 rounded-full shadow-lg transform transition-all duration-300
              ${open ? `opacity-100 translate-y-0 ${btn.delay}` : "opacity-0 translate-y-4 pointer-events-none"}
            `}
          >
            {btn.icon}
          </a>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 p-3 rounded-full text-white shadow-lg hover:scale-105 transition-transform"
      >
        <FaCommentDots className="w-5 h-5" />
      </button>
    </div>
  );
}
