'use client'
import Image from 'next/image';

export default function Vmgo() {
  return (
    <div className="min-h-screen">

      {/* Quick Nav / Intro Icons Section */}
      <section className='max-w-7xl mx-auto py-12'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 place-content-center place-items-center'>
          <a href="#vision" className='flex flex-col justify-center items-center gap-3 group cursor-pointer'>
            <Image height={96} width={96} src="/vmgo/vision.png" alt="Vision" className="w-20 h-20 md:w-24 md:h-24 group-hover:scale-105 transition-transform" />
            <p className="font-semibold text-lg text-[#0D402B]">Vision</p>
          </a>
          <a href="#mission" className='flex flex-col justify-center items-center gap-3 group cursor-pointer'>
            <Image height={96} width={96} src="/vmgo/mission.png" alt="Mission" className="w-20 h-20 md:w-24 md:h-24 group-hover:scale-105 transition-transform" />
            <p className="font-semibold text-lg text-[#0D402B]">Mission</p>
          </a>
          <a href="#goals" className='flex flex-col justify-center items-center gap-3 group cursor-pointer'>
            <Image height={96} width={96} src="/vmgo/goal.png" alt="Goals" className="w-20 h-20 md:w-24 md:h-24 group-hover:scale-105 transition-transform" />
            <p className="font-semibold text-lg text-[#0D402B]">Goals</p> 
          </a>
          <a href="#objectives" className='flex flex-col justify-center items-center gap-3 group cursor-pointer'>
            <Image height={96} width={96} src="/vmgo/objective.png" alt="Objectives" className="w-20 h-20 md:w-24 md:h-24 group-hover:scale-105 transition-transform" /> 
            <p className="font-semibold text-lg text-[#0D402B]">Objectives</p>    
          </a> 
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="flex items-center justify-between gap-12 md:gap-24 mb-12 py-8 max-w-5xl mx-auto px-4">
        <div className="hidden md:flex items-center">
          <Image height={600} width={800} src="/vmgo/vision.png" alt="Francisco Gardeners Vision" className="w-auto h-48 object-contain" />
        </div>
        <div className="p-8 md:p-12 card bg-emerald-50/50 border border-emerald-100 space-y-4 max-w-3xl rounded-2xl shadow-sm">
          <h2 className="text-3xl font-bold text-[#0D402B]">Our Vision</h2>
          <p className="text-gray-700 text-md leading-relaxed">
            At Francisco Gardeners, our vision is to transform San Francisco into a greener, more sustainable urban oasis by connecting homes and businesses with nature-driven landscaping solutions.
          </p>
          <p className="text-gray-700 text-md leading-relaxed">
            We envision thriving neighborhoods where every outdoor space—from rooftop terraces to expansive estate lawns—is thoughtfully designed, eco-friendly, and meticulously maintained to promote local biodiversity and personal wellbeing.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="flex items-center justify-between gap-12 md:gap-24 mb-12 max-w-5xl mx-auto px-4">
        <div className="p-8 md:p-12 bg-[#0D402B] text-white space-y-4 max-w-3xl rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-md leading-relaxed text-emerald-50">
            Our mission is to bring plants, people, and nature together through reliable, high-quality gardening and landscaping services across the Bay Area. We are committed to delivering eco-conscious garden maintenance, water-efficient designs, and expert plant care that enhance properties while preserving our local environment.
          </p>
        </div>
        <div className="hidden md:flex items-center">
          <Image height={600} width={800} src="/vmgo/mission.png" alt="Francisco Gardeners Mission" className="w-auto h-48 object-contain" />
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="flex items-center justify-between gap-12 md:gap-24 py-8 max-w-5xl mx-auto px-4">
        <div className="hidden md:flex items-center">   
          <Image height={600} width={800} src="/vmgo/goal.png" alt="Francisco Gardeners Goals" className="w-auto h-48 object-contain" />
        </div>
        <div className="p-8 md:p-12 space-y-4 card bg-emerald-50/50 border border-emerald-100 rounded-2xl shadow-sm w-full">
          <h2 className="text-3xl font-bold text-[#0D402B]">Our Goals</h2>
          <ul className="space-y-3 pl-2 text-gray-700">
            {[
              "Promote organic, chemical-free gardening methods to protect local soil, pets, and wildlife.",
              "Implement smart irrigation systems and drought-tolerant Bay Area flora to maximize water conservation.",
              "Deliver consistent, premium-grade lawn care and tree maintenance with transparent pricing.",
              "Continuously train our field specialists in modern horticultural practices and landscape architecture."
            ].map((goal, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#10B981] font-bold text-lg">•</span>
                <span className="leading-relaxed">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="flex items-center justify-between gap-12 md:gap-24 mb-12 py-8 max-w-5xl mx-auto px-4">
        <div className="p-8 md:p-12 space-y-4 text-white bg-[#0D402B] max-w-3xl rounded-2xl shadow-md w-full">
          <h2 className="text-3xl font-bold">Our Objectives</h2>
          <ul className="space-y-3 pl-2 text-emerald-50">
            {[
              "Expand zero-emission, battery-powered gardening tool usage to reduce neighborhood noise and carbon footprint.",
              "Provide custom year-round maintenance plans catered to microclimates across San Francisco.",
              "Foster long-term relationships with homeowners, commercial properties, and community gardens.",
              "Maintain the highest standards of safety, quality assurance, and client satisfaction in every project."
            ].map((objective, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-emerald-300 font-bold text-lg">•</span>
                <span className="leading-relaxed">{objective}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center">
          <Image height={600} width={800} src="/vmgo/objective.png" alt="Francisco Gardeners Objectives" className="w-auto h-48 object-contain" />
        </div>
      </section>

    </div>
  );
}