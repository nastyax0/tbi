"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  "/images/startup1.png",
  "/images/startup2.jpeg",
  "/images/startup3.png",
];

export default function HeroWithCarousel() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <section className="bg-white py-12 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl transition-all duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
