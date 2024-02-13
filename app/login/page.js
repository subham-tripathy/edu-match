import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='p-10'>
      <form className='flex flex-col items-center w-2/3 rounded-md mx-auto shadow-lg shadow-black bg-slate-400 gap-5 p-10 py-20 '>
        <input type="text" name='id' placeholder='Enter User Id' className='border-2 w-80 p-2 pl-3'/>
        <input type="password" name='password' placeholder='Enter Password' className='border-2 w-80 p-2 pl-3'/>
        <Link href={'/signup'}>Dont have an Account?</Link>
        <button type="submit" className='text-lg bg-blue-400 px-4 py-1.5 rounded-md font-bold hover:bg-blue-500'>Login</button>
      </form>
    </div>
  )
}

export default page