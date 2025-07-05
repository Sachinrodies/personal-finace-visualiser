'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 pencil-gradient tracking-tight">
          Take Control of Your Money
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-gray-700">
            Smarter, Faster with Intelligence.
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let AI do the heavy lifting. Track income, expenses, and investments effortlessly, and get personalized insights to grow your wealth and secure your financial future.
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>
          <Link href="/demo">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>

        {/* 🔥 Hover Border Gradient Wrapper */}
        <div className="relative w-fit mx-auto group">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          <div className="relative z-10 rounded-xl overflow-hidden">
            <Image
              src="/banner.png"
              alt="Dashboard Preview"
              width={1280}
              height={720}
              className="rounded-xl border border-gray-200"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
