"use client";
import { useEffect, useRef, useState } from "react";

const videoList = [
  {
    src: "https://res.cloudinary.com/drrrpatyd/video/upload/v1749540874/z73eewxmjxxdu0fyy1ey.mp4",
    link: "https://www.tiktok.com/@zeus.ekkamai.ktv/video/7509841083992640775?is_from_webapp=1&sender_device=pc&web_id=7483430498758592007",
  },
  {
    src: "https://res.cloudinary.com/drrrpatyd/video/upload/v1749540876/fcxyehgi9d2lunu0adas.mov",
    link: "https://www.tiktok.com/@zeus.ekkamai.ktv/video/7509121860622159112?is_from_webapp=1&sender_device=pc&web_id=7483430498758592007",
  },
  { src: "/videos/detail3.mp4", link: "#" },
  {
    src: "https://res.cloudinary.com/drrrpatyd/video/upload/v1749540879/caunmijaqsiioe75q0wv.mov",
    link: "https://youtube.com/shorts/kVyWxlC5_kU?si=34BsbYfGLlx8T2D4",
  },
  {
    src: "https://res.cloudinary.com/drrrpatyd/video/upload/v1749540874/avobbisa5gtmwnmg4b3e.mov",
    link: "https://youtube.com/shorts/jEIsCjOfmzQ?si=wme9sUV6_agvLV5F",
  },
  {
    src: "https://res.cloudinary.com/drrrpatyd/video/upload/v1749540875/sfmafja6lgqzvlpd8kvn.mov",
    link: "https://youtube.com/shorts/pxkbjBgj9vI?si=dd--p-iOD67ePv55",
  },
];

export default function MenuGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  // 섹션이 보일 때만 재생
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videoList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // inView에 따라 재생/정지
  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView, currentIndex]);

  return (
    <div className="py-16 text-center mb-20">
      {/* 메인 비디오 */}
      <div ref={sectionRef} className="mb-8 flex justify-center">
        <div className="relative w-[300px] h-[400px] lg:w-[400px] lg:h-[600px]">
          <video
            key={videoList[currentIndex].src}
            ref={videoRef}
            src={videoList[currentIndex].src}
            muted
            loop
            playsInline
            className="rounded-lg shadow-xl object-cover w-full h-full"
          />
        </div>
      </div>

      {/* 썸네일 2행 3열 */}
      <div className="grid grid-cols-3 gap-4 px-4 max-w-[600px] mx-auto">
        {videoList.map((video, idx) => (
          <a
            key={idx}
            href={video.link}
            className="relative w-full aspect-[3/4] block group"
          >
            <video
              src={video.src}
              muted
              playsInline
              className="hidden sm:block rounded-lg object-cover w-full h-full group-hover:ring-2 group-hover:ring-amber-500 transition"
            />

            {/* Mobile에서는 대체 이미지 (예: number1.jpg, number2.jpg...) */}
            <img
              src={`/images/videoThumb${idx + 1}.png`} // 이미지 파일명: videoThumb1~6
              alt={`Video ${idx + 1}`}
              className="block sm:hidden w-full h-full object-cover rounded-lg shadow"
            />
          </a>
        ))}
      </div>

      {/* 텍스트 애니메이션 */}
    </div>
  );
}
