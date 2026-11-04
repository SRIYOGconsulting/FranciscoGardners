import React from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation';
import Link from 'next/link';


 const certificates = [
        { title: 'Lawn Care', img: '/certificates/1.jpg', description: 'Keep your lawn vibrant, lush, advanced and eco-friendly year-round with modern lawn care services. ' },
        { title: 'Turf Removal', img: '/certificates/2.jpg', description: 'Remove outdated, thirsty, or degraded lawns cleanly and sustainably to pave the way for modern landscapes' },
        { title: 'Commercial Turf Installation', img: '/certificates/3.jpg', description: 'Upgrade corporate campuses, multi-family housing, and commercial properties with durable turf solutions.' },
        { title: 'Commercial Garden Management', img: '/certificates/4.jpg', description: 'Maintain and enhance commercial garden spaces and outdoor with professional landscaping services.' },
        { title: 'Gutter Cleaning', img: '/certificates/5.jpg', description: 'Protect your property from water damage, roof overflow, and garden erosion with thorough, safe gutter cleaning services.' },
        { title: 'Garden Maintenance', img: '/certificates/6.jpg', description: 'Keep your residential or commercial garden vibrant, pristine, and structurally healthy across every season of the year.' },
        { title: 'Soil Improvement & Fertilization', img: '/certificates/6.jpg', description: 'Enhance soil fertility, break down heavy urban clay, and boost natural moisture retention of soil' },
        { title: 'Irrigation Services', img: '/certificates/6.jpg', description: 'Keep your landscape thriving while conserving water through smart automated systems and irrigation services' },
        { title: 'Pest, Disease & Weed Control', img: '/certificates/6.jpg', description: 'Protect your garden, lawn, and trees from common Bay Area pests and diseases with professional, non-toxic, preventive plant care.' },
        { title: 'Hardscaping', img: '/certificates/6.jpg', description: 'Design and build durable, aesthetically stunning outdoor structures, stone pathways, and retaining walls tailored to San Francisco’s hilly terrain and coastal climate.' },
        { title: 'Landscape Design', img: '/certificates/6.jpg', description: 'Transform your outdoor vision into a sustainable, microclimate-tailored reality with custom 2D/3D master plans and native planting layouts.' },
        { title: 'Tree Sales', img: '/certificates/6.jpg', description: 'Source healthy, hand-selected native California, fruit, and specimen trees matched to your property’s soil and microclimate.' },
        { title: 'Plant Propagation', img: '/certificates/6.jpg', description: 'Multiply your favorite garden plants, rare ornamentals, and California natives using chemical-free, professional propagation techniques.' },
        { title: 'Consultation Services', img: '/certificates/6.jpg', description: 'Get expert, on-site guidance on microclimate plant selection, soil remediation, water conservation, and landscape design feasibility.' },
        { title: 'Tree Pruning & Removal', img: '/certificates/6.jpg', description: 'Maintain tree health, structural safety, and coastal wind resilience with certified arborist pruning and low-impact tree removal.' },
        { title: 'Landscape Lighting', img: '/certificates/6.jpg', description: 'Illuminate your garden pathways, architectural foliage, and outdoor living areas with energy-efficient, low-voltage LED landscape lighting.' },
        { title: 'Temporary Gardening', img: '/certificates/6.jpg', description: 'Create high-impact, short-term green sanctuaries, pop-up gardens, and botanical staging for real estate sales, special events, and urban spaces.' },
        { title: 'Artificial Turf Installation', img: '/certificates/6.jpg', description: 'Enjoy a pristine, mud-free, evergreen lawn year-round with premium, non-toxic artificial turf designed for Bay Area yards.' },
        { title: 'Rooftop Gardening', img: '/certificates/6.jpg', description: 'Transform urban roofs, balconies, and elevated terraces into private, wind-resistant green oases across San Francisco.' },
        { title: 'Hedge & Shrub Trimming', img: '/certificates/6.jpg', description: 'Maintain privacy, clean lines, and plant health with expert precision hand-pruning and electric hedge trimming.' },
        { title: 'Fencing Installation & Repair', img: '/certificates/6.jpg', description: 'Enhance privacy, property security, and garden aesthetics with custom, durable wood, horizontal slat, and metal fencing built for coastal conditions.' },
        { title: 'Mulching Services', img: '/certificates/6.jpg', description: 'Conserve soil moisture, suppress weeds naturally, and insulate plant roots with high-grade organic bark and wood chip mulching.' },
        { title: 'Grass Seeding', img: '/certificates/6.jpg', description: 'Revitalize thin, patchy lawns or establish brand new turf using microclimate-adapted seed blends and organic soil prep.' },
        { title: 'Sod Installation', img: '/certificates/6.jpg', description: 'Transform bare dirt or degraded yards into instant, lush green lawns with premium, eco-friendly sod varieties.' },
        { title: 'Yard Work & Cleanup', img: '/certificates/6.jpg', description: 'Restore order and beauty to overgrown, messy yards with complete property clearing, leaf removal, and eco-friendly green waste disposal.' },
        { title: 'Exterior Maintenance', img: '/certificates/6.jpg', description: 'Keep building facades, walkways, patios, and outdoor structures immaculate, safe, and protected against coastal weather wear.' },
        { title: 'Interior Plant Care', img: '/certificates/6.jpg', description: 'Keep indoor plants, office greenery, and lobby biophilic displays thriving, dust-free, and healthy year-round.' },
        { title: 'Landscape Construction', img: '/certificates/6.jpg', description: 'Build full-scale residential and commercial landscapes incorporating structural grading, masonry, custom woodwork, and green infrastructure.' },
        { title: 'Fire Fuel Reduction', img: '/certificates/6.jpg', description: 'Protect your property from wildfire risks through strategic brush clearing, deadwood removal, and fire-resistant plant management.' },
        { title: 'Sustainable Landscaping', img: '/certificates/6.jpg', description: 'Create breathtaking, environmentally self-sustaining gardens using California native plants, permeable surfaces, and bio-retention systems.' },
        { title: 'Water Features & Pond Installation', img: '/certificates/6.jpg', description: 'Add peaceful ambient sound, natural beauty, and urban wildlife habitat with custom recirculating waterfalls, koi ponds, and fountain features.' },
        { title: 'Retaining Wall Construction', img: '/certificates/6.jpg', description: 'Stabilize sloped yards, control soil erosion, and create usable terraced garden beds with engineered stone, concrete block, and timber retaining walls.' },
        { title: 'Patio & Flagstone Installation', img: '/certificates/6.jpg', description: 'Create elegant, outdoor living areas and dining patios with hand-cut natural flagstone, bluestone, and custom stone masonry.' },
        { title: 'Paver Installation', img: '/certificates/6.jpg', description: 'Build durable, crack-resistant paver patios, driveways, and garden pathways using permeable interlocking concrete and stone pavers.' },
        { title: 'Brush Cleanup & Removal', img: '/certificates/6.jpg', description: 'Clear thick underbrush, overgrown weeds, dry brush, and invasive plants from residential slopes, vacant lots, and property borders.' },
        { title: 'Sidewalk Installation', img: '/certificates/6.jpg', description: 'Design and build durable, code-compliant sidewalks, front entry pathways, and stone walkways tailored for urban San Francisco homes.' },
        { title: 'Brickwork', img: '/certificates/6.jpg', description: 'Build and restore red clay brick pathways, garden walls, borders, and Victorian brick features with master masonry craftsmanship.' },
        { title: 'Landscape Grading & Drainage', img: '/certificates/6.jpg', description: 'Protect your property from winter flooding, water pooling, and foundation damage with expert land grading, French drains, and bio-retention systems.' },
        { title: 'Garden Restoration', img: '/certificates/6.jpg', description: 'Revive neglected, overgrown, or damaged gardens into lush, vibrant, low-maintenance outdoor spaces.' },
        { title: 'Garden Bed Installation & Maintenance', img: '/certificates/6.jpg', description: 'Design, build, and maintain raised garden beds, flower borders, and vegetable gardens engineered for Bay Area urban soils.' },
        { title: 'Residential Landscaping', img: '/certificates/6.jpg', description: 'Transform single-family backyards, Victorian courtyards, and urban gardens into private, eco-friendly living spaces.' },
        { title: 'Commercial Landscaping', img: '/certificates/6.jpg', description: 'Elevate corporate campuses, retail centers, HOA communities, and commercial facilities with professional grounds management.' },
        { title: 'Irrigation System Repair & Maintenance', img: '/certificates/6.jpg', description: 'Keep your automated watering system operating at peak efficiency with expert valve repairs, leak fixing, and controller programming.' },
        { title: 'Outdoor Living Space Installation', img: '/certificates/6.jpg', description: 'Expand your homes indoor footprint into custom outdoor kitchens, built-in fire pits, dining pergolas, and stone lounge seating.' },
    ];


    const createSlug = (title: string) => 
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    interface PageProps {                              //blue print
    params: Promise<{ slug: string }>;
}
export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;

    const service = certificates.find((cert) => createSlug(cert.title) === slug);

    if (!service) {
        notFound();
    }
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-5">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/services" 
                    className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800 mb-6 transition-colors"
                >
                    &larr; Back to all services
                </Link>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="relative w-full h-72 sm:h-96">
                        <Image 
                            src={service.img} 
                            alt={service.title} 
                            fill 
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-10">
                            <h1 className="text-3xl sm:text-4xl font-bold text-white">
                                {service.title}
                            </h1>
                        </div>
                    </div>

                    <div className="p-6 sm:p-10 space-y-8">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        <div className="border-t border-gray-100 pt-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included in This Service</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                    <h4 className="font-medium text-green-900">Professional Assessment</h4>
                                    <p className="text-sm text-green-700 mt-1">Detailed evaluation tailored to your property requirements.</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                    <h4 className="font-medium text-green-900">Eco-Friendly Execution</h4>
                                    <p className="text-sm text-green-700 mt-1">Sustainable practices designed for long-term health.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}