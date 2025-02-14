import React from 'react'
import Content from './Content'


// style={{ clipPath: "polygon(0% 0, 100% 100%, 0 100%)" }}

const Footer = () => {
  return (
    <div
      className="md:h-[400px] h-screen relative bg-green flex items-center"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
        <div className='fixed md:h-[400px] h-full w-full bottom-0'>
            <Content/>
        </div>
    </div>
  );
}

export default Footer