import React from 'react'

export default function BlogForm({ blog , setBlog }) {
  return (
    <div className='w-full'>
      <textarea className='w-full p-2 rounded outline-none border-none shadow-[0_0_10px_gray] focus:shadow-[0_0_10px_black_inset]' value={blog} onChange={e => setBlog(e.target.value)} rows={6}></textarea>
    </div>
  )
}
