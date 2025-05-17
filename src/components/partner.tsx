"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type partners = {
  logo: string;
};

const partners = [
  { logo: "/partners/partner1.jpg" },
  { logo: "/partners/partner2.jpg" },
  { logo: "/partners/partner3.jpg" },
  { logo: "/partners/partner4.jpg" },
  { logo: "/partners/partner5.jpg" },
  { logo: "/partners/partner6.jpg" },
  // Add more logos as needed
];

const chunkArray = (arr: partners[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export default function PartnersSection() {
  const chunks = chunkArray(partners, 6); // Show 6 per slide for compact layout

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Our Partners
      </h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        className="w-full"
      >
        {chunks.map((group, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
              {group.map((partner, idx) => (
                <div
                  key={idx}
                  className="w-full h-24 flex items-center justify-center"
                >
                  <Image
                    src={partner.logo}
                    alt="Partner Logo"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
