import Link from 'next/link'
import React, { useEffect } from 'react'

const TopTeachers = () => {
    useEffect(() => {

        const topSection = document.querySelector('#top section')
        const javaTopSection = document.querySelector('#javatop section')
        const pythonTopSection = document.querySelector('#pythontop section')


        // fetch for all teachers
        fetch('/api/fetchTeacher?sub=all').then(res => res.json()).then(data => {
            let counter = 1
            for (const key in data) {
                if (counter > 4) {
                    break;
                }
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];


                    const innerDiv = document.createElement('div')
                    innerDiv.classList.add('border-2')
                    innerDiv.classList.add('border-white')
                    innerDiv.classList.add('rounded-lg')
                    innerDiv.classList.add('shadow-md')
                    innerDiv.classList.add('shadow-black')
                    innerDiv.classList.add('text-center')
                    innerDiv.classList.add('text-white')
                    innerDiv.classList.add('font-semibold')
                    innerDiv.classList.add('p-5')

                    const img = document.createElement('img')
                    img.src = '/pics/teacherProfilePic.webp'
                    img.width = 100
                    img.height = 100
                    img.classList.add('rounded-full')
                    img.classList.add('bg-teal-400')
                    img.classList.add('mt-4')
                    img.classList.add('border-4')
                    img.classList.add('shadow-md')
                    img.classList.add('shadow-black')
                    img.classList.add('border-white')
                    img.classList.add('mx-auto')

                    const teacherName = document.createElement('p')
                    teacherName.textContent = element.name

                    const span = document.createElement('span')
                    span.classList.add('flex')
                    span.classList.add('justify-between')

                    const subName = document.createElement('p')
                    subName.textContent = element.subject

                    const rating = document.createElement('p')
                    rating.textContent = element.rating + '⭐'

                    span.appendChild(subName)
                    span.appendChild(rating)

                    innerDiv.appendChild(img)
                    innerDiv.appendChild(teacherName)
                    innerDiv.appendChild(span)


                    topSection.appendChild(innerDiv)

                    counter++;
                }
            }
        })







        // fetch for python teachers
        fetch('/api/fetchTeacher?sub=python').then(res => res.json()).then(data => {
            let counter = 1
            for (const key in data) {
                if (counter > 4) {
                    break;
                }
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];


                    const innerDiv = document.createElement('div')
                    innerDiv.classList.add('border-2')
                    innerDiv.classList.add('border-white')
                    innerDiv.classList.add('rounded-lg')
                    innerDiv.classList.add('shadow-md')
                    innerDiv.classList.add('shadow-black')
                    innerDiv.classList.add('text-center')
                    innerDiv.classList.add('text-white')
                    innerDiv.classList.add('font-semibold')
                    innerDiv.classList.add('p-5')

                    const img = document.createElement('img')
                    img.src = '/pics/teacherProfilePic.webp'
                    img.width = 100
                    img.height = 100
                    img.classList.add('rounded-full')
                    img.classList.add('bg-teal-400')
                    img.classList.add('mt-4')
                    img.classList.add('border-4')
                    img.classList.add('shadow-md')
                    img.classList.add('shadow-black')
                    img.classList.add('border-white')
                    img.classList.add('mx-auto')

                    const teacherName = document.createElement('p')
                    teacherName.textContent = element.name

                    const span = document.createElement('span')
                    span.classList.add('flex')
                    span.classList.add('justify-between')

                    const subName = document.createElement('p')
                    subName.textContent = element.subject

                    const rating = document.createElement('p')
                    rating.textContent = element.rating + '⭐'

                    span.appendChild(subName)
                    span.appendChild(rating)

                    innerDiv.appendChild(img)
                    innerDiv.appendChild(teacherName)
                    innerDiv.appendChild(span)


                    pythonTopSection.appendChild(innerDiv)
                    counter++;
                }
            }
        })






        // fetch for java teachers
        fetch('/api/fetchTeacher?sub=java').then(res => res.json()).then(data => {
            let counter = 1
            for (const key in data) {
                if (counter > 4) {
                    break;
                }
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];


                    const innerDiv = document.createElement('div')
                    innerDiv.classList.add('border-2')
                    innerDiv.classList.add('border-white')
                    innerDiv.classList.add('rounded-lg')
                    innerDiv.classList.add('shadow-md')
                    innerDiv.classList.add('shadow-black')
                    innerDiv.classList.add('text-center')
                    innerDiv.classList.add('text-white')
                    innerDiv.classList.add('font-semibold')
                    innerDiv.classList.add('p-5')

                    const img = document.createElement('img')
                    img.src = '/pics/teacherProfilePic.webp'
                    img.width = 100
                    img.height = 100
                    img.classList.add('rounded-full')
                    img.classList.add('bg-teal-400')
                    img.classList.add('mt-4')
                    img.classList.add('border-4')
                    img.classList.add('shadow-md')
                    img.classList.add('shadow-black')
                    img.classList.add('border-white')
                    img.classList.add('mx-auto')

                    const teacherName = document.createElement('p')
                    teacherName.textContent = element.name

                    const span = document.createElement('span')
                    span.classList.add('flex')
                    span.classList.add('justify-between')

                    const subName = document.createElement('p')
                    subName.textContent = element.subject

                    const rating = document.createElement('p')
                    rating.textContent = element.rating + '⭐'

                    span.appendChild(subName)
                    span.appendChild(rating)

                    innerDiv.appendChild(img)
                    innerDiv.appendChild(teacherName)
                    innerDiv.appendChild(span)


                    javaTopSection.appendChild(innerDiv)
                    counter++;
                }
            }
        })
    })


    return (
        <div id='explore'>
            <div id="top" className='border-4 border-white bg-blue-500 mt-20 p-10 m-10 rounded-lg shadow-md shadow-black'>
                <div className='flex justify-between items-center mb-5'>
                    <h1 className='text-3xl font-bold text-white text-shadow'>Explore Our Top Teachers</h1>
                    <Link href={'/findTeacher?sub=all'} className='text-white font-semibold text-shadow'>View All</Link>
                </div>
                <section className='grid grid-cols-4 gap-10'>
                </section>
            </div>


            <div id="pythontop" className='border-4 border-white bg-blue-500 mt-20 p-10 m-10 rounded-lg shadow-md shadow-black'>
                <div className='flex justify-between items-center mb-5'>
                    <h1 className='text-3xl font-bold text-white text-shadow'>Explore Our Top Python Teachers</h1>
                    <Link href={'/findTeacher?sub=python'} className='text-white font-semibold text-shadow'>View All</Link>
                </div>
                <section className='grid grid-cols-4 gap-10'>
                </section>
            </div>


            <div id="javatop" className='border-4 border-white bg-blue-500 mt-20 p-10 m-10 rounded-lg shadow-md shadow-black'>
                <div className='flex justify-between items-center mb-5'>
                    <h1 className='text-3xl font-bold text-white text-shadow'>Explore Our Top Java Teachers</h1>
                    <Link href={'/findTeacher?sub=java'} className='text-white font-semibold text-shadow'>View All</Link>
                </div>
                <section className='grid grid-cols-4 gap-10'>
                </section>
            </div>

        </div>
    )
}

export default TopTeachers