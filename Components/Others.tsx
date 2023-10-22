import React from 'react'
import Carousel from './Carousel'

const people = [
    {
        name:"Zak Godwin",
        prof:"https://a.storyblok.com/f/89243/600x600/82a5b759eb/zak.png",
        cover:"https://a.storyblok.com/f/90417/596x272/31d527a293/screen-shot-2022-10-25-at-3-18-32-pm.png"
    },
    {
        name:"Carol Gibson",
        prof:"https://a.storyblok.com/f/89243/600x600/39ee38819a/carol.png",
        cover:"https://a.storyblok.com/f/90417/700x380/41825db215/screen-shot-2022-10-26-at-1-19-58-pm.png"
    },
    {
        name:"Malcolm Richmond",
        prof:"https://a.storyblok.com/f/89243/600x600/a3d4ec1df5/malcolm.png",
        cover:"https://a.storyblok.com/f/90417/562x324/ee64fec65c/screen-shot-2022-10-26-at-1-25-00-pm.png"
    },
    {
        name:"Louise Annecarr",
        prof:"https://a.storyblok.com/f/87390/754x754/56c3c49fd4/30219332301.jpeg",
        cover:"https://a.storyblok.com/f/87390/1000x500/f0e0245d4c/s-sunset-beach.jpeg"
    }
]

export default function Others() {
  return (
    <div className='flex flex-col gap-3 items-center mt-12'>
        <h2 className='text-ob text-center md:text-left font-bold text-3xl md:text-5xl'>See how others are celebrating</h2>
        <div className='flex gap-3 justify-center mt-4 mb-14'>
          {people.map((person,i) => (
            <Carousel person={person} key={i} />
          ))}
        </div>
    </div>
  )
}
