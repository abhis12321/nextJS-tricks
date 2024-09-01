import React from 'react'
import LoginPage from './__components/LoginPage'
import ImageCard from './__components/ImageCard'
import MouseTracker from './__components/MouseTracker'
import AnimatedImageList from './__components/AnimatedImageList'
import AnimatedImageList_02 from './__components/AnimatedImageList_02'
import AnimatedImageSlider_02 from './__components/AnimatedImageSlider_02'
import AnimatedScrollElements from './__components/AnimatedScrollElements'
import BlogPost from './__components/BlogPost'

export default function page() {
  return (
    <div className='overflow-hidden min-h-[100vh] w-full flex items-center justify-center'>
      {/* <LoginPage /> */}
      {/* <ImageCard /> */}
      {/* <MouseTracker /> */}
      {/* <AnimatedImageList /> */}
      {/* <AnimatedImageList_02 /> */}
      {/* <AnimatedImageSlider_02 /> */}
      {/* <AnimatedScrollElements /> */}
      <BlogPost />
    </div>
  )
}
