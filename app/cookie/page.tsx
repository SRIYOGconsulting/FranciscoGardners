'use client';

import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="w-full min-h-screen bg-white py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
            Legal & Compliance
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0D402B] tracking-tight mt-4">
            Cookie Policy
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            Learn how Francisco Gardeners uses cookies and tracking technologies to ensure a seamless and personalized experience on our website.
          </p>
        </div>


        {/* CONTENT CARD */}
        <section className="bg-white border border-emerald-100 rounded-3xl p-8 md:p-12 shadow-sm space-y-8 text-gray-700">
          
          <p className="text-sm font-semibold text-emerald-600">
            Effective Date: January 1, 2026
          </p>

          <p className="leading-relaxed text-base md:text-lg">
            At <span className="font-bold text-[#0D402B]">Francisco Gardeners</span>, we value your privacy and are committed to providing a transparent, secure, and personalized web experience. This Cookie Policy explains how and why we use cookies on www.franciscogardeners.com, the types of cookies we employ, and your choices to manage or disable them.
          </p>

          {/* SECTION 1 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">Introduction</h2>
            <p className="leading-relaxed">
              Francisco Gardeners uses cookies and similar tracking technologies on our website and client service portal to enhance performance, remember your preferences, and help us understand how visitors interact with our landscaping and garden maintenance offerings across San Francisco.
            </p>
          </div>

          {/* SECTION 2 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">What are Cookies & Tracking Technologies?</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><span className="font-semibold text-[#0D402B]">Cookies:</span> Small text files stored on your computer or mobile device when you visit our website. They help store essential data like user session details, preferred region, and site navigation settings.</li>
              <li><span className="font-semibold text-[#0D402B]">Tracking Pixels & Scripts:</span> Lightweight technologies used to analyze user engagement, verify booking form completion, and measure the performance of our online consultation requests.</li>
            </ul>
          </div>

          {/* SECTION 3 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">How We Use Cookies</h2>
            <p className="leading-relaxed mb-3">
              We utilize cookies and tracking tools for the following core purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><span className="font-semibold text-[#0D402B]">Essential Operation:</span> To maintain basic website functions, such as service request submission and secure portal logins.</li>
              <li><span className="font-semibold text-[#0D402B]">Preferences & Personalization:</span> To remember your preferences, such as selected lawn care packages or microclimate region preferences.</li>
              <li><span className="font-semibold text-[#0D402B]">Analytics & Performance:</span> To aggregate anonymized traffic statistics and page load metrics so we can continuously optimize our site navigation.</li>
              <li><span className="font-semibold text-[#0D402B]">Security & Integrity:</span> To protect client communications, prevent form spam, and safeguard customer data.</li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">Consent and Cookie Settings</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>When you first visit our site, a cookie notification banner appears asking for your preferences.</li>
              <li>You can accept or decline non-essential analytics cookies at any time.</li>
              <li>You may also restrict or disable cookies entirely through your browser settings (e.g., Chrome, Safari, Firefox). Please note that disabling essential cookies may impact certain interactive booking features.</li>
            </ul>
          </div>

          {/* SECTION 5 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">Third-Party Analytics & Tools</h2>
            <p className="leading-relaxed">
              We may utilize trusted third-party analytics services (such as Google Analytics) to help us analyze how visitors navigate our landscaping portfolio and service pages. These third parties may set their own tracking cookies, governed by their respective privacy policies.
            </p>
          </div>

          {/* SECTION 6 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">Changes to this Cookie Policy</h2>
            <p className="leading-relaxed">
              We may periodically update this policy to reflect technological changes or updated legal requirements. Any modifications will be published here alongside an updated &ldquo;Effective Date.&rdquo;
            </p>
          </div>

          {/* SECTION 7 */}
          <div className="pt-6 border-t border-emerald-100">
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">Contact Privacy Team</h2>
            <div className="space-y-1.5 text-sm md:text-base">
              <p><span className="font-semibold text-[#0D402B]">Email:</span> privacy@franciscogardeners.com</p>
              <p><span className="font-semibold text-[#0D402B]">Phone:</span> +1 (415) 555-0198</p>
              <p><span className="font-semibold text-[#0D402B]">Address:</span> Francisco Gardeners, 1485 Market St, San Francisco, CA 94103</p>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;