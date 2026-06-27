import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './compenets/NavBar'
import About from './pages/About'
import Sarvice from './pages/Sarvice'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kid from './pages/Kid'
import Footer from './compenets/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/sarvice" element={<Sarvice />} />

  <Route path="/product" element={<Product />}>
    <Route path="men" element={<Men />} />
    <Route path="women" element={<Women />} />
    <Route path="kid" element={<Kid />} />
  </Route>

  <Route path="*" element={<Notfound />} />
</Routes>
<Footer/>
    </div>
  )
}

export default App