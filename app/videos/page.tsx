'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';

interface VideoItem {
  id: number;
  title: string;
  section: string;
  category: string;
  duration: string;
  youtubeUrl: string;
  description: string;
}

const featuredVideo: VideoItem = {
  id: 0,
  title: "Francisco Gardeners: Sustainable Landscaping & Garden Care Masterclass",
  section: "Featured Showcase",
  category: "Sustainable Landscaping",
  duration: "13:01",
  youtubeUrl: "https://www.youtube.com/embed/d4fHb_VlMNc",
  description: "Explore expert landscaping advice, soil remediation, drought-tolerant plant care, and microclimate transformations across San Francisco."
};


const getYoutubeThumbnail = (youtubeUrl: string) => {
  const videoId = youtubeUrl.match(/youtube\.com\/embed\/([^?&/]+)/)?.[1];
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "/images/video-placeholder.jpg";
};

const allVideos: VideoItem[] = [
  // SECTION 1: Landscaping & Design (Items 1 - 8)
  {
    id: 1,
    title: "Landscape Design & Custom Master Planning",
    section: "Landscaping & Design",
    category: "Landscape Design",
    duration: "9:06",
    youtubeUrl: "https://www.youtube.com/embed/KYgwwu3p0Dc",
    description: "Transform your outdoor vision into a sustainable reality with 2D/3D master plans and California native planting layouts."
  },
  {
    id: 2,
    title: "Hardscaping & Stone Pathway Craftsmanship",
    section: "Landscaping & Design",
    category: "Hardscaping",
    duration: "2:11",
    youtubeUrl: "https://www.youtube.com/embed/epyvUG4uImk",
    description: "Design and build durable outdoor structures, stone pathways, and retaining walls tailored to San Francisco's hilly terrain."
  },
  {
    id: 3,
    title: "Retaining Wall Construction & Slope Control",
    section: "Landscaping & Design",
    category: "Retaining Walls",
    duration: "0:10",
    youtubeUrl: "https://www.youtube.com/embed/RfpBwIHehPI",
    description: "Stabilize sloped yards, control soil erosion, and build terraced garden beds with engineered stone and timber."
  },
  {
    id: 4,
    title: "Patio & Natural Flagstone Installation",
    section: "Landscaping & Design",
    category: "Patio Installation",
    duration: "10:11",
    youtubeUrl: "https://www.youtube.com/embed/Kgd1RpT_NVM",
    description: "Create elegant outdoor living areas and dining patios with hand-cut natural flagstone and custom stone masonry."
  },
  {
    id: 5,
    title: "Permeable Paver Patios & Pathway Installation",
    section: "Landscaping & Design",
    category: "Paver Installation",
    duration: "2:18",
    youtubeUrl: "https://www.youtube.com/embed/WLbkSxa2cWM",
    description: "Build crack-resistant paver patios and driveways using permeable interlocking concrete and natural stone pavers."
  },
  {
    id: 6,
    title: "Outdoor Living Space & Kitchen Installation",
    section: "Landscaping & Design",
    category: "Outdoor Living",
    duration: "8:02",
    youtubeUrl: "https://www.youtube.com/embed/2kEd7CYrmSg",
    description: "Expand your home's living space with custom outdoor kitchens, built-in fire pits, dining pergolas, and stone seating."
  },
  {
    id: 7,
    title: "Water Features, Koi Ponds & Fountain Installation",
    section: "Landscaping & Design",
    category: "Water Features",
    duration: "14:26",
    youtubeUrl: "https://www.youtube.com/embed/7hmfVqkujwo",
    description: "Add peaceful ambient sound and urban wildlife habitat with custom recirculating waterfalls, koi ponds, and fountains."
  },
  {
    id: 8,
    title: "Custom Fencing Installation & Repair",
    section: "Landscaping & Design",
    category: "Fencing Installation",
    duration: "3:45",
    youtubeUrl: "https://www.youtube.com/embed/8N52FVPZvd8",
    description: "Enhance privacy and property security with custom horizontal slat wood and metal fencing built for coastal conditions."
  },

  // SECTION 2: Lawn Care & Turf (Items 9 - 16)
 {
    id: 9,
    title: "8 Beginner-Friendly Lawn Care Tips & Maintenance",
    section: "Lawn Care & Turf",
    category: "Lawn Care",
    duration: "10:53",
    youtubeUrl: "https://www.youtube.com/embed/P1xwBxqQloY",
    description: "Essential beginner-friendly lawn care tips, mowing guidelines, and turf maintenance secrets for a green, healthy lawn."
  },
  {
    id: 10,
    title: "Turf Removal & Sustainable Yard Prep",
    section: "Lawn Care & Turf",
    category: "Turf Removal",
    duration: "4:15",
    youtubeUrl: "https://www.youtube.com/embed/oPDW1xQ7_SE",
    description: "Remove outdated, thirsty, or degraded lawns cleanly and sustainably to pave the way for eco-friendly landscapes."
  },
  {
    id: 11,
    title: "Commercial Turf Installation & Grounds Management",
    section: "Lawn Care & Turf",
    category: "Commercial Turf",
    duration: "6:20",
    youtubeUrl: "https://www.youtube.com/embed/lwubzTZlkrA",
    description: "Upgrade corporate campuses, multi-family housing, and commercial properties with durable, high-traffic turf solutions."
  },
  {
    id: 12,
    title: "Artificial Turf Installation for Bay Area Yards",
    section: "Lawn Care & Turf",
    category: "Artificial Turf",
    duration: "7:12",
    youtubeUrl: "https://www.youtube.com/embed/kqDg7hwavQo",
    description: "Enjoy a pristine, mud-free, evergreen lawn year-round with premium, non-toxic artificial turf engineered for city yards."
  },
  {
    id: 13,
    title: "Grass Seeding & Lawn Overseeding Services",
    section: "Lawn Care & Turf",
    category: "Grass Seeding",
    duration: "3:50",
    youtubeUrl: "https://www.youtube.com/embed/_RatePmRTco",
    description: "Revitalize thin, patchy lawns or establish brand new turf using microclimate-adapted seed blends and organic soil prep."
  },
  {
    id: 14,
    title: "Instant Eco-Friendly Sod Installation",
    section: "Lawn Care & Turf",
    category: "Sod Installation",
    duration: "8:40",
    youtubeUrl: "https://www.youtube.com/embed/gKsitYyupmY?si=m6y3_hGaaEuCvhHa",
    description: "Transform bare dirt or degraded yards into instant, lush green lawns with premium, microclimate-suited sod varieties."
  },
  {
    id: 15,
    title: "Mulching Services & Moisture Retention",
    section: "Lawn Care & Turf",
    category: "Mulching Services",
    duration: "4:55",
    youtubeUrl: "https://www.youtube.com/embed/MBobxICT_Po",
    description: "Conserve soil moisture, suppress weeds naturally, and insulate roots with high-grade organic bark and wood chip mulch."
  },
  {
    id: 16,
    title: "Lawn Leveling, Topdressing & Aeration",
    section: "Lawn Care & Turf",
    category: "Lawn Leveling",
    duration: "5:10",
    youtubeUrl: "https://www.youtube.com/embed/KYgwwu3p0Dc",
    description: "Smooth out uneven surfaces, relieve compaction, and encourage deep root growth with topdressing and core aeration."
  },

  // SECTION 3: Trees & Planting (Items 17 - 23)
  {
    id: 17,
    title: "Tree Sales & Hand-Selected Native Plant Sourcing",
    section: "Trees & Planting",
    category: "Tree Sales",
    duration: "6:15",
    youtubeUrl: "https://www.youtube.com/embed/6BNzTbzCxw4",
    description: "Source healthy, hand-selected native California, fruit, and specimen trees matched to your property's soil and microclimate."
  },
  {
    id: 18,
    title: "Plant Propagation & Specimen Multiplication",
    section: "Trees & Planting",
    category: "Plant Propagation",
    duration: "4:30",
    youtubeUrl: "https://www.youtube.com/embed/2kEd7CYrmSg",
    description: "Multiply your favorite garden plants, rare ornamentals, and California natives using chemical-free propagation techniques."
  },
  {
    id: 19,
    title: "Certified Arborist Tree Pruning & Removal",
    section: "Trees & Planting",
    category: "Tree Pruning",
    duration: "9:20",
    youtubeUrl: "https://www.youtube.com/embed/q1IHqAZxLrc",
    description: "Maintain tree health, structural safety, and wind resilience with certified arborist pruning and low-impact removal."
  },
  {
    id: 20,
    title: "Hedge Trimming & Precision Shrub Shaping",
    section: "Trees & Planting",
    category: "Hedge Trimming",
    duration: "3:40",
    youtubeUrl: "https://www.youtube.com/embed/8N52FVPZvd8",
    description: "Maintain privacy, clean lines, and plant health with expert precision hand-pruning and electric hedge trimming."
  },
  {
    id: 21,
    title: "Soil Improvement, Fertilization & Clay Breakdown",
    section: "Trees & Planting",
    category: "Soil Improvement",
    duration: "5:50",
    youtubeUrl: "https://www.youtube.com/embed/Kgd1RpT_NVM",
    description: "Enhance soil fertility, break down heavy urban clay, and boost natural moisture retention with organic soil amendments."
  },
  {
    id: 22,
    title: "Pest, Disease & Non-Toxic Weed Control",
    section: "Trees & Planting",
    category: "Pest Control",
    duration: "7:05",
    youtubeUrl: "https://www.youtube.com/embed/oPDW1xQ7_SE",
    description: "Protect your garden, lawn, and trees from common Bay Area pests and diseases with professional, eco-safe care."
  },
  {
    id: 23,
    title: "Fire Fuel Reduction & Wildfire Mitigation",
    section: "Trees & Planting",
    category: "Fire Fuel Reduction",
    duration: "4:45",
    youtubeUrl: "https://www.youtube.com/embed/lwubzTZlkrA",
    description: "Protect your property from wildfire risks through strategic brush clearing, deadwood removal, and fire-resistant plant care."
  },

  // SECTION 4: Maintenance & Infrastructure (Items 24 - 30)
  {
    id: 24,
    title: "Smart Irrigation Installation & Water Conservation",
    section: "Maintenance & Infrastructure",
    category: "Irrigation Services",
    duration: "6:30",
    youtubeUrl: "https://www.youtube.com/embed/kqDg7hwavQo",
    description: "Keep your landscape thriving while conserving water through smart automated systems and weather-based controllers."
  },
  {
    id: 25,
    title: "Gutter Cleaning & Roof Runoff Protection",
    section: "Maintenance & Infrastructure",
    category: "Gutter Cleaning",
    duration: "3:15",
    youtubeUrl: "https://www.youtube.com/embed/_RatePmRTco",
    description: "Protect your property from water damage, roof overflow, and garden erosion with thorough, safe gutter cleaning."
  },
  {
    id: 26,
    title: "Landscape Drainage, French Drains & Grading",
    section: "Maintenance & Infrastructure",
    category: "Landscape Grading",
    duration: "8:12",
    youtubeUrl: "https://www.youtube.com/embed/mnH36YkdqP0",
    description: "Prevent winter flooding, water pooling, and foundation damage with land grading, French drains, and bio-retention setups."
  },
  {
    id: 27,
    title: "Energy-Efficient Low-Voltage Landscape Lighting",
    section: "Maintenance & Infrastructure",
    category: "Landscape Lighting",
    duration: "5:25",
    youtubeUrl: "https://www.youtube.com/embed/RfpBwIHehPI",
    description: "Illuminate garden pathways, architectural foliage, and outdoor living areas with low-voltage LED landscape lighting."
  },
  {
    id: 28,
    title: "Yard Work, Brush Cleanup & Overgrowth Removal",
    section: "Maintenance & Infrastructure",
    category: "Yard Work",
    duration: "4:05",
    youtubeUrl: "https://www.youtube.com/embed/6fBYgVT9QSo",
    description: "Restore order to overgrown, messy yards with complete property clearing, leaf removal, and eco-friendly green disposal."
  },
  {
    id: 29,
    title: "Rooftop, Balcony & Urban Terrace Gardening",
    section: "Maintenance & Infrastructure",
    category: "Rooftop Gardening",
    duration: "7:40",
    youtubeUrl: "https://www.youtube.com/embed/6fBYgVT9QSo",
    description: "Transform urban roofs, balconies, and elevated terraces into private, wind-resistant green oases across San Francisco."
  },
  {
    id: 30,
    title: "Interior Plant Care & Biophilic Office Maintenance",
    section: "Maintenance & Infrastructure",
    category: "Interior Plant Care",
    duration: "5:00",
    youtubeUrl: "https://www.youtube.com/embed/elqF1i8yiCs",
    description: "Keep indoor plants, corporate foliage, and lobby biophilic displays thriving, dust-free, and healthy year-round."
  }
];

const sections = [
  "All Sections",
  "Landscaping & Design",
  "Lawn Care & Turf",
  "Trees & Planting",
  "Maintenance & Infrastructure"
];

export default function VideoSection() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSection, setSelectedSection] = useState<string>("All Sections");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filteredVideos = useMemo(() => {
    return allVideos.filter((video) => {
      const matchesSearch =
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSection = selectedSection === "All Sections" || video.section === selectedSection;

      return matchesSearch && matchesSection;
    });
  }, [searchQuery, selectedSection]);

  return (
    <div className="w-full min-h-screen bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
            Francisco Gardeners
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0D402B] tracking-tight mt-4">
            Professional Gardening Services in San Francisco
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            Browse our collection of 30 unique video guides highlighting landscaping, lawn restoration, arborist tree care, hardscaping, and exterior maintenance services.
          </p>
        </div>

        {/* SEARCH BAR WITH SEARCH ICON & SECTION FILTER TABS */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search among 30 services, videos, or techniques..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-emerald-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-800 placeholder-gray-400 text-sm md:text-base"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setSelectedSection(section)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                  selectedSection === section
                    ? "bg-[#0D402B] text-white shadow-md scale-105"
                    : "bg-emerald-50/60 text-gray-700 hover:bg-emerald-100/70 border border-emerald-100"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* FEATURED VIDEO BANNER */}
        {!searchQuery && selectedSection === "All Sections" && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <h2 className="text-xl font-extrabold text-[#0D402B]">Featured Service Showcase</h2>
            </div>
            <div
              onClick={() => setActiveVideo(featuredVideo)}
              className="group cursor-pointer rounded-3xl overflow-hidden border border-emerald-200 bg-emerald-900/5 shadow-lg hover:shadow-2xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 items-center"
            >
              <div className="relative lg:col-span-7 h-72 sm:h-96 w-full overflow-hidden bg-gray-900">
                <Image
                  src={getYoutubeThumbnail(featuredVideo.youtubeUrl)}
                  alt={featuredVideo.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-emerald-400 transition-all duration-300">
                    <svg className="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-md bg-black/70 text-white backdrop-blur-sm">
                    {featuredVideo.duration}
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-center space-y-4">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-100/70 px-3 py-1 rounded-full self-start">
                  Featured Showcase
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D402B] group-hover:text-emerald-600 transition-colors">
                  {featuredVideo.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {featuredVideo.description}
                </p>
                <div className="pt-2 flex items-center text-sm font-bold text-[#0D402B] group-hover:translate-x-1 transition-transform">
                  Watch Featured Showcase <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 30 VIDEOS GRID */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <p className="text-lg">No service videos found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group cursor-pointer rounded-3xl overflow-hidden border border-emerald-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* THUMBNAIL CONTAINER */}
                <div className="relative w-full h-60 overflow-hidden bg-gray-900">
                  <Image
                    src={getYoutubeThumbnail(video.youtubeUrl)}
                    alt={video.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* PLAY BUTTON ICON */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-emerald-400 transition-all duration-300">
                      <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* SECTION & DURATION BADGES */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0D402B]">
                      {video.section}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-black/70 text-white backdrop-blur-sm">
                      {video.duration}
                    </span>
                  </div>
                </div>

                {/* CARD DETAILS */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-3 bg-white">
                  <div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">
                      {video.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#0D402B] group-hover:text-emerald-600 transition-colors line-clamp-2 mt-1">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center text-sm font-bold text-[#0D402B] group-hover:translate-x-1 transition-transform">
                    Watch Service Video <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* LIGHTBOX MODAL */}
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

              {/* EMBEDDED IFRAME */}
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src={`${activeVideo.youtubeUrl}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>

              {/* FOOTER */}
              <div className="p-6 bg-[#0D402B] text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    {activeVideo.section} • {activeVideo.category}
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