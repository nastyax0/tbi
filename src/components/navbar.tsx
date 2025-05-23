"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Incubation & Startups", href: "/contact" },
  { label: "Services", href: "/contact" },
  { label: "Funding", href: "/files/funding.pdf" },
  {
    label: "Events",
    children: [
      { label: "Upcoming", href: "/events#upcoming" },
      { label: "Past", href: "/events#past" },
    ],
  },
  { label: "Blogs", href: "/contact" },
  { label: "Contact", href: "/files/contact.pdf" },
  { label: "Apply Now", href: "/apply" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );

  const renderLink = (
    link: (typeof navLinks)[0],
    isMobile = false
  ): React.ReactNode => {
    const className =
      "hover:text-[#e04b8a] transition-colors" +
      (isMobile ? "" : " text-white");

    const toggleMobileDropdown = (label: string) => {
      setMobileDropdownOpen(mobileDropdownOpen === label ? null : label);
    };

    if (link.children) {
      if (isMobile) {
        return (
          <div key={link.label} className="space-y-1">
            <button
              onClick={() => toggleMobileDropdown(link.label)}
              className="flex justify-between items-center w-full text-left text-white hover:text-[#e04b8a]"
            >
              {link.label}
              {mobileDropdownOpen === link.label ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileDropdownOpen === link.label ? "max-h-40" : "max-h-0"
              } pl-4`}
            >
              <div className="flex flex-col space-y-1 mt-2">
                {link.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-[#e04b8a] block"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      }

      // Desktop dropdown
      return (
        <div key={link.label} className="relative group">
          <span className="cursor-pointer flex items-center text-white hover:text-[#e04b8a]">
            {link.label}
            <ChevronDown size={18} className="ml-1" />
          </span>
          <div className="absolute left-0 top-full mt-2 bg-[#242e3b] text-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 min-w-[180px]">
            {link.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                className="block px-4 py-2 hover:text-[#e04b8a]"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      );
    }

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
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100 mt-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-2 space-y-4 text-lg text-white">
          {navLinks.map((link) => renderLink(link, true))}
        </div>
      </div>
    </nav>
  );
}
