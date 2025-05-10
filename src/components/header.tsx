"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const links = [
    {
        name: 'Performance',
        href: '/performance'
    },
    {
        name: 'Reliability',
        href: '/reliability'
    },
    {
        name: 'Scalability',
        href: '/scalability'
    }
]
export default function Header() {
    const pathname = usePathname();
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
            <div className="flex items-center justify-between mx-auto w-full px-8 py-4">
                <Link className="text-3xl font-bold text-blue-500" href="/">Home</Link>
                <nav className="flex gap-6 text-xl">
                    {links.map((link) => (
                        <Link key={link.href}
                        className={`${pathname === link.href ? 'text-blue-500' : 'text-white'} hover:text-blue-400 transition-colors`} 
                        href={link.href}>{link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}
