'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MessagePage() {
  return (
    <div className="w-full min-h-screen bg-white py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Leadership Insights
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0D402B] tracking-tight mt-4">
            A Message From Our Founder
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            Discover our commitment to sustainable landscaping, community well-being, and keeping San Francisco green.
          </p>
        </div>

        {/* MAIN MESSAGE CARD */}
        <div className="bg-[#F4FAF6] border border-emerald-100 rounded-3xl p-8 md:p-12 shadow-sm relative mb-16">
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            
            {/* FOUNDER AVATAR & INFO */}
            <div className="flex flex-col items-center text-center flex-shrink-0">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden p-1 bg-white ring-4 ring-[#10B981] shadow-md">
                <Image
                  src="/team/ceo1.jpg"
                  alt="Francisco Morales"
                  width={300}
                  height={300}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0D402B] mt-4">
                Francisco Morales
              </h3>
              <p className="text-emerald-600 font-semibold text-sm mt-0.5">
                Founder & Head Architect
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Francisco Gardeners
              </p>
            </div>

            {/* LETTER CONTENT */}
            <div className="flex-1 space-y-5 text-gray-700 leading-relaxed text-base">
              
              <p className="text-xl font-semibold text-[#0D402B] italic">
                &ldquo;Welcome to Francisco Gardeners. We believe every home and workspace deserves a thriving green sanctuary.&rdquo;
              </p>

              <p>
                When we started Francisco Gardeners in 2018, our goal was simple: bring nature closer to people living and working across the San Francisco Bay Area. Over the years, that passion has grown into a dedicated movement toward sustainable, eco-friendly urban horticulture.
              </p>

              <p>
                San Francisco features unique microclimates, diverse landscapes, and a vibrant community that values nature. That is why we focus heavily on organic lawn treatments, battery-powered low-noise machinery, and drought-tolerant California flora that conserve precious water while providing year-round beauty.
              </p>

              <p>
                Whether maintaining a residential garden, designing a rooftop terrace, or managing commercial grounds, our team treats every project with utmost care and craftsmanship. Thank you for trusting us with your green spaces.
              </p>

              {/* SIGNATURE AREA */}
              <div className="pt-4 border-t border-emerald-200/60 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-semibold text-[#0D402B]">Warm regards,</p>
                  <p className="text-2xl font-serif text-[#0D402B] italic mt-1">Francisco Morales</p>
                </div>

                <div className="flex gap-3 text-sm text-gray-500">
                  <span className="bg-white px-3 py-1 rounded-full border border-emerald-100 text-xs font-medium text-[#0D402B]">
                    Est. 2018 • San Francisco, CA
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* CORE PROMISES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl border border-emerald-100 bg-white shadow-sm">
            <h4 className="text-lg font-bold text-[#0D402B] mb-2">🌿 Eco-Friendly Standards</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              We prioritize organic fertilizers, zero-emission tools, and drought-tolerant plants to keep our city sustainable.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-emerald-100 bg-white shadow-sm">
            <h4 className="text-lg font-bold text-[#0D402B] mb-2">⭐ Uncompromising Quality</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every detail is meticulously crafted—from lawn precision to healthy soil cultivation and tree pruning.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-emerald-100 bg-white shadow-sm">
            <h4 className="text-lg font-bold text-[#0D402B] mb-2">🤝 Trust & Transparency</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Clear quotes, background-checked specialists, and consistent service schedules you can always count on.
            </p>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="bg-[#0D402B] text-white rounded-3xl p-8 md:p-12 text-center space-y-4 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to Transform Your Outdoor Space?</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto text-sm md:text-base">
            Get in touch with our team today to schedule a consultation or learn more about our custom garden maintenance plans.
          </p>
          <div className="pt-2">
            <Link 
              href="/contact" 
              className="inline-block bg-[#10B981] hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}