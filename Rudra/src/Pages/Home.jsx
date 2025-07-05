import React from 'react'
import Navbar from '../Componets/Navbar'
import Hero from '../Componets/Hero'
import Shop from '../Componets/Shop'
import Hero2 from '../Componets/Hero2'
import Shop2 from '../Componets/Shop2'
import Contact from '../Componets/Contact'
import Footer from '../Componets/Footer'


const Home = () => {
  return (
    <>
          <Navbar />
          <Hero />
          <Shop />
          <Hero2 />
          <Shop2 />
          <Contact />
          <Footer />
          </>
  )
}

export default Home