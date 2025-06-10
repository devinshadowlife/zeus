"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-2 lg:px-6 py-3 bg-transparent backdrop-blur-sm">
      {/* 로고 */}
      <div className="relative w-16 h-6 sm:w-20 sm:h-8 md:w-24 md:h-10 lg:w-32 lg:h-12">
        <Image
          src="/images/logo.png"
          fill
          className="object-contain"
            sizes="(max-width: 768px) 150px, 280px"
          alt="logo"
        />
      </div>

      {/* 언어 선택 */}
      <div className="flex items-center gap-2 lg:gap-4">
        <button title="한국어">
          <img
            src="https://flagcdn.com/w40/kr.png"
            className="w-6 h-4 md:w-10 md:h-6 rounded-sm"
            alt="KR"
          />
        </button>
        <button title="中文">
          <img
            src="https://flagcdn.com/w40/cn.png"
            className="w-6 h-4 md:w-10 md:h-6  rounded-sm"
            alt="CN"
          />
        </button>
        <button title="English">
          <img
            src="https://flagcdn.com/w40/us.png"
            className="w-6 h-4 md:w-10 md:h-6  rounded-sm"
            alt="US"
          />
        </button>
        <button title="ภาษาไทย">
          <img
            src="https://flagcdn.com/w40/th.png"
            className="w-6 h-4 md:w-10 md:h-6 rounded-sm"
            alt="TH"
          />
        </button>
      </div>
    </header>
  );
}
