"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "room", label: "Rooms" },
  { id: "service", label: "Service" },
  { id: "youtube", label: "Video" },
  { id: "menu", label: "Menu" },
  { id: "map", label: "Map" },
];

export default function SectionIndicator() {
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top < window.innerHeight / 2 &&
            rect.bottom > window.innerHeight / 2
          ) {
            setCurrentSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4">
      {sections.map((section) => {
        const isActive = currentSection === section.id;

        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="flex items-center justify-center"
          >
            {isActive ? (
              // 활성된 섹션: 텍스트만 보여줌, 약간의 투명도 적용
              <span className="text-white/80 text-sm font-medium">
                {section.label}
              </span>
            ) : (
              // 비활성 섹션: 가로 막대(bar) 모양, 투명한 흰색
              <div className="w-8 h-1 bg-white/20 hover:bg-white/40 rounded transition-colors" />
            )}
          </button>
        );
      })}
    </div>
  );
}
