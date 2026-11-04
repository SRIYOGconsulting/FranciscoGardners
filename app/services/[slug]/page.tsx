import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const certificates = [
  { title: 'Lawn Care', img: '/certificates/1.jpg', description: 'Keep your lawn vibrant, lush, advanced and eco-friendly year-round with modern lawn care services in San Francisco.' },
  { title: 'Turf Installation', img: '/certificates/2.jpg', description: 'Transform yards with drought-resistant, low-maintenance turf installation designed for San Francisco microclimates.' },
  { title: 'Commercial Turf Installation', img: '/certificates/3.jpg', description: 'Upgrade corporate campuses, multi-family housing, and commercial properties across San Francisco with durable turf solutions.' },
  { title: 'Commercial Garden Management', img: '/certificates/4.jpg', description: 'Maintain and enhance commercial garden spaces and outdoors across the Bay Area with professional landscaping services.' },
  { title: 'Gutter Cleaning', img: '/certificates/5.jpg', description: 'Protect your San Francisco home from winter rain overflow, water damage, and roof runoff with safe gutter cleaning.' },
  { title: 'Garden Maintenance', img: '/certificates/6.jpg', description: 'Keep your residential or commercial garden pristine, healthy, and resilient across San Francisco seasons.' },
  { title: 'Soil Improvement & Fertilization', img: '/certificates/6.jpg', description: 'Enhance soil fertility, break down heavy urban clay, and boost natural moisture retention for San Francisco soil.' },
  { title: 'Irrigation Services', img: '/certificates/6.jpg', description: 'Keep your landscape thriving while conserving water through smart automated drip and sprinkler systems.' },
  { title: 'Pest, Disease & Weed Control', img: '/certificates/6.jpg', description: 'Protect your garden, lawn, and trees from common Bay Area pests and diseases with professional, non-toxic plant care.' },
  { title: 'Hardscaping', img: '/certificates/6.jpg', description: 'Design and build durable stone pathways, retaining walls, and outdoor patios tailored to San Francisco’s hilly terrain.' },
  { title: 'Landscape Design', img: '/certificates/7.jpg', description: 'Transform your outdoor space into a sustainable reality with custom 2D/3D master plans and California native planting layouts.' },
  { title: 'Tree Sales', img: '/certificates/8.jpg', description: 'Source healthy, hand-selected native California, fruit, and specimen trees matched to your property’s soil.' },
  { title: 'Plant Propagation', img: '/certificates/9.jpg', description: 'Multiply your favorite garden plants, rare ornamentals, and California natives using professional propagation techniques.' },
  { title: 'Consultation Services', img: '/certificates/10.jpg', description: 'Get expert on-site guidance on microclimate plant selection, soil remediation, and water conservation in San Francisco.' },
  { title: 'Tree Pruning & Removal', img: '/certificates/11.jpg', description: 'Maintain tree health, structural safety, and coastal wind resilience with certified arborist pruning and removal.' },
  { title: 'Landscape Lighting', img: '/certificates/12.jpg', description: 'Illuminate your garden pathways, architectural foliage, and outdoor living areas with low-voltage LED landscape lighting.' },
  { title: 'Temporary Gardening', img: '/certificates/13.jpg', description: 'Create high-impact short-term green sanctuaries, pop-up gardens, and botanical staging for San Francisco real estate sales.' },
  { title: 'Artificial Turf Installation', img: '/certificates/14.jpg', description: 'Enjoy a pristine, mud-free, evergreen lawn year-round with non-toxic artificial turf engineered for Bay Area yards.' },
  { title: 'Rooftop Gardening', img: '/certificates/15.jpg', description: 'Transform urban roofs, balconies, and elevated terraces into private, wind-resistant green oases across San Francisco.' },
  { title: 'Hedge & Shrub Trimming', img: '/certificates/16.jpg', description: 'Maintain privacy, clean lines, and plant health with expert precision hand-pruning and electric hedge trimming.' },
  { title: 'Fencing Installation & Repair', img: '/certificates/17.jpg', description: 'Enhance privacy and property security with custom wood, horizontal slat, and metal fencing built for coastal conditions.' },
  { title: 'Mulching Services', img: '/certificates/18.jpg', description: 'Conserve soil moisture, suppress weeds naturally, and insulate plant roots with organic bark and wood chip mulching.' },
  { title: 'Grass Seeding', img: '/certificates/19.jpg', description: 'Revitalize thin, patchy lawns or establish brand-new turf using microclimate-adapted seed blends and organic soil prep.' },
  { title: 'Sod Installation', img: '/certificates/20.jpg', description: 'Transform bare dirt or degraded yards into instant, lush green lawns with premium, eco-friendly sod varieties.' },
  { title: 'Yard Work & Cleanup', img: '/certificates/21.jpg', description: 'Restore order and beauty to overgrown yards with complete clearing, leaf removal, and eco-friendly green waste disposal.' },
  { title: 'Exterior Maintenance', img: '/certificates/22.jpg', description: 'Keep building facades, walkways, patios, and outdoor structures protected against San Francisco coastal weather wear.' },
  { title: 'Interior Plant Care', img: '/certificates/23.jpg', description: 'Keep indoor plants, office greenery, and lobby biophilic displays thriving, dust-free, and healthy year-round.' },
  { title: 'Landscape Construction', img: '/certificates/24.jpg', description: 'Build full-scale residential and commercial landscapes incorporating structural grading, masonry, and custom woodwork.' },
  { title: 'Fire Fuel Reduction', img: '/certificates/25.jpg', description: 'Protect your property from fire risks through strategic brush clearing, deadwood removal, and fire-resistant plant management.' },
  { title: 'Sustainable Landscaping', img: '/certificates/26.jpg', description: 'Create self-sustaining gardens using California native plants, permeable surfaces, and bio-retention systems.' },
  { title: 'Water Features & Pond Installation', img: '/certificates/27.jpg', description: 'Add peaceful ambient sound and natural beauty with custom recirculating waterfalls, koi ponds, and fountain features.' },
  { title: 'Retaining Wall Construction', img: '/certificates/28.jpg', description: 'Stabilize sloped yards, control soil erosion, and create terraced garden beds with engineered stone and timber retaining walls.' },
  { title: 'Patio & Flagstone Installation', img: '/certificates/29.jpg', description: 'Create elegant outdoor living areas and dining patios with natural flagstone, bluestone, and custom stone masonry.' },
  { title: 'Paver Installation', img: '/certificates/30.jpg', description: 'Build durable paver patios, driveways, and garden pathways using permeable interlocking concrete and stone pavers.' },
  { title: 'Brush Cleanup & Removal', img: '/certificates/31.jpg', description: 'Clear thick underbrush, overgrown weeds, dry brush, and invasive plants from residential slopes and property borders.' },
  { title: 'Sidewalk Installation', img: '/certificates/32.jpg', description: 'Design and build durable, code-compliant sidewalks, front entry pathways, and stone walkways tailored for urban SF homes.' },
  { title: 'Brickwork', img: '/certificates/33.jpg', description: 'Build and restore red clay brick pathways, garden walls, borders, and Victorian brick features with master craftsmanship.' },
  { title: 'Landscape Grading & Drainage', img: '/certificates/34.jpg', description: 'Protect your property from winter flooding and foundation damage with expert land grading and French drains.' },
  { title: 'Garden Restoration', img: '/certificates/35.jpg', description: 'Revive neglected, overgrown, or damaged gardens into lush, vibrant, low-maintenance outdoor spaces.' },
  { title: 'Garden Bed Installation & Maintenance', img: '/certificates/36.jpg', description: 'Design, build, and maintain raised garden beds, flower borders, and vegetable gardens engineered for Bay Area soils.' },
  { title: 'Residential Landscaping', img: '/certificates/37.jpg', description: 'Transform single-family backyards, Victorian courtyards, and urban gardens into private, eco-friendly living spaces.' },
  { title: 'Commercial Landscaping', img: '/certificates/38.jpg', description: 'Elevate corporate campuses, retail centers, HOA communities, and commercial facilities with professional grounds management.' },
  { title: 'Irrigation System Repair & Maintenance', img: '/certificates/39.jpg', description: 'Keep your automated watering system operating efficiently with expert valve repairs, leak fixing, and controller programming.' },
  { title: 'Outdoor Living Space Installation', img: '/certificates/40.jpg', description: 'Expand your home’s outdoor space with custom kitchens, fire pits, dining pergolas, and stone lounge seating.' },
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

  // Related services (filters current service out and picks 3 related ones)
  const relatedServices = certificates
    .filter((c) => createSlug(c.title) !== slug)
    .slice(0, 3);

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
        {/* Backdrop Image Container */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src={service.img}
            alt={service.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-4">
          {/* Breadcrumb Navigation */}
          <nav className="text-xs sm:text-sm font-medium text-emerald-200 space-x-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&gt;</span>
            <Link href="/services" className="hover:underline">Services</Link>
            <span>&gt;</span>
            <span className="text-white font-normal">{service.title}</span>
          </nav>

          {/* Title Heading with San Francisco Context */}
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {service.title} Services in San Francisco
          </h1>

          {/* Subtitle Description */}
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
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-900">
            Related Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((rel, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col"
              >
                {/* Related Service Image Placeholder */}
                <div className="relative w-full h-48 bg-gray-200">
                  <Image
                    src={rel.img}
                    alt={rel.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                  <h3 className="font-bold text-lg text-gray-900">
                    {rel.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                    {rel.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/services/${createSlug(rel.title)}`}
                      className="inline-block text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline"
                    >
                      Learn More &rarr;
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