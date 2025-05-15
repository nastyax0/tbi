"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const startups = [
  { logo: "/startup/startup(25).jpg" },
  { logo: "/startup/startup(26).jpg" },
  { logo: "/startup/startup(27).jpg" },
  { logo: "/startup/startup(28).jpg" },
  { logo: "/startup/startup(29).jpg" },
  { logo: "/startup/startup(30).jpg" },
  { logo: "/startup/startup(31).jpg" },
  { logo: "/startup/startup(32).jpg" },
  { logo: "/startup/startup(33).jpg" },
  { logo: "/startup/startup(34).jpg" },
  { logo: "/startup/startup(35).jpg" },
  { logo: "/startup/startup(36).jpg" },
  { logo: "/startup/startup(37).jpg" },
  { logo: "/startup/startup(38).jpg" },
  { logo: "/startup/startup(39).jpg" },
  { logo: "/startup/startup(40).jpg" },
  { logo: "/startup/startup(41).jpg" },
  { logo: "/startup/startup(42).jpg" },
  { logo: "/startup/startup(43).jpg" },
  { logo: "/startup/startup(44).jpg" },
  { logo: "/startup/startup(45).jpg" },
  { logo: "/startup/startup(46).jpg" },
  { logo: "/startup/startup(47).jpg" },
  { logo: "/startup/startup(48).jpg" },
  { logo: "/startup/startup(49).jpg" },
  { logo: "/startup/startup(50).jpg" },
];

// Utility: Split into chunks of 10
const chunkArray = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

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
