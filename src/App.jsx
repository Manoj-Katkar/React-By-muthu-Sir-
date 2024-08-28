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

import React, { useState } from 'react'
import productsData from './data.json'


const App = () => {
  // lets create the state and in that state pass products data 
  let [data , setData ] = useState(productsData);

  console.log(data);
  
  return (
    <div className='container'>
      <article>
        <table>
          <thead>
            <tr>
              <th>Id : </th>
              <th>Image : </th>
              <th>title : </th>
              <th>description : </th>
              <th>price : </th>
            </tr>
          </thead>
          <tbody>
            {data.map((currentProduct , index) => {
              // let destructure the all the details 
              let {id , title , price , description , image} = currentProduct;
              return (
                    <tr key={index + 1}>
                    <td>{id}</td>
                    <td>
                      <img src={image} alt="" />
                    </td>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>{price}</td>
                  </tr>
              )

            })}
          </tbody>
        </table>
      </article>
    </div>
  )
}

export default App






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



