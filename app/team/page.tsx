'use client';

const teamMembers = [
  { id: 1, name: "James Walker", role: "Deep Cleaning Specialist", image: "/team/1 (1).png" },
  { id: 2, name: "Daniel Scott", role: "Roof & Gutter Cleaning Expert", image: "/team/2(1).png" },
  { id: 3, name: "Robert Harris", role: "Handyman Technician", image: "/team/3(1).png" },
  { id: 4, name: "Joseph Allen", role: "Licensed Plumber", image: "/team/4(1).png" },
  { id: 5, name: "Jacob Collins", role: "Lawn Care Specialist", image: "/team/5(1).png" },
  { id: 6, name: "Benjamin Stewart", role: "Tree Cutting Technician", image: "/team/6(1).png" },
  { id: 7, name: "Christian Cook", role: "Outdoor Lighting Installer", image: "/team/7(1).png" },
  { id: 8, name: "Eric Cooper", role: "Maintenance Plan Coordinator", image: "/team/8(1).png" },
  { id: 9, name: "Adam Rivera", role: "Cleaning Plan Supervisor", image: "/team/10(1).png" }
];

const OurTeam = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0D402B] tracking-tight">
            Our Leadership & Team
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-600 font-medium">
            Meet the visionaries and experts who keep San Francisco green and beautiful.
          </p>
        </div>

        {/* LEADER SECTION */}
        <div className="bg-[#F4FAF6] rounded-2xl p-8 md:p-12 mb-16 shadow-sm border border-[#E2F7ED]">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            
            {/* Leader Image */}
            <div className="flex-shrink-0">
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden p-1 bg-white ring-4 ring-[#10B981] shadow-lg">
                <img
                  src="/team/ceo1.jpg"
                  alt="Francisco Morales"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Leader Bio */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0D402B]">
                  Francisco Morales
                </h2>
                <p className="text-emerald-600 font-semibold text-lg mt-1">
                  Founder & Head Landscape Architect
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed">
                With over 15 years of passion for sustainable horticulture, Francisco founded 
                <strong className="text-[#0D402B]"> Francisco Gardeners</strong> to bring eco-friendly, 
                vibrant green spaces to residential and commercial properties across San Francisco. 
                His approach combines local Bay Area plant selection with innovative landscape design, 
                ensuring every garden is healthy, resilient, and visually stunning.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm">
                Under his leadership, Francisco Gardeners has grown into a trusted team of certified experts 
                dedicated to lawn care, tree trimming, outdoor lighting, and eco-conscious garden maintenance.
              </p>

              {/* Social Links */}
              <div className="pt-2 flex items-center justify-center md:justify-start gap-4">
                <span className="text-sm font-medium text-gray-500">Connect with Francisco:</span>
                <a href="#" className="text-[#0D402B] hover:text-emerald-600 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-[#0D402B] hover:text-emerald-600 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* TEAM GRID TITLE */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-[#0D402B]">Our Field Specialists</h3>
          <p className="text-sm text-gray-500 mt-1">Dedicated professionals managing your daily garden care</p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center group">
              
              {/* Avatar with Ring & Social Hover Overlay */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden p-1 bg-white ring-4 ring-[#E2F7ED] group-hover:ring-[#10B981] transition-all duration-300 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                />

                <div className="absolute inset-0 bg-[#0D402B]/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 text-white">
                  <a href="#" className="hover:text-emerald-300 transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-emerald-300 transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-emerald-300 transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.239-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Details */}
              <h4 className="text-xl font-bold text-[#0D402B] mt-5">
                {member.name}
              </h4>
              <p className="text-sm text-gray-500 font-medium mt-1">
                {member.role}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTeam;