"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-3 bg-transparent backdrop-blur-sm">
      {/* 로고 */}
      <div className="flex items-center">
        <p className="text-2xl">Logo</p>
      </div>

      {/* 언어 선택 */}
      <div className="flex items-center gap-4">
        <button title="한국어">
            <img src="https://flagcdn.com/w40/kr.png" className="w-6 h-4 rounded-sm" alt="KR" />

        </button>
        <button title="中文">
            <img src="https://flagcdn.com/w40/cn.png" className="w-6 h-4 rounded-sm" alt="CN" />

        </button>
        <button title="English">
            <img src="https://flagcdn.com/w40/us.png" className="w-6 h-4 rounded-sm" alt="US" />

        </button>
        <button title="ภาษาไทย">
            <img src="https://flagcdn.com/w40/th.png" className="w-6 h-4 rounded-sm" alt="TH" />

        </button>
      </div>
    </header>
  );
}
