"use client";
import Image from "next/image";
import Link from "next/link";

const incubationTypes = [
  {
    title: "Pre-Incubation",
    image: "/images/dashboard1.jpg", // Replace with your actual image path
    link: "/dashboard/pre-incubation",
  },
  {
    title: "Physical Incubation",
    image: "/images/dashboard2.jpg",
    link: "/dashboard/physical-incubation",
  },
  {
    title: "Virtual Incubation",
    image: "/images/dashboard3.jpg",
    link: "/dashboard/virtual-incubation",
  },
];

export default function DashboardCards() {
  return (
    <section className="w-full px-4 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Startup Incubation Dashboard
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {incubationTypes.map((type, idx) => (
          <Link href={type.link} key={idx} className="group block">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="relative w-full h-56 md:h-64 lg:h-72">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-gray-100 p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {type.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
