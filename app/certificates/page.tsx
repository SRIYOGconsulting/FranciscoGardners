'use client';
import { useEffect, useState } from 'react';

import Lightbox from '../../components/Lightbox';
import Image from 'next/image';

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

    const certificates = [
        {
            title: 'San Francisco Business Registration',
            description: 'Licensed landscaping and garden care operator registered in San Francisco, California.',
            img: '/certificates/1.jpg',
        },
        {
            title: 'California Certified Nursery & Horticulturist',
            description: 'Accredited plant health, soil management, and Bay Area horticulture credential.',
            img: '/certificates/2.jpg',
        },
        {
            title: 'Water-Wise & Drip Irrigation Specialist',
            description: 'Certified in drought-tolerant landscape design and high-efficiency irrigation systems.',
            img: '/certificates/3.jpg',
        },
        {
            title: 'ISA Arborist & Pruning Standards',
            description: 'Trained in safe tree pruning, structural care, and urban canopy preservation.',
            img: '/certificates/4.jpg',
        },
        {
            title: 'Organic Pest & Soil Stewardship',
            description: 'Verified sustainable composting and eco-friendly garden maintenance practices.',
            img: '/certificates/5.jpg',
        },
        {
            title: 'Commercial & Residential Liability Coverage',
            description: 'Active insurance verification for residential yards, HOAs, and commercial properties.',
            img: '/certificates/6.jpg',
        },
    ];

    return (
        <div className="relative">
            {/* Header */}
            {/* <Ribbon name="Certificates" showfont={false}/> */}
            <div className="px-5 py-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {certificates.map((cert, idx) => (
                        <div
                            key={idx}
                            className="card rounded-lg shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300"
                        >
                            <Image
                                height={600}
                                width={800}
                                src={cert.img}
                                alt={cert.title}
                                onClick={() => {
                                    setLightbox(true);
                                    setIndex(idx);
                                }}
                                className="w-full h-56 object-cover cursor-pointer"
                            />
                            <div className="px-4 py-5 card2">
                                <h2 className="text-lg font-medium">{cert.title}</h2>
                                <p className="card2 text-sm mt-2">
                                    {cert.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {lightbox && (
                <Lightbox
                    setLightbox={setLightbox}
                    lightbox={lightbox}
                    data={certificates}
                    index={index}
                    setIndex={setIndex}
                />
            )}
        </div>
    );
}