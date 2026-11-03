'use client'
import { useEffect, useState } from 'react';

import Lightbox from '../../components/Lightbox';
import Image from 'next/image';

export default function Certificate() {
    
    const [lightbox,setLightbox] = useState(false);
    const [index, setIndex] = useState<number | null>(0);

    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        
        if (lightbox) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = originalStyle;
        }

        // Cleanup on unmount or when lightbox changes
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, [lightbox]);
    const certificates = [
        { title: 'Lawn Care', img: '/certificates/1.jpg',description:'Keep your lawn vibrant, lush, advanced and eco-friendly year-round with modern lawn care services. ' },
        { title: 'Turf Removal', img: '/certificates/2.jpg',description:'Remove outdated, thirsty, or degraded lawns cleanly and sustainably to pave the way for modern landscapes' },
        { title: 'Commercial Turf Installation', img: '/certificates/3.jpg',description:'Upgrade corporate campuses, multi-family housing, and commercial properties with durable turf solutions.' },
        { title: 'Commercial Garden Management', img: '/certificates/4.jpg',description:'Maintain and enhance commercial garden spaces and outdoor with professional landscaping services.' },
        { title: 'Gutter Cleaning', img: '/certificates/5.jpg',description:'Protect your property from water damage, roof overflow, and garden erosion with thorough, safe gutter cleaning services.' },
        { title: 'Garden Maintenance', img: '/certificates/6.jpg',description:'Keep your residential or commercial garden vibrant, pristine, and structurally healthy across every season of the year.' },
        { title: 'Soil Improvement & Fertilization', img: '/certificates/6.jpg',description:'Enhance soil fertility, break down heavy urban clay, and boost natural moisture retention of soil' },
        { title: 'Irrigation Services', img: '/certificates/6.jpg',description:'Keep your landscape thriving while conserving water through smart automated systems and irrigation services' },
        { title: 'Pest, Disease & Weed Control', img: '/certificates/6.jpg',description:'Protect your garden, lawn, and trees from common Bay Area pests and diseases with professional, non-toxic, preventive plant care.' },
        { title: 'Hardscaping', img: '/certificates/6.jpg',description:'Design and build durable, aesthetically stunning outdoor structures, stone pathways, and retaining walls tailored to San Francisco’s hilly terrain and coastal climate.' },
        { title: 'Landscape Design', img: '/certificates/6.jpg',description:'Transform your outdoor vision into a sustainable, microclimate-tailored reality with custom 2D/3D master plans and native planting layouts.' },
        { title: 'Seasonal Gardening Services', img: '/certificates/6.jpg',description:'' },
        { title: 'Seasonal Gardening Services', img: '/certificates/6.jpg',description:'' },

    ];

    return (
        <div className='relative '>
            {/* Header */}
            {/* <Ribbon name="Certificates" showfont={false}/> */}
            <div className="px-5 py-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="card rounded-lg shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300"
                        >
                            <Image height={600} width={800}
                                src={cert.img}
                                alt={cert.title}
                               
                                onClick={()=>{setLightbox(true);setIndex(index)}}
                                className="w-full h-56 object-cover cursor-pointer"
                            />
                            <div className="px-4 py-5 card2">
                                <h2 className="text-lg font-medium ">{cert.title}</h2>
                                <p className="card2 text-sm mt-2">
                                   {cert.description || 'No description available.'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {lightbox && (
            <>
            <Lightbox setLightbox={setLightbox} lightbox={lightbox} data={certificates} index={index} setIndex={setIndex}/>
            </>
            )}
        </div>
    );
}
