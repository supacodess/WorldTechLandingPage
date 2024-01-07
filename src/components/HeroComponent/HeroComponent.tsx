import Image from 'next/image';
import React from 'react';
import { FaAngleDown } from "react-icons/fa";
import { Playfair_Display, Quattrocento_Sans } from 'next/font/google';
const primaryFont = Playfair_Display({
    weight: '600',
    subsets: ['latin'],
})
const secondaryFont = Quattrocento_Sans({
    weight: '400',
    subsets: ['latin'],
})
function HeroComponent() {

    return (
        <div className={'text-center'}>
            <h1 className={`${primaryFont.className} font-bold text-5xl`}>Your <span className='text-primary'>Vision</span>, Our Digital <span className='text-primary'>Expertise.</span> </h1>
            <p className={`${secondaryFont.className} mt-4`}>Elevate your online presense with our harmonious solutions.</p>
            <button className='bg-primary px-4 py-2 text-white mt-4'>
                <span className='flex items-center gap-2'>
                    <p className={secondaryFont.className}>Explore More</p>
                    <FaAngleDown />
                </span>
            </button>
            <Image
                src='/kathmandu_svg.svg'
                alt='Kathmandu_svg'
                width={0}
                height={0}
                sizes="100vw"
                className='mt-[8rem]'
                style={{ width: '100%', height: 'fit' }}
            />
        </div>
    )
}

export default HeroComponent
