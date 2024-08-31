import Image from 'next/image'
import React from 'react'

export default function AnimatedImageSlider_02() {
  return (
    <div className="overflow-hidden w-[100%] h-[100vh] flex items-center justify-center">
      <div className='slider_02 flex justify-center items-center h-[340px] w-[100%] relative gap-2' style={{ "--time": '9s', "--quantity": 9 }}>
        <Image src={'/imgs/card1.png'} alt='' width={300} height={500} style={{ "--index": 0 }} className='absolute left-[100%] cursor-pointer h-[270px] w-[200px] ring-2 ring-black rounded' />
        <Image src={'/imgs/card2.png'} alt='' width={300} height={500} style={{ "--index": 1 }} className='absolute left-[100%] cursor-pointer h-[270px] w-[200px] ring-2 ring-black rounded' />
        <Image src={'/imgs/card3.png'} alt='' width={300} height={500} style={{ "--index": 2 }} className='absolute left-[100%] cursor-pointer h-[270px] w-[200px] ring-2 ring-black rounded' />
        <Image src={'/imgs/card4.png'} alt='' width={300} height={500} style={{ "--index": 3 }} className='absolute left-[100%] cursor-pointer h-[270px] w-[200px] ring-2 ring-black rounded' />
        <Image src={'/imgs/card5.png'} alt='' width={300} height={500} style={{ "--index": 4 }} className='absolute left-[100%] cursor-pointer h-[270px] w-[200px] ring-2 ring-black rounded' />
        <Image src={'/imgs/card6.png'} alt='' width={300} height={500} style={{ "--index": 5 }} className='absolute left-[100%] cursor-pointer h-[270px] w-[200px] ring-2 ring-black rounded' />
        <Image src={'/imgs/card1.png'} alt='' width={300} height={500} style={{ "--index": 6 }} className='absolute left-[100%] cursor-pointer h-[270px] w-[200px] ring-2 ring-black rounded' />
        <Image src={'/imgs/card2.png'} alt='' width={300} height={500} style={{ "--index": 7 }} className='absolute left-[100%] cursor-pointer h-[270px] w-[200px] ring-2 ring-black rounded' />
        <Image src={'/imgs/card3.png'} alt='' width={300} height={500} style={{ "--index": 8 }} className='absolute left-[100%] cursor-pointer h-[270px] w-[200px] ring-2 ring-black rounded' />
        <Image src={'/imgs/card4.png'} alt='' width={300} height={500} style={{ "--index": 9 }} className='absolute left-[100%] cursor-pointer h-[270px] w-[200px] ring-2 ring-black rounded' />
      </div>
    </div>
  )
}
