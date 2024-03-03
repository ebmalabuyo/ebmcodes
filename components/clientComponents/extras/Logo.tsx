"use client"
import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    const {resolvedTheme} = useTheme()

    var logoImage = "/DarkModeLogo.png";
      if (resolvedTheme === "dark") {
       logoImage = "/DarkModeLogo.png"
      }
      if(resolvedTheme === "light") {
       logoImage = "/LightModeLogo.png"
      }

  return (
    <Link href="/" >
      <div className='relative w-8 h-6'>
      <Image
      src={logoImage}
      alt='logo'
      fill
      />
      </div>
      </Link>
  )
}
