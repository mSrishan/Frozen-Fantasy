import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import WhereToBuy from './components/WhereToBuy/WhereToBuy'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <Services />
      <WhereToBuy />
      <Footer />
    </div>
  )
}

export default App
