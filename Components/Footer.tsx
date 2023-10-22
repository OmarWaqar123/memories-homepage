import Image from 'next/image'
import React from 'react'

const socials = [
    "https://a.storyblok.com/f/88517/x/4813d81bbe/facebook-1.svg",
    "https://a.storyblok.com/f/89243/x/f7b446e7f8/linkedin.svg",
    "https://a.storyblok.com/f/89243/x/de0a10aee3/instagram.svg",
    "https://a.storyblok.com/f/89243/x/35abecb506/youtube.svg"
]

export default function Footer() {
  return (
    <div className='mt-auto'>
        <div className='w-[90%] mx-auto bg-olightb  rounded-t-3xl px-10 md:px-24  pt-9 flex flex-col md:flex-row '>
               
                 {/* LOGO AND SOCIALS */}
                 <div className='flex mx-auto md:mx-0 flex-1 flex-col gap-5'>
                   <Image src={'https://a.storyblok.com/f/89243/x/ae3b0270d4/logo.svg'} alt='logo' width={140} height={140} />

                   <div className='flex gap-2 items-center'>
                        {socials.map((social,i) => (
                            <Image src={social} alt='social' width={22} height={22} key={i} />
                        ))}
                   </div>
                 </div>

                 {/* PRODUCTS */}
                 <div className='flex mx-auto md:mx-0 mt-8 md:mt-0 flex-1 flex-col gap-2 text-sm text-center md:text-left'>
                    <p className='text-ogray font-bold'>Products</p>
                    <p className='text-oblue text-base tracking-tight font-semibold'>Online memorial</p>
                    <p className='text-oblue text-base tracking-tight font-semibold'>Living Timeline</p>
                    <p className='text-oblue text-base tracking-tight font-semibold'>Pet memorial</p>
                 </div>

                 {/* RESOURCES */}
                 <div className='flex mx-auto md:mx-0 mt-8 md:mt-0 flex-1 flex-col gap-2 text-sm text-center md:text-left'>
                      <p className='text-ogray font-bold'>Resources</p>
                      <p className='text-oblue text-base tracking-tight font-semibold'>Blog</p>
                      <p className='text-oblue text-base tracking-tight font-semibold'>Partners</p>
                 </div>

                 {/* COPYRIGHT */}
                 <div className='flex flex-1 flex-col gap-2 md:text-right text-center mx-auto md:mx-0 mt-8 md:mt-0 mb-5'>
                    <p className='text-ogray font-bold'>Copyright © 2013 - 2023 Memories™. All Rights Reserved.</p>
                    <p className='text-oblue text-base tracking-tight font-semibold'>Terms and Conditions</p>
                    <p className='text-oblue text-base tracking-tight font-semibold'>Privacy Policy</p>

                 </div>
        </div>
        
    </div>
  )
}
