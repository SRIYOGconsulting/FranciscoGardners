'use client'
import ClapFunction from '../../components/ClappingFunction';
// import Ribbon from '../../components/Ribbon';
import Image from 'next/image';

const About = ()=> {

    return (
        <div className='about font-size'>
            {/* <Ribbon name="About" showfont={true}/> */}
           
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8">

                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                     {/* Image on mobile - inserted here for better reading flow */}
                        <div className="md:hidden overflow-hidden px-5 sm:px-0">
                            <Image
                              src="/images/about/1.png"
                              alt="Logo"
                              width={800}        // any number, not the final size
                              height={600}       // any number
                              className="w-full h-auto object-cover"
                            />
                        </div>
                    {/* Left side - Text content */}
                    <div className="md:w-2/3 space-y-4 md:space-y-6 leading-relaxed ">
                    <p className="text-[23px] md:text-2xl font-semibold mb-3 opacity-90"    >
                        About Us    
                    </p>
                        <p className="content-text ">
                          Welcome to Francisco Gardeners, your premier local provider of eco-conscious 
                          lawn care, sod replacement, and complete garden management.
                           We were founded on a simple mission: to transform Bay Area outdoor spaces into lush,
                            sustainable, and peaceful sanctuaries while setting a high standard for environmental responsibility.

                        </p>

                        <p className="content-text ">
                           Whether caring for a classic Victorian garden in Pacific Heights,
                            a rooftop terrace in SoMa, or a family lawn in the Sunset District, 
                            Francisco Gardeners brings deep horticultural knowledge and international 
                            best practices right to your doorstep.

                        </p>

                       

                        <p className="content-text">
                           San Francisco is home to some of the world's most unique microclimates—ranging from coastal fog and wind in the west to sunlit hills in the east—alongside heavy urban clay soils and strict California water conservation guidelines.

                        </p>

                        <p className="content-text ">
                            At FranciscoGardeners, we recognized that traditional lawn care, with noisy gas equipment and heavy synthetic fertilizers, wasn't built for modern urban living or long-term soil health.

                        </p>

                        <p className="content-text ">
                            That’s why our team reimagined garden care by combining cutting-edge global landscaping methodologies—such as organic bio-restoration, mycorrhizal root enrichment, and smart micro-drip systems—with local Bay Area environmental compliance.

                        </p>
                    </div>

                    {/* Right side - Images (Desktop only) */}
                    <div className="hidden md:block md:w-1/3 space-y-6">
                        <div className="overflow-hidden">
                            <img
                                src="/about/1.png"
                                alt="About SRIYOG 1"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Clap Button with better mobile spacing - aligned left */}
                <div className="mt-6 md:mt-8 flex justify-start">
                    <ClapFunction/>
                </div>
            </div>
        </div>
    );
}
export default About