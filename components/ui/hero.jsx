'use client'

import Link from 'next/link'
import React, { useRef } from 'react'
import { Button } from './button'
import { RainbowButton } from './rainbow-button'
import Image from 'next/image'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltBanner = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative w-fit mx-auto group"
    >
      <div className="rounded-xl bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 p-[3px] shadow-lg animate-gradient-x">
        <div className="rounded-xl overflow-hidden bg-white">
          <Image
            src="/banner.png"
            alt="Dashboard Preview"
            width={1200}
            height={600}
            className="rounded-xl"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
};

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
            <RainbowButton>Get Started</RainbowButton>
          </Link>
          <Link href="/demo">
            <RainbowButton variant="outline">Watch Demo</RainbowButton>
          </Link>
        </div>

        {/* 🔥 Enhanced Border Gradient Wrapper with Tilt Effect */}
        <TiltBanner />
      </div>
    </div>
  )
}

export default HeroSection
