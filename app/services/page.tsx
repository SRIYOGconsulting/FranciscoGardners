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
        { title: 'Planting & Transplanting', img: '/certificates/6.jpg',description:'Establish healthy trees, native shrubs, and ornamental beds year-round with shock-free planting and expert relocation techniques.' },

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
