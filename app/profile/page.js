import Image from 'next/image'
import React from 'react'

import defaultPic from '../pics/default-pic.jpg'

const page = () => {
  return (
    <div className='flex w-3/4 py-10 px-20 space-x-20 rounded-xl items-center bg-yellow-400 mx-auto'>
      <div>
        <Image src={defaultPic} className='h-40 w-40 rounded-full border shadow-md shadow-gray-800'/>
      </div>
      <div className='text-3xl'>
        <h1>Subham Tripathy</h1>
        <h1>Email</h1>
        <h1></h1>
      </div>
    </div>
  )
}

export default page