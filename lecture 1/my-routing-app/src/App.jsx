import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route  , Routes} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import AboutUs from './components/AboutUs'
import NavBar from './components/NavBar'



function App() {

  return (
    <>
      {/* here I want navbar as the common to all hence rendering it outside the routes  */}
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </>
  )
}

export default App
