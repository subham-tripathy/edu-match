import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <nav className='flex items-center justify-between bg-blue-500 py-4 px-10 shadow-md shadow-slate-700 text-white mb-5'>
      <Link href={'/'}><h1 className='font-bold text-4xl text-shadow hover:text-yellow-300'>EduMatch</h1></Link>
      <ul className='flex space-x-10 font-semibold text-lg'>
        <li><Link href={'/about'} className='px-3 py-2 shado hover:bg-yellow-400 shadow-md shadow-transparent hover:shadow-slate-500 rounded-md text-shadow-sm'>Sign In</Link></li>
        <li><Link href={'/about'} className='px-3 py-2 shado hover:bg-yellow-400 shadow-md shadow-transparent hover:shadow-slate-500 rounded-md text-shadow-sm'>About</Link></li>
      </ul>
    </nav>
  )
}

export default page