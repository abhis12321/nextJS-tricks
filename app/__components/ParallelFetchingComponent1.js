import React from 'react'
import { PromiseResolver } from './PromiseResolver'

export default async function ParallelFetchingComponent1() {
    await PromiseResolver(10);
  return (
    <div className='p-2 bg-blue-200 rounded'>
      ParallelFetchingComponent1
    </div>
  )
}
