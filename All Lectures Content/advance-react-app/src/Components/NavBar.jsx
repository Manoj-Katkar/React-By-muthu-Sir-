import React from 'react'
import Logo from './Logo';

const NavBar = (props) => {
    console.log("NavBar Component");
    
  return (
    <div>NavBar
        <Logo {...props}/>
    </div>
  )
}

export default NavBar