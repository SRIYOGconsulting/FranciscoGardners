'use client'
import { useState, useEffect } from 'react';
import Pagination from '../../components/Pagination';
// import Ribbon from '../../components/Ribbon';

export default function Notice() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    const [notices] = useState([
        {
            id: 1,
            title: "Spring Garden Membership & Plot Registration Open",
            date: "2026-03-01",
            category: "Membership",
            content: "Registration is now open for our upcoming spring gardening season. Limited raised beds and community plots are available for new members in San Francisco.",
            important: true
        },
        {
            id: 2,
            title: "Organic Soil & Composting Workshop",
            date: "2026-02-24",
            category: "Workshop",
            content: "Join our master gardeners for a hands-on workshop covering Bay Area microclimates, organic soil enrichment, and sustainable backyard composting.",
            important: false
        },
        {
            id: 3,
            title: "Garden Maintenance & Nursery Closure",
            date: "2026-02-18",
            category: "Closure",
            content: "Francisco Gardens and our on-site plant nursery will remain closed on February 22nd for seasonal irrigation maintenance and pathway resurfacing.",
            important: true
        },
        {
            id: 4,
            title: "Annual Heirloom Seed Swap & Plant Sale",
            date: "2026-02-12",
            category: "Events",
            content: "Bring your saved seeds and cuttings to trade with fellow local gardeners. Native California perennials, herbs, and vegetable starts will also be available.",
            important: true
        },
        {
            id: 5,
            title: "Urban Beekeeping & Pollinator Walk",
            date: "2026-02-05",
            category: "Events",
            content: "Explore our native pollinator beds with local apiarists. Learn how to attract bees, butterflies, and hummingbirds to your San Francisco garden.",
            important: false
        },
        {
            id: 6,
            title: "Community Volunteer Workday & Mulching Drive",
            date: "2026-01-28",
            category: "Volunteer",
            content: "Help us refresh the communal pathways and orchard beds this Saturday morning. Gloves, tools, and organic refreshments will be provided for all volunteers.",
            important: false
        },
        {
            id: 7,
            title: "Drought-Tolerant Landscaping Consultation Booking",
            date: "2026-01-20",
            category: "Services",
            content: "Book a 1-on-1 consultation with our landscape design team to transition your yard into a water-wise, native California coastal garden.",
            important: false
        },
        {
            id: 8,
            title: "Winter Fruit Tree Pruning Clinic",
            date: "2026-01-14",
            category: "Workshop",
            content: "Learn proper dormant pruning techniques for apples, figs, stone fruits, and citrus trees suited to Northern California climates.",
            important: false
        },
        {
            id: 9,
            title: "Greenhouse Seedling Reservations Now Live",
            date: "2026-01-09",
            category: "Services",
            content: "Pre-order organically grown tomato, pepper, and leafy green starts from the Francisco Gardens greenhouse for early spring pickup.",
            important: true
        },
        {
            id: 10,
            title: "School & Youth Garden Field Trip Applications",
            date: "2026-01-05",
            category: "Volunteer",
            content: "We are now accepting spring field trip requests from San Francisco elementary and middle schools for guided ecology and gardening tours.",
            important: false
        },
        {
            id: 11,
            title: "Rainwater Harvesting & Drip Irrigation Seminar",
            date: "2025-12-18",
            category: "Workshop",
            content: "Discover practical ways to install rain barrels and smart drip irrigation systems to conserve water year-round.",
            important: false
        },
        {
            id: 12,
            title: "Seasonal Harvest Dinner in the Garden",
            date: "2025-12-10",
            category: "Events",
            content: "Celebrate the winter harvest with a farm-to-table community gathering featuring produce grown right here at Francisco Gardens.",
            important: true
        }
    ]);

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const categories = ["All", "Membership", "Workshop", "Events", "Volunteer", "Services", "Closure"];

    // Filtering logic
    const filteredNotices = notices.filter(notice => {
        const matchesCategory = selectedCategory === "All" || notice.category === selectedCategory;
        const matchesSearch =
            notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            notice.content.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredNotices.slice(startIndex, startIndex + itemsPerPage);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, searchTerm]);

    return (
        <>
            {/* <Ribbon name="Notice" showfont={false}/> */}

            <div className="container mx-auto px-4 py-8 max-w-7xl">
                
                {/* SEARCH + CATEGORY FILTER */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">

                    {/* Search */}
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search garden notices, workshops & events..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#074842]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Category horizontal scroll */}
                    <div className="relative w-full md:w-auto">
                        <div className="
                            flex gap-2 overflow-x-auto pb-3
                            scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200
                            whitespace-nowrap
                        ">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`
                                        px-4 py-2 rounded-full shrink-0 cursor-pointer transition-colors
                                        ${selectedCategory === category
                                            ? 'bg-[#074842] text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                                    `}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* NOTICE CARDS */}
                <div className="space-y-8">
                    {currentData.map(notice => (
                        <div
                            key={notice.id}
                            className={`
                                answers rounded-lg shadow-md border-l-4
                                hover:scale-[1.02] transition-all hover:shadow-2xl 
                                ${notice.important ? 'border-red-500' : 'border-[#074842]'}
                            `}
                        >
                            {notice.important && (
                                <div className="bg-red-500 rounded-tr-lg text-white px-4 py-1 text-sm font-semibold">
                                    Important
                                </div>
                            )}

                            <div className="p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                    <h3 className="text-xl font-semibold mb-2 md:mb-0">
                                        {notice.title}
                                    </h3>

                                    <div className="flex items-center gap-4">
                                        <a href="#">
                                            <button className='cursor-pointer hover:bg-[#074842] hover:text-white text-[13px] border px-2 py-px rounded-md border-gray-800 transition-colors'>
                                                Read Details
                                            </button>
                                        </a>
                                        <span className="bg-green-100 text-[#074842] font-medium text-sm px-3 py-1 rounded-full">
                                            {notice.category}
                                        </span>

                                        <span className="text-gray-400 text-sm">
                                            {new Date(notice.date).toLocaleDateString()}
                                        </span>
                                    </div>
                                </div>

                                <p className="leading-relaxed text-gray-700">
                                    {notice.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* PAGINATION */}
                {filteredNotices.length !== 0 && (
                    <div className="flex items-center justify-center mt-8">
                        <Pagination
                            color="bg-[#074842]"
                            currentPage={currentPage}
                            onPageChange={setCurrentPage}
                            totalPages={totalPages}
                        />
                    </div>
                )}

                {/* NO RESULTS */}
                {filteredNotices.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-6xl mb-4">📄</div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No garden notices found</h3>
                        <p className="text-gray-500">Try adjusting your search or category filter</p>
                    </div>
                )}
            </div>
        </>
    );
}