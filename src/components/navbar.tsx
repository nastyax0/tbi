"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#242e3b] shadow-md px-6 py-4 md:px-8 md:py-6 relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/YCCE-LOGO.jpg"
            alt="Logo"
            width={150}
            height={60}
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-lg">
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

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-2 text-left space-y-4 text-lg text-white">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#e04b8a] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#e04b8a] transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#e04b8a] transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
