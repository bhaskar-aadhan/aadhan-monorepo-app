import React from 'react'
import { Link } from 'react-router'
import ImageRender from '~/shared/ImageRender'
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#191A23] text-white rounded-t-[45px] mt-20  px-8 py-16 pb-0 mx-2 flex flex-col gap-5">
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-10'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <ImageRender
                            src="aadhan-logo-white.svg"
                            alt="Aadhan Logo"
                            className="h-7 w-auto"
                        />
                    </div>
                    <div>
                        <div>
                            <h2 className="text-lg font-semibold text-white mb-4">Contact us</h2>
                        </div>

                        {/* Main Content Grid */}
                        <div className="flex flex-col gap-2 text-xs sm:text-sm">
                            {/* Email Section */}
                            <div>
                                <a
                                    href="mailto:info@aadhan.in"
                                    className="hover:opacity-80 transition-opacity flex items-center gap-2"
                                >
                                    <Mail className="h-4 w-4" />
                                    <span>info@aadhan.in</span>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="tel:+919866555701"
                                    className="hover:opacity-80 transition-opacity flex items-center gap-2"
                                >
                                    <Phone className="h-4 w-4" />
                                    <span>+91 98665 55701</span>
                                </a>
                            </div>
                            {/* Address Section */}
                            <div>
                                <address className="not-italic leading-relaxed flex items-start gap-2">
                                    <div>
                                        <MapPin className="h-4 w-4 shrink-0" />
                                    </div>
                                    <div>
                                        Aadhan Media Pvt Ltd2nd Floor, <br /> Park View EnclaveJubilee Hills, <br />Hyderabad,
                                        Telangana 500033
                                    </div>
                                </address>
                            </div>
                            <div>
                                <address className="not-italic leading-relaxed flex items-start gap-2">
                                    <div>
                                        <MapPin className="h-4 w-4 shrink-0" />
                                    </div>
                                    <div>
                                        Aadhan Media Pvt Ltd2nd Floor, <br /> Park View EnclaveJubilee Hills, <br />Hyderabad,
                                        Telangana 500033
                                    </div>
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-1 lg:col-span-1'>
                    <nav className="flex flex-col sm:flex-row lg:flex-row justify-between gap-8 sm:gap-6 text-sm text-bold">
                        <div className="">
                            <div className='mb-4 lg:mb-16 text-base font-semibold'>
                                Company
                            </div>
                            <div className='flex flex-col gap-2 text-xs sm:text-sm text-gray-muted'>
                                <Link to="" className="hover:opacity-80 transition-opacity">About Us</Link>
                                <Link to="" className="hover:opacity-80 transition-opacity">Careers</Link>
                                <Link to="" className="hover:opacity-80 transition-opacity">Terms of Service</Link>
                                <Link to="" className="hover:opacity-80 transition-opacity">Privacy Policy</Link>
                                <Link to="" className="hover:opacity-80 transition-opacity">Blog</Link>
                            </div>
                        </div>
                        <div className="">
                            <div className='mb-4 lg:mb-16 text-base font-semibold'>
                                Products
                            </div>
                            <div className='flex flex-col gap-2 text-xs sm:text-sm text-gray-muted'>
                                <Link to="" className="hover:opacity-80 transition-opacity">About Us</Link>
                                <Link to="" className="hover:opacity-80 transition-opacity">Careers</Link>
                                <Link to="" className="hover:opacity-80 transition-opacity">Terms of Service</Link>
                                <Link to="" className="hover:opacity-80 transition-opacity">Privacy Policy</Link>
                                <Link to="" className="hover:opacity-80 transition-opacity">Blog</Link>
                            </div>
                        </div>
                        <div className="">
                            <div className='mb-4 lg:mb-16 text-base font-semibold'>
                                Get in touch
                            </div>
                            <div className='flex flex-col gap-2 text-xs sm:text-sm text-gray-muted'>
                                <Link to="" className="hover:opacity-80 transition-opacity">About Us</Link>
                                <Link to="" className="hover:opacity-80 transition-opacity">Careers</Link>
                                <Link to="" className="hover:opacity-80 transition-opacity">Terms of Service</Link>
                                <Link to="" className="hover:opacity-80 transition-opacity">Privacy Policy</Link>
                                <Link to="" className="hover:opacity-80 transition-opacity">Blog</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className='flex justify-start md:justify-end lg:justify-center'>
                    <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm">
                        <Link to="/company" className="hover:opacity-80 transition-opacity size-9 sm:size-7 bg-white rounded-full aspect-square grid place-content-center">
                            <ImageRender
                                src="in.png"
                                alt="LinkedIn"
                                className="h-5 w-5 sm:h-4 sm:w-4"
                                assetType='icons'
                            />
                        </Link>
                        <Link to="/products" className="hover:opacity-80 transition-opacity size-9 sm:size-7 bg-white rounded-full aspect-square grid place-content-center">
                            <ImageRender
                                src="fb.png"
                                alt="Facebook"
                                className="h-4 w-4 sm:h-3 sm:w-3"
                                assetType='icons'
                            />
                        </Link>
                        <Link to="/contact" className="hover:opacity-80 transition-opacity size-9 sm:size-7 bg-white rounded-full aspect-square grid place-content-center">
                            <ImageRender
                                src="x.png"
                                alt="X (Twitter)"
                                className="h-4 w-4 sm:h-3 sm:w-3"
                                assetType='icons'
                            />
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="max-w-7xl w-full mx-auto text-sm text-white text-left border-t border-gray-muted py-8">
                © {new Date().getFullYear()} Aadhan. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer