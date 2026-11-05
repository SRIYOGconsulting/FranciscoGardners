'use client';

import Image from 'next/image';
import ClapFunction from '../../components/ClappingFunction';

const About = () => {
  return (
    <div className="about bg-white text-gray-800 font-sans">
      {/* Light Mint Top Hero Section */}
      <section className="bg-[#f0fdfa] py-12 md:py-16 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-3">
          <nav className="text-sm text-gray-500 space-x-2">
            <span>Home</span>
            <span className="text-gray-400">&gt;</span>
            <span className="text-[#0d5c3a] font-medium">About Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f3822] tracking-tight">
            About Us
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-base md:text-lg pt-2">
           We believe every home and workspace deserves a beautiful green space.
            Francisco Gardeners provides professional gardening and landscaping services in San Francisco.
             Our mission is to bring plants, people, and nature together by creating healthy, well-maintained gardens that add beauty, relaxation, and sustainability to everyday life
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f3822] leading-snug">
              Professional Gardening  <br /> Services in San Francisco 
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-base">
              Every project we&apos;ve worked on has been a shared journey — from planting ideas to watching them bloom. 
              Together with our customers, we&apos;ve grown not just gardens, but meaningful relationships rooted in care, 
              trust, and a love for greenery. Whether it&apos;s a small balcony plant or a full backyard transformation, 
              we&apos;re here to make every space greener, one plant at a time.
            </p>

            <div className="bg-emerald-50/60 p-6 rounded-2xl grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-2xl md:text-3xl font-extrabold text-slate-900">8+</span>
                <span className="text-xs md:text-sm text-gray-600 font-medium">Years of Experience</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-extrabold text-slate-900">150+</span>
                <span className="text-xs md:text-sm text-gray-600 font-medium">Gardens Transformed</span>
              </div>
              <div>
                <span className="block text-2xl md:text-3xl font-extrabold text-slate-900">175+</span>
                <span className="text-xs md:text-sm text-gray-600 font-medium">Successful Projects</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-md">
            <Image
              src="/about/img5.jpg"
              alt="Garden Maintenance"
              width={700}
              height={500}
              className="w-full h-[400px] md:h-[480px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="bg-slate-50/50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0f3822] mb-12">
            Making Garden of Dreams
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeWidth="1.5"></circle>
                  <circle cx="12" cy="12" r="4" strokeWidth="1.5"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our mission is to provide high-quality plants, gardening resources, and expert support to every corner of the community.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Motive</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We aim to be the go-to place for all gardening needs, offering easy access to plants and expert advice for every gardener and home.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our vision is to cultivate a greener, healthier community by promoting sustainable gardening practices and reconnecting people with nature.
              </p>
            </div>
          </div>
        </div>
      </section>

   
      <div className="text-center pt-12 pb-6">
        <h2 className="text-3xl md:text-4xl font-black text-[#0f3822] tracking-tight">
          Our Mission
        </h2>
      </div>

      {/*  this is the scrollable image or background image */}
      <section 
        className="relative h-64 md:h-80 w-full flex flex-col items-center justify-center text-center px-4 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/about/img5.jpg')" }}
      >
      
        <div className="absolute inset-0 bg-emerald-950/75" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-2">
          <p className="text-emerald-300 font-semibold text-sm md:text-base">
            To reconnect people with nature
          </p>
          <h3 className="text-2xl md:text-4xl font-extrabold text-[#d1fae5] leading-snug">
            one plant, one garden, one moment <br className="hidden md:inline" /> at a time.
          </h3>
        </div>
      </section>
      
<section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
  <div className="bg-[#f0fdfa] rounded-3xl p-8 md:p-12 border border-emerald-100/50 flex flex-col md:flex-row items-center justify-between gap-8">
    {/* Left Text Content */}
    <div className="space-y-4 max-w-lg text-left">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f3822] tracking-tight">
        Got Plants to Share?
      </h2>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        Turn your homegrown plants into something more. Join Garden Sansar and sell your greens to plant lovers across Nepal!
      </p>
      <div className="pt-2">
        <button className="bg-gradient-to-r from-emerald-500 to-teal-700 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition-opacity">
          Become a Partner
        </button>
      </div>
    </div>

    {/* Right Images */}
    <div className="flex items-center gap-4 relative">
      <div className="relative w-44 h-56 md:w-52 md:h-64 rounded-2xl overflow-hidden shadow-sm translate-y-4">
        <Image
          src="/about/homegrown.jpg"
          alt="Homegrown plant"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative w-44 h-56 md:w-52 md:h-64 rounded-2xl overflow-hidden shadow-sm -translate-y-4">
        <Image
          src="/about/plant.jpg"
          alt="Potted plant decor"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </div>
</section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex justify-start">
        <ClapFunction />
      </div>
    </div>
  );
};

export default About;