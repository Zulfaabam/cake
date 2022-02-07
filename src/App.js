import React from 'react'
import Navbar from './components/Navbar'
import Benefit from './components/Benefit'
import BuyNow from './components/BuyNow'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ProductCategory from './components/ProductCategory'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Benefit />
      <ProductCategory />
      <Testimonials />
      <BuyNow />
      <Footer />
    </div>
  )
}

export default App
