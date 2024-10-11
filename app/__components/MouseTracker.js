"use client"
import Image from 'next/image';
import React, { useState, useRef } from 'react';

export default function MouseTracker() {
  let [rotateX , setRotateX] = useState(0);
  let [rotateY , setRotateY] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const img = imageRef.current;
    if (img) {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left; // X coordinate relative to the image
      const y = e.clientY - rect.top;  // Y coordinate relative to the image
      rotateX = (y - 250) * 5 / 250;
      rotateY = (x - 250) * 50 / 250;
      setRotateX(rotateX);
      setPosition({ x, y });      
    }
  };

  return (
    <div style={{ position: 'relative' }} className='flex items-center justify-center relative [perspective:450px] py-16'>
      <Image
        ref={imageRef}
        src="https://picsum.photos/500/500"
        alt="Trackable"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setRotateX(0)}
        className={`cursor-pointer rotate-45 [transform-style:preserve-3d rounded-lg shadow-[0_2px_15px_black]`}
        height={500}
        width={500}
        style={{
            transform: `rotateZ(${rotateY}deg) rotateX(${rotateX}deg)`, 
            transition: 'transform 0.1s ease-out',
          }}
      />
    </div>
  );
};