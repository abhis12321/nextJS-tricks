"use client"
import React from 'react'

export default function Layout({ children, comp_01, comp_02, comp_03 }) {

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-10'>
      <div className="flex gap-4 text-yellow-600 drop-shadow-[0_0_2px_black]">
        <>{comp_01}</>
        <>{comp_02}</>
        <>{comp_03}</>
      </div>
      {children}
    </div>
  )
}
