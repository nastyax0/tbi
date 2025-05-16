"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper-custom.css";
import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/tour1.jpg",
  "/images/tour2.jpg",
];

export default function VirtualTour() {
  return (
    <section className="py-16 px-6 md:px-16 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Virtual Tour of YCCE TBI Foundation
          </h2>
          <p className="text-gray-600 mb-6">
            Explore our cutting-edge infrastructure and the Fabrication
            Laboratory designed to foster innovation, creativity, and
            entrepreneurship.
          </p>
          <Link href="/virtual-tour">
            <button className="px-6 py-2 bg-[#242e3b] text-white rounded-md hover:bg-[#e04b8a] transition duration-300">
              Take Virtual Tour
            </button>
          </Link>
        </div>

        {/* Right Side - Gallery Carousel */}
        <div className="md:w-1/2 w-full">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 2500 }}
            loop
            pagination={{ clickable: true }}
            className="rounded-lg shadow-lg custom-swiper"
          >
            {galleryImages.map((src, idx) => (
              <SwiperSlide key={idx}>
                <Image
                  src={src}
                  alt={`Tour Image ${idx + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
