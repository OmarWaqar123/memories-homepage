import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Search } from 'lucide-react';


export default function Navbar() {
  return (
    <nav className='flex justify-center fixed top-0 z-50 w-full'>
        
    <div className='w-[90%] bg-oblue h-24 flex justify-between items-center rounded-bl-3xl rounded-br-3xl '>
        {/*NAV LEFT CONTENT  */}
          <div className='pl-8 flex flex-1 gap-2 items-center'>
             <div className=' w-9 h-9 border border-white border-opacity-50 flex justify-center items-center rounded-full cursor-pointer'>
            <Image src={"/burger.png"} width={24} height={24} alt=':(' />
           </div>

            <p className='text-white font-bold text-xl cursor-pointer hidden md:block'>Menu</p>
         </div>

         {/* LOGO */}
         <div className='w-1/3 flex items-center justify-center'>
        <Link href={"/"} >
         <Image src={'/logo.png'} alt='logo' width={150} height={150}  />
        </Link>
        </div>

        {/* NAV RIGHT CONTENT */}
        <div className='flex w-1/3 gap-3 items-center justify-end pr-7'>
            
            <div className=' w-9 h-9 border border-white border-opacity-50 flex justify-center items-center rounded-full cursor-pointer'>
            <Search color='#ffff' size={'20'} strokeWidth={3}/>
            </div>

            <button className='hidden md:block  bg-oy px-14 py-3 font-bold rounded-xl text-lg'>Try it free</button>
            
            <Link href={'/signin'} className='hidden md:block'>
            <p className='text-white font-bold text-lg '>Sign in</p>
            </Link>
        </div>

    </div>
    </nav>
  )
}
