import React from 'react'

export default function BlogContent({ blog }) {
  return (
    <div className='w-full bg-red-900 p-2 overflow-auto rounded text-white'>
      {
        blog?.split("/n")?.map((line , index) => <p className='w-full whitespace-pre-wrap' key={index} >{ line }</p>)
      }
    </div>
  )
}
