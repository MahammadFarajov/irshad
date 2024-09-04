import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import PopularProducts from './components/PopularProducts'
import BestSellers from './components/BestSellers'
import ProductShowcase from './components/ProductShowcase'
import Bonus from './components/Bonus'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <PopularProducts />
      <BestSellers />
      <ProductShowcase />
      <Bonus />
      <Footer />
    </>
  )
}
