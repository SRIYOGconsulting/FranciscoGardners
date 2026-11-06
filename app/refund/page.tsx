'use client';

import React from "react";

export default function RefundPolicy() {
  return (
    <div className="w-full min-h-screen bg-white py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
            Terms & Guarantees
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0D402B] tracking-tight mt-4">
            Refund & Cancellation Policy
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
            At Francisco Gardeners, customer satisfaction and quality craftsmanship are our top priorities. Here is how we handle service adjustments, cancellations, and refunds.
          </p>
        </div>

        {/* CONTENT CARD */}
        <section className="bg-white border border-emerald-100 rounded-3xl p-8 md:p-12 shadow-sm space-y-8 text-gray-700">
          
          <p className="leading-relaxed text-base md:text-lg">
            At <span className="font-bold text-[#0D402B]">Francisco Gardeners</span>, we are committed to delivering top-tier landscaping, lawn care, tree arborist, and irrigation services. This Refund & Cancellation Policy outlines the guidelines regarding service guarantee, project deposits, and refund requests.
          </p>

          {/* SECTION 1 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">Service Satisfaction & Rework</h2>
            <p className="leading-relaxed mb-3">
              Because landscaping and garden maintenance involve manual labor and living materials, standard service fees are generally non-refundable once work has been completed. However, we stand behind our quality:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>If you are dissatisfied with any aspect of a scheduled service (e.g., lawn mowing, hedge trimming, weed removal), notify us within <span className="font-semibold text-[#0D402B]">48 hours</span>.</li>
              <li>We will send a team back to inspect and re-service the area at no additional cost to meet your expectations.</li>
              <li>If a service was billed but not performed due to crew error, a full refund or credit for that specific item will be issued.</li>
            </ul>
          </div>

          {/* SECTION 2 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">Project Deposits & Cancellations</h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><span className="font-semibold text-[#0D402B]">Recurring Maintenance:</span> You may cancel or reschedule a recurring maintenance visit free of charge up to 24 hours prior to your scheduled appointment.</li>
              <li><span className="font-semibold text-[#0D402B]">Custom Landscaping & Hardscaping Projects:</span> Deposits for custom design and installation are fully refundable up to 7 business days before the project start date. Cancellations made within 7 days may forfeit material order costs.</li>
              <li><span className="font-semibold text-[#0D402B]">Weather Rescheduling:</span> In the event of heavy rain or severe storms in San Francisco, services will be safely rescheduled at no penalty to you.</li>
            </ul>
          </div>

          {/* SECTION 3 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">Non-Refundable Circumstances</h2>
            <p className="leading-relaxed mb-3">
              Refunds will not be issued in the following cases:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Damage to plants, lawns, or irrigation systems caused by severe external weather events, client neglect, or unapproved third-party alterations after project sign-off.</li>
              <li>Cancellations requested after a field crew has already arrived on-site for a confirmed appointment.</li>
              <li>Special-order plants, custom stone, or hardscaping materials already delivered to the site.</li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div>
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">How to Request a Refund or Credit</h2>
            <p className="leading-relaxed mb-3">
              To request a refund, project adjustment, or service credit, please reach out to our client care team within 7 days of the billing date. Please include your property address, invoice/order number, and a description or photos of the issue.
            </p>
            <p className="leading-relaxed">
              Reviewed requests will receive a response within <span className="font-semibold text-[#0D402B]">2 business days</span>. Approved refunds will be credited back to your original payment method within 5–7 business days.
            </p>
          </div>

          {/* SECTION 5 */}
          <div className="pt-6 border-t border-emerald-100">
            <h2 className="text-2xl font-bold text-[#0D402B] mb-3">Contact Client Care</h2>
            <div className="space-y-1.5 text-sm md:text-base">
              <p><span className="font-semibold text-[#0D402B]">Email:</span> support@franciscogardeners.com</p>
              <p><span className="font-semibold text-[#0D402B]">Phone:</span> +1 (415) 555-0198</p>
              <p><span className="font-semibold text-[#0D402B]">Office:</span> 1485 Market St, San Francisco, CA 94103</p>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}