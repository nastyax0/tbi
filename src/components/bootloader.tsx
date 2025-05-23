// components/RouteChangeLoader.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteChangeLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // adjust duration based on your needs

    return () => clearTimeout(timeout);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <span className="text-xl font-bold animate-pulse text-primary">
        Loading...
      </span>
    </div>
  );
}
