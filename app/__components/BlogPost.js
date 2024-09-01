"use client"
import React, { useState } from 'react'
import BlogForm from './BlogForm';
import BlogContent from './BlogContent';

export default function BlogPost() {
    const [blog , setBlog] = useState('');
  return (
    <div className='w-full max-w-[600px]'>
      <BlogForm blog={blog} setBlog={setBlog} />
      <BlogContent blog={blog} />
    </div>
  )
}
