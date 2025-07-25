"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScrollDirection } from "@/hooks/useScrollDirection"

export default function Header() {
  const { isVisible } = useScrollDirection()

  return (
    <nav>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full py-3 flex gap-4 items-center justify-between">
          {/* <a href="/"> */}
            <Image
              src="/images/Supreme_logo.svg"
              alt="Supreme Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          {/* </a> */}
        </div>
      </motion.header>
    </nav>
  )
}