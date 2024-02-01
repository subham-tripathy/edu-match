import React from 'react'
import HeroSection from './Components/HeroSection'
import SubjectCategory from './Components/SubjectCategory'

const page = () => {
  return (
    <main>
      <HeroSection/>
      <div className='mt-80'></div>
      <SubjectCategory/>
    </main>
  )
}

export default page