"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

type Startup = {
  logo: string;
};
const startups: Startup[] = [
  { logo: "/startup/Startup(25).jpg" },
  { logo: "/startup/Startup(26).jpg" },
  { logo: "/startup/Startup(27).jpg" },
  { logo: "/startup/Startup(28).jpg" },
  { logo: "/startup/Startup(29).jpg" },
  { logo: "/startup/Startup(30).jpg" },
  { logo: "/startup/Startup(31).jpg" },
  { logo: "/startup/Startup(32).jpg" },
  { logo: "/startup/Startup(33).jpg" },
  { logo: "/startup/Startup(34).jpg" },
  { logo: "/startup/Startup(35).jpg" },
  { logo: "/startup/Startup(36).jpg" },
  { logo: "/startup/Startup(37).jpg" },
  { logo: "/startup/Startup(38).jpg" },
  { logo: "/startup/Startup(39).jpg" },
  { logo: "/startup/Startup(40).jpg" },
  { logo: "/startup/Startup(41).jpg" },
  { logo: "/startup/Startup(42).jpg" },
  { logo: "/startup/Startup(43).jpg" },
  { logo: "/startup/Startup(44).jpg" },
  { logo: "/startup/Startup(45).jpg" },
  { logo: "/startup/Startup(46).jpg" },
  { logo: "/startup/Startup(47).jpg" },
  { logo: "/startup/Startup(48).jpg" },
  { logo: "/startup/Startup(49).jpg" },
  { logo: "/startup/Startup(50).jpg" },
];

// Utility: Split into chunks of 10
function chunkArray<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}

export default function IncubateeSwiper() {
  const chunks = chunkArray(startups, 10);
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Our Incubated Startups
      </h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        className="w-full"
      >
        {chunks.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {group.map((startup, idx) => (
                <div key={idx}>
                  <div className="w-full h-24 flex items-center justify-center">
                    <Image
                      src={startup.logo}
                      alt="Startup Logo"
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
