import React from 'react';
import { Playfair_Display, Quattrocento_Sans } from 'next/font/google';
import ServicesCard from '@/components/Common/ServicesCard/ServicesCard';
import { whatWeDoIcons } from '@/helpers/icons';
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
    <section>
      <div className='w-[80%] mx-auto'>
        <h1 className={`${primaryFont.className} font-bold text-5xl text-center`}>Explore Our <span className='text-primary'>Services</span></h1>
        <h1 className={`${secondaryFont.className} font-bold text-2xl text-center mt-6 text-lg`}>
          Welcome to the <span className={`${primaryFont.className} text-primary text-md`}> WorldTech </span>, where digital dreams come to life. Our range of services is designed to transform
          your ideas into innovative, user-friendly, and visually stunning digital experiences. Explore the avenues through
          which we can elevate your brand in the digital landscape.
        </h1>
      </div>
      <div className='flex justify-evenly flex-col sm:flex-row my-24'>
        <ServicesCard data={whatWeDoIcons} />
      </div>
      <div className='bg-secondary p-8 mt-20'>
        <ContactUsComponent
          header="Ready to explore how our services can amplify your digital presence?"
          content=" Let's start a conversation. Connect with us, and let's turn your digital dreams into reality."
          label="Contact"
        />
      </div>
    </section>
  )
}

export default page
