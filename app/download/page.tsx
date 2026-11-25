'use client'
import React from "react";
import { useRouter } from "next/navigation";
// import Ribbon from "../../components/Ribbon";

export default function Download() {
  const router = useRouter();

  // Francisco Gardens downloadable resources & guides
  const files = [
    { title: "San Francisco Native Planting Guide", size: "1.45 MB", type: "PDF Document", date: "10/14/2026", link: "#" },
    { title: "Drought-Tolerant & Coastal Plant List", size: "620.10 KB", type: "PDF Document", date: "10/02/2026", link: "#" },
    { title: "Seasonal Pruning & Yard Care Calendar", size: "418.75 KB", type: "PDF Document", date: "09/21/2026", link: "#" },
    { title: "Landscaping & Yard Cleanup Service Checklist", size: "184.20 KB", type: "PDF Document", date: "09/10/2026", link: "#" },
    { title: "Custom Garden Design Request Form", size: "92.50 KB", type: "Word Document", date: "08/28/2026", link: "#" },
    { title: "Residential Maintenance Service Agreement", size: "215.40 KB", type: "PDF Document", date: "08/15/2026", link: "#" },
    { title: "Commercial & HOA Grounds Care Proposal Template", size: "156.80 KB", type: "Word Document", date: "08/04/2026", link: "#" },
    { title: "Drip Irrigation & Water Conservation Fact Sheet", size: "540.30 KB", type: "PDF Document", date: "07/19/2026", link: "#" },
    { title: "Organic Soil & Composting Starter Guide", size: "375.90 KB", type: "PDF Document", date: "07/08/2026", link: "#" },
    { title: "Pollinator & Hummingbird Garden Plan", size: "890.15 KB", type: "PDF Document", date: "06/25/2026", link: "#" },
    { title: "Raised Bed & Small-Space Patio Garden Guide", size: "512.00 KB", type: "PDF Document", date: "06/11/2026", link: "#" },
    { title: "Fruit Tree Care & Dormant Pruning Sheet", size: "284.60 KB", type: "PDF Document", date: "05/29/2026", link: "#" },
    { title: "Customer Feedback & Project Review Form", size: "110.25 KB", type: "PDF Document", date: "05/12/2026", link: "#" },
    { title: "Francisco Gardens Brand & Media Kit", size: "2.84 MB", type: "ZIP Archive", date: "04/30/2026", link: "#" }
  ];

  return (
    <div>
      {/* Header Ribbon */}
      {/* <Ribbon name="Downloads" showfont={false}/> */}

      <div className="px-3 md:px-0 py-5 sm:py-8 max-w-7xl mx-auto">
        <div className="px-5 max-w-7xl mx-auto">

          {/* Desktop Table */}
          <div className="hidden md:flex justify-center overflow-x-auto">
            <table className="w-full max-w-6xl bg-white rounded-xl shadow-sm border border-gray-50">
              <thead className="bg-gray-200 border-b border-gray-600">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Title</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Size</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Type</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Last Updated</th>
                  <th className="px-6 py-3 text-left font-semibold text-gray-700">Download</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "card" : "card2"}
                  >
                    <td className="px-6 py-2">{file.title}</td>
                    <td className="px-6 py-2">{file.size}</td>
                    <td className="px-6 py-2">{file.type}</td>
                    <td className="px-6 py-2">{file.date}</td>
                    <td className="px-6 py-2">
                      <button
                        onClick={() => router.push(file.link)}
                        className="border cursor-pointer border-[#074842] text-[#074842] px-4 py-1.5 rounded-md text-sm 
                           hover:bg-[#074842] hover:text-white transition"
                      >
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="card border border-gray-200 rounded-xl p-4 hover:shadow-sm transition"
              >
                <h2 className="text-lg font-semibold mb-2">{file.title}</h2>

                <div className="text-sm space-y-1 mb-3">
                  <p><span className="font-medium">Size:</span> {file.size}</p>
                  <p><span className="font-medium">Type:</span> {file.type}</p>
                  <p><span className="font-medium">Last Updated:</span> {file.date}</p>
                </div>

                <button
                  onClick={() => router.push(file.link)}
                  className="inline-block border border-[#074842] text-[#074842] bg-white px-4 py-2 rounded-sm text-sm  
               hover:bg-[#074842] hover:text-white transition"
                >
                  Download
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}