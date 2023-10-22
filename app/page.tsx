import Image from 'next/image'
import { Dot } from 'lucide-react';
import Others from '@/Components/Others';
import Perfectplace from '@/Components/perfectplace';
import Makeit from '@/Components/Makeit';
import Memorial from '@/Components/Memorial';
import CustomCarousel from '@/Components/CustomCarousel';
import Asseen from '@/Components/Asseen';
import Footer from '@/Components/Footer';


export default function Home() {
  const backgroundImageUrl = 'https://a.storyblok.com/f/89243/4096x2734/af744f8e78/homepage-banner_desktop_may-2023.jpg'
  return (
    <> 
    <div className='bg-cover bg-left md:bg-center h-[97vh]'style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }} >
        <div className='w-full md:w-[50%] h-full flex items-center justify-center md:justify-end pt-20 md:pt-0 px-10  md:px-0'> 
          <div className=''>
           <h1 
           className='flex-wrap font-bold text-3xl text-center   md:text-left md:text-6xl max-w-lg text-white leading-oh mb-4 '>
            Rediscover all her incredible stories
           </h1>
           <p className='flex-wrap text-white font-semibold md:font-bold text-lg md:text-2xl text-center md:text-left max-w-xl'>The only online memorial that keeps the conversation 
            going with family and friends long after she's gone. 
            </p>

            <div className='flex flex-col md:flex-row -ml-7 text-white mt-3 font-semibold md:font-extrabold text-lg md:text-xl'>
               <p className='flex items-center flex-1 justify-center'><Dot size={66} />Easy to build</p>
               <p className='flex   items-center flex-1 justify-center'><Dot size={66} />100% secure</p>
               <p className='flex items-center flex-1 justify-center'><Dot size={66}/>Yours forever</p>

            </div>

            <button className='bg-oy px-14 py-3 font-bold rounded-xl text-base md:text-lg mt-4 mx-16 md:mx-0'>
              Try it free
            </button>
           </div>
        </div>

         
    </div>

    {/* OTHERS SECTION */}
    <Others/>

    {/* PERFECT PLACE TO REMINISCE */}
    <Perfectplace/>

    {/* MAKE IT FOREVER */}
    <Makeit/>

    {/* MEMORIAL FOR DAD */}
    <Memorial/>

    {/* CAROUSEL */}
    <CustomCarousel/>

    {/* AS SEEN */}
    <Asseen/>

    {/* FOOTER */}
    <Footer/>
    </>
      )
}
