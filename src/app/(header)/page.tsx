import React from 'react'
import logo from '/public/home.png'
import Hero from '@/components/hero'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
}


export default function Page() {
  return (
    <Hero imgurl={logo} altText="Home" content="Hello World page" />
  )
}
