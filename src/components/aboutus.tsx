"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

export default function AboutUs() {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Us
          </h2>
          <div className="lg:max-w-[50%]">
            <p className="text-gray-600 mb-6 leading-relaxed">
              YCCE TBI Foundation is a Private incorporated on 30 October 2018
              for technology business incubation. It is classified as a non-govt
              section 8 company and is registered at the Registrar of Companies,
              Mumbai. YCCE TBI Foundation’s Corporate Identification Number is
              (CIN) U93090MH2018NPL316594 and its registration number is 316594.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link href="/about" passHref>
                <button className="px-6 py-2 bg-[#242e3b] text-white rounded-md hover:bg-[#e04b8a] transition duration-300">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
