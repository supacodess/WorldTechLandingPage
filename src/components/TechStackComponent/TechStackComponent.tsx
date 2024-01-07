'use client'
import React from 'react'
import Image from 'next/image'
import { icons } from '@/helpers/icons'
import { Quattrocento_Sans } from 'next/font/google';
const secondaryFont = Quattrocento_Sans({
    weight: '700',
    subsets: ['latin'],
})

function TechStackComponent() {
    return (
        <div className='py-6 w-[80%] mx-auto'>
            <div className='flex items-center justify-between'>
                <marquee>
                    <div className='flex gap-20'>
                        {
                            icons.map((icon, index) => (
                                <p key={index} className={`${secondaryFont.className} text-[#babce3]`}>{icon.name}</p>
                            ))
                        }
                    </div>
                </marquee>
            </div>

        </div>
    )
}

export default TechStackComponent