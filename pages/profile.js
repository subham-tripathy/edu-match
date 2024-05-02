import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import VideoUploadForm from './Components/VideoUploadForm'
import ShowAllVideos from './Components/ShowAllVideos'

const page = () => {
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
    fetch('/api/fetchProfile?id=' + getCookie('emuser')).then(res => res.json()).then(data => {
      data = data[0]
      document.querySelector('#name').textContent = ' ' + data.name
      document.querySelector('#id').textContent = ' ' + data.uid
      document.querySelector('#type').textContent = ' ' + data.type

      if (data.type === 'teacher') {
        setType('teacher')

        fetch('/api/fetchrating?tid=' + getCookie('emuser')).then(res => res.json()).then(data => {
          for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
              const element = data[key];
              const div = document.createElement('div')
              div.classList.add('flex')
              div.classList.add('flex-col')
              div.classList.add('text-center')
              div.classList.add('text-shadow')
              div.classList.add('text-white')
              div.classList.add('font-bold')
              div.classList.add('bg-slate-50')
              div.classList.add('w-max')
              div.classList.add('px-3')
              div.classList.add('py-1')
              div.classList.add('rounded')
              div.classList.add('shadow-md')
              div.classList.add('shadow-black')

              const h3 = document.createElement('h3')
              h3.classList.add('bg-slate-500')
              h3.classList.add('px-3')
              h3.classList.add('py-1')
              h3.classList.add('rounded')
              h3.classList.add('w-max')
              h3.textContent = element.subject

              const p = document.createElement('p')
              p.textContent = (parseFloat(element.rating) / parseFloat(element.rating_quantity)).toFixed(1);
              p.textContent += '⭐'

              div.appendChild(h3)
              div.appendChild(p)

              document.querySelector('#allratings').appendChild(div)

            }
          }
        })
      }
      else {
        setType('student')
      }
    })


  }, [])
  return (
    <>
      {
        type === 'teacher' ?
          <>
            <NavBar />
            <div className='flex justify-between w-[95%] py-10 px-20 rounded-xl items-center bg-yellow-400 mx-auto'>
              <div>
                <img src='/pics/profile.jpg' className='h-40 w-40 rounded-full border shadow-md shadow-gray-800' />
              </div>
              <div className='text-3xl'>
                <h1><span className='font-bold text-white text-shadow'>Name:</span><span id='name'></span></h1>
                <h1><span className='font-bold text-white text-shadow'>uid:</span><span id='id'></span></h1>
                <h1><span className='font-bold text-white text-shadow'>type:</span><span id='type'></span></h1>
              </div>
              <div id='allratings' className='grid grid-cols-4 gap-5 mb-auto'>
              </div>
              <div id='rating'>
              </div>
            </div>
            <VideoUploadForm />
            <ShowAllVideos />
          </>
          :
          <>
            <NavBar />
            <div className='flex w-[95%] py-10 px-20 space-x-20 rounded-xl it ems-center bg-yellow-400 mx-auto'>
              <div>
                <img src='/pics/profile.jpg' className='h-40 w-40 rounded-full border shadow-md shadow-gray-800' />
              </div>
              <div className='text-3xl space-y-5'>
                <h1><span className='font-bold text-white text-shadow'>Name:</span><span id='name'></span></h1>
                <h1><span className='font-bold text-white text-shadow'>uid:</span><span id='id'></span></h1>
                <h1><span className='font-bold text-white text-shadow'>type:</span><span id='type'></span></h1>
              </div>
              <div id='allratings' className='grid grid-cols-4 gap-10 mb-auto'>
              </div>
            </div>
          </>
      }
    </>
  )
}

export default page