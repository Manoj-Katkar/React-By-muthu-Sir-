// !function based component
//!practiced  how to access the props , define the state

// import React, { useState } from 'react'
// import Child from './Child';

// const Parent = (props) => {
//     let [count ,setCount] = useState(0);

//     let handleIncrement = (event) => {
//         setCount(count + 1);
//     }

//     let handleDecrement = (event) => {
//         setCount(count - 1);

//         //!creating the react element
//         // let div = React.createElement("h1" , null , "Hi I am React Element" );

//         // console.log(div);
//     }

//     let {name} = props;

//   return (
//     <div>
//         <span>{name}</span>
//         <h1>{count}</h1>
//         <button onClick={handleIncrement}>Increment</button>
//         <button onClick={handleDecrement}>Decrement</button>

//         <Child count={count}/>
//     </div>
//   )
// }

// export default Parent

// ===========================================================================================================================

// !how to set the data types for the props
// !we can set the data types for the props where that props are getting received that is child component

// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   return (
//     <div>
//       <h1>Parent</h1>
//       <Child userName={"Manoj"}  id={200}  skills={["js" , "react"]}/>
//     </div>
//   )
// }

// export default Parent

// ==========================================================================================================================

// !props.childrens
// !if you want to pass the childrens to teh child component then you have to render that child component using opening and closing brackets
//^ props.children is going to be the array having the elements that you have passed from the parent component

// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   return (
//     <div>
//       <h1>Parent</h1>
//       <Child>
//             <span>Hi I am children 1</span>
//             <h4>Hi Children 2</h4>
//       </Child>
//     </div>
//   )
// }

// export default Parent

// ==========================================================================================================================

// !How to Set the default props In Both function and class based component
// In class Based Component : (Total 3 ways)
//                  i)using static defaultProps = {} keyword (In the form of the object)
//                  ii)using logical OR opeartor within jsx
//                  iii)using ComponentName.defaultProps = {} (in the form of the object )

// In function based component : (2 ways)
//                  i)using logical OR opeartor within jsx
//                  ii)using ComponentName.defaultProps = {} (in the form of the object )

// import React from 'react'
// import Child from './Child'

// const Parent = () => {
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <Child userName={"Manoj"}    skills={["js" , "react"]}/>
//     </div>
//   )
// }

// export default Parent

//! ================================= Conditional Rendering =================================================

// ! Conditional Rendering

// ^how to do the conditional rendering in react :
// !there are total 4 ways
// ^1)using if-else
// ^2)using switch
// ^3)using ternary operator
// ^4)using logical AND (&&)

// !===================================================using if-else ==========================================================

// import React, { useState } from 'react'

// const Parent = () => {

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

// export default Parent

// !==================================================using switch case ============================================

// import React, { useState } from "react";

// const Parent = () => {
//   let [isLogIn, setIsLogedIn] = useState(false);

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

// export default Parent;

// !=======================================================using ternary operator  =============================================

// import React, { useState } from 'react'

// const Parent = () => {

//   let [isLogIn, setIsLogedIn] = useState(false);

//   //* taking the nested components to render according to the ternary operator

//   let IsGuest = ()=>{
//     return(
//       <>
//       <li>LogIn</li>
//       <li>
//         <button style={{
//           backgroundColor:isLogIn ? "purple" : "red",
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

// export default Parent

// !========================================= using && operator (used for only the true conditional scenarioes) ===============

// import React, { Component } from 'react'
// import { FaBell } from "react-icons/fa";

// class Parent extends Component {
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
//           {this.state.notifications.length > 0 && this.state.notifications.length}

//         </sup>
//       </div>
//     )
//   }
// }

// export default Parent

//! ================================= memoization In React  ============================================================

//^In React, memoization can be achieved in various ways to optimize performance and prevent unnecessary recalculations or re-renders.

// theory :
// i)we can achieve the memoization in react using the three ways
// i)using useMemo() hook (within same component)
// ii)using the useCallback() hook  (for differant components)
// iii)using React.memo()   (handles FBC preventing then re-rendering unless their props change.)

//^1) Using useMemo Hook :
//            *The useMemo hook is used to memoize the result of a function so that it is only recomputed when its dependencies change.

// ^2) Using useCallback Hook :
//                  *The useCallback hook is similar to useMemo, but it memoizes functions. It's particularly useful when passing callbacks to child components to prevent unnecessary re-renders.

// ^Using React.memo
//                  *React.memo is a higher-order component that memoizes functional components, preventing them from re-rendering unless their props change.

// !useMemo() hook : it will take one callback function and dependency list as an parameter
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

// const Parent = () => {
//   let [count , setCount] = useState(0);

//   let [dark , setDark] = useState(false);

//   //!this is the use of the useMemo() hook in react
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

// export default Parent

// function slowerFunction(number){
//     for(let i = 0 ; i <= 100000000; i++){
//       //just take the time and then return the some doubled value
//     }

//     return (number*2);

// }

// !==================================== useCallback() hook used for the performance optimization =====================

// ^useCallback() hook used for the performance optimization while rendering the differant components
// ^useMemo() hook is used for the performance optimization whithin the that particular component if it is having some slower functions then use useMemo()

// import React, { useCallback, useState } from 'react'
// import Title from './Title.jsx'
// import Counter from './Counter.jsx'
// import Button from './Button.jsx'

// const Parent = () => {
//   // lets take the few state
//   let [age , setAge] = useState(25);
//   let [salary , setSalary] = useState(25000);

//   //old functions which was rendering the all components again and again if I change salary then age vala also get re-render and vice versa

//   // let IncrementAge =() => {
//   //   setAge((previousAge) => {
//   //     return previousAge + 1
//   //   }
//   // )}

//   // let IncrementSalary = () => {
//   //   setSalary((previousSalary) => {
//   //     return previousSalary + 10000;
//   //   }
//   // )}

//   // !taking the new functions wit useCallback() hook
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

// export default Parent

// !============================================controlled and un-controlled components forms =======================================
/**
  * In React, **controlled forms** and **uncontrolled forms** refer to two different ways of managing form inputs and their values.

**### 1. **Controlled Forms**

In a **controlled form**, the form elements' values are controlled by React's state. Every time a user types something into an input field, the value of that input is stored in the component's state, and any change is reflected by updating the state.

**#### Key Characteristics:
- The input value is stored in the component’s state.
- The state is the **single source of truth** for the form data.
- Every change triggers a re-render to update the state.


```

**#### Benefits of Controlled Forms:
- **Full control** over form values.
- Easy to validate or format data in real-time.
- Synchronization between input and component state.

**#### Downsides:
- Slightly more code and re-renders, which can be inefficient for large forms.


**### 2. **Uncontrolled Forms**

In an **uncontrolled form**, the form elements manage their own state internally, without relying on React’s state. You access the values of the form elements using refs (via `useRef` or `createRef`).

**#### Key Characteristics:
- The input’s value is managed by the DOM, not React.
- You retrieve the value only when needed (e.g., on form submission).
- No need to update the state on every keystroke.


```

**#### Benefits of Uncontrolled Forms:
- Less re-rendering, which can be more efficient for large forms.
- Simpler when form values are not needed until submission.

**#### Downsides:
- Harder to validate or interact with data in real-time.
- Not fully in sync with React's state system, making validation and conditional rendering trickier.

*!### Summary of Differences:

| Feature               | Controlled Form                         | Uncontrolled Form                       |
|-----------------------|-----------------------------------------|-----------------------------------------|
| **Data Source**        | React state (`useState`)                | DOM (`useRef` or `defaultValue`)        |
| **Control**            | React controls the value and updates it | The DOM controls the value              |
| **Real-time Updates**  | Possible with real-time state updates   | Not possible (can only access when needed) |
| **Validation**         | Easy to validate during input changes   | Validation requires manual checking     |
| **Re-renders**         | More re-renders as state changes        | Fewer re-renders, more efficient        |

*^In most cases, **controlled components** are preferred as they offer better control and integration with React’s data flow. However, **uncontrolled components** can be more efficient for simple forms where real-time updates aren’t necessary.
         */

// import React,{ useState } from 'react'
// import ControlledForm from './ControlledForm.jsx';
// import UncontrolledForm from './UncontrolledForm.jsx';

// function Parent() {

//   document.title = "React CRUD App";

//   return (
//     <>
//         <ControlledForm/>
//         {/* <UncontrolledForm/> */}

//     </>
//   )
// }

// export default Parent

// learned about the ControlledForm where data stored in react state and also learned UncontrolledForm where data stored in the DOM access it using the useRef with element referance using .current property  most we refer the controlled component forms because data get stored in the react state

// !====================================================useReducer() hook ==================================================

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

// import React, { useReducer } from "react";

// let initialStateValue = 0;

// let reducerFunction = (stateValue, action) => {
//   // action = it will be the objeect inside that type is one key and it is having the mutiple values like increment , decrement , reset
//   switch (action.type) {
//     case "Increment":
//       return stateValue + 1;

//     case "Decrement":
//       return stateValue - 1;

//     case "Reset":
//       return initialStateValue;
//     default:
//       return stateValue;
//   }
// };

// const Parent = () => {
//   // !Syntax of the useReducer() hook

//   let [count, dispatchFunction] = useReducer(reducerFunction,initialStateValue);

//   return (
//     <div>
//       <h1>count = {count}</h1>
//       <button
//         type="button"
//         onClick={() => {
//           dispatchFunction({ type: "Increment" });
//         }}
//       >
//         Increment
//       </button>
//       <button
//         type="button"
//         onClick={() => {
//           dispatchFunction({ type: "Decrement" });
//         }}
//       >
//         Decrement
//       </button>

//       <button
//         type="button"
//         onClick={() => {
//           dispatchFunction({ type: "Reset" });
//         }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// };

// export default Parent;

// !=========================================== voice to text conversion ===================================================

// !How to recognize the speech in react
// ^means voice to text conversion how to do it

// import React, { useState } from 'react'

// const Parent = () => {
//   // ^lets take the one state to store the text that user will speak

//   let [text , setText] = useState("......");

//   let handleClick = (event) => {

//     // I have to set tha value of the below object that is there in the window class

//     window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//     // now I have to create the one object so what the user will speak it should get stored

//     let recognition = new window.SpeechRecognition();

//     recognition.start();

//     recognition.addEventListener("result" , (event) => {

//       console.log(event);
//       console.log(event.results[0][0].transcript);

//       setText(event.results[0][0].transcript);
//     });

//         // *Handle errors
//         recognition.addEventListener('error', (event) => {
//           console.error('Speech Recognition Error:', event.error);
//           setText('Error occurred: ' + event.error);
//         });

//   }

//   return (
//     <div>
//       <h1>{text}</h1>
//       <button onClick={handleClick}>Listen</button>

//     </div>
//   )
// }

// export default Parent

















// !======================================== CRUD Opeartions In react ===================================================

// Note : it is there in the App.jsx file because I have to implement the routing and start the json server , install the axios multiple things I have to do 

import React from 'react'

const Parent = () => {
  return (
    <div>Parent</div>
  )
}

export default Parent

