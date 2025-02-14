import React from 'react'
import StorySlider from './StoriesSlider'
import YoutubeVid from './YoutubeVid'
import {motion} from "motion/react"

const Stories = () => {
  return (
    <section className='flex flex-col gap-[4rem] overflow-x-hidden my-[7rem] w-full'>
<div>
<h1 className="w-full uppercase text-black flex flex-col items-center justify-center font-lato">
            <span className="text-[10px] tracking-[.2rem]"> our </span>
            <span className="text-[40px] tracking-[.2rem]">stories</span>
            <div className="w-[60px] h-[10px] bg-black rounded-xl"></div>
          </h1>
</div>
        <StorySlider/>

        <div className='mx-auto'>
        <YoutubeVid/>
        </div>

    
    </section>
  )
}

export default Stories