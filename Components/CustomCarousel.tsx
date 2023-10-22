"use client"

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Claims = [
    {
        text:"“This is an amazing alternative to Facebook for something as personal and private as losing a loved one. I don’t need Facebook retargeting me for coffins again (this actually happened). Wish I’d known about this sooner.” — L. Burton, Australia"
        
    },
    {
        text:"“Thank you for allowing me to keep my memories of my mum at my fingertips on my phone. I love to have the ability to reminisce just when I need a pick up.”"
    },
    {
        text:"“I love that this site is somewhere all my family can visit to remember my mum and other relatives who are no longer with us.”"
    },
    {
        text:"“A sense of comfort (gained from the contributions) that the person we all lost was loved and had a rich and beautiful life.” — Maja, Croatia"
    }
]

export default function CustomCarousel() {
  return (
    <div className='mt-10 relative'>
    <Carousel
    showThumbs={false}
    autoPlay={true}
    infiniteLoop
    interval={3000}
    showArrows={false}
    showStatus={false}
    >
       {Claims.map((claim,i) => (
        <div key={i} className='font-bold text-ob text-2xl md:text-4xl w-[90%] md:w-[52%] mx-auto mb-[70px] text-center leading-oh'>
            {claim.text}
        </div>
       ))}
   </Carousel>
   {/* LINE */}
   {/* <div className='absolute w-full top-60 flex justify-center'>
   <div className='border w-64 border-t-1 border-oblue border-opacity-30' />
   </div> */}
   </div>

  )
}
