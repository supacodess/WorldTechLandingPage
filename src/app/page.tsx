import HeroComponent from '@/components/HeroComponent/HeroComponent'
import Image from 'next/image'
import TechStackComponent from '@/components/TechStackComponent/TechStackComponent'
import AboutUsComponent from '@/components/AboutUsComponent/AboutUsComponent'
import ContactUsComponent from '@/components/ContactUsComponent/ContactUsComponent'

export default function Home() {
  return (
    <main className="pt-24 relative">
      <div className='w-[80%] mx-auto'>
        <HeroComponent />
      </div>
      <div className='bg-primary w-[100%] mt-[-0.9rem]' id='explore'>
        <TechStackComponent />
      </div>
      <div className='w-[80%] mx-auto'>
        <AboutUsComponent />
      </div>
      <div className='bg-secondary p-8 mt-20'>
        <ContactUsComponent
          header="Let's chat"
          content="Need a website or app? Let's talk! Send us a message, and we'll help
          you navigate the world of digital possibilities."
          label="Say Hello"
          href="contact-us"
        />
      </div>

    </main>
  )
}
