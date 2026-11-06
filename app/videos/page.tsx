'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface VideoItem {
  id: number;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  youtubeUrl: string; 
  description: string;
}

const videos: VideoItem[] = [
  {
    id: 1,
    title: "The Urban Gardener: San Francisco's Backyard Gardens",
    category: "Landscaping",
    duration: "2:16",
    thumbnail: "https://img.youtube.com/vi/8N52FVPZvd8/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/embed/8N52FVPZvd8",
    description: "Explore unique backyard gardens and urban horticultural spaces across San Francisco."
  },
  {
    id: 2,
    title: "San Francisco Gardeners Use TikTok to Share Unconventional Planting Methods",
    category: "Lawn Care",
    duration: "2:18",
    thumbnail: "https://img.youtube.com/vi/WLbkSxa2cWM/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/embed/WLbkSxa2cWM",
    description: "See how Bay Area gardeners utilize modern platforms to share creative planting and lawn care techniques."
  },
  {
    id: 3,
    title: "We Found a Hidden Garden Path in San Francisco!",
    category: "Smart Tech",
    duration: "8:02",
    thumbnail: "https://img.youtube.com/vi/2kEd7CYrmSg/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/embed/2kEd7CYrmSg",
    description: "Discover a secret, beautifully maintained hidden garden pathway tucked away in the city."
  },
  {
    id: 4,
    title: "Urban Balcony Gardening in the City | San Francisco",
    category: "Tree Care",
    duration: "14:26",
    thumbnail: "https://img.youtube.com/vi/7hmfVqkujwo/maxresdefault.jpg",
    youtubeUrl: "https://www.youtube.com/embed/7hmfVqkujwo",
    description: "Learn how city dwellers maximize green spaces through creative urban balcony gardening in San Francisco."
  }
];

const categories = ["All", "Landscaping", "Lawn Care", "Smart Tech", "Tree Care"];

export default function VideoSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filteredVideos = activeCategory === "All"
    ? videos
    : videos.filter(v => v.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
            Media & Field Work
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0D402B] tracking-tight mt-4">
            See Francisco Gardeners in Action
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            Explore our video gallery to witness our eco-friendly transformations, lawn restoration projects, and smart water solutions across San Francisco.
          </p>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? "bg-[#0D402B] text-white shadow-md scale-105"
                  : "bg-emerald-50/60 text-gray-700 hover:bg-emerald-100/70 border border-emerald-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FEATURED VIDEO CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group cursor-pointer rounded-3xl overflow-hidden border border-emerald-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* THUMBNAIL CONTAINER WITH HOVER PLAY BUTTON */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-gray-900">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  unoptimized // Allows loading external YouTube thumbnails cleanly
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* OVERLAY GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* PLAY BUTTON ICON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-emerald-400 transition-all duration-300">
                    <svg className="w-7 h-7 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* BADGES */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0D402B]">
                    {video.category}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-black/70 text-white backdrop-blur-sm">
                    {video.duration}
                  </span>
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <div>
                  <h3 className="text-xl font-bold text-[#0D402B] group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-sm font-bold text-[#0D402B] group-hover:translate-x-1 transition-transform">
                  Watch Video <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YOUTUBE LIGHTBOX MODAL */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/20">
              
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/50 hover:bg-black p-2 rounded-full z-10 transition-colors text-xl font-bold"
              >
                ✕
              </button>

              {/* EMBEDDED YOUTUBE IFRAME */}
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src={`${activeVideo.youtubeUrl}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>

              {/* MODAL FOOTER */}
              <div className="p-6 bg-[#0D402B] text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    {activeVideo.category}
                  </span>
                  <h3 className="text-lg font-bold mt-0.5">{activeVideo.title}</h3>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-5 py-2 rounded-xl text-sm transition-colors self-start md:self-center"
                >
                  Close Player
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}