import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Rimma | Front-End Developer',
}

export default function RootLayout({ children }) {
  return (
    <>
     <Navbar />
    {children}
    </>
  )
}
