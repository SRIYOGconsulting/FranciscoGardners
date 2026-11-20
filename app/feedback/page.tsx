'use client'
import React, { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
// import Ribbon from '../../components/Ribbon';

export default function Feedback() {
    type FeedbackForm = {
        firstname: string;
        middlename: string;
        lastname: string;
        neighborhood: string;
        propertyType: string;
        phone: string;
        email: string;
        gardenPhoto: File | null;
        service: string;
        rating: string;
        message: string;
    };

    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const initialFormData: FeedbackForm = {
        firstname: '',
        middlename: '',
        lastname: '',
        neighborhood: '',
        propertyType: '',
        phone: '',
        email: '',
        gardenPhoto: null,
        service: '',
        rating: '5',
        message: '',
    };

    const [formData, setFormData] = useState<FeedbackForm>(initialFormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Uncomment once ReCAPTCHA is active
        // if (!captchaToken) {
        //     alert("Please verify you're not a robot!");
        //     return;
        // }
        console.log('Francisco Gardeners Feedback submitted:', formData);
        alert('Thank you for your feedback! Francisco Gardeners appreciates your trust.');
        setFormData(initialFormData);
    };

    return (
        <div className="w-full">
            {/* Full-width Ribbon Header */}
            {/* <Ribbon name="Client Feedback" showfont={false}/> */}

            {/* FORM SECTION */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-0 pt-8 pb-12 max-w-6xl mx-auto font-sans">
                <p className="text-center text-gray-700 mb-10 px-2">
                    Thank you for choosing <span className="font-semibold text-emerald-800">Francisco Gardeners</span>. 
                    Please share your experience with our landscaping and garden care services—your feedback helps our greenery thrive!
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 md:space-y-0 md:grid sm:grid-cols-2 gap-4 p-6 sm:p-8 rounded-xl shadow-sm shadow-gray-300 border border-gray-200 bg-white"
                >
                    {/* First Name */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium text-gray-800">First Name *</label>
                        <input
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            placeholder="Your First Name"
                            required
                            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                        />
                    </div>

                    {/* Middle Name (Optional) */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium text-gray-800">Middle Name</label>
                        <input
                            type="text"
                            name="middlename"
                            value={formData.middlename}
                            onChange={handleChange}
                            placeholder="Your Middle Name (Optional)"
                            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium text-gray-800">Last Name *</label>
                        <input
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            placeholder="Your Last Name"
                            required
                            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                        />
                    </div>

                    {/* Neighborhood / Area */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium text-gray-800">Neighborhood / City *</label>
                        <input
                            type="text"
                            name="neighborhood"
                            value={formData.neighborhood}
                            onChange={handleChange}
                            placeholder="e.g. Pacific Heights, Mission District, Marin..."
                            required
                            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                        />
                    </div>

                    {/* Property Type */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium text-gray-800">Property Type *</label>
                        <div className="relative h-[42px]">
                            <select
                                name="propertyType"
                                value={formData.propertyType}
                                onChange={handleChange}
                                required
                                className="appearance-none w-full h-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:outline-none bg-white"
                            >
                                <option value="">Select property type</option>
                                <option value="Residential Home">Residential Home</option>
                                <option value="HOA / Condo Complex">HOA / Condo Complex</option>
                                <option value="Commercial / Office">Commercial / Office</option>
                                <option value="Courtyard / Rooftop Garden">Courtyard / Rooftop Garden</option>
                            </select>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg fill="#4b4b4b" width="18px" height="18px" viewBox="-6.5 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Service Received */}
                    <div className="flex flex-col">
                        <label htmlFor="service" className="mb-2 font-medium text-gray-800">Service Received *</label>
                        <div className="relative h-[42px]">
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="appearance-none w-full h-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:outline-none bg-white"
                            >
                                <option value="">Select a gardening service</option>
                                <option value="Lawn Care & Maintenance">Lawn Care & Maintenance</option>
                                <option value="Landscape Design & Planting">Landscape Design & Planting</option>
                                <option value="Tree & Shrub Pruning">Tree & Shrub Pruning</option>
                                <option value="Irrigation & Drip Systems">Irrigation & Drip Systems</option>
                                <option value="Seasonal Yard Cleanup">Seasonal Yard Cleanup</option>
                                <option value="Hardscaping & Pathways">Hardscaping & Pathways</option>
                            </select>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg fill="#4b4b4b" width="18px" height="18px" viewBox="-6.5 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium text-gray-800">Phone *</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(415) 555-0199"
                            required
                            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium text-gray-800">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            required
                            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:outline-none"
                        />
                    </div>

                    {/* Garden Photo (Optional) */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium text-gray-800">Garden / Project Photo (Optional)</label>
                        <input
                            type="file"
                            accept="image/*"
                            name="gardenPhoto"
                            onChange={(e) => setFormData({ ...formData, gardenPhoto: e.target.files ? e.target.files[0] : null })}
                            className="px-4 h-[46px] pt-1.5 rounded-md focus:ring-2
                                       file:border-none file:mr-3 file:py-1 file:px-3 file:rounded-md file:shadow-sm file:cursor-pointer file:bg-emerald-50
                                       file:text-emerald-700 border border-gray-300 file:hover:bg-emerald-100 focus:ring-emerald-700 focus:outline-none"
                        />
                    </div>

                    {/* Overall Rating */}
                    <div className="flex flex-col">
                        <label className="mb-2 font-medium text-gray-800">Overall Satisfaction *</label>
                        <div className="relative h-[46px]">
                            <select
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange}
                                required
                                className="appearance-none w-full h-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:outline-none bg-white"
                            >
                                <option value="5">★★★★★ (5/5 - Excellent)</option>
                                <option value="4">★★★★☆ (4/5 - Very Good)</option>
                                <option value="3">★★★☆☆ (3/5 - Good)</option>
                                <option value="2">★★☆☆☆ (2/5 - Fair)</option>
                                <option value="1">★☆☆☆☆ (1/5 - Needs Improvement)</option>
                            </select>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg fill="#4b4b4b" width="18px" height="18px" viewBox="-6.5 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Feedback Message */}
                    <div className="flex flex-col col-span-2">
                        <label htmlFor="message" className="mb-2 font-medium text-gray-800">Your Feedback *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about our team's punctuality, attention to detail, and how your garden looks..."
                            rows={5}
                            required
                            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-700 focus:outline-none resize-none"
                        ></textarea>
                    </div>

                    {/* ReCAPTCHA */}
                    {/* <div className='flex items-center justify-center col-span-2 scale-75'>
                        <ReCAPTCHA
                            sitekey="6LfeSyUsAAAAAHUNk-NbZKDKe6YqXU5WJxh9iscC"
                            onChange={(token: string | null) => setCaptchaToken(token)}
                            size="normal"
                            badge="inline"
                        />
                    </div> */}

                    {/* Submit Button */}
                    <div className="flex items-center justify-center col-span-2 pt-2">
                        <button
                            type="submit"
                            className="bg-emerald-800 text-white px-8 py-2.5 rounded-md font-medium hover:bg-emerald-900 transition-all cursor-pointer sm:w-auto shadow-sm"
                        >
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}