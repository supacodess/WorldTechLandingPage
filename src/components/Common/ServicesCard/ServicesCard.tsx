import Image from 'next/image'
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
interface data {
    name?: string,
    src?: string,
    content?: string
}

function ServicesCard({ data }: { data: data[] }) {
    return (
        <>
            {
                data.map((icon, index) => (
                    <div
                        className='
                                w-full
                                md:w-[20rem] 
                                px-6 
                                py-6 
                                flex 
                                flex-col 
                                duration-500 
                                items-center 
                                text-center 
                                hover:shadow-[0_35px_60px_-26px_#9fa0ff]
                                cursor-pointer
                                ' key={index}
                    >
                        <Image
                            src={icon.src!}
                            height={100}
                            width={100}
                            alt={`${icon.name}-icon`}
                        />
                        <h3 className={`${primaryFont.className} font-bold text-md text-primary my-2 mt-4`}>{icon?.name}</h3>
                        <p className={`${secondaryFont.className} text-sm`}>
                            {icon.content}
                        </p>
                    </div>
                ))
            }
        </>
    )
}

export default ServicesCard
