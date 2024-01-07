import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPhone, FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Playfair_Display, Quattrocento_Sans } from 'next/font/google';
const primaryFont = Playfair_Display({
    weight: '800',
    subsets: ['latin'],
})
const secondaryFont = Quattrocento_Sans({
    weight: '400',
    subsets: ['latin'],
})

function HeaderTopComponent() {
    return (
        <div className='py-8 pb-[2.5rem] shadow-[0_35px_60px_-26px_#9fa0ff] bg-white'>
            <div className='flex justify-center md:justify-between items-center w-[80%] mx-auto'>
                <h1 className={`${primaryFont.className} text-lg font-bold`}> WorldTech </h1>
                <div className='gap-14  md:flex hidden'>

                    {/* Socials */}
                    <div className='flex gap-2 items-center'>
                        <FaAddressCard className="h-10 w-10 p-2 bg-primary text-white" />
                        <div className={secondaryFont.className}>
                            <h6 className='font-bold text-[0.8rem]'> OUR SOCIAL </h6>
                            <div className='flex gap-1'>
                                <FaFacebookF className='bg-primary h-6 w-6 p-1 text-white' />
                                <FaLinkedinIn className='bg-primary h-6 w-6 p-1 text-white' />
                            </div>
                        </div>
                    </div>
                    {/* Contact Info */}
                    <div className={`${secondaryFont.className} flex gap-2 items-center`}>
                        <FaPhone className="h-10 w-10 p-2 bg-primary text-white" />
                        <span>
                            <h6 className='font-bold text-[0.8rem]'> CALL US </h6>
                            <p className='text-[0.8rem]'>+977 9843453485</p>
                        </span>
                    </div>

                    {/* Mail */}
                    <div className='flex gap-2 items-center'>
                        <MdEmail className="h-10 w-10 p-2 bg-primary text-white" />
                        <div className={secondaryFont.className}>
                            <h6 className='font-bold text-[0.8rem]'>MAIL US</h6>
                            <p className='text-[0.8rem]'>info@worldtech.com.np</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopComponent
