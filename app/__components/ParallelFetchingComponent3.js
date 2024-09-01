import React from 'react'
import { PromiseResolver } from './PromiseResolver'

export default async function ParallelFetchingComponent3() {
    await PromiseResolver(10);
  return (
    <div className='p-2 bg-red-200 rounded'>
      ParallelFetchingComponent3
    </div>
  )
}
