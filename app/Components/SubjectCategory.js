import React from 'react'

const SubjectCategory = () => {
    return (
        <div className='mx-auto my-10 rounded-lg shadow-md shadow-black w-[90%] p-5 pb-10 bg-yellow-300'>
            <h1 className='mb-14 text-center text-3xl font-bold dark:text-white text-shadow'>Find Teachers based on Subjects</h1>
            <div className='grid space-x-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='min-h-[100px] rounded-md py-5 font-semibold text-shadow text-white text-center bg-emerald-500'>C++</div>
                <div className='min-h-[100px] rounded-md py-5 font-semibold text-shadow text-white text-center bg-emerald-500'>Python</div>
                <div className='min-h-[100px] rounded-md py-5 font-semibold text-shadow text-white text-center bg-emerald-500'>Java</div>
                <div className='min-h-[100px] rounded-md py-5 font-semibold text-shadow text-white text-center bg-emerald-500'>PHP</div>
            </div>
        </div>
    )
}

export default SubjectCategory