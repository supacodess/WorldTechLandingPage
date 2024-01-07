import React from 'react'
import { Playfair_Display, Quattrocento_Sans } from 'next/font/google';
import ServicesCard from '@/components/Common/ServicesCard/ServicesCard';
import { outVisionIcons } from '@/helpers/icons';
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
    <div className='text-center'>
      <h1 className={`${primaryFont.className} text-5xl`}>Welcome to <span className='text-primary'>WorldTech</span></h1>
      <h4 className={`${secondaryFont.className} mt-4`}>
        At <span className={`${primaryFont.className} text-primary text-md`}>WorldTech</span>, we don't just navigate the digital landscape; we shape it. Our journey is one of passion, innovation, and a
        commitment to delivering digital excellence. As you explore our story, meet the team, and discover our values, you'll
        understand why we are more than a digital agency—we are your partners in success.
      </h4>

      {/* Our story */}
      <div className='flex justify-evenly gap-10 flex-col sm:flex-row my-24'>
        <h1 className={`${primaryFont.className} text-4xl flex-1 flex gap-2 flex items-center justify-center`}>Our <span className='text-primary'>Story</span></h1>

        <div className='w-1 bg-primary h-100 mr-4 hidden sm:block'></div>

        <h4 className={`${secondaryFont.className} text-center md:text-start`}>
          Founded on the belief that every brand has a unique digital narrative waiting to be told, <span className={`${primaryFont.className} text-primary text-md`}>WorldTech</span> started its journey as a
          small team with a big vision. Our story is a chronicle of turning this vision into reality, overcoming challenges, and
          crafting digital experiences that resonate. We believe that each project is an opportunity to weave a unique tale of success.
        </h4>
      </div>

      {/* Our Vision */}
      <section>
        <div className='flex gap-10 flex-col sm:flex-row my-24'>
          <h1 className={`${primaryFont.className} text-4xl flex gap-2 flex items-center justify-center`}>Core <span className='text-primary'>Values</span></h1>
          <div className='w-[0.1rem] bg-primary h-100 mr-4 hidden sm:block'></div>
          <h4 className={`${secondaryFont.className} flex items-center justify-center`}>
            Our core values define who we are and guide every interaction, decision, and project.
          </h4>
        </div>

        <div className='flex justify-evenly flex-col sm:flex-row my-24'>
          <ServicesCard data={outVisionIcons} />
        </div>
      </section>
    </div>
  )
}

export default page
