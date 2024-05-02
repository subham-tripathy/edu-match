import Link from 'next/link'
import React, { useEffect } from 'react'

const signup = () => {
  useEffect(() => {
    // function getCookie(name) {
    //   const cookieString = document.cookie;
    //   const cookies = cookieString.split(";").map(cookie => cookie.trim());
    //   for (const cookie of cookies) {
    //     if (cookie.startsWith(name + "=")) {
    //       return cookie.substring(name.length + 1);
    //     }
    //   }
    //   return null;
    // }
    // const emuser = getCookie('emuser');
    // if (emuser) {
    //   alert('You already logged in !')
    //   window.location.href = '/'
    // }
    // else {
    //   const submitBTN = document.querySelector('#submit')
    //   submitBTN.addEventListener('click', (e) => {
    //     e.preventDefault()





    //     const id = document.querySelector('#id').value
    //     const password = document.querySelector('#password').value
    //     let url = '/api/login?id=' + id + '&password=' + password


    //     fetch(url).then(res => res.json()).then((data) => {
    //       if (data.msg === 'login success') {
    //         alert('Successfully Logged In')
    //         document.cookie = "emuser=" + id + "; expires=7; path=/; secure";
    //         window.location.href = '/'
    //       }
    //     })
    //   })
    // }
  })
  return (
    <div className='p-10'>
      {/* <form className='flex flex-col items-center w-2/3 rounded-md mx-auto shadow-lg shadow-black bg-slate-400 gap-5 p-10 py-20'>
        <input id='name' type="text" name='name' placeholder='Enter Name' className='shadow shadow-black border-2 w-80 p-2 pl-3' />
        <input id='id' type="text" name='id' placeholder='Enter User Id' className='shadow shadow-black border-2 w-80 p-2 pl-3' />
        <label className='font-bold text-xl text-shadow text-white'>Choose User Type:</label>
        <span className='flex space-x-10 font-bold text-shadow text-white'>
          <span className='flex items-center space-x-1'><input type="radio" name="type" id="teacher" value="teacher" /><label htmlFor="teacher">Teacher</label></span>
          <span className='flex items-center space-x-1'><input type="radio" name="type" id="student" value="student" /><label htmlFor="student">Student</label></span>
        </span>
        <input id='password' type="password" name='password' placeholder='Enter Password' className='shadow shadow-black border-2 w-80 p-2 pl-3' />
        <input id='cpassword' type="password" name='cpassword' placeholder='Confirm Password' className='shadow shadow-black border-2 w-80 p-2 pl-3' />
        <Link href={'/login'} className='font-semibold'>Have an Account?</Link>
        <button type="submit" id="submit" className='shadow shadow-black text-lg bg-blue-400 px-4 py-1.5 rounded-md font-bold hover:bg-blue-500'>Sign Up</button>
      </form> */}
    </div>
  )
}

export default signup