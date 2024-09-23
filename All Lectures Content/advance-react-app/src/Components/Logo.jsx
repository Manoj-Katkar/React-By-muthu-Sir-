import React from 'react'
import Button from './Button'

const Logo = (props) => {
    console.log("logo component");
    
  return (
    <div>Logo
        <Button {...props} />
    </div>
  )
}

export default Logo