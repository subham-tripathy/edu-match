import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (
        <div className='mt-20'>
            <div className='pt-16 pb-32 relative shadow-md shadow-black flex flex-col items-center justify-center w-[60%] mx-auto rounded-lg bg-emerald-500 text-white text-shadow'>
                <h1 className='text-5xl font-bold mb-7'>Welcome to EduMatch</h1>
                <h4 className='text-xl font-semibold'>The best Platform where a Student can meet the best Teacher</h4>
                <Link href={'/findTeachers'} className='font-semibold absolute bottom-10 bg-yellow-300 px-3 py-1 rounded shadow-md shadow-slate-600 hover:shadow-black'>Get Started</Link>
            </div>
        </div>
    )
}

export default HeroSection