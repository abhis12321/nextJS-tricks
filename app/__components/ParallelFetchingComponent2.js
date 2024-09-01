import React from 'react'
import { PromiseResolver } from './PromiseResolver'

export default async function ParallelFetchingComponent2() {
    await PromiseResolver(10);
  return (
    <div className='p-2 bg-green-200 rounded'>
      ParallelFetchingComponent2
    </div>
  )
}
