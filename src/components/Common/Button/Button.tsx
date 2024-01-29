'use client';
import { useRouter } from 'next/navigation';
import React from 'react'
import { Quattrocento_Sans } from 'next/font/google';
const secondaryFont = Quattrocento_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
})

const btnClass = `
     ${secondaryFont.className} border-2
    border-primary
    p-4 
    text-white
    hover:bg-white
    hover:text-primary
    duration-500
    cursor-pointer
    bg-primary
    `

function Button(
    { label, isLoadingLabel, url, isLoading }: { label: string, isLoadingLabel: string, url: string, isLoading: boolean }
) {
    const router = useRouter();

    const content = isLoading
        ? <button className={btnClass} disabled>
            {isLoadingLabel}
        </button>
        : <button className={`${btnClass} bg-primary`} onClick={() => router.push(`/${url}`)}>
            {label}
        </button>

    return (
        <>
            {content}
        </>
    )
}

export default Button
