"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#242e3b] text-white w-full py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Empowering Innovation,
            <br />
            <span className="text-[#e04b8a]">Fueling Dreams</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-xl">
            &apos;Every big startup once started as a small idea nurtured in the
            right environment. We're here to be that environment.&apos;
          </p>
          <Link
            href="/about"
            className="inline-block bg-[#e04b8a] text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            Explore Incubation
          </Link>
        </div>

        {/* Illustration */}

        <div className="w-64 sm:w-80 md:w-[400px] lg:w-[500px] max-h-[400px] mx-auto">
          <Image
            src="/images/herosection.jpg"
            alt="Team Working Illustration"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
