import ContactForm from '@/components/ContactForm/ContactForm'
import React from 'react'
import { Playfair_Display, Quattrocento_Sans } from 'next/font/google';

const primaryFont = Playfair_Display({
    weight: '600',
    subsets: ['latin'],
})
const secondaryFont = Quattrocento_Sans({
    weight: '400',
    subsets: ['latin'],
})

function page() {
    return (
        <div className='w-[80%] mx-auto my-24'>
            <div className='mb-8'>
                <h1 className={`${primaryFont.className} text-3xl text-center md:text-start`}>Stop & Say <span className='text-primary'>HI</span></h1>
                <p className={`${secondaryFont.className} mt-2`}>Help us tailor our offering by specifying the services you need</p>
            </div>
            <ContactForm />
        </div>
    )
}

export default page
