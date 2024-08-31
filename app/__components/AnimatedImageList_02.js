import Image from "next/image";

export default function AnimatedImageList_02() {
  return (
    <div className='h-[100vh] flex items-center justify-center gap-[2px] img-list'>
      <Image src={'/imgs/card1.png'} alt='' width={300} height={500} className='cursor-pointer h-[180px] w-[130px] ring-2 hover:z-10 rounded'/>
      <Image src={'/imgs/card2.png'} alt='' width={300} height={500} className='cursor-pointer h-[180px] w-[130px] ring-2 hover:z-10 rounded'/>
      <Image src={'/imgs/card3.png'} alt='' width={300} height={500} className='cursor-pointer h-[180px] w-[130px] ring-2 hover:z-10 rounded'/>
      <Image src={'/imgs/card4.png'} alt='' width={300} height={500} className='cursor-pointer h-[180px] w-[130px] ring-2 hover:z-10 rounded'/>
      <Image src={'/imgs/card5.png'} alt='' width={300} height={500} className='cursor-pointer h-[180px] w-[130px] ring-2 hover:z-10 rounded'/>
      <Image src={'/imgs/card6.png'} alt='' width={300} height={500} className='cursor-pointer h-[180px] w-[130px] ring-2 hover:z-10 rounded'/>
      <Image src={'/imgs/card1.png'} alt='' width={300} height={500} className='cursor-pointer h-[180px] w-[130px] ring-2 hover:z-10 rounded'/>
      <Image src={'/imgs/card2.png'} alt='' width={300} height={500} className='cursor-pointer h-[180px] w-[130px] ring-2 hover:z-10 rounded'/>
      <Image src={'/imgs/card3.png'} alt='' width={300} height={500} className='cursor-pointer h-[180px] w-[130px] ring-2 hover:z-10 rounded'/>
      <Image src={'/imgs/card4.png'} alt='' width={300} height={500} className='cursor-pointer h-[180px] w-[130px] ring-2 hover:z-10 rounded'/>
    </div>
  )
}
