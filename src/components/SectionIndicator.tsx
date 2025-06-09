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
            className={`transition-all duration-300 ${
              isActive
                ? "text-white text-lg font-bold drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                : "text-white/50 text-sm hover:text-white"
            }`}
          >
            {section.label}
          </button>
        );
      })}
    </div>
  );
}
