import React from 'react'

export default function Animated_Border_2() {
    return (
        <div className='group relative h-52 w-52 p-1 bg-blue-800 active:bg-red-600 rounded-lg flex items-center justify-center after:content-[""] after:absolute after:w-28 after:h-[20rem] after:-rotate-45 after:z-10 after:bg-white overflow-hidden after:animate-rotate after:shadow-[0_0_10px_white] cursor-pointer hover:after:bg-yellow-500'>
            <span className="h-full w-full bg-blue-800 group-active:bg-red-600 rounded-md z-50"></span>
        </div>
    )
}
