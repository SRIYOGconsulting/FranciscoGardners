'use client'

import Image from 'next/image';

export default function History() { 

    return (
        <div>

            <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-16 py-8">

                {/* Introduction Section */}
                <section>
                    <h2 className="text-3xl font-bold text-[#0D402B] mb-4">Our Beginning</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Francisco Gardeners began its journey in San Francisco with a simple mission: to bring vibrant, healthy green spaces to everyday homes and workplaces. What started as a small, passionate neighborhood lawn care operation has grown into a trusted landscaping partner for residential properties, commercial sites, and urban gardens across the Bay Area.
                    </p>

                    <div className="mt-6 rounded-2xl overflow-hidden shadow-md">
                        <Image 
                            height={600} 
                            width={800}
                            src="/history/3.jpg"
                            alt="Francisco Gardeners Beginning"
                            className="w-full h-80 md:h-[400px] object-cover"
                        />
                    </div>
                </section>

                {/* Evolution Section */}
                <section>
                    <h2 className="text-3xl font-bold text-[#0D402B] mb-4">Evolution Over the Years</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        Over the years, Francisco Gardeners expanded by embracing sustainable practices, investing in battery-powered equipment, and assembling a specialized team of horticulturists, tree arborists, and landscape designers. Continuous innovation and a focus on water conservation have shaped our steady growth in San Francisco's unique microclimates.
                    </p>

                    {/* Two Card Format */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                        {/* Card 1 */}
                        <div className="card p-6 shadow-sm rounded-2xl border border-emerald-100 bg-emerald-50/40 hover:shadow-md transition">
                            <Image 
                                height={600} 
                                width={800}
                                src="/history/ceo1.jpg"
                                alt="Francisco Morales"
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-4 ring-4 ring-[#10B981]"
                            />

                            <h3 className="text-2xl font-bold text-center text-[#0D402B]">
                                Francisco Morales
                            </h3>
                            <p className="text-center text-emerald-600 font-semibold text-sm">
                                Founder & Head Architect
                            </p>
                            <p className="mt-3 text-gray-700 text-center leading-relaxed">
                                Francisco spearheaded the vision of eco-friendly gardening in San Francisco. His deep knowledge of California native plants and drought-tolerant landscape designs laid the foundation for the company's sustainable core.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="card p-6 shadow-sm rounded-2xl border border-emerald-100 bg-emerald-50/40 hover:shadow-md transition">
                            <Image 
                                height={600} 
                                width={800}
                                src="/history/4.jpg"
                                alt="Elena Ramirez"
                                className="w-40 h-40 mx-auto rounded-full object-cover mb-4 ring-4 ring-[#10B981]"
                            />

                            <h3 className="text-2xl font-bold text-center text-[#0D402B]">
                                Elena Ramirez
                            </h3>
                            <p className="text-center text-emerald-600 font-semibold text-sm">
                                Operations & Client Director
                            </p>
                            <p className="mt-3 text-gray-700 text-center leading-relaxed">
                                Elena streamlined field operations and built client management systems that ensured every garden received tailored, reliable attention. Her leadership helped scale service teams while maintaining top customer satisfaction.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Milestones */}
                <section>
                    <h2 className="text-3xl font-bold text-[#0D402B] mb-6">Key Milestones</h2>

                    <div className="space-y-6">

                        <div className="p-6 card rounded-2xl shadow-sm border border-emerald-100 bg-white hover:shadow-md transition-all">
                            <h3 className="text-xl font-bold text-[#0D402B]">2018 – Francisco Gardeners Established</h3>
                            <p className="mt-2 text-gray-700">
                                Official founding of Francisco Gardeners in San Francisco, focusing on organic lawn care and residential yard maintenance.
                            </p>
                        </div>

                        <div className="p-6 card rounded-2xl shadow-sm border border-emerald-100 bg-white hover:shadow-md transition-all">
                            <h3 className="text-xl font-bold text-[#0D402B]">2020 – Commercial & Estate Landscaping</h3>
                            <p className="mt-2 text-gray-700">
                                Expanded services to larger commercial spaces, urban rooftop gardens, and comprehensive irrigation management systems.
                            </p>
                        </div>

                        <div className="p-6 card rounded-2xl shadow-sm border border-emerald-100 bg-white hover:shadow-md transition-all">
                            <h3 className="text-xl font-bold text-[#0D402B]">2022 – Zero-Emission Green Initiative</h3>
                            <p className="mt-2 text-gray-700">
                                Transitioned primary maintenance equipment to battery-powered, low-noise tools and introduced 100% organic, pet-safe treatments.
                            </p>
                        </div>

                        <div className="p-6 card rounded-2xl shadow-sm border border-emerald-100 bg-white hover:shadow-md transition-all">
                            <h3 className="text-xl font-bold text-[#0D402B]">2024 – Smart Irrigation & Design Studio</h3>
                            <p className="mt-2 text-gray-700">
                                Launched full 3D landscape design consultations and smart water management systems catered to Bay Area microclimates.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Closing Section */}
                <section className="pb-12">
                    <h2 className="text-3xl font-bold text-[#0D402B] mb-4">Our Journey Continues</h2>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        With each passing season, Francisco Gardeners grows stronger and more dedicated to nurturing green environments. Our history reflects our ongoing commitment to craftsmanship, sustainable landscaping, and creating serene outdoor spaces for the San Francisco community.
                    </p>
                </section>

            </div>
        </div>
    );
}