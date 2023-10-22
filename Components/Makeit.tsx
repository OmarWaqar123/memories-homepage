import Image from 'next/image'
import React from 'react'
import { Dot } from 'lucide-react';


const solgans = [
    {
    slo:"Keep the conversation going with a memorial that lasts for generations."
    },
    {
        slo:"Capture countless memories from your loved one's incredible life."
    },
    {
        slo:"Invite family and friends to share their stories, too."
    },
    {
        slo:"Safe, secure and ad-free."
    },
    {
        slo:"Easy to build and yours forever. "
    },
    {
        slo:"Visit whenever you like, wherever you may be."
    }

]

export default function Makeit() {
  return (
    <div className='bg-oblue pt-14 pb-14 relative'>
         <div className='flex gap-20 w-[90%] md:w-[55%] mx-auto'>
              <Image src={'https://a.storyblok.com/f/89243/863x1763/365d5f2d0d/02_peter-johnston_iphone.png'} alt='mobile' width={500} height={511} className='w-60 hidden md:block' />

              <div className='h-[90%] '>
                <h4 className='text-white font-bold text-4xl md:text-5xl mb-8'>Make the online memorial yours forever for AUD$219
                </h4>
                <div className='w-[100%]'>
                {/* list-disc list-inside */}
                <ul className='list-none text-white text-base md:text-lg'>
                {
                    solgans.map((slogn,i) => (
                      //  <ul key={i} className='text-white md:-ml-3 '>
                      //     <li className='flex items-center  text-base md:text-lg '><Dot size={60} className='-m-2'/>{slogn.slo}</li>
                      //  </ul>

                      // <div className='text-white flex items-center'>
                      //   <Dot size={40} className=''/>
                      //   <p className='flex-wrap'>{slogn.slo}</p>
                      // </div>

                      <li key={i} className='mb-2 flex gap-2 '>
                        <span className="inline-block w-[5px] h-[5px] mt-2 bg-white rounded-full"></span> 
                        <span>{slogn.slo}</span> 
                      </li>
                    ))
                }
                </ul>
                </div>


              {/* BUTTON */}
              <button className='bg-olighty mt-7 text-base md:text-lg font-bold px-7 py-2 rounded-lg'>
                Make it forever
              </button>
              </div>

         </div>
    </div>
  )
}
