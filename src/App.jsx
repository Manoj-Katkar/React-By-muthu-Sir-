// !24/08/24
// ~Learned about the class based component

// import React from "react";

//* class based component

// class App extends React.Component{
//using the render method we will return the jsx
//     render(){
//         return (
//             <>
//             <h1>Hello World</h1>
//             </>
//         )
//     }
// }

// export default App;

//* function based component
// without installing the the pacakege the npx will execute that pacakage
// the process of comparing actual dom and virtual dom is known as the reconsolation

// function App(){
//     return (
//         <>
//             <h1>Hello From Functional Based Component</h1>
//         </>
//     )
// }

// export default App;

// !Date : 25/08/24
// ?shortcut to create the class based component  rcc + enter
//!State
// import React, { Component } from 'react'

// export default class App extends Component {
//     // taking the state
//     state = {userName : "Manoj" , id : 123 , company : "Meta"}

//     // constructor(){
//     //     super();
//     //     this.state = {userName : "Manoj" , id : 123 , company : "Meta"}

//     // }
//   render() {
//     return (
//       <div>
//         <h1>userName : {this.state.userName}</h1>
//         <h2>id : {this.state.id}</h2>
//         <h3>company : {this.state.company}</h3>
//       </div>
//     )
//   }
// }

// !Store differant users data in state and rendering in the UI :

// import React, { Component } from 'react'

// export default class App extends Component {

//     constructor(){
//         super();

//         this.state = {
//             students :  [
//                 {
//                     name : "Manoj",
//                     id : 123,
//                     course : "Development",
//                     location : "thane"
//                 },
//                 {
//                     name : "Manoj",
//                     id : 123,
//                     course : "Development",
//                     location : "thane"
//                 },
//                 {
//                     name : "Manoj",
//                     id : 123,
//                     course : "Development",
//                     location : "thane"
//                 },
//                 {
//                     name : "Manoj",
//                     id : 123,
//                     course : "Development",
//                     location : "thane"
//                 },
//                 {
//                     name : "Manoj",
//                     id : 123,
//                     course : "Development",
//                     location : "thane"
//                 }

//             ]
//         }
//     }

//   render() {

//     // destructuring
//     let {students} = this.state;

//     return (
//       <div className='container'>
//         <article>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>name</th>
//                         <th>id</th>
//                         <th>course</th>
//                         <th>location</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {students.map((currentStudent , currentIndex) => {

//                         //now destructuring the all the keys of the each object
//                         let {name , id , course , location} = currentStudent;

//                         return (
//                             <tr key={currentIndex + 1}>
//                                 <td>{name}</td>
//                                 <td>{id}</td>
//                                 <td>{course}</td>
//                                 <td>{location}</td>
//                             </tr>

//                         )
//                     })}
//                 </tbody>
//             </table>
//         </article>
//       </div>
//     )
//   }
// }

//! State in Function based component

// import React from 'react'

// const App = () => {
//     // !understand the useState() hook to set the state

//     let x = React.useState({
//         userName : "Manoj",
//         id : 123,
//         skills : ["java" , "javascript" , "react"]
//     })

//     console.log(x);

//   return (
//     <>
//         <h1>userName : {x[0].userName}</h1>
//         <h2>id : {x[0].id}</h2>
//         <ul>
//             skills
//             {
//                 x[0].skills.map((currentSkill , currentIndex) => {
//                     return (
//                         <li key={currentIndex + 1}>{currentSkill}</li>
//                     )
//                 })
//             }
//         </ul>
//     </>
//   )
// }

// export default App

//! now lets learn the how to update the state in FBC

// import React, { useState } from 'react'

// const App = () => {

//     let [userName , setUserName] = useState("Manoj");
//     let [userId , setId] = useState("123");
//     let [company , setCompany] = useState("TCS");

//     // lets taking the one function globally to handle the click event logic
//     let handleClick = (event) => {
//         setUserName("Mahi");
//         setId("007");
//         setCompany("Google");
//     }

//   return (
//     <>
//         <h1>userName : {userName}</h1>
//         <h2>userId : {userId}</h2>
//         <h3>company : {company}</h3>
//         <button type='button' onClick={handleClick}>Click Me to Update the state</button>
//     </>
//   )
// }

// export default App

// !lets create the table using the functional component

// import React, { useState } from 'react'

// const App = () => {

//     //* lets create the table using the function based component

//     let [studentData , setStudentData] = useState(
//         [
//             {
//                 name : "Manoj",
//                 id : 123,
//                 course : "Development",
//                 location : "thane"
//             },
//             {
//                 name : "sagar",
//                 id : 85,
//                 course : "testing",
//                 location : "satara"
//             },
//             {
//                 name : "dhoni",
//                 id : 53,
//                 course : "devops",
//                 location : "hydrabad"
//             },
//             {
//                 name : "sachin",
//                 id : 45,
//                 course : "Development",
//                 location : "banglore"
//             },
//             {
//                 name : "salman",
//                 id : 20,
//                 course : "devops",
//                 location : "dadar"
//             }

//         ]
//     );

//     console.log(studentData);

//     return (
//       <div className='container'>
//         <article>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>name</th>
//                         <th>id</th>
//                         <th>course</th>
//                         <th>location</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {studentData.map((currentStudent , currentIndex) => {

//                         //now destructuring the all the keys of the each object
//                         let {name , id , course , location} = currentStudent;

//                         return (
//                             <tr key={currentIndex + 1}>
//                                 <td>{name}</td>
//                                 <td>{id}</td>
//                                 <td>{course}</td>
//                                 <td>{location}</td>
//                             </tr>

//                         )
//                     })}
//                 </tbody>
//             </table>
//         </article>
//       </div>
//   )
// }

// export default App

// !How to update the state value in the class based component

// import React, { Component } from 'react'

// export default class App extends Component {

//     // taking the one state
//     state = {
//         userName : "sachin",
//         id : 121,
//         company : "TCS",
//     }

//     //writing the function to change the state value means update the state value in the class based component
//     handleClick = (event) => {
//         this.setState({
//             userName : "Manoj",
//             id : 174,
//             company : "Google"
//         })
//     }

//   render() {

//     // lets destructure the all keys
//     let {userName , id , company} = this.state;

//     return (

//       <div>
//         <h1>userName : {userName}</h1>
//         <h2>id : {id}</h2>
//         <h3>company : {company}</h3>
//         <button onClick={this.handleClick}>Click to change State</button>
//       </div>
//     )
//   }
// }

// ^How to take the json data as a state.

// import React from 'react'

// const App = () => {
//   return (

//     <div>
//       Hi I am From App function based component
//     </div>
//   )
// }

// export default App

// !Date : 27/08/24
//^How to transfer the props from the class based component

// import React, { Component } from "react";
// import Child from "./Child";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quia
//           nihil iusto qui dolorem consectetur laborum praesentium deleniti quae
//           exercitationem.
//         </p>

//         {/* Making the child as the child component of the App component  */}
//         <Child
//           userName = "Manoj"
//           id = {123}
//           skills = {["java" , "javascript" , "html" , "css" , "react"]}

//         />
//       </div>
//     );
//   }
// }

//^How to transfer the props from the class based component

// import React from 'react'
// import Child from './Child'

// const App = () => {
//   return (
//     <div>
//         <h1>Hello World</h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quia
//           nihil iusto qui dolorem consectetur laborum praesentium deleniti quae
//           exercitationem.
//         </p>

//         {/* Making the child as the child component of the App component  */}
//         <Child
//           userName = "Manoj"
//           id = {123}
//           skills = {["java" , "javascript" , "html" , "css" , "react"]}

//         />
//     </div>
//   )
// }

// export default App

//!28/08/24
//* how to store the data in json file and access that in App.jsx or in any Component

// import React, { useState } from 'react'
// import productsData from './data.json'

// const App = () => {
//   // lets create the state and in that state pass products data
//   let [data , setData ] = useState(productsData);

//   console.log(data);

//   return (
//     <div className='container'>
//       <article>
//         <table>
//           <thead>
//             <tr>
//               <th>Id : </th>
//               <th>Image : </th>
//               <th>title : </th>
//               <th>description : </th>
//               <th>price : </th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((currentProduct , index) => {
//               // let destructure the all the details
//               let {id , title , price , description , image} = currentProduct;
//               return (
//                     <tr key={index + 1}>
//                     <td>{id}</td>
//                     <td>
//                       <img src={image} alt="" />
//                     </td>
//                     <td>{title}</td>
//                     <td>{description}</td>
//                     <td>{price}</td>
//                   </tr>
//               )

//             })}
//           </tbody>
//         </table>
//       </article>
//     </div>
//   )
// }

// export default App

// ?how to transfer the function , json , and state value using props

// import React, { useState } from 'react'
// import productsData from './data.json'
// import Child from './Child';

// const App = () => {

//   let [count , setCount] = useState(0);

//   // lets take more the one more function that we will pass as the props
//   let demo = () => {
//     return "demo function";
//   }
//   return (
//     <div>
//       <Child count = {[count , setCount]}  products={productsData} demo={demo}/>
//     </div>
//   )
// }

// export default App

// !How to set the default props in class based components
// import React, { Component } from 'react'
// import Child from './Child';

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Child userName="Manoj" id={200} company="TCS"/>
//         <Child userName="Rocky Bhai" id={400} />
//         <Child  id={900} company="Google"/>
//       </div>
//     )
//   }
// }

//!29/08/24   (very imp datatypes for the props how to set)

//! npm i prop-types (install this libraray)
//^ How to set the data types for the props using the prop-types using the npm package
// * We have to set the data types for the props in the child component (means where we are receiving that props in that child we have to set the )

// import React from 'react'
// import Child from './Child';

// const App = () => {
//   return (
//     <div>
//       <Child userName={"Manoj"}  id={200}  skills={["js" , "react"]}/>

//       {/* while second child re-rendering I am intentially not passing userName to see the error
//       Warning: Failed prop type: The prop `userName` is marked as required in `Child`, but its value is `undefined`.*/}
//       <Child   id={200}  skills={["js" , "react"]}/>
//     </div>
//   )
// }

// export default App

// !How list and keys work in Fragment
//* key is just used to pass the unique identity to the list

// import React, { useState } from 'react'

// const App = () => {
//     //!here I will take the one state
//     let [skills] = useState([
//       "java",
//       "javascript",
//       "sql",
//       "Express",
//       "PHP",
//     ])
//   return (
//     <div>
//       <ol>
//         {
//           skills.map((currentSkill , index) => {
//             // I will return li using the fragement
//             return (
//               // !here for the empty fragement we canoot set the key to identify it uniqellly
//               // *hence I have to use the React.Fragment

//               <React.Fragment key={index + 1}>

//                 <li>{currentSkill}</li>

//               </React.Fragment>
//             )
//           })
//         }
//       </ol>
//     </div>
//   )
// }

// export default App

// !props.children (how to pass the children to the child from the parent component)

// import React from 'react'
// import Child from './Child'

// const App = () => {
//   return (
//     <div>
//       <Child>

//           <h1>userName : Manoj</h1>
//           <h2>is : 784</h2>
//           <h3>skills : core-java , javascript , react</h3>

//       </Child>

//     </div>
//   )
// }

// export default App

// learned about the how to set the datatypes for the props in child component using the prop-types library and using the componentName.propTypes and also learned about the list and keys how it works in the React.fragement and also learned props.children (how to pass the children to the child from the parent component)

//& 30-08-24
//! How to create the ref in CBC:

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.divRef=React.createRef();
//   }
//   handleClick=(e)=>{
//     this.divRef.current.style.background="hotpink";
//   };
//   render() {
//     return (
//       <div
//       ref={this.divRef}
//       className="container"
//       onClick={this.handleClick}>
//       </div>
//     )
//   }
// }

//! How to create the ref in FBC:

// import React, { useRef } from 'react';

// const App=()=> {
//   let divRef=useRef();
//   let handleClick=(e)=>{
//     divRef.current.style.background="goldenrod";
//   }
//   return(
//     <div className="container" ref={divRef}
//     onClick={handleClick}>
//     </div>
//   )
// };

// export default App;

//! how to handle the media player using ref:

// import React, { useRef, useState } from 'react'
// import video from "./videos/Shivba Raja _ Sher Shivraj _ Digpal Lanjekar _ Avadhoot Gandhi _ Devdutta Manisha Baji.mp4";

// const App = () => {
//   let videoRef=useRef();
//   let[play,setPlay]=useState(false);
//   let[text,setText]=useState("");
//   let handleClick=(e)=>{
//     setPlay(!play);
//     if(play){
//       videoRef.current.play();
//       setText("playing");
//     }
//     else{
//       videoRef.current.pause();
//       setText("")
//     }
//   }
//   return (
//     <div className="container">
//       <h1>{text}</h1>
//       <video src={video}
//       onClick={handleClick}
//       height={"700px"}
//       width={"600px"}
//       ref={videoRef}
//       >
//       </video>
//     </div>
//   )
// }

// export default App;

// !02/09/24
// ^how to do the conditional rendering in react :
// !there are total 4 ways
// ^1)using if-else
// ^2)using switch
// ^3)using ternary operator
// ^4)using logical AND (&&)

// !using if-else

// import React, { useState } from 'react'

// const App = () => {

//   let [isLogIn , setIsLogedIn] = useState(true);

//   if(isLogIn){
//     // means the user is successfully logedIn then show the userName with logout button

//     return (
//       <div className='container'>

//         <article>
//           <aside className='a1'>Heading</aside>
//           <aside className='a1'>
//             <ul>
//               <li>Home</li>
//               <li>Products</li>
//               <li>Blogs</li>
//               <li>Hi Manoj</li>
//               <li>
//                 <button type='button'>LogOut</button>
//               </li>
//             </ul>
//           </aside>

//         </article>
//       </div>
//     )
//   }
//   else{
//     return(
//       <div className='container'>

//         <article>
//           <aside className='a1'>Heading</aside>
//           <aside className='a1'>
//             <ul>
//               <li>Home</li>
//               <li>Products</li>
//               <li>Blogs</li>
//               <li>LogIn</li>
//               <li>SignUp</li>
//             </ul>
//           </aside>

//         </article>
//       </div>
//     )
//   }
// }

// export default App

// !using switch case

// import React, { useState } from "react";

// const App = () => {
//   let [isLogIn, setIsLogedIn] = useState(true);

//   // !Note we can use the break also but it is already under the return so no need of the break

//   switch (isLogIn) {
//     case true: {
//       return (
//         <div className="container">
//           <article>
//             <aside className="a1">Heading</aside>
//             <aside className="a1">
//               <ul>
//                 <li>Home</li>
//                 <li>Products</li>
//                 <li>Blogs</li>
//                 <li>Hi Manoj</li>
//                 <li>
//                   <button
//                     type="button"
//                     onClick={(event) => {
//                       setIsLogedIn(false);
//                     }}
//                   >
//                     LogOut
//                   </button>
//                 </li>
//               </ul>
//             </aside>
//           </article>
//         </div>
//       );
//     }
//     case false: {
//       return (
//         <div className="container">
//           <article>
//             <aside className="a1">Heading</aside>
//             <aside className="a1">
//               <ul>
//                 <li>Home</li>
//                 <li>Products</li>
//                 <li>Blogs</li>
//                 <li>LogIn</li>
//                 <li>SignUp</li>
//               </ul>
//             </aside>
//           </article>
//         </div>
//       );
//     }
//   }
// };

// export default App;




// !using ternary operator 
import React, { useState } from 'react'

const App = () => {

  let [isLogIn, setIsLogedIn] = useState(true);

  //* taking the nested components to render according to the ternary operator 

  let IsGuest = ()=>{
    return(
      <>
      <li>LogIn</li>
      <li>
        <button style={{
          backgroundColor:isLogIn ? "red" : "white",
        }} onClick={(event) => {
          setIsLogedIn(true);
        }}>
          Sign-Up
        </button>
      </li>
      </>
    )
  }



  let IsUser = ()=>{
    return(
      <>
      <li>Hi ! Manoj</li>
      <li>
        <button style={
          {
          backgroundColor:isLogIn ? "hotpink" : "yellow",
          }
        
        
        } onClick={(event) => {
          setIsLogedIn(false);
        }}>
          Log-Out
        </button>
      </li>
      </>
    )
  }



  // !main return of the app component 
  return(
          <div className="container">
          <article>
            <aside className="a1">Heading</aside>
            <aside className="a1">
              <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Blogs</li>
                {isLogIn ? <IsUser/> : <IsGuest/>}
              </ul>
            </aside>
          </article>
        </div>
  )



}

export default App






// !using && operator (used for only the true conditional scenarioes)

// import React, { Component } from 'react'
// import { FaBell } from "react-icons/fa";

// export default class App extends Component {
//   state = {
//     notifications : [
//       "Manoj send you the friend request",
//       "sheela viewed your profile",
//       "Nauty atul send you friend request"
//     ]
//   }
//   render() {
//     return (
//       <div>
//         <h1><FaBell /></h1>
//         <sup>
//           {/* means the when the length array is greater than 0 then only display its length under that notification bar  */}
//           {this.state.notifications.length > 0 && this.state.notifications.length}</sup>
//       </div>
//     )
//   }
// }
