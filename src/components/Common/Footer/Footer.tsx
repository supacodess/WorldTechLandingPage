import React from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Playfair_Display, Quattrocento_Sans } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const primaryFont = Playfair_Display({
    weight: '800',
    subsets: ['latin'],
})
const secondaryFont = Quattrocento_Sans({
    weight: '400',
    subsets: ['latin'],
})

const textClass = `${secondaryFont.className} text-sm mt-2`;

function Footer() {
    return (
        <div className='bg-primary'>
            <div className='flex gap-10 lg:gap-20 w-[80%] mx-auto pt-10 text-white flex-wrap '>
                <div>
                    <Image
                        src='/logo.svg'
                        height={300}
                        width={300}
                        alt='logo'
                        className='mb-4'
                    />
                    <p className='text-sm mt-2'>Elevate your online presense with our harmonious solutions.</p>
                    <div className='flex gap-2 mt-2'>
                        <FaFacebookF className='bg-secondary h-6 w-6 p-1 text-white' />
                        <FaLinkedinIn className='bg-secondary h-6 w-6 p-1 text-white' />
                    </div>
                </div>
                <div className='flex gap-20'>
                    <div className='flex flex-col'>
                        <h2 className={`${primaryFont.className} font-bold text-lg`}>Company</h2>
                        <Link href='/about-us' className={`${textClass}`}>About Us</Link>
                        <Link href='/services' className={`${textClass}`}>Services</Link>
                        <Link href='/team' className={`${textClass}`}>Team</Link>
                        <Link href='/careers' className={`${textClass}`}>Careers</Link>
                    </div>
                    <div>
                        <h2 className={`${primaryFont.className} font-bold text-lg`}>Contact Us</h2>
                        <p className={`${textClass}`}>+977 9843453485</p>
                        <p className={`${textClass}`}>info@worldtech.com.np</p>
                    </div>
                </div>
            </div>
            <hr className='my-6' />
            <div className='w-[80%] mx-auto text-sm pb-4 flex items-center justify-between'>
                <span className={`${secondaryFont.className} text-white`}>
                    <p>&#169; {new Date().getFullYear()} WorldTech</p>
                    <p>All rights reserved</p>
                </span>
                <p className={`${primaryFont.className} text-[#8c91de]`}>supacodes_</p>
            </div>
        </div>
    )
}

export default Footer
