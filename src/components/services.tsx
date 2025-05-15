"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Lightbulb,
  ShieldCheck,
  Home,
  Users,
  DollarSign,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const services = [
    {
      title: "Mentorship",
      description: "Expert guidance from academia.",
      icon: <Lightbulb size={32} className="text-[#e04b8a]" />,
      link: "/services#mentorship",
    },
    {
      title: "IPR Assistance",
      description: "Support with IPR, patents, and commercialization.",
      icon: <ShieldCheck size={32} className="text-[#e04b8a]" />,
      link: "/services#ipr",
    },
    {
      title: "Incubation",
      description: "Access to co-working space, labs, and tech infrastructure.",
      icon: <Home size={32} className="text-[#e04b8a]" />,
      link: "/services#incubation",
    },
    {
      title: "Network Building",
      description: "Collaborations with mentors, startups, and industry.",
      icon: <Users size={32} className="text-[#e04b8a]" />,
      link: "/services#network",
    },
    {
      title: "Funding Support",
      description: "Approved for MSME Champion Scheme & ASPIRE funding.",
      icon: <DollarSign size={32} className="text-[#e04b8a]" />,
      link: "/services#funding",
    },
    {
      title: "Infrastructure",
      description: "Robust facilities and modern support systems.",
      icon: <Settings size={32} className="text-[#e04b8a]" />,
      link: "/services#infrastructure",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-[#f4f4f4] rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-4 mb-4">
              {service.icon}
              <h3 className="text-xl font-semibold text-[#242e3b]">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <Link href={service.link}>
              <button className="px-4 py-2 bg-[#242e3b] text-white rounded-md hover:bg-[#e04b8a] transition">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
