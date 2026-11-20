'use client'

import { useState } from 'react';
// import Ribbon from '../../components/Ribbon';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: 'United States (+1)',
        phone: '',
        extension: '',
        topic: 'Free Estimate / Quote',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for reaching out to Francisco Gardeners! Our team will get back to you shortly.');
    };

    const teamMembers = [
        {
            name: 'Carlos',
            designation: 'Lead Landscape Designer',
            img: '/contact/1.png',
            email: 'carlos@franciscogardeners.com'
        },
        {
            name: 'Elena',
            designation: 'Client & Scheduling Coordinator',
            img: '/contact/2.png',
            email: 'elena@franciscogardeners.com'
        },
        {
            name: 'Marcus',
            designation: 'Head Horticulturist & Arborist',
            img: '/contact/3.png',
            email: 'marcus@franciscogardeners.com'
        },
    ];

    const services = [
        { icon: '/icons/2.svg', title: 'Lawn Care', desc: 'Regular mowing, edging, aeration, and seasonal turf maintenance.' },
        { icon: '/icons/3.svg', title: 'Landscape Design', desc: 'Custom Bay Area native gardens, planting, and hardscaping.' },
        { icon: '/icons/4.svg', title: 'Site Consultation', desc: 'Book an on-site walkthrough to plan your outdoor space.' },
        { icon: '/icons/shield.svg', title: 'Tree & Irrigation', desc: 'Expert shrub pruning, tree care, and smart drip systems.' }
    ];

    const countries = [
        'United States (+1)', 'Canada (+1)', 'Mexico (+52)', 'United Kingdom (+44)',
        'Australia (+61)', 'France (+33)', 'Germany (+49)', 'India (+91)',
        'Japan (+81)', 'Nepal (+977)', 'Spain (+34)'
    ];

    return (
        <div className="">
            {/* Header Section */}
            {/* <Ribbon name="Contact" showfont={false}/> */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 pt-8">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Left Side - Map and Services */}
                    <div className="space-y-6">
                        {/* Welcome Section */}
                        <div className="border border-gray-300 rounded-lg p-6 bg-white">
                            <h2 className="text-2xl font-bold text-emerald-900 mb-3">Welcome to Francisco Gardeners</h2>
                            <p className="text-gray-600 text-sm mb-4">
                                Welcome to Francisco Gardeners! Serving residential and commercial gardens from our nursery &amp; office in San Francisco, California.
                            </p>

                            {/* Google Map - San Francisco */}
                            <div className="rounded-lg overflow-hidden border border-gray-200 h-64 mb-3">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640204439!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1741060000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <a
                                href="https://www.google.com/maps/place/San+Francisco,+CA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-700 hover:text-emerald-900 font-medium text-sm"
                            >
                                Directions →
                            </a>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg p-6 border border-gray-300 bg-white transition-shadow hover:shadow-sm flex items-start gap-4"
                                >
                                    {/* Icon (left) */}
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="w-10 h-10 shrink-0"
                                    />

                                    {/* Text (right) */}
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="rounded-lg p-8 border border-gray-300 bg-white card">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8">
                                <img src="/icons/email.svg" alt="email" className="w-full h-full" />
                            </div>
                            <h2 className="text-2xl font-bold text-emerald-900">Request a Quote or Ask a Question</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="e.g., Sarah"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-emerald-600 focus:border-transparent focus:bg-white focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="e.g., Jenkins"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-emerald-600 focus:border-transparent focus:bg-white focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="e.g., sarah@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-emerald-600 focus:border-transparent focus:bg-white focus:outline-none"
                                />
                                <p className="text-xs text-gray-500 mt-1.5">We'll never share your email with anyone else.</p>
                            </div>

                            {/* Phone Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Country Code</label>
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-emerald-600 focus:border-transparent focus:bg-white focus:outline-none"
                                    >
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="(415) 555-0148"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-emerald-600 focus:border-transparent focus:bg-white focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Zip / Neighborhood</label>
                                    <input
                                        type="text"
                                        name="extension"
                                        placeholder="e.g., 94110 / Mission"
                                        value={formData.extension}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-emerald-600 focus:border-transparent focus:bg-white focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Topic */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">What service are you looking for?</label>
                                <select
                                    name="topic"
                                    value={formData.topic}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-emerald-600 focus:border-transparent focus:bg-white focus:outline-none"
                                >
                                    <option value="Free Estimate / Quote">Free Estimate / Quote</option>
                                    <option value="Weekly / Bi-Weekly Lawn Maintenance">Weekly / Bi-Weekly Lawn Maintenance</option>
                                    <option value="Landscape Design & Planting">Landscape Design &amp; Planting</option>
                                    <option value="Tree & Shrub Pruning">Tree &amp; Shrub Pruning</option>
                                    <option value="Irrigation & Drip Repair">Irrigation &amp; Drip Repair</option>
                                    <option value="Seasonal Yard Cleanup">Seasonal Yard Cleanup</option>
                                    <option value="Billing & Scheduling">Billing &amp; Scheduling</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">Project Details / Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your yard size, goals, or preferred visit days..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    required
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-emerald-600 focus:border-transparent resize-none focus:bg-white focus:outline-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-40 cursor-pointer bg-emerald-800 text-white py-2.5 rounded hover:bg-emerald-900 transition-colors text-sm font-medium"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                {/* Quick Contact Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-emerald-900 mb-2">Quick Contact</h2>
                    <p className="text-gray-600">Reach out directly to our San Francisco landscaping specialists.</p>
                </div>

                {/* Team Members */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="rounded-lg p-8 text-center border border-gray-200 bg-white shadow-sm"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-56 h-56 mx-auto mb-6 rounded-full object-cover"
                            />
                            <h3 className="text-[22px] font-semibold text-gray-900 mb-2">{member.name}</h3>
                            <p className="text-gray-600 text-base mb-6">{member.designation}</p>
                            <a
                                href={`mailto:${member.email}`}
                                className="inline-block px-6 cursor-pointer py-1.5 border border-emerald-700 text-emerald-800 rounded hover:bg-emerald-700 hover:text-white transition-colors font-semibold text-base"
                            >
                                Email
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}