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
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`px-3 py-1 rounded-full transition-all duration-300 text-white text-sm font-medium
            ${
              currentSection === section.id
                ? "bg-amber-500 scale-110 font-bold"
                : "bg-gray-500/50 hover:bg-amber-400"
            }
          `}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
}
