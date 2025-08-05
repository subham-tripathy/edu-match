import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='mt-20'>
            <div
                className='border-4 border-white pt-16 pb-32 relative shadow-md shadow-black flex flex-col items-center justify-center w-[80%] md:w-[60%] mx-auto rounded-lg bg-blue-500 text-white text-shadow
            dark:bg-[#2E3A59]'
            >
                <h1 className='text-xl md:text-5xl font-bold mb-7'>Welcome to EduMatch</h1>
                <h4 className='text-xs text-center md:text-xl font-semibold'>The best Platform where a Student can meet the best Teacher</h4>
                <Link href={'/getstarted'}
                    className='border-2 border-white text-shadow-sm md:text-xl font-bold absolute bottom-10 bg-teal-400 px-4 py-2 rounded shadow-md shadow-slate-600 hover:shadow-black
                dark:bg-blue-500'
                >Get Started</Link>
            </div>
        </div>
    )
}

export default HeroSection