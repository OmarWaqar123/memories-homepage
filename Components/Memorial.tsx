'use client'
import Image from 'next/image';
import React from 'react'
import YouTube,{ YouTubeProps } from 'react-youtube';

const memories = [
  {
    img:"https://a.storyblok.com/f/89243/360x365/6dd7f1809d/05_icon-a.png",
    bold:"Website",
    text:"makes memorial creation and management easy."
  },{
    img:"https://a.storyblok.com/f/89243/360x365/887c260f2c/05_icon-b.png",
    bold:"Mobile app",
    text:"lets you visit and add memories when and where it suits you."
  },
  {
    img:"https://a.storyblok.com/f/89243/x/3f03504d59/heart-icon.svg",
    bold:"Reactions",
    text:"let you show which memories you love most. "
  },
  {
    img:"https://a.storyblok.com/f/89243/720x730/b077c10633/03_icon-a.png",
    bold:"Vault",
    text:"provides unlimited space to store photos and videos, plus scans and PDFs of irreplaceable mementos you want to keep private."
  },
  {
    img:"https://a.storyblok.com/f/89243/720x730/947b196e8f/04_icon-c.png",
    bold:"Invite contributors",
    text:"using their email addresses, social media links, and more."
  },
  {
    img:"https://a.storyblok.com/f/89243/360x370/3c67bb0d78/05_icon-e.png",
    bold:"Pin a Memory",
    text:"of your choice to the top of the memorial."
  },
  {
    img:"https://a.storyblok.com/f/89243/360x365/ecda2b398b/05_icon-h.png",
    bold:"Automatic sequencing",
    text:"presents memories in order, creating a complete story of your loved one’s life.",
  },
  {
    img:"https://a.storyblok.com/f/89243/720x730/74b24e524b/03_icon-c.png",
    bold:"Secured by SSL encryption,",
    text:" your memories are always safe."
  }
]

export default function Memorial() {
  const opts: YouTubeProps['opts'] = {
    height: '480',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }


  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  return (
    <div className='py-12 '>
      <div className='w-[90%] md:w-[57%] mx-auto'>
        <p className='text-ob font-bold text-3xl md:text-5xl tracking-tight mb-3 text-center md:text-left'>A memorial to celebrate Dad's life</p>
        
        
        <YouTube className='mt-10 ' videoId="QjsMGcGpkhI" opts={opts} onReady={onPlayerReady}  />;
        

        {/* WHY MEMORIES */}
        <h4 className='text-ob font-bold text-center md:text-left text-3xl md:text-5xl mt-10 tracking-tight'>Why Memories?</h4>

        <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-4 gap-3 mt-10'>
          {
            memories.map((memory,i) => (
              <div className='flex items-center gap-3 mb-10 md:mb-0' key={i}>

                 <Image src={memory.img} alt='memory' width={200} height={200} className='w-[70px]' />

                 <p className='text-xl text-obrown'>
                  <span className='font-bold'>{memory.bold}</span>{" "}
                  {memory.text}
                 </p>

              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}
