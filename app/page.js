import React from 'react'
import HeroSection from './Components/HeroSection'
import Image from 'next/image'

import bg from './pics/bg.webp'

const page = () => {
  return (
    <main>
      <HeroSection/>
      <Image src={bg} alt='bg' className='absolute -z-10 top-0 left-0 w-full'/>
    </main>
  )
}

export default page