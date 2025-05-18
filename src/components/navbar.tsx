"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Incubation & Startups", href: "/contact" },
  { label: "Services", href: "/contact" },
  { label: "Funding", href: "/files/funding.pdf" },
  { label: "Events", href: "/contact" },
  { label: "Blogs", href: "/contact" },
  { label: "Contact", href: "/files/contact.pdf" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const renderLink = (link: (typeof navLinks)[0], isMobile = false) => {
    const className =
      "hover:text-[#e04b8a] transition-colors" +
      (isMobile ? "" : " text-white");

    return (
      <Link
        key={link.label}
        href={link.href}
        target={link.href.endsWith(".pdf") ? "_blank" : "_self"}
        rel={link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
        onClick={() => isMobile && setIsOpen(false)}
        className={className}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav className="w-full bg-[#242e3b] shadow-md px-6 py-4 md:px-8 md:py-6 relative z-50">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/YCCE-LOGO.jpg"
            alt="Logo"
            width={150}
            height={60}
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg">
          {navLinks.map((link) => renderLink(link))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-2 space-y-4 text-lg text-white">
          {navLinks.map((link) => renderLink(link, true))}
        </div>
      </div>
    </nav>
  );
}
