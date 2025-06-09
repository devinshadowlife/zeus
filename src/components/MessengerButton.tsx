"use client";

import { useState } from "react";
import { FaCommentDots, FaLine, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { SiKakaotalk, SiWechat } from "react-icons/si";

export default function MessengerButton() {
  const [open, setOpen] = useState(false);

  const buttons = [
    {
      icon: <FaLine className="text-white w-5 h-5" />,
      bg: "bg-green-500",
      title: "LINE",
      delay: "delay-100",
      href: "https://line.me/ti/p/zeus_ekkamai", // 친구 추가용
    },
    {
      icon: <SiWechat className="text-white w-5 h-5" />,
      bg: "bg-green-600",
      title: "WeChat",
      delay: "delay-150",
      href: "weixin://dl/chat?zeus_ekkamai", // 위챗은 브라우저에서 안 열릴 수 있음
    },
    {
      icon: <FaWhatsapp className="text-white w-5 h-5" />,
      bg: "bg-emerald-500",
      title: "WhatsApp",
      delay: "delay-200",
      href: "https://wa.me/zeus_ekkamai", // 전화번호 형식 필요할 수 있음
    },
    {
      icon: <SiKakaotalk className="text-black w-5 h-5" />,
      bg: "bg-yellow-400",
      title: "KakaoTalk",
      delay: "delay-250",
      href: "https://pf.kakao.com/_xeAxkxb/chat", // 카카오 채널 또는 아이디에 따라 다름
    },
    {
      icon: <FaTelegramPlane className="text-white w-5 h-5" />,
      bg: "bg-blue-500",
      title: "Telegram",
      delay: "delay-300",
      href: "https://t.me/zeusekkamai",
    },
  ];

  return (
    <div className="fixed left-5 bottom-5 z-50">
      <div className="flex flex-col items-center gap-3 mb-2">
        {buttons.map((btn, i) => (
          <a
            key={i}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
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
