'use client'
import React, { useState } from 'react'
import { Quattrocento_Sans } from 'next/font/google';
import { formOptions } from '@/helpers/formOptions';

const secondaryFont = Quattrocento_Sans({
    weight: '400',
    subsets: ['latin'],
})

const inputClass = "block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
const labelClass = `${secondaryFont.className}`;
const optionClass = 'border-2 border-grey rounded-lg w-fit p-2 hover:bg-primary hover:text-white hover:border-primary cursor-pointer duration-300';
const hoverdOptionClass = "border-2 rounded-lg w-fit p-2 bg-primary text-white border-primary cursor-pointer"
function ContactForm() {
    const [option, setOption] = useState('Web Design & Development');
    console.log('option is >> 0', option);

    return (
        <div className='flex justify-between flex-col md:flex-row gap-6'>
            <form className='flex flex-col gap-2 flex-1'>
                    <label className={labelClass}> Your Name</label>
                    <input type='text' className={inputClass} />
                    <label className={labelClass}>Your Email</label>
                    <input type='text' className={inputClass} />
                    <label className={labelClass}>Select what you would like to inquire about:</label>
                    <div className='flex gap-4 flex-col md:flex-row md:gap-6'>
                        {
                            formOptions.map((formOption, index) => (
                                <>
                                    {
                                        formOption == option
                                            ? <div className={hoverdOptionClass} onClick={() => setOption(formOption)}>
                                                <p className={labelClass}> {formOption} </p>
                                            </div>
                                            : <div className={optionClass} onClick={() => setOption(formOption)}>
                                                <p className={labelClass}> {formOption} </p>
                                            </div>
                                    }
                                </>
                            ))
                        }
                    </div>
                    <label className={labelClass}>Share your message</label>
                    <textarea id="w3review" name="w3review" rows={4} cols={50} className={inputClass} />
                    <button className='bg-primary text-white py-4 rounded border-2 border-white hover:border-primary hover:bg-white hover:text-primary duration-300'>
                        Send Message
                    </button>
            </form>
            <div className='flex-1'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.0674604947103!2d85.43241688257403!3d27.664328077841912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aabea223d55%3A0x6171d687bb703fec!2sMC8M%2BPC6%2C%20Bhaktapur%2044800!5e0!3m2!1sen!2snp!4v1704625252437!5m2!1sen!2snp"
                    width=""
                    height=""
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className='w-full h-[20rem] md:h-full '
                >
                </iframe>
            </div>
        </div>
    )
}

export default ContactForm
