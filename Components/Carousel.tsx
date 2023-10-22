import Image from 'next/image'
import React from 'react'

interface props  {
    name: string,
    prof: string,
    cover: string
}

interface personprops {
    person: props
}

export default function Carousel({person}:personprops) {
  return (
    <div className='w-[240px] h-[260px] border-omar border-opacity-40 border-oblue rounded-2xl cursor-pointer'>
      <div className='h-[50%] relative'>
       <Image src={person.cover} alt='cover' width={100} height={100} className='h-full w-full object-cover object-center rounded-t-2xl'/>

       <div className='absolute -bottom-2 right-[50%] transform translate-x-[50%]'>
           <Image src={person.prof} width={100} height={100} alt=':(' className='w-24 object-cover rounded-full border-4 '/>
       </div>
       </div>

       <h3 className='text-center mt-9 font-bold text-lg'>In loving memory of</h3>
       <p className='text-center font-semibold mt-1'>{person.name}</p>
    </div>
  )
}
