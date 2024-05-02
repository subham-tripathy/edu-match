import React, { useEffect } from 'react'
import Link from 'next/link'


const SearchTopic = () => {
  useEffect(() => {
    const searchInput = document.querySelector('input[type="search"]')
    const searchResults = document.getElementById('searchResults')
    searchInput.addEventListener('input', (e) => {
      fetch('/api/fetchSubjects').then(res => res.json()).then(data => {
        searchResults.innerHTML = ''
        searchResults.classList.remove('hidden')
        searchResults.classList.add('flex')
        data.forEach(subject => {
          if (subject.subject.toLowerCase().includes(e.target.value.toLowerCase())) {
            const a = document.createElement('a')
            a.style.margin = '0.5rem 1rem'
            a.style.padding = '3px 10px'
            a.style.fontWeight = 'bold'
            a.style.backgroundColor = 'rgb(59 130 246 / var(--tw-bg-opacity))'
            a.style.width = 'max-content'
            a.textContent = subject.subject
            a.href = `/findTeacher?sub=${subject.subject}`
            searchResults.appendChild(a)
          }
        })
      })
    })
    searchInput.addEventListener('focusout', () => {
      setTimeout(() => {
        searchResults.classList.remove('flex')
        searchResults.classList.add('hidden')
      }, 500);
    })
  })
  return (
    <div className='flex flex-col'>
      <input type="search" placeholder='Search Topic / Subject' className='px-3 py-2 w-96 text-black' />
      <section id="searchResults" className='top-16 bg-slate-400 border-2 border-white rounded w-96 absolute flex-col space-y-3 hidden'>
      </section>
    </div>
  )
}

export default SearchTopic