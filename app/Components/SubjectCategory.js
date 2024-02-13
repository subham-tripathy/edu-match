import Link from 'next/link'
import React from 'react'

const SubjectCategory = () => {
    return (
        <div className='mx-auto my-10 rounded-lg shadow-md shadow-black w-[90%] p-5 px-10 pb-10 bg-yellow-300'>
            <h1 className='mb-14 text-center text-3xl font-bold dark:text-white text-shadow'>Find Teachers based on Subjects</h1>
            <div className='grid space-x-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <Link href={'./findTeachers?sub=cpp'}><div className='text-2xl flex items-center justify-center shadow-md shadow-black border-2 border-white min-h-[100px] rounded-lg py-5 font-semibold text-shadow text-white text-center bg-emerald-500'>C++</div></Link>
                <Link href={'./findTeachers?sub=python'}><div className='text-2xl flex items-center justify-center shadow-md shadow-black border-2 border-white min-h-[100px] rounded-lg py-5 font-semibold text-shadow text-white text-center bg-emerald-500'>Python</div></Link>
                <Link href={'./findTeachers?sub=java'}><div className='text-2xl flex items-center justify-center shadow-md shadow-black border-2 border-white min-h-[100px] rounded-lg py-5 font-semibold text-shadow text-white text-center bg-emerald-500'>Java</div></Link>
                <Link href={'./findTeachers?sub=php'}><div className='text-2xl flex items-center justify-center shadow-md shadow-black border-2 border-white min-h-[100px] rounded-lg py-5 font-semibold text-shadow text-white text-center bg-emerald-500'>PHP</div></Link>
            </div>
        </div>
    )
}

export default SubjectCategory