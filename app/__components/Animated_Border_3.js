import React from 'react'

export default function Animated_Border_3() {
  return (
    <div className='h-[200px] w-[200px] cursor-pointer animated-border-rotate'>
      <div className="absolute top-0 left-0 z-[2] h-full w-full rounded-[10px] bg-blue-950 hover:bg-blue-900 active:bg-yellow-600"></div>   
    </div>
  )
}
