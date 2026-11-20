import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const certificates = [
  { title: 'Lawn Care', img: '/services/1.jpg', description: 'Professional lawn maintenance including mowing, edging, fertilizing, and regular upkeep to keep your grass healthy and green year-round.' },
  { title: 'Turf Removal', img: '/services/2.jpg', description: 'Remove outdated, thirsty, or degraded lawns cleanly and sustainably to pave the way for modern landscapes.' },
  { title: 'Commercial Turf Installation', img: '/services/3.jpg', description: 'Upgrade corporate campuses, multi-family housing, and commercial properties with durable turf solutions.' },
  { title: 'Commercial Garden Management', img: '/services/4.jpg', description: 'Maintain and enhance commercial garden spaces and outdoor with professional landscaping services.' },
  { title: 'Gutter Cleaning', img: '/services/5.jpg', description: 'Protect your property from water damage, roof overflow, and garden erosion with thorough, safe gutter cleaning services.' },
  { title: 'Garden Maintenance', img: '/services/6.jpg', description: 'Comprehensive garden care including weeding, pruning, mulching, and seasonal maintenance to keep your garden flourishing throughout the year.' },
  { title: 'Soil Improvement & Fertilization', img: '/services/7.jpg', description: 'Enhance soil fertility, break down heavy urban clay, and boost natural moisture retention of soil.' },
  { title: 'Irrigation Services', img: '/services/8.jpg', description: 'Keep your landscape thriving while conserving water through smart automated systems and irrigation services.' },
  { title: 'Pest, Disease & Weed Control', img: '/services/9.jpg', description: 'Protect your garden, lawn, and trees from common Bay Area pests and diseases with professional, non-toxic, preventive plant care.' },
  { title: 'Hardscaping', img: '/services/10.jpg', description: 'Design and build durable, aesthetically stunning outdoor structures, stone pathways, and retaining walls tailored to San Francisco’s hilly terrain and coastal climate.' },
  { title: 'Landscape Design', img: '/services/11.jpg', description: 'Transform your outdoor vision into a sustainable, microclimate-tailored reality with custom 2D/3D master plans and native planting layouts.' },
  { title: 'Tree Sales', img: '/services/12.jpg', description: 'Source healthy, hand-selected native California, fruit, and specimen trees matched to your property’s soil and microclimate.' },
  { title: 'Plant Propagation', img: '/services/13.jpg', description: 'Multiply your favorite garden plants, rare ornamentals, and California natives using chemical-free, professional propagation techniques.' },
  { title: 'Consultation Services', img: '/services/14.jpg', description: 'Get expert, on-site guidance on microclimate plant selection, soil remediation, water conservation, and landscape design feasibility.' },
  { title: 'Tree Pruning & Removal', img: '/services/15.jpg', description: 'Maintain tree health, structural safety, and coastal wind resilience with certified arborist pruning and low-impact tree removal.' },
  { title: 'Landscape Lighting', img: '/services/16.jpg', description: 'Illuminate your garden pathways, architectural foliage, and outdoor living areas with energy-efficient, low-voltage LED landscape lighting.' },
  { title: 'Temporary Gardening', img: '/services/17.jpg', description: 'Create high-impact, short-term green sanctuaries, pop-up gardens, and botanical staging for real estate sales, special events, and urban spaces.' },
  { title: 'Artificial Turf Installation', img: '/services/18.jpg', description: 'Enjoy a pristine, mud-free, evergreen lawn year-round with premium, non-toxic artificial turf designed for Bay Area yards.' },
  { title: 'Rooftop Gardening', img: '/services/19.jpg', description: 'Transform urban roofs, balconies, and elevated terraces into private, wind-resistant green oases across San Francisco.' },
  { title: 'Hedge & Shrub Trimming', img: '/services/20.jpg', description: 'Maintain privacy, clean lines, and plant health with expert precision hand-pruning and electric hedge trimming.' },
  { title: 'Fencing Installation & Repair', img: '/services/21.jpg', description: 'Enhance privacy, property security, and garden aesthetics with custom, durable wood, horizontal slat, and metal fencing built for coastal conditions.' },
  { title: 'Mulching Services', img: '/services/22.jpg', description: 'Conserve soil moisture, suppress weeds naturally, and insulate plant roots with high-grade organic bark and wood chip mulching.' },
  { title: 'Grass Seeding', img: '/services/23.jpg', description: 'Revitalize thin, patchy lawns or establish brand new turf using microclimate-adapted seed blends and organic soil prep.' },
  { title: 'Sod Installation', img: '/services/24.jpg', description: 'Transform bare dirt or degraded yards into instant, lush green lawns with premium, eco-friendly sod varieties.' },
  { title: 'Yard Work & Cleanup', img: '/services/25.jpg', description: 'Restore order and beauty to overgrown, messy yards with complete property clearing, leaf removal, and eco-friendly green waste disposal.' },
  { title: 'Exterior Maintenance', img: '/services/26.jpg', description: 'Keep building facades, walkways, patios, and outdoor structures immaculate, safe, and protected against coastal weather wear.' },
  { title: 'Interior Plant Care', img: '/services/27.jpg', description: 'Keep indoor plants, office greenery, and lobby biophilic displays thriving, dust-free, and healthy year-round.' },
  { title: 'Landscape Construction', img: '/services/28.jpg', description: 'Build full-scale residential and commercial landscapes incorporating structural grading, masonry, custom woodwork, and green infrastructure.' },
  { title: 'Fire Fuel Reduction', img: '/services/29.jpg', description: 'Protect your property from wildfire risks through strategic brush clearing, deadwood removal, and fire-resistant plant management.' },
  { title: 'Sustainable Landscaping', img: '/services/30.jpg', description: 'Create breathtaking, environmentally self-sustaining gardens using California native plants, permeable surfaces, and bio-retention systems.' },
  { title: 'Water Features & Pond Installation', img: '/services/31.jpg', description: 'Add peaceful ambient sound, natural beauty, and urban wildlife habitat with custom recirculating waterfalls, koi ponds, and fountain features.' },
  { title: 'Retaining Wall Construction', img: '/services/32.jpg', description: 'Stabilize sloped yards, control soil erosion, and create usable terraced garden beds with engineered stone, concrete block, and timber retaining walls.' },
  { title: 'Patio & Flagstone Installation', img: '/services/33.jpg', description: 'Create elegant, outdoor living areas and dining patios with hand-cut natural flagstone, bluestone, and custom stone masonry.' },
  { title: 'Paver Installation', img: '/services/34.jpg', description: 'Build durable, crack-resistant paver patios, driveways, and garden pathways using permeable interlocking concrete and stone pavers.' },
  { title: 'Brush Cleanup & Removal', img: '/services/35.jpg', description: 'Clear thick underbrush, overgrown weeds, dry brush, and invasive plants from residential slopes, vacant lots, and property borders.' },
  { title: 'Sidewalk Installation', img: '/services/36.jpg', description: 'Design and build durable, code-compliant sidewalks, front entry pathways, and stone walkways tailored for urban San Francisco homes.' },
  { title: 'Brickwork', img: '/services/37.jpg', description: 'Build and restore red clay brick pathways, garden walls, borders, and Victorian brick features with master masonry craftsmanship.' },
  { title: 'Landscape Grading & Drainage', img: '/services/38.jpg', description: 'Protect your property from winter flooding, water pooling, and foundation damage with expert land grading, French drains, and bio-retention systems.' },
  { title: 'Garden Restoration', img: '/services/39.jpg', description: 'Revive neglected, overgrown, or damaged gardens into lush, vibrant, low-maintenance outdoor spaces.' },
  { title: 'Garden Bed Installation & Maintenance', img: '/services/43.jpg', description: 'Design, build, and maintain raised garden beds, flower borders, and vegetable gardens engineered for Bay Area urban soils.' },
  { title: 'Residential Landscaping', img: '/services/41.jpg', description: 'Transform single-family backyards, Victorian courtyards, and urban gardens into private, eco-friendly living spaces.' },
  { title: 'Commercial Landscaping', img: '/services/8.jpg', description: 'Elevate corporate campuses, retail centers, HOA communities, and commercial facilities with professional grounds management.' },
  { title: 'Irrigation System Repair & Maintenance', img: '/services/42.jpg', description: 'Keep your automated watering system operating at peak efficiency with expert valve repairs, leak fixing, and controller programming.' },
  { title: 'Outdoor Living Space Installation', img: '/services/44.jpg', description: 'Expand your homes indoor footprint into custom outdoor kitchens, built-in fire pits, dining pergolas, and stone lounge seating.' },
  { title: 'Tree Lighting', img: '/services/45.jpg', description: 'Highlight tree canopies, trunks, and branches with weather-resistant warm LED lighting for evening curb appeal, ambiance, and seasonal displays.' },
  { title: 'Plant Rental Service', img: '/services/46.jpg', description: 'Rent lush potted plants, specimen trees, and greenery for offices, events, photoshoots, and staging with flexible delivery and care options.' },
];

const createSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = certificates.find((cert) => createSlug(cert.title) === slug);

  if (!service) {
    notFound();
  }

  // Fewer related services (2 cards) for a cleaner, more spacious layout
  const relatedServices = certificates
    .filter((c) => createSlug(c.title) !== slug)
    .slice(0, 2);

  const faqs = [
    {
      q: `What is ${service.title.toLowerCase()} and why is it important in San Francisco?`,
      a: `${service.title} keeps San Francisco properties vibrant, water-efficient, and structurally sound year-round. Professional installation and care prevent soil erosion on sloped yards and ensure adaptability to coastal weather conditions.`
    },
    {
      q: `Do Francisco Gardeners provide ${service.title.toLowerCase()} for all property types in San Francisco?`,
      a: 'Yes, we work on Victorian courtyards, hillside residential yards, commercial facilities, HOA communities, and rooftop terraces across San Francisco.'
    },
    {
      q: `What is included in your ${service.title.toLowerCase()} service?`,
      a: service.description
    },
    {
      q: 'Do you offer drought-tolerant and eco-friendly solutions in San Francisco?',
      a: 'Yes! We focus on water conservation, California native plants, organic soil care, and eco-friendly synthetic or natural grass options tailored to California climate guidelines.'
    },
    {
      q: 'Can I get a custom design or project quote?',
      a: 'Absolutely. Francisco Gardeners provides custom site evaluations and tailored plans based on your property layout, budget, and local microclimate conditions.'
    }
  ];

  return (
    <main className="w-full bg-white text-gray-800">
      {/* 1. HERO SECTION WITH IMAGE PLACEHOLDER BACKDROP */}
      <section className="relative w-full h-[400px] sm:h-[480px] bg-emerald-950/80 flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src={service.img}
            alt={service.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-4">
          <nav className="text-xs sm:text-sm font-medium text-emerald-200 space-x-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&gt;</span>
            <Link href="/services" className="hover:underline">Services</Link>
            <span>&gt;</span>
            <span className="text-white font-normal">{service.title}</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {service.title} Services in San Francisco
          </h1>

          <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* 2. EXPERT DESCRIPTION SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-900">
          Expert {service.title} in San Francisco
        </h2>

        <p className="text-gray-600 text-base leading-relaxed">
          Francisco Gardeners delivers high-quality {service.title.toLowerCase()} services to maintain beautiful, sustainable, and eco-conscious outdoor spaces across San Francisco. Our team manages everything from initial site analysis to flawless installation and ongoing care.
        </p>

        <p className="text-gray-600 text-base leading-relaxed">
          We use modern equipment, eco-friendly materials, and soil-specific techniques designed to withstand San Francisco coastal winds, fog, and microclimate variations.
        </p>

        <p className="text-gray-600 text-base leading-relaxed">
          Our tailored solutions keep your yard looking vibrant year-round while conserving water and complementing your home’s architecture.
        </p>
      </section>

      {/* 3. RELATED SERVICES SECTION */}
      <section className="bg-gray-50 py-20 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-900 text-center">
            Related Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
            {relatedServices.map((rel, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col"
              >
                <div className="relative w-full h-56 bg-gray-200">
                  <Image
                    src={rel.img}
                    alt={rel.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl text-gray-900">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-1">
                      {rel.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <Link
                      href={`/services/${createSlug(rel.title)}`}
                      className="inline-block px-4 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-md text-sm font-medium transition-colors"
                    >
                      Browse More
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(rel.title)}`}
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

      {/* 4. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-900 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-emerald-100/60 rounded-xl border border-emerald-200/60 overflow-hidden transition-all duration-200"
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-teal-950 list-none select-none">
                <span>{idx + 1}. {faq.q}</span>
                <span className="ml-4 transform group-open:rotate-180 transition-transform text-teal-700">
                  &#9660;
                </span>
              </summary>
              <div className="px-5 pb-5 text-sm text-teal-900 border-t border-emerald-200/40 pt-3">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}