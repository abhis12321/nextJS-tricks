import React from 'react'

export default function BlogForm({ blog , setBlog }) {
  return (
    <div className='w-full'>
      <textarea className='w-full p-4 rounded outline-none border-none focus:bg-gray-700/10 shadow-[0_0_10px_gray_inset] focus:shadow-[0_0_15px_black_inset] placeholder:text-gray-500 font-semibold' value={blog} onChange={e => setBlog(e.target.value)} rows={6} placeholder='write your blog here..'></textarea>
    </div>
  )
}
