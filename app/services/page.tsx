
'use client'
import { useEffect, useState } from 'react';
import Lightbox from '../../components/Lightbox';
import Image from 'next/image';
import Link from 'next/link';

export default function Certificate() {
    const [lightbox, setLightbox] = useState(false);
    const [index, setIndex] = useState<number | null>(0);

    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        
        if (lightbox) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = originalStyle;
        }

        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, [lightbox]);

    // Turn titles into clean slugs
    const createSlug = (title: string) => 
        title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

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

    return (
        <div className='relative'>
            <div className="px-6 sm:px-10 py-14 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                    {certificates.map((cert, idx) => {
                        const slug = createSlug(cert.title);
                        return (
                            <div
                                key={idx}
                                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden w-full flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Image Container */}
                                <div className="relative w-full h-56 bg-gray-200 overflow-hidden">
                                    <Image
                                        height={600}
                                        width={800}
                                        src={cert.img}
                                        alt={cert.title}
                                        onClick={() => { setLightbox(true); setIndex(idx); }}
                                        className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="p-6 sm:p-7 text-left flex flex-col flex-grow justify-between space-y-5">
                                    <div className="space-y-2">
                                        <h2 className="text-xl font-bold text-gray-900">
                                            {cert.title}
                                        </h2>
                                        <p className="text-sm text-gray-600 line-clamp-1">
                                            {cert.description || 'No description available.'}
                                        </p>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap items-center gap-3 pt-1">
                                        <Link
                                            href={`/services/${slug}`}
                                            className="inline-block px-4 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-md text-sm font-medium transition-colors"
                                        >
                                            Browse More
                                        </Link>
                                        <Link
                                            href={`/contact?service=${encodeURIComponent(cert.title)}`}
                                            className="inline-block px-4 py-2 border border-gray-300 hover:border-teal-900 text-gray-800 hover:text-teal-900 rounded-md text-sm font-medium transition-colors"
                                        >
                                            Book this Service
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {lightbox && (
                <Lightbox setLightbox={setLightbox} lightbox={lightbox} data={certificates} index={index} setIndex={setIndex} />
            )}
        </div>
    );
}