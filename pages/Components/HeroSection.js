import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (
        <div id='heroSection' className='h-[90vh] flex items-center justify-center'>
            <div
                className='bg-[rgb(,,,0.1)] py-32 pb-40 relative shadow-md shadow-blue-400 border-2 border-blue-400 flex flex-col items-center justify-center w-[80%] md:w-[60%] mx-auto rounded-lg text-white text-shadow'
            >
                <h1 className='text-[rgb(255,255,255,0.8)] text-xl md:text-5xl font-bold mb-7'>Welcome to EduMatch</h1>
                <h4 className='text-xs text-center md:text-xl font-semibold'>The best Platform where a Student can meet the best Teacher</h4>
                <Link href={'/getstarted'}
                    className='text-shadow-sm md:text-xl font-bold absolute bottom-10 bg-[rgb(13,77,180,0.5)] hover:bg-[rgb(13,77,180,1)] px-4 py-2 rounded hover:shadow-black'
                >Get Started</Link>
            </div>
        </div>
    )
}

export default HeroSection