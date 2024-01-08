'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Playfair_Display, Quattrocento_Sans } from 'next/font/google';
const boldSecondaryFont = Quattrocento_Sans({
  weight: '700',
  subsets: ['latin'],
})
const secondaryFont = Quattrocento_Sans({
  weight: '400',
  subsets: ['latin'],
})
const activeNavLinkStyling = 'bg-secondary p-2';
const hoveredNavLinkStyling = 'hover:bg-secondary p-2 duration-500';

export default function HeaderNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className='w-[80%] bg-white mt-[-1.5rem] mx-auto '>
      <div className='bg-primary flex py-6 sm:py-2 px-4 items-center justify-between flex-col sm:flex-row gap-4'>
        <ul className={`${secondaryFont.className} flex gap-6 text-md text-white`}>
          <Link href='/'>
            <span className={pathname == "/" ? activeNavLinkStyling : hoveredNavLinkStyling}>
              HOME
            </span>
          </Link>
          <Link href='/about-us'>
            <span className={pathname == "/about-us" ? activeNavLinkStyling : hoveredNavLinkStyling}>
              ABOUT
            </span>
          </Link>
          <Link href='/services'>
            <span className={pathname == "/services" ? activeNavLinkStyling : hoveredNavLinkStyling}>
              SERVICES
            </span>
          </Link>
          <Link href='/careers'>
            <span className={pathname == "/careers" ? activeNavLinkStyling : hoveredNavLinkStyling}>
              CAREERS
            </span>
          </Link>
        </ul>
        <button className='bg-white p-2 px-4 pt-3 w-full sm:w-fit' onClick={() => router.push('/contact-us')}>
          <p className={`${boldSecondaryFont.className} font-bold text-sm`}> Get In Touch </p>
        </button>
      </div>
    </div>
  )
}
