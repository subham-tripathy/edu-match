import Link from 'next/link'
import React from 'react'

const SubjectCategory = () => {
    return (
        <div className='border-4 border-white mx-auto my-10 rounded-lg shadow-md shadow-black w-[90%] p-5 px-10 pb-10 bg-blue-500'>
            <h1 className='mb-14 text-center text-3xl font-bold text-white text-shadow'>Find Teachers based on Subjects</h1>
            <div className='grid space-x-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <Link href={'./findTeacher?sub=cpp'}><div className='text-2xl flex items-center justify-center shadow-md shadow-slate-600 hover:shadow-black border-2 border-white min-h-[100px] rounded-lg py-5 font-semibold text-shadow text-white text-center bg-teal-400'>C++</div></Link>
                <Link href={'./findTeacher?sub=python'}><div className='text-2xl flex items-center justify-center shadow-md shadow-slate-600 hover:shadow-black border-2 border-white min-h-[100px] rounded-lg py-5 font-semibold text-shadow text-white text-center bg-teal-400'>Python</div></Link>
                <Link href={'./findTeacher?sub=java'}><div className='text-2xl flex items-center justify-center shadow-md shadow-slate-600 hover:shadow-black border-2 border-white min-h-[100px] rounded-lg py-5 font-semibold text-shadow text-white text-center bg-teal-400'>Java</div></Link>
                <Link href={'./findTeacher?sub=php'}><div className='text-2xl flex items-center justify-center shadow-md shadow-slate-600 hover:shadow-black border-2 border-white min-h-[100px] rounded-lg py-5 font-semibold text-shadow text-white text-center bg-teal-400'>PHP</div></Link>
            </div>
        </div>
    )
}

export default SubjectCategory