import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const PrevArrow = ({onClick}) => {
  return (
    <div className='absolute right-[80px] -top-[100px]' onClick={onClick}>
        <div className='bg-light text-white h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
            <ChevronLeft />
        </div>
    </div>
  )
}

export default PrevArrow