'use client';

import React from "react";
// import Ribbon from "../../components/Ribbon";

export default function Location() {
  return (
    <div>
      {/* Header / Ribbon */}
      {/* <Ribbon name="Location" showfont={false}/> */}

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12">
        <div className="w-full h-96 md:h-[600px] rounded-sm overflow-hidden shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640204439!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp" 
            width="100%" 
            height="100%"              
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="San Francisco Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}