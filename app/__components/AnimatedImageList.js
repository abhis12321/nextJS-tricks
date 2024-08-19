"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'

export default function AnimatedImageList() {
  const audioRef = useRef(null);
  const [isAllowed , setAllowed] = useState(false);

  const handleBeep = () => {
    if(isAllowed)
    audioRef?.current?.play()
  }
  return (
    <div className='list' onClick={() => setAllowed(true)}>
      <Image src={'/imgs/card1.png'} alt='' width={300} height={500} className='cursor-pointer' onMouseEnter={handleBeep} />
      <Image src={'/imgs/card2.png'} alt='' width={300} height={500} className='cursor-pointer' onMouseEnter={handleBeep} />
      <Image src={'/imgs/card3.png'} alt='' width={300} height={500} className='cursor-pointer' onMouseEnter={handleBeep} />
      <Image src={'/imgs/card4.png'} alt='' width={300} height={500} className='cursor-pointer' onMouseEnter={handleBeep} />
      <Image src={'/imgs/card5.png'} alt='' width={300} height={500} className='cursor-pointer' onMouseEnter={handleBeep} />
      <Image src={'/imgs/card6.png'} alt='' width={300} height={500} className='cursor-pointer' onMouseEnter={handleBeep} />
      <Image src={'/imgs/card1.png'} alt='' width={300} height={500} className='cursor-pointer' onMouseEnter={handleBeep} />
      <Image src={'/imgs/card2.png'} alt='' width={300} height={500} className='cursor-pointer' onMouseEnter={handleBeep} />
      <Image src={'/imgs/card3.png'} alt='' width={300} height={500} className='cursor-pointer' onMouseEnter={handleBeep} />
      <Image src={'/imgs/card4.png'} alt='' width={300} height={500} className='cursor-pointer' onMouseEnter={handleBeep} />
      <audio ref={audioRef} src="/imgs/beep-06.wav" ></audio>
    </div>
  )
}
