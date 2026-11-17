import Image from "next/image";
import Link from "next/link";

const PARTNER_COUNT = 14;
const partnerLogos = Array.from({ length: PARTNER_COUNT }, (_, i) => i + 1);

export default function Home() {
  return (
    <>
      <section className="w-full min-h-[550px] sm:min-h-[600px] flex flex-col sm:flex-row justify-between items-start sm:items-center relative overflow-hidden bg-white sm:bg-transparent">
        
        {/* Single Responsive Hero Image (Top banner on mobile, full background on sm+) */}
        <div className="relative w-full h-[280px] sm:absolute sm:inset-0 sm:h-full sm:-z-10">
          <Image
            src="/home/hero/4.jpg"
            alt="Professional Gardening Services in San Francisco"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          {/* Subtle dark overlay on desktop so white text pops */}
          <div className="hidden sm:block absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="max-w-[1200px] mx-auto w-full flex flex-col sm:flex-row justify-between items-start sm:items-center sm:px-6 py-8 sm:py-0">
          <div className="flex flex-col justify-start text-left z-10 w-full sm:w-1/2 px-6 sm:px-0">
            <h1 className="font-bold text-3xl md:text-5xl text-gray-900 sm:text-white mb-4 sm:mb-6">
              Francisco Gardeners
            </h1>

            <p className="text-[17px] sm:text-[18px] max-w-[600px] text-gray-700 sm:text-white leading-relaxed opacity-95">
              Professional Gardening Services in San Francisco
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-block border-2 border-[#0D5D59] py-2 px-6 rounded-md text-[#0D5D59] sm:text-gray-100 font-semibold hover:bg-[#0D5D59] hover:text-white transition duration-300 cursor-pointer"
              >
                About
              </Link>

              <Link
                href="/book"
                className="inline-block bg-[#0D5D59] sm:bg-transparent border-2 border-[#0D5D59] py-2 px-6 rounded-md text-white sm:text-gray-100 font-semibold hover:bg-[#094744] sm:hover:bg-[#0D5D59] hover:text-white transition duration-300 cursor-pointer"
              >
                Book a Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS — homepage only */}
      <section
        className="py-8 sm:py-10 bg-gray-50 overflow-hidden"
        aria-label="Partner organizations"
      >
        <div className="flex w-max animate-scroll gap-10 sm:gap-14 items-center">
          {[...partnerLogos, ...partnerLogos].map((n, i) => (
            <div
              key={`${n}-${i}`}
              className="relative h-10 sm:h-12 w-[120px] sm:w-[140px] shrink-0"
              aria-hidden={i >= PARTNER_COUNT}
            >
              <Image
                src={`/partners/${n}.png`}
                alt={i < PARTNER_COUNT ? `Partner ${n}` : ""}
                fill
                sizes="140px"
                className="object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}