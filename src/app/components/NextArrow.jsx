import { ChevronRight } from 'lucide-react'
import React from 'react'

const NextArrow = ({onClick}) => {
  return (
    <div className='absolute right-0 top-[-100px]' onClick={onClick}>
        <div className='bg-light text-white h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
            <ChevronRight />
        </div>
    </div>
  )
}

export default NextArrow