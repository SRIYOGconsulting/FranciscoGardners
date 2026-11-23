'use client';

import React, { useState } from 'react';

type Term = {
    term: string;
    definition: string;
};

type TermsByLetter = {
    [key: string]: Term[];
};

const glossaryTerms: TermsByLetter = {
    A: [
        {
            term: "Aeration",
            definition: "The process of perforating the soil with small holes to allow air, water, and nutrients to penetrate deep into grass roots and relieve soil compaction."
        },
        {
            term: "Arboriculture",
            definition: "The cultivation, management, and study of individual trees, shrubs, vines, and other perennial woody plants in urban and residential landscapes."
        },
        {
            term: "Annuals",
            definition: "Plants that complete their entire life cycle—from germination to seed production—within a single growing season."
        },
        {
            term: "Amendment (Soil)",
            definition: "Organic or mineral material mixed into soil to improve its physical properties, such as water retention, permeability, drainage, and structure."
        }
    ],
    B: [
        {
            term: "Backflow Preventer",
            definition: "A plumbing device installed on irrigation systems to prevent contaminated garden water from flowing backward into clean municipal water lines."
        },
        {
            term: "Beneficial Insects",
            definition: "Natural predators like ladybugs, lacewings, and pollinators that control garden pests organically without the need for chemical pesticides."
        },
        {
            term: "Bioswale",
            definition: "A vegetated, shallow landscape depression designed to capture, filter, and slowly infiltrate stormwater runoff from roofs and driveways."
        }
    ],
    C: [
        {
            term: "California Native Plants",
            definition: "Flora indigenous to California that are naturally adapted to local soil, coastal fog, and summer drought conditions, requiring minimal water and maintenance."
        },
        {
            term: "Canopy",
            definition: "The upper layer of leaves and branches formed by mature trees that provides shade, wind protection, and habitat in an outdoor space."
        },
        {
            term: "Compost",
            definition: "Nutrient-rich, decomposed organic matter used as a natural fertilizer and soil conditioner to boost microbial life and plant health."
        },
        {
            term: "Crown Thinning",
            definition: "Selective pruning of tree branches to increase light penetration and air movement through the canopy while reducing wind resistance."
        }
    ],
    D: [
        {
            term: "Dethatching",
            definition: "The mechanical removal of thatch—a dense layer of dead grass stems and roots—that builds up between green turf and the soil surface."
        },
        {
            term: "Drip Irrigation",
            definition: "A high-efficiency watering method that delivers water slowly and directly to plant root zones through emitters, minimizing evaporation and runoff."
        },
        {
            term: "Drought-Tolerant Landscaping",
            definition: "Garden designs that utilize hardy, low-water plants and moisture-retaining mulches to thrive through dry Bay Area summers."
        },
        {
            term: "Deadheading",
            definition: "Removing faded or dead flowers from plants to encourage continuous blooming and maintain a tidy appearance."
        }
    ],
    E: [
        {
            term: "Edging",
            definition: "Creating a crisp, clean boundary between a lawn and adjacent garden beds, walkways, or driveways for a manicured finish."
        },
        {
            term: "Erosion Control",
            definition: "Landscaping techniques—such as terraced retaining walls, groundcovers, and root stabilization—used to prevent soil washout on sloped San Francisco properties."
        },
        {
            term: "Evergreen",
            definition: "Trees and shrubs that retain green foliage throughout all four seasons, providing year-round privacy and structure."
        }
    ],
    F: [
        {
            term: "Foliar Feeding",
            definition: "Applying liquid organic nutrients directly onto plant leaves for rapid absorption of essential trace minerals."
        },
        {
            term: "French Drain",
            definition: "A gravel-filled trench containing a perforated pipe that redirects surface water and groundwater away from foundations and soggy lawns."
        },
        {
            term: "Frost Tender",
            definition: "Plants sensitive to freezing temperatures that require sheltered microclimates or winter protection during cold Bay Area nights."
        }
    ],
    G: [
        {
            term: "Grading",
            definition: "Reshaping and leveling the slope of soil on a property to ensure proper water drainage away from structures and prepare beds for planting."
        },
        {
            term: "Green Waste Recycling",
            definition: "Diverting grass clippings, pruned branches, and organic yard debris to municipal composting facilities rather than landfills."
        },
        {
            term: "Groundcover",
            definition: "Low-growing, spreading plants used to blanket bare soil, suppress weeds, retain moisture, and reduce turfgrass lawn areas."
        }
    ],
    H: [
        {
            term: "Hardscaping",
            definition: "The non-living architectural elements of a landscape, including stone patios, retaining walls, pathways, decks, and pergolas."
        },
        {
            term: "Horticulture",
            definition: "The science and art of growing fruits, vegetables, flowers, and ornamental plants for aesthetic and functional landscapes."
        },
        {
            term: "Humus",
            definition: "The dark, stable organic component of soil formed by the complete decomposition of plant and animal matter."
        }
    ],
    I: [
        {
            term: "Integrated Pest Management (IPM)",
            definition: "An eco-friendly pest control strategy combining biological controls, habitat manipulation, and organic treatments to minimize environmental impact."
        },
        {
            term: "Irrigation Zoning",
            definition: "Dividing a sprinkler or drip system into separate sections based on plant water needs, sun exposure, and soil type."
        }
    ],
    J: [
        {
            term: "Japanese Maple (Acer palmatum)",
            definition: "A prized ornamental tree valued for its delicate foliage, sculptural branching, and vibrant seasonal color in sheltered Bay Area gardens."
        }
    ],
    K: [
        {
            term: "Keystone Species",
            definition: "Native plants—such as California oaks and sages—that play a critical role in supporting local pollinators, birds, and ecosystem balance."
        }
    ],
    L: [
        {
            term: "Landscape Lighting",
            definition: "Low-voltage LED outdoor illumination used to highlight architectural trees, pathways, and patios while enhancing nighttime safety."
        },
        {
            term: "Loam",
            definition: "An ideal, fertile garden soil composed of a balanced mixture of sand, silt, and clay that drains well while holding nutrients."
        },
        {
            term: "Living Wall",
            definition: "A vertical garden structure mounted on interior or exterior walls, ideal for maximizing greenery in compact urban spaces."
        }
    ],
    M: [
        {
            term: "Microclimate",
            definition: "Localized climate variations within a neighborhood or yard—such as San Francisco’s foggy coastal zones versus sunny inland slopes—that dictate plant selection."
        },
        {
            term: "Mulching",
            definition: "Spreading a protective layer of bark, wood chips, or compost over soil to lock in moisture, regulate root temperature, and block weeds."
        },
        {
            term: "Mycorrhizae",
            definition: "Beneficial soil fungi that form symbiotic relationships with plant roots, dramatically increasing water and nutrient uptake."
        }
    ],
    N: [
        {
            term: "Nitrogen Fixation",
            definition: "A natural process in which certain plants and soil bacteria convert atmospheric nitrogen into nutrients usable by surrounding flora."
        },
        {
            term: "Naturalized Planting",
            definition: "A design style that arranges hardy perennials and grasses in organic drifts to mimic wild meadows and coastal hillsides."
        }
    ],
    O: [
        {
            term: "Organic Fertilizer",
            definition: "Plant- or mineral-derived nutrients (such as kelp meal, bone meal, and compost tea) that feed soil biology safely for children and pets."
        },
        {
            term: "Overseeding",
            definition: "Spreading new grass seed directly over an existing lawn without turning the soil to thicken turf density and fill bare patches."
        }
    ],
    P: [
        {
            term: "Perennials",
            definition: "Plants that live for more than two years, typically regrowing from the same root system each spring."
        },
        {
            term: "Permeable Pavers",
            definition: "Interlocking hardscape stones designed with porous joints that allow rainwater to filter naturally into the ground below."
        },
        {
            term: "pH Balance",
            definition: "A measure of soil acidity or alkalinity (on a scale of 0–14) that determines how readily plants can absorb soil nutrients."
        },
        {
            term: "Pruning",
            definition: "The targeted removal of dead, damaged, or overgrown branches to promote healthy plant structure, flowering, and safety."
        }
    ],
    Q: [
        {
            term: "Quick-Connect Valve",
            definition: "A specialized underground irrigation access point allowing gardeners to attach hoses or sprinklers anywhere across large estates."
        }
    ],
    R: [
        {
            term: "Rain Sensor",
            definition: "A smart irrigation attachment that automatically pauses scheduled watering cycles during and after rainfall to conserve water."
        },
        {
            term: "Retaining Wall",
            definition: "A engineered stone, timber, or concrete wall built to hold back sloped earth and create usable level garden terraces."
        },
        {
            term: "Root Flare",
            definition: "The natural widening at the base of a tree trunk where roots spread outward; keeping it exposed prevents bark rot and girdling."
        }
    ],
    S: [
        {
            term: "Smart Irrigation Controller",
            definition: "A Wi-Fi-enabled watering timer that adjusts schedules automatically using real-time local weather, soil moisture, and evaporation data."
        },
        {
            term: "Softscaping",
            definition: "The living horticultural elements of a landscape, including trees, shrubs, perennials, turfgrass, and seasonal flower beds."
        },
        {
            term: "Soil Compaction",
            definition: "The pressing together of soil particles from foot traffic or heavy equipment, reducing pore space for air, water, and root growth."
        }
    ],
    T: [
        {
            term: "Topdressing",
            definition: "Applying a thin layer of compost, sand, or screened topsoil over a lawn or garden bed to smooth surfaces and enrich soil fertility."
        },
        {
            term: "Turfgrass Management",
            definition: "The seasonal care of lawns—including mowing height calibration, organic fertilization, aeration, and weed suppression."
        },
        {
            term: "Tree Risk Assessment",
            definition: "A systematic inspection performed by a certified arborist to evaluate structural stability and prevent branch or root failure."
        }
    ],
    U: [
        {
            term: "Understory",
            definition: "Shade-tolerant shrubs, ferns, and groundcovers that thrive beneath the canopy of taller established trees."
        },
        {
            term: "Urban Forestry",
            definition: "The care and management of tree populations in urban settings to improve air quality, shade, and neighborhood aesthetics."
        }
    ],
    V: [
        {
            term: "Vermicompost",
            definition: "Nutrient-dense organic fertilizer produced through worm composting, prized for boosting microbial activity in container and rooftop gardens."
        },
        {
            term: "Vertical Gardening",
            definition: "Growing plants upward using trellises, arbors, or wall planters to maximize greenery in narrow side yards and patios."
        }
    ],
    W: [
        {
            term: "Water-Wise Landscaping",
            definition: "A holistic garden approach combining hydro-zoning, smart drip controllers, and native plants to cut outdoor water use by up to 50%."
        },
        {
            term: "Weed Barrier",
            definition: "Breathable organic cardboard or geotextile fabric laid beneath mulch to block weed germination while allowing water penetration."
        },
        {
            term: "Windbreak",
            definition: "A strategic row of coastal-hardy trees or dense shrubs planted to shield delicate gardens from prevailing San Francisco winds."
        }
    ],
    X: [
        {
            term: "Xeriscaping",
            definition: "A landscaping method developed for dry climates that eliminates or minimizes the need for supplemental irrigation."
        }
    ],
    Y: [
        {
            term: "Yard Renovation",
            definition: "A comprehensive overhaul of an overgrown or outdated outdoor space, including clearing, soil prep, hardscaping, and new plantings."
        }
    ],
    Z: [
        {
            term: "Zero-Emission Equipment",
            definition: "Commercial-grade battery-powered mowers, trimmers, and blowers that eliminate exhaust fumes and dramatically reduce neighborhood noise."
        }
    ]
};

export default function Glossary() {
    const [selectedLetter, setSelectedLetter] = useState<string>('A');

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const availableLetters = Object.keys(glossaryTerms);

    return (
        <div className="w-full min-h-screen bg-white py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                
                {/* HERO HEADER */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                        Horticulture & Care Guide
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#0D402B] tracking-tight mt-4">
                        Landscaping &amp; Garden Glossary
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                        Explore key terms in sustainable gardening, tree care, soil health, and smart irrigation used by our San Francisco specialists.
                    </p>
                </div>

                {/* Alphabet Navigation */}
                <div className="bg-[#F4FAF6] border border-emerald-100 rounded-2xl py-4 px-6 mb-10 shadow-sm">
                    <div className="flex flex-wrap justify-center gap-2 md:gap-2.5">
                        {alphabet.map((letter) => (
                            <button
                                key={letter}
                                onClick={() => availableLetters.includes(letter) && setSelectedLetter(letter)}
                                className={`w-9 h-9 flex items-center justify-center font-bold text-sm rounded-lg transition-all ${
                                    availableLetters.includes(letter)
                                        ? selectedLetter === letter
                                            ? 'bg-[#0D402B] text-white shadow-sm'
                                            : 'bg-white text-[#0D402B] border border-emerald-100 hover:bg-emerald-100'
                                        : 'text-gray-400 cursor-not-allowed'
                                }`}
                                disabled={!availableLetters.includes(letter)}
                            >
                                {letter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Selected Letter Indicator */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-10 rounded-xl bg-[#10B981] text-white font-extrabold text-xl flex items-center justify-center shadow-sm">
                        {selectedLetter}
                    </span>
                    <h2 className="text-xl font-bold text-[#0D402B]">
                        Terms starting with &ldquo;{selectedLetter}&rdquo;
                    </h2>
                </div>

                {/* Terms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {glossaryTerms[selectedLetter]?.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-emerald-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all"
                        >
                            <h3 className="text-xl font-bold text-[#0D402B] mb-2">
                                {item.term}
                            </h3>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                {item.definition}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {!glossaryTerms[selectedLetter] && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No terms available for letter {selectedLetter}</p>
                    </div>
                )}
            </div>
        </div>
    );
}