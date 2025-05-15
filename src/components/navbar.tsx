"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#242e3b] shadow-md px-8 py-6 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/images/YCCE-LOGO.jpg"
          alt="Logo"
          width={150}
          height={60} // ⬆️ taller logo
          className="h-auto w-auto"
        />
      </Link>
      <div className="space-x-6 text-lg">
        {" "}
        {/* ⬆️ larger spacing + font */}
        <Link
          href="/"
          className="text-white hover:text-[#e04b8a] transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-white hover:text-[#e04b8a] transition-colors"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-white hover:text-[#e04b8a] transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
