import Image from 'next/image'
import React from 'react'
const media = [
    {
        img:"https://a.storyblok.com/f/89243/x/38f8d1dc89/bbc-orig.svg",
        alt:"bbc"
    },
    {
        img:"https://a.storyblok.com/f/89243/x/b237842ba1/wired-orig.svg",
        alt:"wired",
    },
    {
        img:"https://a.storyblok.com/f/89243/750x200/9446b483ab/the-australian-png-1.png",
        alt:"theaustralian"
    },
    {
        img:"https://a.storyblok.com/f/89243/x/990b4e3345/australian-financial-review-orig.svg",
        alt:"financial review"
    },
    {
        img:"https://a.storyblok.com/f/89243/300x300/925a764cd7/my-business12.png",
        alt:"award winning"
    }
]

export default function Asseen() {
  return (
    <div className='flex flex-col mt-[75px] mb-14 gap-5 '>
        <h4 className='text-ob font-bold text-center text-3xl md:text-5xl '>As seen in</h4>

        <div className='flex flex-col md:flex-row items-center gap-6 mt-10  justify-center '>
           {media.map((med,i)=>(
            <Image 
               key={i}
               src={med.img}
               alt={med.alt}
               width={150}
               height={150}
               className='w-[110px] md:w-[150px]'
            />
           ))}
        </div>


        {/* DOWNLOAD NOW */}

        <div className='flex flex-col gap-10 items-center mt-10'>
            <h4 className='text-3xl md:text-5xl font-bold text-ob '>Download now</h4>

            <div className='flex flex-col md:flex-row items-center gap-3'>
              <Image src={"https://a.storyblok.com/f/87390/x/d8c18b7a52/app-store.svg"} 
              alt='appstore'
              width={200}
              height={200}
              />

              <Image
              src={'https://a.storyblok.com/f/87390/x/bbc85d3cc7/google-play.svg'}
              alt='google'
              width={200}
              height={200}
              />

            </div>

        </div>
    </div>
  )
}
