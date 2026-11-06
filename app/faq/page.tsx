'use client';

import React, { useState } from 'react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export default function Faq() {
  const faqs: FaqItem[] = [
    {
      id: 1,
      question: "When was Francisco Gardeners established?",
      answer: "Francisco Gardeners was founded in 2018 to bring sustainable, eco-friendly landscaping to the San Francisco Bay Area.",
    },
    {
      id: 2,
      question: "Where is Francisco Gardeners located?",
      answer: "We are headquartered in San Francisco, California, serving residential and commercial clients across the Bay Area.",
    },
    {
      id: 3,
      question: "What primary gardening services do you offer?",
      answer: "We offer comprehensive lawn care, tree trimming, garden design, weed control, hedge pruning, drip irrigation, and seasonal maintenance.",
    },
    {
      id: 4,
      question: "Do you use eco-friendly and organic practices?",
      answer: "Yes! We prioritize 100% organic soil treatments, zero-emission battery-powered tools, and drought-tolerant plant selections.",
    },
    {
      id: 5,
      question: "Who leads Francisco Gardeners?",
      answer: "Francisco Morales, Founder and Head Landscape Architect, leads our experienced team of certified arborists and field specialists.",
    },
    {
      id: 6,
      question: "What makes Francisco Gardeners unique?",
      answer: "Our focus on Bay Area microclimates, water-saving irrigation design, transparent scheduled plans, and quiet battery-powered machinery.",
    },
    {
      id: 7,
      question: "What is the difference between garden design and maintenance?",
      answer: "Garden design involves planning and creating new outdoor layouts, while garden maintenance focuses on routine upkeep, soil health, and seasonal pruning.",
    },
    {
      id: 8,
      question: "What is included in routine garden maintenance?",
      answer: "Our recurring service covers lawn mowing, edge trimming, leaf clearance, weed control, plant fertilization, and irrigation health checks.",
    },
    {
      id: 9,
      question: "Do you offer smart irrigation and drip system installations?",
      answer: "Yes, we design and install water-efficient drip systems with smart timers customized for local Bay Area weather conditions.",
    },
    {
      id: 10,
      question: "Are your tree arborists certified and insured?",
      answer: "Absolutely. Our tree technicians and arborists are fully licensed, insured, and trained in urban climbing safety and tree preservation.",
    },
    {
      id: 11,
      question: "What types of properties do you service?",
      answer: "We handle single-family homes, residential estates, apartment complexes, commercial sites, and urban rooftop gardens.",
    },
    {
      id: 12,
      question: "How do you handle San Francisco's unique microclimates?",
      answer: "We carefully select native California plants and drought-tolerant flora suited specifically to fog-heavy or sun-exposed neighborhoods.",
    },
    {
      id: 13,
      question: "Do you offer emergency storm or fallen tree cleanup?",
      answer: "Yes, we provide rapid-response tree branch trimming and storm debris cleanup to keep your property safe.",
    },
    {
      id: 14,
      question: "Are your treatments safe for pets and children?",
      answer: "Yes, all our soil amendments, organic fertilizers, and pest-control treatments are non-toxic and pet-safe.",
    },
    {
      id: 15,
      question: "How do I schedule a garden consultation or estimate?",
      answer: "You can submit a request through our Contact or Booking page, or call our customer service team directly for a free on-site quote.",
    },
    {
      id: 16,
      question: "How many properties has Francisco Gardeners transformed?",
      answer: "We have proudly serviced over 400 residential yards and commercial grounds across San Francisco and adjacent Bay Area communities.",
    },
    {
      id: 17,
      question: "Do you provide custom landscape lighting installation?",
      answer: "Yes, our installation specialists set up low-voltage, energy-efficient LED lighting networks to enhance night-time garden aesthetics.",
    },
    {
      id: 18,
      question: "What is the mission of Francisco Gardeners?",
      answer: "To bring outdoor spaces to life using nature-driven, sustainable horticultural practices that protect our local ecosystem.",
    },
    {
      id: 19,
      question: "What is the long-term vision of the company?",
      answer: "To set the gold standard for zero-emission, water-wise urban landscaping across the entire San Francisco Bay Area.",
    },
    {
      id: 20,
      question: "Why should homeowners choose Francisco Gardeners?",
      answer: "For our punctual service, clear pricing, background-checked crew members, and dedication to keeping your property vibrant year-round.",
    },
    {
      id: 21,
      question: "Does Francisco Gardeners offer career or field worker positions?",
      answer: "Yes, we frequently hire landscape architects, lawn care technicians, and certified arborists through our Career page.",
    },
    {
      id: 22,
      question: "How can I apply for a job with Francisco Gardeners?",
      answer: "Visit our Career page, select an open position, and fill out our online application form with your experience.",
    },
    {
      id: 23,
      question: "Do you offer apprenticeship or field training programs?",
      answer: "Yes, we run seasonal hands-on training for aspiring arborists and horticulturists focused on sustainable practices.",
    },
    {
      id: 24,
      question: "How often should my lawn and garden be serviced?",
      answer: "Most properties benefit from weekly or bi-weekly maintenance visits, though custom monthly schedules are also available.",
    },
  ];

  const faq1 = faqs.slice(0, Math.ceil(faqs.length / 2));
  const faq2 = faqs.slice(Math.ceil(faqs.length / 2));
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (id: number) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="footer bg-white py-12 md:py-20">
      <div className="px-5 max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Got Questions?
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0D402B] tracking-tight mt-4">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            Everything you need to know about our eco-friendly gardening, lawn care, and landscaping services in San Francisco.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-6">
          
          {/* Column 1 */}
          <div className="w-full lg:w-1/2 space-y-4">
            {faq1.map((faq) => (
              <div key={faq.id} className="rounded-2xl overflow-hidden border border-emerald-100 bg-white shadow-sm transition-all">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center py-5 px-6 text-left hover:bg-emerald-50/50 transition-colors"
                >
                  <h2 className="text-base font-bold text-[#0D402B] pr-4">{faq.question}</h2>
                  <span className="flex-shrink-0 text-xl font-bold">
                    {openIndex === faq.id ? (
                      <div className="w-4 h-0.5 rounded-full bg-[#0D402B]"></div>
                    ) : (
                      <img src="/icons/plus.svg" className="w-5 h-5 cursor-pointer" alt="Expand FAQ" />
                    )}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === faq.id ? 'max-h-96 opacity-100 p-6 pt-0 text-gray-600 border-t border-emerald-100/60' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-sm md:text-base leading-relaxed pt-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="w-full lg:w-1/2 space-y-4">
            {faq2.map((faq) => (
              <div key={faq.id} className="rounded-2xl overflow-hidden border border-emerald-100 bg-white shadow-sm transition-all">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center py-5 px-6 text-left hover:bg-emerald-50/50 transition-colors"
                >
                  <h2 className="text-base font-bold text-[#0D402B] pr-4">{faq.question}</h2>
                  <span className="flex-shrink-0 text-xl font-bold">
                    {openIndex === faq.id ? (
                      <div className="w-4 h-0.5 rounded-full bg-[#0D402B]"></div>
                    ) : (
                      <img src="/icons/plus.svg" className="w-5 h-5 cursor-pointer" alt="Expand FAQ" />
                    )}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === faq.id ? 'max-h-96 opacity-100 p-6 pt-0 text-gray-600 border-t border-emerald-100/60' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-sm md:text-base leading-relaxed pt-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}