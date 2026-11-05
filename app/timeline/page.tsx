'use client';
// import Ribbon from '../../components/Ribbon';

export default function Timeline() {

    const events = [
        {
            year: "2018",
            title: "Company Founded",
            description: "Francisco Gardeners was established in San Francisco to provide reliable residential lawn care and organic yard maintenance.",
        },
        {
            year: "2020",
            title: "Service Expansion",
            description: "Introduced specialized tree care, gutter cleaning, and comprehensive irrigation management services.",
        },
        {
            year: "2021",
            title: "Commercial Landscaping",
            description: "Expanded operations to commercial complexes and urban rooftop gardens across the Bay Area.",
        },
        {
            year: "2023",
            title: "Team & Equipment Growth",
            description: "Scaled up with certified arborists, landscape architects, and transitioned to sustainable battery-powered tools.",
        },
        {
            year: "2024",
            title: "Smart Eco-Gardening",
            description: "Integrated smart drip-irrigation technology, drought-tolerant flora designs, and advanced customer care portals.",
        },
    ];

    return (
        <div>
            {/* Header */}
            {/* <Ribbon name="Timeline" showfont={false}/> */}

            {/* Timeline Container */}
            <div className="max-w-5xl mx-auto px-4 md:px-8 relative py-8">

                {/* Vertical Center Line */}
                <div className="absolute left-1/2 top-18 bottom-18 transform -translate-x-1/2 w-1 bg-[#10B981] rounded-full"></div>

                <div className="space-y-16 mt-12">
                    {events.map((event, index) => {
                        const isLeft = index % 2 === 0;  // alternate
                        
                        return (
                            <div key={index} className="relative flex items-center">

                                {/* Timeline dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#0D402B] border-4 border-white rounded-full shadow-md z-10"></div>

                                {/* Card */}
                                <div className={`w-full md:w-1/2 px-6 md:px-0 
                                    ${isLeft ? "md:pr-12 md:mr-auto" : "md:pl-12 md:ml-auto"}`}
                                >
                                    <div className="rounded-2xl shadow-sm p-6 border border-emerald-100 bg-emerald-50/30 hover:shadow-md transition-all">
                                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                                            {event.year}
                                        </span>
                                        <h3 className="text-xl font-bold mt-1 text-[#0D402B]">
                                            {event.title}
                                        </h3>
                                        <p className="mt-2 text-gray-700 leading-relaxed text-sm md:text-base">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="h-12"></div>
        </div>
    );
}