import React from 'react'
import LoginPage from './__components/LoginPage'
import ImageCard from './__components/ImageCard'
import MouseTracker from './__components/MouseTracker'

export default function page() {
  return (
    <div className=''>
      <LoginPage />
      <ImageCard />
      <MouseTracker />
    </div>
  )
}
