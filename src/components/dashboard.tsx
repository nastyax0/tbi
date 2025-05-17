"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const incubationTypes = [
  {
    title: "Pre-Incubation",
    image: "/images/dashboard1.jpg",
    link: "/dashboard/pre-incubation",
  },
  {
    title: "Physical Incubation",
    image: "/images/dashboard2.jpg",
    link: "/dashboard/physical-incubation",
  },
  {
    title: "Virtual Incubation",
    image: "/images/dashboard3.jpg",
    link: "/dashboard/virtual-incubation",
  },
  {
    title: "Co-operate Incubation",
    image: "/images/dashboard4.jpg",
    link: "/dashboard/virtual-incubation",
  },
];

export default function DashboardCards() {
  return (
    <section className="w-full px-4 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Startup Incubation Dashboard
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        touchRatio={1}
        touchStartPreventDefault={false}
        allowTouchMove={true}
        slidesPerView={1}
        navigation
        slidesOffsetBefore={100}
        slidesOffsetAfter={100}
        breakpoints={{
          // disable offsets on mobile (below 640)
          0: {
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            slidesPerView: 1,
          },
          640: {
            slidesOffsetBefore: 100,
            slidesOffsetAfter: 100,
            slidesPerView: 2,
          },
          1024: {
            slidesOffsetBefore: 100,
            slidesOffsetAfter: 100,
            slidesPerView: 3,
          },
        }}
        className="pb-10 swiper-custom-nav"
      >
        {incubationTypes.map((type, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[500px] px-4 py-6 rounded-2xl overflow-hidden shadow-md group">
              <Image
                src={type.image}
                alt={type.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                <Link href={type.link}>
                  <button className="bg-[#e04b8a] px-4 py-2 text-sm rounded hover:bg-[#c53c79] transition">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
