import React from 'react'
import logo from '/public/performance.png'
import Hero from '@/components/hero'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Performance',
  description: 'Performance page',
}

export default function Performance() {
  return (
    <Hero imgurl={logo} altText="Performance" content="Performance page for the company" />
  )
}
