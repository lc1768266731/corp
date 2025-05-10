import React from 'react'
import logo from '/public/scalability.png'
import Hero from '@/components/hero' 
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Scalability',
  description: 'Scalability page',
}

export default function Scalability() {
  return (
    <Hero imgurl={logo} altText="Scalability" content="Scalability" />
  )
}
