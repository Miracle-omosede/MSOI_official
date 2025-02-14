import React from 'react'
import YoutubeEmbed from './YoutubeEmbed'
import motion from "motion/react"
import { Youtube } from 'lucide-react'

const YoutubeVid = () => {
  return (
    <div className='flex flex-col md:gap-[3rem]'>
        <div className='text-center flex flex-col gap-2'>
        <h2 className='uppercase font-lato text-[15px] font-semibold tracking-[.1rem]'>Youtube videos</h2>
        <p className='font-dm-sans w-3/4 text-center mx-auto '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis voluptatum minus cum incidunt tempora ipsam quis quaerat reprehenderit illo.</p>
        </div>

        <div>
            <YoutubeEmbed embedId="9VsEAEX6C9Q" />
        </div>

        <div className="flex gap-[2rem] py-5">
              <a
                
                href="#"
                className="border mx-auto border-light bg-light uppercase text-white font-lato font-bold py-[16px] px-[42px] hover:text-light md:text-[15px] text-[13px] tracking-[2.5px] hover:border-light hover:bg-white transition-all delay-75 text-nowrap flex items-center justify-center gap-2"
              >
                <Youtube/>
                <span>youtube</span>
              </a>
            </div>
    </div>
  )
}

export default YoutubeVid