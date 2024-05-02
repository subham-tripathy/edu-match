import React from 'react'
import Navbar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import Link from 'next/link'
import TopTeachers from './Components/TopTeachers'

const home = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-20'>
                <div className='border-4 border-white pt-16 pb-32 relative shadow-md shadow-black flex flex-col items-center justify-center w-[60%] mx-auto rounded-lg bg-blue-500 text-white text-shadow'>
                    <h1 className='text-5xl font-bold mb-7'>Welcome to EduMatch</h1>
                    <h4 className='text-xl font-semibold'>The best Platform where a Student can meet the best Teacher</h4>
                    <Link href={'/home#explore'} className='border-2 border-white text-shadow-sm text-xl font-bold absolute bottom-10 bg-teal-400 px-4 py-2 rounded shadow-md shadow-slate-600 hover:shadow-black'>Explore</Link>
                </div>
            </div>

            <TopTeachers/>
        </div>
    )
}

export default home