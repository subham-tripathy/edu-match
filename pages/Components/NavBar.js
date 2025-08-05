import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SearchTopic from './SearchTopic'
import Image from 'next/image'
import menu from '../../public/icons/menu.png'
import menuClose from '../../public/icons/close.png'



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






    const menu = document.querySelector('#menu')
    const close = document.querySelector('#close')
    const mobNav = document.querySelector('#mobNav')
    menu.addEventListener('click', () => {
      menu.classList.add('hidden')
      close.classList.remove('hidden')
      mobNav.classList.remove('hidden')
    })

    close.addEventListener('click', () => {
      close.classList.add('hidden')
      menu.classList.remove('hidden')
      mobNav.classList.add('hidden')
    })

  }, [])














  return (
    <>
      <nav
        className='flex items-center justify-between bg-blue-500 py-4 px-10 shadow-md shadow-slate-700 text-white mb-5 max-md:hidden
      dark:bg-[#1F2833]'>
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









      {/* NAV FOR MOBILE DEVICES */}
      <nav className='sm:flex md:hidden bg-blue-500 py-4 px-10 shadow-md shadow-slate-700 text-white mb-5 flex items-center justify-between'>
        <div className='w-[90%] flex justify-between items-center'>
          <Link href={'/'}><h1 className='font-bold text-3xl md:text-4xl text-shadow hover:text-teal-400'>EduMatch</h1></Link>
        </div>



        <div className='w-max z-20'>
          <button id='menu'><Image width={50} src={menu} className='pointer-events-none' /></button>
          <button id='close' className=' hidden'><Image width={50} src={menuClose} className='pointer-events-none' /></button>
        </div>


        <section id='mobNav' className='absolute top-0 left-0 z-10 bg-transparent h-full w-full hidden'>
          <ul className='relative top-24 flex flex-col space-y-10 text-2xl text-center font-semibold bg-gray-500 w-[80%] mx-auto px-10 py-10'>
            <li><Link href={'/'} className='px-3 py-2 shadow-md shadow-transparent rounded-md text-shadow-sm'>Home</Link></li>
            <li>
              {
                emuser ?
                  (
                    <>
                      <Link className='px-3 py-2 shadow-md shadow-transparent rounded-md text-shadow-sm' href={'/profile'}>Hi, {emuser}</Link>
                      <Link className='px-3 py-2 shadow-md shadow-transparent rounded-md text-shadow-sm' href={'/logout'}>Logout</Link>
                    </>
                  )
                  :
                  (<Link className='px-3 py-2 shadow-md shadow-transparent rounded-md text-shadow-sm' href={'/login'}>Sign In</Link>)
              }
            </li>
            <li><Link href={'/about'} className='px-3 py-2 shadow-md shadow-transparent rounded-md text-shadow-sm'>About</Link></li>
          </ul>

        </section>




      </nav>
    </>
  )
}

export default NavBar