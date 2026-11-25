'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const captionTemplates = [
  "Custom native California garden design tailored for San Francisco microclimates.",
  "Drought-tolerant front yard transformation with coastal perennials and mulch.",
  "Precision hedge trimming, seasonal pruning, and ornamental shrub shaping.",
  "Complete backyard cleanup removing overgrowth, weeds, and green waste.",
  "Smart drip irrigation installation for water-wise, low-maintenance gardens.",
  "Raised cedar vegetable and herb beds built for urban San Francisco yards.",
  "Lush shade garden installation featuring ferns, hydrangeas, and woodland plants.",
  "Modern patio landscaping with flagstone pathways and planter borders.",
  "Routine lawn care, organic fertilization, and turf rejuvenation.",
  "Rooftop and balcony container gardening for compact city living spaces.",
  "Fruit tree pruning and orchard care for healthy seasonal harvests.",
  "Erosion control and terraced hillside planting for sloped Bay Area lots.",
  "Pollinator-friendly flower beds attracting local bees, butterflies, and hummingbirds.",
  "Organic soil enrichment and composting for thriving root systems.",
  "Commercial courtyard and HOA landscape maintenance across San Francisco.",
];

interface GalleryItem {
  id: number;
  imageUrl: string;
  altText: string;
  caption: string;
}

const gardenProjects: GalleryItem[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  imageUrl: `/gallery/${i + 1}.jpg`,
  altText: `Francisco Gardens landscaping project ${i + 1}`,
  caption: captionTemplates[i % captionTemplates.length],
}));

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <div className="mb-40">
      <div className="h-[200px] bg-gray-100 flex flex-col items-center justify-center text-center px-6">
        <span className="text-gray-500">
          Home / <span className="text-[#074842] font-semibold">Gallery</span>
        </span>
        <h1 className="text-4xl font-bold text-[#0D402B] mt-2">Garden Projects</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Explore our landscaping transformations, native plantings, and garden maintenance work across San Francisco.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gardenProjects.map((item) => (
            <div
              key={item.id}
              className="relative w-full h-72 rounded-xl overflow-hidden shadow-md cursor-pointer group border border-green-100"
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.imageUrl}
                alt={item.altText}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-gradient-to-t from-[#0D402B]/90 to-transparent text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full p-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.imageUrl}
              alt={selectedImage.altText}
              width={1000}
              height={700}
              className="rounded-lg object-contain w-full h-auto"
            />
            <p className="text-white text-center mt-4">{selectedImage.caption}</p>
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold cursor-pointer"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="relative h-[300px] flex items-center justify-center text-white">
        <Image src="/gallery/1.jpg" alt="Francisco Gardens background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="mb-6">Visit our FAQ page to learn more about our San Francisco gardening and landscaping services.</p>
          <Link
            href="/faq"
            className="bg-[#074842] px-6 py-3 rounded-full font-semibold hover:bg-[#0D402B] transition"
          >
            View FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}