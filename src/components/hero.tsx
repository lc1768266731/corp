import React from 'react'
import Image, { StaticImageData } from 'next/image'
import logo from '/public/image.png'

interface IPROPS{
    imgurl: StaticImageData;
    altText: string;
    content: string;
}


export default function Hero(props:IPROPS) {
  return (
    <section className="min-h-screen w-full relative flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image 
          src={props.imgurl} 
          alt={props.altText} 
          fill 
          priority
          quality={100}
          style={{ objectFit: 'cover', objectPosition: 'center' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60"></div>
      </div>
      <div className="mt-20 z-10"> 
        <h1 className="text-5xl font-bold text-center">{props.content}</h1>
      </div>
    </section>
  )
}
