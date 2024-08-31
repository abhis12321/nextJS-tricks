import React from 'react'

export default function AnimatedScrollElements() {
  return (
    <div className='scroll-cant'>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className="scrollEffectU2D"></div>
      <div className="" style={{height:'250px' , width:"500px", display:"flex" , alignItems:"center" , justifyContent:"center"}}>
        <div className="scrollEffectU2D"></div>
        <div className="scrollEffectD2U"></div>
      </div>
      <div className=""></div>
      <div className="scrollEffectD2U"></div>
      <div className=""></div>
      <div className="scrollEffectR2L"></div>
      <div className="scrollEffectL2R"></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  )
}
