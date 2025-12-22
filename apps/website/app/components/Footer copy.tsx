import React from 'react'
import { Link } from 'react-router'
import ImageRender from '~/shared/ImageRender'
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#191A23] text-white rounded-t-[45px] mt-20  px-8 py-16">
            <div className='max-w-7xl mx-auto flex flex-col justify-center gap-10'>
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo */}
                    <div className="flex items-center">
                        <ImageRender
                            src="aadhan-logo-white.svg"
                            alt="Aadhan Logo"
                            className="h-7 w-auto"
                        />
                    </div>

                    {/* Navigation Links */}


                    <nav className="flex flex-wrap gap-6 text-sm">
                        <Link to="/company" className="hover:opacity-80 transition-opacity size-9 bg-white rounded-full aspect-square grid place-content-center">
                            <ImageRender
                                src="in.png"
                                alt="Aadhan Logo"
                                className="h-5 w-5"
                                assetType='icons'
                            />
                        </Link>
                        <Link to="/products" className="hover:opacity-80 transition-opacity size-9 bg-white rounded-full aspect-square grid place-content-center">
                            <ImageRender
                                src="fb.png"
                                alt="Aadhan Logo"
                                className="h-4 w-4"
                                assetType='icons'
                            />
                        </Link>
                        <Link to="/contact" className="hover:opacity-80 transition-opacity size-9 bg-white rounded-full aspect-square grid place-content-center">
                            <ImageRender
                                src="x.png"
                                alt="Aadhan Logo"
                                className="h-4 w-4"
                                assetType='icons'
                            />
                        </Link>
                    </nav>
                </div>
                <div className="">
                    <div>
                        <div>
                            <h2 className="text-lg font-semibold text-white">Contact us</h2>
                        </div>

                        {/* Main Content Grid */}
                        <div className="felx flex-col">
                            {/* Email Section */}
                            <div>
                                <a
                                    href="mailto:info@aadhan.in"
                                    className="text-base hover:opacity-80 transition-opacity flex items-center gap-2"
                                >
                                    <Mail className="h-4 w-4" />
                                    <span>info@aadhan.in</span>
                                </a>
                            </div>
                            <div>
                                <a
                                    href="mailto:info@aadhan.in"
                                    className="text-base hover:opacity-80 transition-opacity flex items-center gap-2"
                                >
                                    <Phone className="h-4 w-4" />
                                    <span>+91 98665 55701</span>
                                </a>
                            </div>
                            {/* Address Section */}
                            <div>
                                <address className="text-base not-italic leading-relaxed flex items-start gap-2">
                                    <div>
                                        <MapPin className="h-4 w-4" />
                                    </div>
                                    <div>
                                        Aadhan Media Pvt Ltd2nd Floor, Park View EnclaveJubilee Hills, Hyderabad,
                                        Telangana 500033
                                    </div>
                                </address>
                            </div>

                            {/* Tagline Section */}
                            <div>
                                <h3 className="text-sm font-medium mb-4 opacity-80">Tagline</h3>
                                <p className="text-base leading-relaxed">
                                    Telugu content<br />
                                    guaranteed.
                                </p>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-white/20 mb-8"></div>

                        {/* Bottom Section */}
                        {/* Copyright */}
                        <div className="text-sm opacity-60">
                            © {new Date().getFullYear()} Aadhan. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer