'use client';

import React from 'react';

const Disclaimer = () => {
  return (
    <div className="w-full min-h-screen bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
            Legal & Compliance
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0D402B] tracking-tight mt-4">
            Disclaimer
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            Important information regarding the use of our website, landscaping advice, service estimates, and third-party resources.
          </p>
        </div>

        {/* CONTENT CARD */}
        <section className="bg-white border border-emerald-100 rounded-3xl p-8 md:p-12 shadow-sm space-y-8 text-gray-700">
          
          <p className="text-sm font-semibold text-emerald-600">
            Effective Date: January 1, 2026
          </p>

          <p className="leading-relaxed text-base md:text-lg">
            The information provided by <span className="font-bold text-[#0D402B]">Francisco Gardeners</span> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) on www.franciscogardeners.com (the &ldquo;Site&rdquo;) is for general informational purposes only. All information on the Site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
          </p>

          {/* SECTION 1 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">General Gardening & Horticultural Advice</h2>
            <p className="leading-relaxed">
              Any plant care guides, seasonal maintenance tips, soil recommendations, or landscaping ideas published on our Site are intended strictly as general educational guidance. San Francisco&apos;s diverse microclimates, soil compositions, and property-specific conditions vary significantly. Content on this website does not constitute a formal horticultural assessment or site-specific architectural plan.
            </p>
          </div>

          {/* SECTION 2 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">Service Estimates & Project Outcomes</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><span className="font-semibold text-[#0D402B]">Online Quotes:</span> Preliminary pricing or service estimates generated through our website or contact forms are non-binding until an on-site property inspection is completed by our team.</li>
              <li><span className="font-semibold text-[#0D402B]">Natural Variations:</span> Because landscaping involves living plants, trees, and natural materials, growth rates, seasonal appearances, and weather-related outcomes cannot be guaranteed beyond our written service warranty.</li>
              <li><span className="font-semibold text-[#0D402B]">Portfolio Visuals:</span> Project photos displayed on the Site represent completed client gardens and may not reflect identical results for every yard due to sunlight, irrigation, and ongoing care differences.</li>
            </ul>
          </div>

          {/* SECTION 3 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">External Links Disclaimer</h2>
            <p className="leading-relaxed">
              The Site may contain links to external websites, nursery suppliers, municipal water conservation guidelines, or third-party tools that are not provided or maintained by Francisco Gardeners. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
          </div>

          {/* SECTION 4 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">Limitation of Liability</h2>
            <p className="leading-relaxed">
              Under no circumstance shall Francisco Gardeners, its employees, or its contractors have any liability to you for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided on the Site. Your use of the Site and your reliance on any information on the Site is solely at your own risk.
            </p>
          </div>

          {/* SECTION 5 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">Changes to This Disclaimer</h2>
            <p className="leading-relaxed">
              We reserve the right to modify or update this Disclaimer at any time without prior notice. Any revisions will be posted on this page with an updated &ldquo;Effective Date.&rdquo;
            </p>
          </div>

          {/* SECTION 6 */}
          <div className="pt-6 border-t border-emerald-100">
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">Contact Us</h2>
            <div className="space-y-1.5 text-sm md:text-base">
              <p><span className="font-semibold text-[#0D402B]">Email:</span> info@franciscogardeners.com</p>
              <p><span className="font-semibold text-[#0D402B]">Phone:</span> +1 (415) 555-0198</p>
              <p><span className="font-semibold text-[#0D402B]">Address:</span> Francisco Gardeners, 1485 Market St, San Francisco, CA 94103</p>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Disclaimer;