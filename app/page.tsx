import Image from "next/image";
import Link from "next/link";

const featuredServices = [
  {
    title: "Lawn Care",
    img: "/services/1.jpg",
    description:
      "Professional lawn maintenance including mowing, edging, fertilizing, and regular upkeep to keep your grass healthy and green year-round.",
  },
  {
    title: "Garden Maintenance",
    img: "/services/6.jpg",
    description:
      "Comprehensive garden care including weeding, pruning, mulching, and seasonal maintenance to keep your garden flourishing throughout the year.",
  },
  {
    title: "Landscape Design",
    img: "/services/11.jpg",
    description:
      "Transform your outdoor vision into a sustainable, microclimate-tailored reality with custom 2D/3D master plans and native planting layouts.",
  },
  {
    title: "Irrigation Services",
    img: "/services/8.jpg",
    description:
      "Keep your landscape thriving while conserving water through smart automated systems and irrigation services.",
  },
  {
    title: "Tree Pruning & Removal",
    img: "/services/15.jpg",
    description:
      "Maintain tree health, structural safety, and coastal wind resilience with certified arborist pruning and low-impact tree removal.",
  },
  {
    title: "Yard Work & Cleanup",
    img: "/services/25.jpg",
    description:
      "Restore order and beauty to overgrown, messy yards with complete property clearing, leaf removal, and eco-friendly green waste disposal.",
  },
  {
    title: "Hardscaping",
    img: "/services/10.jpg",
    description:
      "Design and build durable, aesthetically stunning outdoor structures, stone pathways, and retaining walls tailored to San Francisco’s hilly terrain and coastal climate.",
  },
  {
    title: "Hedge & Shrub Trimming",
    img: "/services/20.jpg",
    description:
      "Maintain privacy, clean lines, and plant health with expert precision hand-pruning and electric hedge trimming.",
  },
  {
    title: "Sustainable Landscaping",
    img: "/services/30.jpg",
    description:
      "Create breathtaking, environmentally self-sustaining gardens using California native plants, permeable surfaces, and bio-retention systems.",
  },
];

const createSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const neighborhoods = [
  "Noe Valley",
  "Pacific Heights",
  "Inner Sunset",
  "Richmond District",
  "Mission Dolores",
  "Bernal Heights",
  "Marina & Cow Hollow",
  "Potrero Hill",
  "Cole Valley",
  "Glen Park",
];

const recentWork = [
  {
    title: "Backyard Lawn & Flagstone Reset",
    area: "Noe Valley",
    image: "/gallery/1.jpg",
    summary:
      "Replaced patchy turf with fescue sod, decomposed granite borders, and low-voltage path lights.",
  },
  {
    title: "Fog-Tolerant Front Entry Planting",
    area: "Inner Sunset",
    image: "/gallery/2.jpg",
    summary:
      "Layered ferns, manzanita, and coastal sage with 3 inches of organic bark mulch.",
  },
  {
    title: "Multi-Story Privacy Hedge & Cleanup",
    area: "Pacific Heights",
    image: "/gallery/3.jpg",
    summary:
      "Shaped 14-foot pittosporum hedges, cleared fallen debris, and tuned drip emitters.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="w-full min-h-[550px] sm:min-h-[600px] flex flex-col sm:flex-row justify-between items-start sm:items-center relative overflow-hidden bg-white sm:bg-transparent">
        <div className="relative w-full h-[280px] sm:absolute sm:inset-0 sm:h-full sm:-z-10">
          <Image
            src="/home/hero/4.jpg"
            alt="Professional Gardening Services in San Francisco"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="hidden sm:block absolute inset-0 bg-black/40" />
        </div>

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

      {/* QUICK CREDENTIALS BAR */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-[#0D402B]">7+ Years</p>
            <p className="text-sm text-gray-600 mt-1">Maintaining SF yards &amp; courtyards</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-[#0D402B]">50+ Yards</p>
            <p className="text-sm text-gray-600 mt-1">Residential, HOA &amp; storefront properties</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-[#0D402B]">100% Organic</p>
            <p className="text-sm text-gray-600 mt-1">Pet-safe soil care &amp; green-waste composting</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-[#0D402B]">48-Hr Quotes</p>
            <p className="text-sm text-gray-600 mt-1">Clear flat-rate estimates after walkthrough</p>
          </div>
        </div>
      </section>

      {/* SERVICES (Pulled from ServicePage catalog & links) */}
      <section className="py-16 sm:py-20 bg-[#F7FAF8]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0D5D59]">
                Our Services
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0D402B] mt-2">
                Gardening &amp; Landscaping in San Francisco
              </h2>
            </div>
            <Link
              href="/services"
              className="text-[#0D5D59] font-semibold hover:underline text-sm sm:text-base"
            >
              View all 46 services &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative w-full h-52 bg-gray-200">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <Link
                      href={`/services/${createSlug(service.title)}`}
                      className="inline-block px-4 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-md text-sm font-medium transition-colors"
                    >
                      Browse More
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-block px-4 py-2 border border-gray-300 hover:border-teal-900 text-gray-800 hover:text-teal-900 rounded-md text-sm font-medium transition-colors"
                    >
                      Book this Service
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0D5D59]">
                Recent Work
              </p>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#0D402B] mt-2">
                Around the Neighborhoods
              </h2>
            </div>
            <Link
              href="/gallery"
              className="text-[#0D5D59] font-semibold hover:underline text-sm sm:text-base"
            >
              Browse all 30 projects &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentWork.map((project) => (
              <div
                key={project.title}
                className="rounded-xl overflow-hidden border border-gray-200 bg-white"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={project.image}
                    alt={`${project.title} in ${project.area}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#0D5D59]">
                    {project.area}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS + NEIGHBORHOODS */}
      <section className="py-16 sm:py-20 bg-[#F7FAF8] border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: 3-Step Process */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0D5D59]">
                How We Work
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0D402B] mt-2">
                Straightforward Scheduling, No Surprises
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#0D402B] text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">15-Minute Yard Walkthrough</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    We visit your property, check sun exposure, irrigation lines, and access, and listen to what you want fixed or maintained.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#0D402B] text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Written Flat-Rate Estimate</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    You receive an itemized quote within 48 hours—including plant materials, hauling fees, and recurring maintenance rates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#0D402B] text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Same Crew, Same Day Each Visit</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    Our uniformed crew arrives on your scheduled day, hauls all green waste to SF compost facilities, and texts a photo summary when done.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Neighborhoods & Local Review */}
          <div className="lg:col-span-5 bg-white border border-gray-200 rounded-xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#0D402B]">
                San Francisco Service Areas
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                From foggy Sunset backyards to sunny Potrero slopes, we match plants and watering schedules to your microclimate.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {neighborhoods.map((hood) => (
                  <span
                    key={hood}
                    className="text-xs font-medium bg-gray-100 text-gray-800 px-3 py-1.5 rounded-md"
                  >
                    {hood}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <blockquote className="text-sm text-gray-700 italic leading-relaxed">
                &ldquo;Francisco&rsquo;s crew cleared five years of overgrown ivy in one afternoon and set up a simple drip line for our hydrangeas. They show up every second Tuesday like clockwork.&rdquo;
              </blockquote>
              <p className="text-xs font-semibold text-gray-900 mt-3">
                — Claire M., Homeowner in Bernal Heights
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}