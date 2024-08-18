"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export default function ImageCard() {
    const [rotate , setRotate] = useState(15);
    const handleMouseMovement = e => {

    }
    
  return (
    <div className='text-red-950 font-semibold bg-blue-100 mx-auto px-6 py-16 rounded-lg text-center relative [perspective:450px]'>
        <Image src={"https://picsum.photos/500/500"} alt='' height={500} width={500} className={`mx-auto w-fit bg-red-400 shadow-[0_0_15px_black] rounded-lg [transform:rotateX(${rotate}deg)] [perspective100px] [transform-style:preserve-3d`} onMouseMove={handleMouseMovement}/>
    </div>
  )
}
