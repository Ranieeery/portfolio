import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import Qualifications from '../components/Qualifications'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualifications />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}