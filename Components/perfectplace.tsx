import Image from 'next/image'
import React from 'react'

const reasons = [
    {
        head:"Keep them close",
        para:"Reconnect with your late loved one anywhere, anytime, on our mobile app"
    },
    {
        head:"Everything in one place",
        para:"Collect and share all the photos, videos and amazing stories from their life."
    },
    {
        head:"Reminisce together",
        para:"Easily collaborate to create a beautiful, memorial that keeps growing over time."
    },
    {
        head:"For those near and far",
        para:"Share with anyone who can't be at the funeral or memorial service"
    },
    {
        head:"Discover untold stories",
        para:"Let current and future generations get to  know your loved one better."
    },
    {
        head:"Privacy assured",
        para:"You control who can see and add to the memorial, always."
    }
]

export default function Perfectplace() {
  return (
    <div className='mt-28 bg-olightb pt-6 pb-14'>
        <div className='w-[90%] md:w-[60%] mx-auto mt-14'>
              <h4 className='text-ob text-center md:text-left font-bold text-3xl md:text-5xl'>The perfect place to reminisce</h4>

              <div className='flex flex-col md:flex-row gap-3 mt-10 '>
                {/* LEFT SIDE */}
                <div className='w-full md:w-[40%] text-obrown flex flex-col justify-center'>
                    {reasons.map((reason,i) => (
                        <div key={i}>
                        <h5 className=' font-bold text-xl'>{reason.head}</h5>
                        <p className='text-lg mb-5 max-w-full md:max-w-[80%] '>{reason.para}</p>
                        </div>
                    ))}
                </div>

                {/* RIGHT SIDE */}
                <div className='flex-1'>
                  <Image src={'https://a.storyblok.com/f/89243/904x1050/1d44d544ea/03_albert-stevens_ipadiphone.png'} alt='look' width={1000} height={1000} className='w-full h-full'/>

                </div>
              </div>
        </div>
    </div>
  )
}
