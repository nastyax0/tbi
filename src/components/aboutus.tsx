"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left side: Heading + Logo */}
        <div className="w-full md:w-1/3 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-10">
            About Us
          </h2>
          <Image
            src="/images/TBI-LOGO.png"
            alt="YCCE Logo"
            width={180}
            height={180}
            className="mx-auto"
          />
        </div>

        {/* Right side: Paragraphs + Button */}
        <div className="w-full md:w-2/3 text-gray-800 flex flex-col justify-between mt-2 text-center md:text-left">
          <div className="text-justify md:text-left">
            <p className="text-lg leading-relaxed mb-4">
              YCCE TBI Foundation is a Private incorporated on 30 October 2018
              for technology business incubation. It is classified as non-govt
              section 8 company and is registered at Registrar of Companies,
              Mumbai. YCCE TBI Foundation’s Corporate Identification Number is
              (CIN) U93090MH2018NPL316594 and its registration number is 316594.
            </p>
            <p className="text-base text-gray-600 mb-6">
              With NBA and NAAC accreditations, and a focus on holistic
              development, YCCE offers a range of undergraduate and postgraduate
              programs. The institution emphasizes innovation, ethics, and a
              commitment to developing technically sound professionals equipped
              to tackle real-world challenges.
            </p>
          </div>

          {/* Read More Button */}
          <div className="flex justify-center md:justify-end">
            <Link href="/about" passHref>
              <button className="px-6 py-2 bg-[#242e3b] text-white rounded-md hover:bg-[#e04b8a] transition duration-300">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
