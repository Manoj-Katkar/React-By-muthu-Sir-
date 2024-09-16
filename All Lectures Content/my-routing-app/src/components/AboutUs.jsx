import React from 'react'
import { Outlet } from 'react-router-dom'

const AboutUs = () => {
  return (
    <>
        <div>
          <h1>About Us</h1>
        </div>    
        <Outlet/>
    </>


  )
}

export default AboutUs