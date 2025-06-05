"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const roomData = [
  { label: "S", desc: "MORE", img: "/images/Porsche.jpg" },
  { label: "M", desc: "MORE", img: "/images/Porsche.jpg" },
  { label: "VIP", desc: "MORE", img: "/images/Porsche.jpg" },
];

export default function RoomSection() {
  const [selectedRoom, setSelectedRoom] = useState<null | (typeof roomData)[0]>(
    null
  );
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setSelectedRoom(null);
      }
    };

    if (selectedRoom) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedRoom]);

  return (
    <>
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-3xl mb-1">From private to party</p>
        <p className="mb-6">various room sizes</p>

        <div className="flex flex-row gap-6">
          {roomData.map((room, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedRoom(room)}
            >
              <Image src={room.img} width={200} height={400} alt={room.label} />
              <p>{room.label}</p>
              <p>{room.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedRoom && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setSelectedRoom(null)}
        >
          <div
            ref={modalRef}
            className="relative bg-white rounded-xl p-8 shadow-xl text-center w-[300px]"
            onClick={(e) => e.stopPropagation()}
          >
            {" "}
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
              onClick={() => setSelectedRoom(null)}
            >
              X
            </button>
            <p className="text-2xl font-bold mb-2">{selectedRoom.label}</p>
            <p className="text-lg">{selectedRoom.desc}</p>
          </div>
        </div>
      )}
    </>
  );
}
