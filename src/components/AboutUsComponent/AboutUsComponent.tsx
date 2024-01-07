import { whatWeDoIcons } from '@/helpers/icons'
import Image from 'next/image'
import React from 'react'
import { Playfair_Display, Quattrocento_Sans } from 'next/font/google';
import ServicesCard from '../Common/ServicesCard/ServicesCard';
const primaryFont = Playfair_Display({
    weight: '600',
    subsets: ['latin'],
})
const secondaryFont = Quattrocento_Sans({
    weight: '400',
    subsets: ['latin'],
})

function AboutUsComponent() {
    return (
        <div className=''>
            <div className='flex items-center justify-center my-24 flex-col md:flex-row'>
                <h2 className={`${primaryFont.className} w-[10rem] text-2xl`}>What We <span className='text-primary'>Do!</span></h2>
                <div className='w-1 bg-primary h-14 mr-4 hidden md:block'></div>
                <p className={`${secondaryFont.className} md:w-[40rem] mt-6 text-center md:text-start md:mt-0`}>
                    We're digital storytellers, crafting visually stunning websites & engaging apps
                    that bring your ideas to life with a touch of innovation & a dash of code magic.
                </p>
            </div>

            <div className='flex justify-evenly flex-col sm:flex-row'>
                <ServicesCard data={whatWeDoIcons} />
            </div>
        </div>
    )
}

export default AboutUsComponent
