'use client'
import Image from 'next/image';

export default function WhyUs () {

    return (
        <div>
            <div className="max-w-6xl mx-auto pt-8 mb-6 flex flex-col gap-20 items-center justify-center px-4 pb-7">

                {/* SECTION 1 */}
                <div className="grid md:grid-cols-2 gap-10 place-items-center">
                    <div className="space-y-6 max-w-md">
                        <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-[#0D402B]">
                            We Make Transforming Outdoor Spaces Simple
                        </h1>
                        <p className="text-gray-700 leading-relaxed">
                            At Francisco Gardeners, we make beautiful, healthy green spaces effortless for San Francisco property owners. From routine lawn maintenance and deep yard cleanups to custom landscaping, we handle every detail so you can relax and enjoy your garden without the hassle.
                        </p>
                    </div>

                    <Image 
                        height={600} 
                        width={800}
                        src="/why/1.jpg" 
                        alt="Expert Landscaping" 
                        className="w-full max-w-sm md:max-w-[450px] rounded-2xl object-cover shadow-sm"
                    />
                </div>

                {/* SECTION 2 */}
                <div className="grid md:grid-cols-2 gap-10 place-items-center md:[direction:rtl]">
                    <div className="space-y-6 max-w-md text-left [direction:ltr]">
                        <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-[#0D402B]">
                            Licensed Specialists, Comprehensive Garden Care
                        </h1>
                        <p className="text-gray-700 leading-relaxed">
                            Our team consists of background-checked, experienced field specialists—including tree arborists, lawn care experts, plumbers, and outdoor lighting installers. Whether you need ongoing care or specialized tree pruning, we deliver dependable quality tailored to San Francisco’s unique climate.
                        </p>
                    </div>

                    <Image 
                        height={600} 
                        width={800}
                        src="/why/2.jpg" 
                        alt="Verified Garden Experts" 
                        className="w-full max-w-sm md:max-w-[450px] rounded-2xl object-cover shadow-sm"
                    />
                </div>

                {/* SECTION 3 */}
                <div className="grid md:grid-cols-2 gap-10 place-items-center">
                    <div className="space-y-6 max-w-md">
                        <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-[#0D402B]">
                            Eco-Friendly & Smart Water Solutions
                        </h1>
                        <p className="text-gray-700 leading-relaxed">
                            We prioritize green practices that protect both your lawn and the environment. Utilizing battery-powered, low-noise machinery, organic fertilizers, and drought-tolerant Bay Area flora, we build sustainable gardens that thrive year-round with efficient water management.
                        </p>
                    </div>

                    <Image 
                        height={600} 
                        width={800}
                        src="/why/3.jpg" 
                        alt="Sustainable Eco-Friendly Gardening" 
                        className="w-full max-w-sm md:max-w-[450px] rounded-2xl object-cover shadow-sm"
                    />
                </div>

                {/* SECTION 4 */}
                <div className="grid md:grid-cols-2 gap-10 place-items-center md:[direction:rtl]">
                    <div className="space-y-6 max-w-md text-left [direction:ltr]">
                        <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-[#0D402B]">
                            Trusted, Reliable & Seamless Service
                        </h1>
                        <p className="text-gray-700 leading-relaxed">
                            Since our inception, Francisco Gardeners has been built on trust, punctuality, and transparent pricing. We continually refine our scheduled care plans and service offerings to ensure hassle-free booking, exceptional craftsmanship, and total peace of mind for every client.
                        </p>
                    </div>

                    <Image 
                        height={600} 
                        width={800}
                        src="/why/4.jpg" 
                        alt="Reliable Lawn Care" 
                        className="w-full max-w-sm md:max-w-[450px] rounded-2xl object-cover shadow-sm"
                    />
                </div>

            </div>
        </div>
    );
}