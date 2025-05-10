import React from 'react'
import logo from '/public/reliability.png'
import Hero from '@/components/hero'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Reliability',
  description: 'Reliability page',
}

export default function Reliability() {
  return (
    <Hero imgurl={logo} altText="Reliability" content="Reliability page for the company " />
  )
}
