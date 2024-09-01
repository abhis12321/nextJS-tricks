import { PromiseResolver } from '@/app/__components/PromiseResolver'
import React from 'react'

export default async function page() {
    await PromiseResolver(4000);
  return (
    <div className='py-2 px-4 rounded text-sm font-extrabold bg-violet-200'>
      parallel-component-03
    </div>
  )
}
