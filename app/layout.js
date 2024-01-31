import NavBar from './Components/NavBar'
import './globals.css'

export const metadata = {
  title: 'EduMatch',
  description: 'EduMatch: Personalized Learning Connector',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
