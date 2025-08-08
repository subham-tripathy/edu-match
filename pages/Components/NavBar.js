import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SearchTopic from './SearchTopic'
const NavBar = () => {
  const [emuser, setemuser] = useState(null)
  const [type, setType] = useState(null)
  useEffect(() => {
    function getCookie(name) {
      const cookieString = document.cookie;
      const cookies = cookieString.split(";").map(cookie => cookie.trim());
      for (const cookie of cookies) {
        if (cookie.startsWith(name + "=")) {
          return cookie.substring(name.length + 1);
        }
      }
      return null;
    }
    if (getCookie('emuser')) {
      let a = getCookie('emuser')
      setemuser(a)
      fetch('/api/fetchProfile?id=' + getCookie('emuser')).then(res => res.json()).then(data => {
        if (data.type === 'teacher') {
          setType('teacher')
        }
      })
    }
  }, [])

  return (
    <nav
      className='sticky top-0 left-0 right-0 h-[10vh] flex items-center justify-between bg-[rgb(13,77,180,0.7)] px-10 shadow shadow-black text-white
      dark:bg-[rgb(31,40,51)]'>
      <Link href={'/'}><h1
        className='font-bold text-4xl text-shadow'>
        EduMatch</h1></Link>
      {
        emuser ?
          (
            type === 'teacher' ?
              <>
                <SearchTopic />
              </>
              :
              null
          )
          :
          (null)
      }
      <ul className='flex space-x-3 font-semibold text-lg'>
        <li><Link href={'/'} className='px-3 py-2 shado hover:bg-teal-400 shadow-md shadow-transparent hover:shadow-slate-500 rounded-md text-shadow-sm
          border-2 border-transparent dark:hover:bg-blue-500 dark:hover:shadow-none dark:hover:border-white'
        >Home</Link></li>
        <li>
          {
            emuser ?
              (
                <>
                  <Link className='px-3 py-2 shado hover:bg-teal-400 shadow-md shadow-transparent hover:shadow-slate-500 rounded-md text-shadow-sm
                    border-2 border-transparent dark:hover:bg-blue-500 dark:hover:shadow-none dark:hover:border-white' href={'/profile'}>Hi, {emuser}</Link>
                  <Link className='px-3 py-2 shado hover:bg-teal-400 shadow-md shadow-transparent hover:shadow-slate-500 rounded-md text-shadow-sm
                    border-2 border-transparent dark:hover:bg-blue-500 dark:hover:shadow-none dark:hover:border-white' href={'/logout'}>Logout</Link>
                </>
              )
              :
              (<Link className='px-3 py-2 shado hover:bg-teal-400 shadow-md shadow-transparent hover:shadow-slate-500 rounded-md text-shadow-sm
                  border-2 border-transparent dark:hover:bg-blue-500 dark:hover:shadow-none dark:hover:border-white' href={'/login'}>Sign In</Link>)
          }
        </li>
        <li><Link href={'/about'} className='px-3 py-2 shado hover:bg-teal-400 shadow-md shadow-transparent hover:shadow-slate-500 rounded-md text-shadow-sm
          border-2 border-transparent dark:hover:bg-blue-500 dark:hover:shadow-none dark:hover:border-white'>About</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar