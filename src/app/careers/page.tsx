import React from 'react'
import { Playfair_Display, Quattrocento_Sans } from 'next/font/google';
import ServicesCard from '@/components/Common/ServicesCard/ServicesCard';
import { whyUsIcons } from '@/helpers/icons';
import ContactUsComponent from '@/components/ContactUsComponent/ContactUsComponent';
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
        <div className="flex w-[80%] mx-auto h-fit flex-col pt-24 relative text-center">
            <section>
                <h1 className={`${primaryFont.className} text-5xl`}>Join Our Team at <span className='text-primary'>WorldTech</span></h1>
                <p className={`${secondaryFont.className} mt-4`}>
                    Are you ready to be part of a dynamic team that thrives on innovation, creativity,
                    and a passion for digital excellence? At <span className={`${primaryFont.className} text-primary text-md`}>WorldTech</span>, we believe that our greatest asset
                    is our people. Explore the opportunities to grow and contribute in a collaborative and
                    exciting work environment.
                </p>
            </section>

            {/* Why WorldTech */}
            <section>

                <div className='flex justify-evenly gap-10 flex-col sm:flex-row my-28'>
                    <h1 className={`${primaryFont.className} text-4xl flex-1 flex gap-2 flex items-center justify-center`}>Why <span className='text-primary'>WorldTech?</span></h1>

                    <div className='w-1 bg-primary h-100 mr-4 hidden sm:block'></div>

                    <h4 className={`${secondaryFont.className} text-center md:text-start`}>
                        At <span className={`${primaryFont.className} text-primary text-md`}>WorldTech</span>, we are more than just a workplace; we are a community of like-minded individuals driven by a
                        shared commitment to pushing boundaries and creating impactful digital experiences. Here's what sets us apart:
                    </h4>
                </div>
                <div className='flex justify-evenly flex-col sm:flex-row mb-24'>
                    <ServicesCard data={whyUsIcons} />
                </div>
            </section>

            {/* Open Position */}
            <section>
                <h1 className={`${primaryFont.className} text-4xl`}>Current openings </h1>
                <p className={`${secondaryFont.className} mt-2`}>There are no vacancies available at this time.</p>
            </section>

            {/* Email */}
            <section>
            <p className={`${secondaryFont.className} my-10`}>
                If you're passionate about what we do and see yourself contributing to our team, 
                feel free to reach out. Send us your resume and a brief cover letter expressing your 
                interest and outlining how you believe you can contribute to <span className={`${primaryFont.className} text-primary text-md`}>WorldTech</span>. Send your materials to 
                <span className={`${primaryFont.className} text-primary text-md`}> info@worldtech.com.np </span>
                </p>
            </section>
        </div>
    )
}

export default page
