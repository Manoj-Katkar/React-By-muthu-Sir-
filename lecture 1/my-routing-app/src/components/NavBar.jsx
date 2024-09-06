import React from 'react'
import { Link , NavLink} from 'react-router-dom'

const NavBar = () => {
    // !how to give the css using the functions 
    let handleStyle = ({isActive}) => {
        return{
            fontWeight : isActive ? "bold" : "normal",
            textDecoration : isActive ? "none" : "underline",
        }
    }


// //!using the Link
//   return (
//     <div className='navBar'>
//         <ul>
//             {/* here for the Link and  NavLink will take the one parameter that is to={"path"}*/}
//             <li><Link to={"/"}>Home</Link></li>
//             <li><Link to={"/about-us"}>About-Us</Link></li>
//             <li><Link to={"/products"}>Products</Link></li>
//         </ul>
//     </div>
//   )


//!using the NavLink
return (
    <div className='navBar'>
        <ul>
            {/* here for the Link and  NavLink will take the one parameter that is to={"path"}*/}
            <li><NavLink to={"/"} style={handleStyle} >Home</NavLink></li>
            <li><NavLink to={"/about-us"} style={handleStyle}>About-Us</NavLink></li>
            <li><NavLink to={"/products"} style={handleStyle}>Products</NavLink></li>
        </ul>
    </div>
  )
}

export default NavBar