import NavBar from './Components/NavBar'
import './globals.css'

export const metadata = {
  title: 'EduMatch',
  description: 'EduMatch: Personalized Learning Connector',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:bg-slate-500'>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
