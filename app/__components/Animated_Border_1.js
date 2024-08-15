import React from 'react'

export default function Animated_Border() {
  return (
    <div className="rounded hover:delay-[1250ms] hover:shadow-[0_0_30px_white] active:shadow-[0_0_30px_red]">
      <div className="rounded hover:delay-[1250ms] hover:shadow-[0_0_20px_white] active:shadow-[0_0_20px_red]">
        <div className='relative py-4 px-10 bg-blue-950 rounded cursor-pointer group overflow-hidden hover:delay-[1250ms] text-white font-bold hover:bg-white hover:text-black hover:duration-1000 hover:shadow-[0_0_15px_black_inset] active:shadow-[0_0_15px_red_inset] active:bg-red-600 text-4xl active:border-2 border-red-600'>
          <span className="absolute top-0 left-[-100%] h-[2px] w-full bg-gradient-to-r from-transparent to-white group-hover:delay-[.25s] group-hover:left-[100%] group-hover:duration-1000 ease-out"></span>
          <span className="absolute right-0 top-[-100%] h-full w-[2px] bg-gradient-to-b from-transparent to-white group-hover:delay-[.50s] group-hover:top-[100%]  group-hover:duration-1000 ease-out"></span>
          <span className="absolute bottom-0 right-[-100%] h-[2px] w-full bg-gradient-to-l from-transparent to-white group-hover:delay-[.75s] group-hover:right-[100%] group-hover:duration-1000 ease-out"></span>
          <span className="absolute left-0 bottom-[-100%] h-full w-[2px] bg-gradient-to-t from-transparent to-white group-hover:delay-[1s] group-hover:bottom-[100%] group-hover:duration-1000 ease-out"></span>
          Submit
        </div>
      </div>
    </div >
  )
}
