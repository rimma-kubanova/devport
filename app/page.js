import Main from '@/components/Main'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
   <div>
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
   </div>
  )
}
