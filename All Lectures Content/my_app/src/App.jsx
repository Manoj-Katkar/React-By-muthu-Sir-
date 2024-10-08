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
// import React, { useState } from 'react'

// const App = () => {

//   let [isLogIn, setIsLogedIn] = useState(true);

//   //* taking the nested components to render according to the ternary operator 

//   let IsGuest = ()=>{
//     return(
//       <>
//       <li>LogIn</li>
//       <li>
//         <button style={{
//           backgroundColor:isLogIn ? "red" : "white",
//         }} onClick={(event) => {
//           setIsLogedIn(true);
//         }}>
//           Sign-Up
//         </button>
//       </li>
//       </>
//     )
//   }



//   let IsUser = ()=>{
//     return(
//       <>
//       <li>Hi ! Manoj</li>
//       <li>
//         <button style={
//           {
//           backgroundColor:isLogIn ? "hotpink" : "yellow",
//           }
        
        
//         } onClick={(event) => {
//           setIsLogedIn(false);
//         }}>
//           Log-Out
//         </button>
//       </li>
//       </>
//     )
//   }



//   // !main return of the app component 
//   return(
//           <div className="container">
//           <article>
//             <aside className="a1">Heading</aside>
//             <aside className="a1">
//               <ul>
//                 <li>Home</li>
//                 <li>Products</li>
//                 <li>Blogs</li>
//                 {isLogIn ? <IsUser/> : <IsGuest/>}
//               </ul>
//             </aside>
//           </article>
//         </div>
//   )



// }

// export default App






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









// !04/09/24
// controller and un-controller Component
// control : data stored in state , to change the value pass the onChange event and witin that property change the state value 
// 
// ~logIn form how it works in React

// import React, { Component, useRef, useState } from "react";

// const App = () => {
//   let [username, setUsername] = useState("");
//   let [password, setPassword] = useState("");
//   let [email, setEmail] = useState("");
//   let handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(username, password, email);
//   };
//   return (
//     <div className="container">
//       <h1>LogIn form</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           id="username"
//           placeholder="Enter Username"
//           onChange={(e) => {
//             setUsername(e.target.value);
//           }}
//           value={username}
//         />{" "}
//         <br />
//         <input
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Enter Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />{" "}
//         <br />
//         {/* <label htmlFor="gender">Select Gender :</label>
//         <div className="container-gender">
//           <input type="radio" name="gender" id="male" value={"male"} /> male{" "}
//           <br />
//           <input type="radio" name="gender" id="female" value={"female"} />{" "}
//           female <br />
//           <input type="radio" name="gender" id="others" value={"others"} />{" "}
//           others <br />
//         </div>
//         <label htmlFor="courses">Select Course :</label>
//         <div className="courses">
//           <input type="checkbox" name="courses" id="java" value={"java"} /> java{" "}
//           <input type="checkbox" name="courses" id="js" value={"js"} />{" "}
//           javascript
//           <input type="checkbox" name="courses" id="PHP" value={"PHP"} /> PHP
//           <input type="checkbox" name="courses" id="SQL" value={"SQL"} /> SQL
//           <input type="checkbox" name="courses" id="SDLC" value={"SDLC"} /> SDLC
//         </div> */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;









//!date 05/09/2024
//* How to store the mutiple state value within one useState using object to access the form data in React
// !in react we will use controller form 
//^ (using function based component)

// import React, { useRef, useState } from "react";
// import countries from "./countriesData.json";
// const App = () => {
//   let [countriesAll, setCountriesAll] = useState(countries);
//   let [data, setData] = useState({
//     username: "",
//     password: "",
//     email: "",
//     gender: "",
//     DOB: "",
//     percentage: "50",
//     course: [],
//     country: "",
//   });
//   let handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(data);
//   };
//   let handleChange = (e) => {
//     // console.log(e);
//     let { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };
//   let handleChangeCourse = (e) => {
//     let { value } = e.target;
//     let { course } = data;
//     if (course.includes(value) === false) {
//       data.course.push(value);
//     } else {
//       let index = course.indexOf(value);
//       data.course.splice(index, 1);
//     }
//   };
//   return (
//     <div className="container">
//       <h1>LogIn form</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           id="username"
//           placeholder="Enter Username"
//           onChange={handleChange}
//           value={data.username}
//         />{" "}
//         <br />
//         <input
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Enter Password"
//           value={data.password}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Enter Email"
//           value={data.email}
//           onChange={handleChange}
//         />{" "}
//         <br />
//         <label htmlFor="percentage">Percentage</label>
//         <input
//           type="range"
//           name="percentage"
//           id="percentage"
//           value={data.percentage}
//           max={100}
//           min={35}
//           onChange={handleChange}
//         />
//         <span>{data.percentage}</span>
//         <br />
//         <label htmlFor="DOB">Select DOB : </label>
//         <input
//           type="date"
//           name="DOB"
//           id="DOB"
//           onChange={handleChange}
//           value={data.DOB}
//         />
        
//         <br />
//         <label htmlFor="gender">Select Gender :</label>
//         <div className="container-gender" onChange={handleChange}>
//           <input type="radio" name="gender" id="male" value={"male"} /> male{" "}
//           <br />
//           <input type="radio" name="gender" id="female" value={"female"} />{" "}
//           female <br />
//           <input type="radio" name="gender" id="others" value={"others"} />{" "}
//           others <br />
//         </div>
//         <label htmlFor="courses">Select Course :</label>
//         <div className="courses" onChange={handleChangeCourse}>
//           <input type="checkbox" name="courses" id="java" value={"java"} /> java{" "}
//           <input type="checkbox" name="courses" id="js" value={"js"} />{" "}
//           javascript
//           <input type="checkbox" name="courses" id="PHP" value={"PHP"} /> PHP
//           <input type="checkbox" name="courses" id="SQL" value={"SQL"} /> SQL
//           <input type="checkbox" name="courses" id="SDLC" value={"SDLC"} /> SDLC
//         </div>
//         <label htmlFor="country">select Country</label>
//         <select name="country" id="country" onChange={handleChange}>
//           {countriesAll.map((v, i) => {
//             let { name } = v;
//             return (
//               <option key={i + 1} value={name}>
//                 {name}
//               </option>
//             );
//           })}
//         </select>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default App;








// !in react we will use controller form 
//^ (using class based component)

// import React, { Component } from "react";
// import countries from "./countriesData.json";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       countriesAll: countries,
//       data: {
//         username: "",
//         password: "",
//         email: "",
//         gender: "",
//         DOB: "",
//         percentage: "50",
//         course: [],
//         country: "",
//       },
//     };
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state.data);
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState((prevState) => ({
//       data: { ...prevState.data, [name]: value },
//     }));
//   };

//   handleChangeCourse = (e) => {
//     const { value } = e.target;
//     const { course } = this.state.data;
//     if (course.includes(value) === false) {
//           course.push(value)
//     } else {
//       let index = course.indexOf(value);
//       course.splice(index, 1);
//     }
//   };

//   render() {
//     const { data, countriesAll } = this.state;

//     return (
//       <div className="container">
//         <h1>LogIn form</h1>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="username"
//             id="username"
//             placeholder="Enter Username"
//             onChange={this.handleChange}
//             value={data.username}
//           />{" "}
//           <br />
//           <input
//             type="password"
//             name="password"
//             id="password"
//             placeholder="Enter Password"
//             value={data.password}
//             onChange={this.handleChange}
//           />
//           <br />
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Enter Email"
//             value={data.email}
//             onChange={this.handleChange}
//           />{" "}
//           <br />
//           <label htmlFor="percentage">Percentage</label>
//           <input
//             type="range"
//             name="percentage"
//             id="percentage"
//             value={data.percentage}
//             max={100}
//             min={35}
//             onChange={this.handleChange}
//           />
//           <span>{data.percentage}</span>
//           <br />
//           <label htmlFor="DOB">Select DOB : </label>
//           <input
//             type="date"
//             name="DOB"
//             id="DOB"
//             onChange={this.handleChange}
//             value={data.DOB}
//           />
//           <br />
//           <label htmlFor="gender">Select Gender :</label>
//           <div className="container-gender" onChange={this.handleChange}>
//             <input type="radio" name="gender" id="male" value="male" /> male{" "}
//             <br />
//             <input type="radio" name="gender" id="female" value="female" />{" "}
//             female <br />
//             <input type="radio" name="gender" id="others" value="others" />{" "}
//             others <br />
//           </div>
//           <label htmlFor="courses">Select Course :</label>
//           <div className="courses" onChange={this.handleChangeCourse}>
//             <input type="checkbox" name="courses" id="java" value="java" /> java{" "}
//             <input
//               type="checkbox"
//               name="courses"
//               id="js"
//               value="js"
//             />{" "}
//             javascript
//             <input
//               type="checkbox"
//               name="courses"
//               id="PHP"
//               value="PHP"
//             />{" "}
//             PHP
//             <input
//               type="checkbox"
//               name="courses"
//               id="SQL"
//               value="SQL"
//             />{" "}
//             SQL
//             <input
//               type="checkbox"
//               name="courses"
//               id="SDLC"
//               value="SDLC"
//             />{" "}
//             SDLC
//           </div>
//           <label htmlFor="country">Select Country</label>
//           <select name="country" id="country" onChange={this.handleChange}>
//             {countriesAll.map((v, i) => {
//               let { name } = v;
//               return (
//                 <option key={i + 1} value={name}>
//                   {name}
//                 </option>
//               );
//             })}
//           </select>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;






// !Date : 10/09/24
// !Life Cycle methods in React (In class based component)
// learned about Setting the routes using the inbuilt hook useRoutes([]) it is there in my-routing-app in one js file and also learned about the React component Lifecycle in classBased and Function based 
/*
^The three main phases in React's component lifecycle are:

*1. **Mounting** (Initial Rendering Phase):
   - This is when a component is being created and inserted into the DOM for the first time.
   - **Key methods:**
     - `constructor()`: Initializes the component's state and binds methods.
     - getDerivedStateFromProps() method : if we want to change the value of the state which depends upon the props then we use getDerivedStateFromProps 
     - `render()`: Returns the JSX that defines the structure of the UI.
     - `componentDidMount()`: Runs after the component is rendered, often used to fetch data or set up subscriptions.

*2. **Updating** (Re-rendering Phase):
   - This phase occurs when the component's state or props change, causing a re-render of the component.
   - **Key methods:**
     - `shouldComponentUpdate()`: Determines whether the component should re-render based on changes in props or state.
     - `render()`: Re-renders the component.
     - `componentDidUpdate()`: Runs after the update is applied and the component is re-rendered.

*3. **Unmounting** (Component Removal Phase):
   - This phase occurs when the component is being removed from the DOM.
   - **Key method:**
     - `componentWillUnmount()`: Used to clean up any side effects, such as cancelling network requests or removing event listeners.

*In React's modern functional components, the lifecycle is 
*managed using hooks like `useEffect()`, which can be used to handle mounting, updating, and unmounting 
behavior in a more unified way.

*/

// ^refer the below image : under src/images/React Lifecycle methods class based component



// !Mounting phase 
// import React, { Component } from 'react'
// import DisplayProducts from './Components/DisplayProducts';

// export default class App extends Component {
//   constructor(){
//     super();
//     console.log("constructor rendered");
    
//     this.state = {
//       products : []
//     }
//   }

//   // one static method 
//   static getDerivedStateFromProps(props , state){
//     console.log(props , state);
//     console.log("getDerivedStateFromProps rendered");
//     // !if we want to change the value of the state which depends upon the props then we use getDerivedStateFromProps 

//     return null;  //!because I have not changed the value of the state here 
    
    
//   }


//   // ^imp method for the component mounting stage 
//   componentDidMount(){
//     console.log("Component Mounted");
//     window.fetch("https://fakestoreapi.com/products" , {method : "GET"})
//     .then((data) => {
//       // then I have to convert the data in the javascript format 
//       data.json()
//       .then((convertedData) => {
//         // console.log(convertedData);
//         this.setState({products : convertedData});
        
//       })
//       .catch((error) => {
//         console.log(error);
        
//       })
//     })
//     .catch((error) => {
//       console.log(error);
      
//     })

//     // !work I have to do that I have to iterate over the array and render the each product in the UI 
//   }
//   render() {
//     console.log("render method");
    

//     return (
//       <>
//           <table>
//             <thead>
//               <tr>
//                 <th>id</th>
//                 <th>image</th>
//                 <th>title</th>
//                 <th>price</th>
//                 <th>ratings</th>
//               </tr>
//             </thead>

//             <tbody>
//               <DisplayProducts AllProducts={this.state.products}/>
//             </tbody>
//           </table>
//       </>
//     )
//   }
// }





// !Date : 12/09/24
//^========================================== Updating Phase ==============================
// &here I am binding the handleClick function to set the value of the this keyword 
// import React, { Component } from 'react'
// import products from './data.json'

// export default class App extends Component {

//   // !taking the constructor 
//   constructor(props){
//     super(props);
//     this.state = {
//       data:products,
//     };

//     console.log("constructor executed");

// // ^here I am binding the handleClick function to set the value of the this keyword 
//     this.handleClick = this.handleClick.bind(this);

    
//   }


//   // !handleClick() function 

//   handleClick(){
//     window.fetch("https://dummyjson.com/products")
//     .then((dataFromServer) => {

//       console.log("dataFromServer" , dataFromServer);
      

//       //then I have to convert that data in the javascript format 
//       dataFromServer.json()
//       .then((convertedData) => {
//         this.setState({data:convertedData.products})

//         console.log("convertedData" , convertedData);
        
//       })
//       .catch((error) => {
//         console.log(error);
        
//       })
//     })
//     .catch((error) => {
//       console.log(error);
      
//     })

//   }


//   static getDerivedStateFromProps(props , state){
//     console.log("getDerivedStateFromProps method");
//     return null;
    
//   }

//   shouldComponentUpdate(){
//     console.log("shouldComponentUpdate");
//     return true;
    
//   }


//   getSnapshotBeforeUpdate(prevProps , prevState){
//     console.log("getSnapshotBeforeUpdate method");

//     return [prevProps , prevState];
    
//   }


//   componentDidUpdate(prevProps , prevState , snapshot){
//     console.log("componentDidMount method");
//     console.log(prevProps);
//     console.log(prevState);
//     console.log(snapshot);
//     alert("Products updated")

    
    
//   }

//   componentDidMount(){
//     console.log("componentDidMount method");
    
//   }




//   render() {
//     console.log(products);
//     console.log("render method");
    
    
//     return (
//       <section>
//         <article>
//           <button onClick={this.handleClick}>update products</button>
//         </article>

//         <table>
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Image</th>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               this.state.data.map((currentProduct , index) => {
//                 let {id , title , description , price , image , thumbnail} = currentProduct;


//                 return (
//                   <tr key={index}>
//                     <td>{id}</td>
//                     <td>
//                       <img src={image || thumbnail} alt="" />
//                     </td>
//                     <td>{title}</td>
//                     <td>{description}</td>
//                     <td>{price}</td>
//                   </tr>

//                 )
//               })
//             }
//           </tbody>
//         </table>
//       </section>
//     )
//   }
// }





//! =======================================Un-Mounting ======================================

// import React, { Component } from 'react'
// import Child from './Child';

// export default class App extends Component {
//   // ^Constructor 
//   constructor(props){
//     console.log("constructor rendered");
//     super(props)
//     this.state = {
//       count : 0
//     }
    
//   }


//   static getDerivedStateFromProps(){
//     console.log("getDerivedStateFromProps method");
//     return null;
    
//   }

//   componentDidMount(){
//     console.log("componentDidMount method");
    
//   }
//   render() {
//     console.log("render method");
    
//     return (
//       <div>
//         <h2>App component = {this.state.count}</h2>
//         <button onClick={(event) => {
//           this.setState({count : this.state.count + 1})
//         }}>
//             Increment
//         </button>
//         {/* Now here I will do the conditional rendering using the ternary operator */}

//         {this.state.count <= 5 ? <Child count={this.state.count}/> : null}
        
//       </div>
//     )
//   }
// }



// !I have to take the code from the my peers about the updating and un-mounting phase in react class based component 










// ?Date : 16/09/24
//useReducer() hook :
/**
 * * 1)we use the useReducer() hook to store the state value only 
 * * 2) but we have useState() also so when to use which 
 *     ^ i)when our code is going to have the complex logic to store the state value then use useReducer() hook
 *     ^ ii) when in the code you directlly storing the state that is not having any complex logic then use the useState() hook 
 * 
 * ! useReducer() : 
 * &               i)it will take the 2 arguments 
 * *                         1)reducerFunction()
 *  *                        2)initialStateValue
 * 
 * &              ii) it will return the one array having the 2 elements in it 
 *  *                        [stateValue , dispatchFunction]
 * 
 * &             iii)when we will call the dispatchFunction() then reducerFunction() will get executed that is used to 
 * &              update the state value where that updated state value we have to return it from the reducer function 
 */

// import React, { useReducer } from 'react'

// let initialStateValue = 0 ;

// let reducerFunction = (stateValue , action) => {
//   // action = it will be the objeect inside that type is one key and it is having the mutiple values like increment , decrement , reset
//     switch(action.type){
//       case "Increment":
//         return stateValue + 1;
      
//       case "Decrement":
//         return stateValue - 1;
      
//       case "Reset":
//         return initialStateValue; 
//       default:
//         return stateValue;   
//     }
// }

// const App = () => {

//   let [count , dispatchFunction] = useReducer(reducerFunction , initialStateValue);

//   return (
//     <div>
//       <h1>count = {count}</h1>
//       <button type='button' onClick={() => {
//         dispatchFunction({type: "Increment" })
//       }}>Increment</button>
//       <button type='button' onClick={() => {
//         dispatchFunction({type: "Decrement" })
//       }}>Decrement</button>

//       <button type='button' onClick={() => {
//         dispatchFunction({type: "Reset" })
//       }}>Reset</button>
//     </div>
//   )
// }

// export default App









// !useMemo() hook : 
/**
 * *  1)it returns the memoized value of the function 
 * * 2)we use this for the optimization (means if I am changing the particular state which is 
 *   *taking the more time to get updated in the UI then at such scenarioes I have to use the useMemo() hook )
 * 
 * 
 * 
        * The `useMemo()` hook in React is used for performance optimization. Here's how it helps:

        1. **Memoizes Expensive Calculations**: Prevents recalculating values unless dependencies change, improving efficiency.
        2. **Reduces Unnecessary Re-renders**: Stops React from recalculating or re-rendering components unnecessarily.
        3. **Optimizes Performance**: Helps avoid performance bottlenecks in large or complex apps.
        4. **Keeps UI Snappy**: Reduces lag or slowdowns caused by frequent calculations or renders.

        Use `useMemo()` when the calculation is heavy or when dependencies rarely change.
 */

        // !implementation of the useMemo() hook 

// import React, { useMemo, useState } from 'react'

// const App = () => {
//   let [count , setCount] = useState(0);

//   let [dark , setDark] = useState(false);

//   let doubleNumberOfCount = useMemo(() => {
//       return slowerFunction(count);
//   } , [count]);

//   return (
//     <div>
//       <input 
//       type="number" 
//       name='number'
//       id='number'
//       value={count}
//       onChange={(event) => {
//         setCount(event.target.value);
//       }}
//       />

//       <button onClick={(event) => {
//         setDark((previousValue) => !previousValue)
//       }}>Change Color</button>


//       <h1
//           style={{
//             background:dark? "black" : "white",
//             color:dark? "white" : "black",
//           }}
//           >
//         {doubleNumberOfCount}
//       </h1>
//     </div>
//   )
// }

// export default App

// function slowerFunction(number){
//     for(let i = 0 ; i <= 100000000 ; i++){
//       //just take the time and then return the some doubled value 
//     }

//     return (number*2);


// }

// learned about the useReducer() used for storing the state which is having the complex logic and useMemo() hook used for the optimization it will get re-render for that particular state only 







// !====================================Date : 18/09/24=====================

// ^useCallback() hook used for the performance optimization while rendering the differant components 
// ^useMemo() hook is used for the performance optimization whithin the that particular component if it is having some slower functions then use useMemo()


// import React, { useCallback, useState } from 'react'
// import Title from './Components/Title';
// import Counter from './Components/Counter';
// import Button from './Components/Button';

// const App = () => {
//   // lets take the few state
//   let [age , setAge] = useState(25);
//   let [salary , setSalary] = useState(25000);

//   // !taking the few functions 
//   let IncrementAge = useCallback(() => {
//     setAge((previousAge) => {
//       return previousAge + 1
//     })
//   } , [age])



//   let IncrementSalary = useCallback(() => {
//     setSalary((previousSalary) => {
//       return previousSalary + 10000;
//     })
//   } , [salary])



//   return (
//     <div>
//       <Title/>
//       <Counter text="age" count={age}/>
//       <Button handleClick={IncrementAge}>Increment Age</Button>
//       <Counter text="salary" count={salary}/>
//       <Button handleClick={IncrementSalary}>Increment Salary</Button>
//     </div>
//   )
// }

// export default App






// !Higher order Component 
//^ theory :  (Very Important)
//* 1) A Component which takes another component as an argument and returns new component that is known as the higher order component (HOC)
//* 2) it is the technique to re-use the component logic 

// import React from 'react'
// import ClickCounter from './Components/ClickCounter'
// import HoverCounter from './Components/HoverCounter'

// const App = () => {
//   return (
//     <div>
//       <ClickCounter name="sachin"/>
//       <HoverCounter name="dhoni" />
//     </div>
//   )
// }

// export default App


// learned about the higher order component which is used for the re-use the same logic to avoid the code redundancy and also learned about the useCallback() hook which is used  performance optimization while rendering the different components 




// !Practice of the useRef() hook which is used to target the react element 
// & in useRef() there is one important property that is referance.current  whit this I can do any changes for that targeted react element 

// import React, { useRef, useState } from 'react'

// const App = () => {
//   let referance = useRef();

//   let [activeStatus , setActiveStatus] = useState(false);

//   let handleClick = (event) => {

//     // ^also change the state value 
//     setActiveStatus(true);

//     // ^using the referance of that react element that we have stored using the useRef() hook

//     // referance.current.style.backgroundColor = "red";



//     // ^Normal way
//     // event.target.style.backgroundColor = "red";


//   }


//   let handleMouseOut = () => {
//     setActiveStatus(false);

//     // also change the color 
//     // referance.current.style.backgroundColor = "hotpink";
//   }
//   return (
//     <div>
//       <button
//       ref={referance}
//       onMouseOver={handleClick}
//       onMouseOut={handleMouseOut}
//       style={{
//         backgroundColor: activeStatus ? "red" : "hotpink", // *Conditional styling here
//         color : "black",
//         margin : "2rem",
//         padding : "2rem",
//         borderRadius : "7px"

//       }}
//       >Click Me</button>
//     </div>
//   )
// }

// export default App





// !Custom hooks in React 
/**
 * * i)we have to create the custom hook in react should have the prefix as = useBoolean , useChangeTitle
 * * ii) we use the custom hooks in react for the function based component to re-use the function based component logic
 * * iii) and for the class based we use the higher order component to reuse the component logic 
 * * iv)NOte : if needed you can call another hook inside the custom hook that you are creating if needed  
 */


// import React from 'react'
// import DocumentTitle1 from './Components/DocumentTitle1'
// import DocumentTitle2 from './Components/DocumentTitle2'
// import ClickCounter1 from './Components/ClickCounter1'
// import ClickCounter2 from './Components/ClickCounter2'

// const App = () => {
//   return (
//     <div>
//       {/* first custom  hook useDocumentTitle() */}
//       {/* <DocumentTitle1/>
//       <DocumentTitle2/> */}

//       {/* second custom hook useCounter() */}
//       <ClickCounter1/>
//       <ClickCounter2/>
//     </div>
//   )
// }

// export default App













// !How to recognize the speech in react 
// ^means voice to text conversion how to do it 

import React, { useState } from 'react'

const App = () => {
  // ^lets take the one state to store the text that user will speak 

  let [text , setText] = useState("......");

  let handleClick = (event) => {

    // I have to set tha value of the below object that is there in the window class

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    // now I have to create the one object so what the user will speak it should get stored 

    let recognition = new window.SpeechRecognition();

    recognition.start();

    recognition.addEventListener("result" , (event) => {

      console.log(event);
      console.log(event.results[0][0].transcript);
      
      
      setText(event.results[0][0].transcript);
    });



    
        // *Handle errors
        recognition.addEventListener('error', (event) => {
          console.error('Speech Recognition Error:', event.error);
          setText('Error occurred: ' + event.error);
        });


  }







  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleClick}>Listen</button>
      
    </div>
  )
}

export default App



// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App
