import Link from 'next/link'
import React, { useEffect } from 'react'
import Navbar from './Components/NavBar'

const page = () => {
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
    const emuser = getCookie('emuser');
    if (emuser) {
      alert('You already logged in !')
      window.location.href = '/'
    }
    else {
      const submitBTN = document.querySelector('#submit')
      submitBTN.addEventListener('click', (e) => {
        e.preventDefault()





        const id = document.querySelector('#id').value
        const password = document.querySelector('#password').value
        let url = '/api/login?id=' + id + '&password=' + password


        fetch(url).then(res => res.json()).then((data) => {
          if (data.msg === 'login success') {
            alert('Successfully Logged In')
            document.cookie = "emuser=" + id + "; expires=7; path=/; secure";
            window.location.href = '/'
          }
          else if (data.msg === 'user doesn\'t exists') {
            alert('User Doesn\'t Exists, PLease Sign Up')
          }
          else if (data.msg === 'wrong password') {
            alert('Wrong Password')
          }
        })
      })
    }
  })
  return (
    <>
      <Navbar />
      <div className='p-10'>
        <form className='flex flex-col items-center w-[95%] md:w-2/3 rounded-md mx-auto shadow-lg shadow-black bg-blue-500 gap-5 p-10 py-20'>
          <input type="text" id='id' name='id' placeholder='Enter User Id' className='shadow shadow-black rounded border-2 w-[90%] md:w-80 p-1 md:p-2 pl-2 md:pl-3' />
          <input type="password" id='password' name='password' placeholder='Enter Password' className='shadow shadow-black rounded border-2 w-[90%] md:w-80 p-1 md:p-2 pl-2 md:pl-3' />
          <Link href={'/getstarted'} className='font-semibold text-sm md:text-base md:hover:bg-yellow-400 px-3 py-1 rounded'>Dont have an Account?</Link>
          <button type="submit" id="submit" className='shadow-md shadow-black text-base md:text-lg bg-teal-400 px-4 py-1.5 rounded-md font-bold hover:bg-yellow-400'>Login</button>
        </form>
      </div>
    </>
  )
}

export default page