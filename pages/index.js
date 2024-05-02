import React, { useEffect, useState } from 'react'
import HeroSection from './Components/HeroSection'
import SubjectCategory from './Components/SubjectCategory'
import NavBar from './Components/NavBar'


const page = () => {
  const [emuser, setTbuser] = useState('')
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
      setTbuser(emuser)
    }
  })
  return (
    <main>
      <NavBar />
      {
        emuser ?
          <SubjectCategory />
          :
          <>
            <HeroSection />
          </>
      }
    </main>
  )
}

export default page