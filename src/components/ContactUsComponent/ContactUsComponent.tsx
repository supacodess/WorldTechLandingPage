import React from 'react'
import { Playfair_Display, Quattrocento_Sans } from 'next/font/google';
const primaryFont = Playfair_Display({
    weight: '800',
    subsets: ['latin'],
})
const secondaryFont = Quattrocento_Sans({
    weight: '400',
    subsets: ['latin'],
})

function ContactUsComponent({ header, content, label }: { header: string, content: string, label: string }) {
    return (
        <div className='flex px-0 md:px-4 w-[80%] mx-auto flex-col md:flex-row justify-between items-start md:items-center mb-4 mt-2'>
            <div className='flex-1'>
                <h1 className={`${primaryFont.className} text-white text-4xl font-bold`}>{header}</h1>
                <p className={`${secondaryFont.className} text-white text-md mt-2`}>
                    {content}
                </p>
            </div>
            <button
                className={`
                bg-white 
                border-1 
                border-white 
                md:w-fit
                px-4
                py-2 
                hover:border-red-500
                hover:text-white 
                hover:border-1
                hover:bg-secondary 
                duration-500
                mt-3
                md:mt-0
                pt-2.2
                flex
                ${secondaryFont.className}
                `}
            >
                {label}
            </button>
        </div>
    )
}

export default ContactUsComponent
