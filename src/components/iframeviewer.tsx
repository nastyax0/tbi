"use client";
import { useState } from "react";

export default function IframeViewer({
  src,
  title,
  downloadLink,
}: {
  src: string;
  title?: string;
  downloadLink?: string;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {title && (
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center">
          {title}
        </h2>
      )}
      <div className="relative w-full h-[70vh] rounded-xl overflow-hidden shadow-lg border border-gray-700">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#242e3b] z-10">
            <span className="text-white animate-pulse">Loading PDF...</span>
          </div>
        )}
        <iframe
          src={src}
          className="w-full h-full"
          onLoad={() => setLoading(false)}
        />
      </div>
      {downloadLink && (
        <div className="mt-6 text-center">
          <a
            href={downloadLink}
            download
            className="inline-block bg-[#e04b8a] hover:bg-[#c13f78] text-white px-6 py-2 rounded-lg transition-colors shadow-md"
          >
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
}
