import { PromiseResolver } from '@/app/__components/PromiseResolver'
import React from 'react'

export default async function page() {
    await PromiseResolver(2000);
  return (
    <div className='py-2 px-4 rounded text-sm font-extrabold bg-red-200'>
      parallel-component-02
    </div>
  )
}
