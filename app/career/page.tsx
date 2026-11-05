'use client';

import React, { useState } from 'react';

// Added explicit TypeScript interface for Job Openings
interface JobOpening {
  id: number;
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
}

const jobOpenings: JobOpening[] = [
  {
    id: 1,
    title: "Lead Landscape Architect",
    type: "Full-Time",
    location: "San Francisco, CA",
    department: "Design",
    description: "Seeking an experienced landscape architect to design eco-friendly residential and commercial outdoor spaces across the Bay Area."
  },
  {
    id: 2,
    title: "Senior Lawn Care Specialist",
    type: "Full-Time",
    location: "San Francisco, CA",
    department: "Field Operations",
    description: "Looking for a lawn care technician proficient in organic soil management, aeration, and zero-emission maintenance equipment."
  },
  {
    id: 3,
    title: "Certified Tree Arborist",
    type: "Full-Time",
    location: "San Francisco, CA",
    department: "Tree Services",
    description: "Expert tree cutting technician required for high-climbing safety, pruning, and health evaluation of urban trees."
  },
  {
    id: 4,
    title: "Irrigation & Lighting Installer",
    type: "Full-Time / Contract",
    location: "San Francisco, CA",
    department: "Installation",
    description: "Hands-on specialist needed to install smart drip irrigation networks and low-voltage landscape lighting."
  }
];

const perks = [
  { title: "Competitive Pay", desc: "Top-tier hourly rates and annual performance bonuses." },
  { title: "Health & Dental", desc: "Comprehensive medical and dental coverage for full-time staff." },
  { title: "Paid Time Off", desc: "Generous paid holidays, vacation days, and personal leave." },
  { title: "Eco-Tech Tools", desc: "Work with modern, battery-powered green machinery and tools." }
];

export default function CareerPage() {
  // Explicit state types
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Added React.FormEvent type to fix the TypeScript build error
  const handleApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
    }, 2500);
  };

  return (
    <div className="w-full min-h-screen bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Join Our Team
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0D402B] tracking-tight mt-4">
            Build a Greener Future with Francisco Gardeners
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            We are always looking for passionate gardeners, arborists, landscape architects, and support specialists to keep San Francisco beautiful and sustainable.
          </p>
        </div>

        {/* PERKS SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {perks.map((perk, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-100 text-center">
              <h3 className="text-lg font-bold text-[#0D402B]">{perk.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* JOB OPENINGS LIST */}
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0D402B]">Open Positions</h2>
            <p className="text-sm text-gray-500 mt-1">Explore available opportunities across our Bay Area teams</p>
          </div>

          <div className="grid gap-6">
            {jobOpenings.map((job) => (
              <div 
                key={job.id} 
                className="p-6 md:p-8 rounded-2xl border border-emerald-100 bg-white shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#0D402B]">
                      {job.department}
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      • {job.type}
                    </span>
                    <span className="text-xs font-medium text-gray-500">
                      • {job.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D402B]">{job.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{job.description}</p>
                </div>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="bg-[#0D402B] hover:bg-emerald-800 text-white font-medium px-6 py-2.5 rounded-xl transition-colors whitespace-nowrap self-start md:self-center"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* APPLICATION MODAL */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl relative border border-emerald-100">
              
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              >
                ✕
              </button>

              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-16 h-16 bg-emerald-100 text-[#0D402B] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D402B]">Application Submitted!</h3>
                  <p className="text-sm text-gray-600">Thank you for applying. Our hiring team will get back to you shortly.</p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-semibold text-emerald-600 uppercase">Applying for</span>
                    <h3 className="text-xl font-bold text-[#0D402B]">{selectedJob.title}</h3>
                  </div>

                  <form onSubmit={handleApply} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe"
                        className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#10B981]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#10B981]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="(415) 000-0000"
                        className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#10B981]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Cover Note / Experience</label>
                      <textarea 
                        rows={3} 
                        placeholder="Tell us briefly about your gardening or landscaping background..."
                        className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-[#10B981]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0D402B] hover:bg-emerald-800 text-white font-semibold py-2.5 rounded-xl transition-colors mt-2"
                    >
                      Submit Application
                    </button>
                  </form>
                </>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
}