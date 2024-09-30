/** 

**Prop drilling** occurs when data (props) are passed from a parent component down through multiple levels of intermediate components, even if those components don't need or use the data, just to reach a deeply nested child component.

*!### Key Issues:
*!- **Inefficiency**: Unnecessary props passed to components that don't need them.
*!- **Difficult Maintenance**: As the component tree grows, it becomes harder to manage and update the data flow.

### Solution:
- Use tools like **Context API** or **state management libraries** (e.g., Redux) to avoid prop drilling and manage global state efficiently.

*/

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import NavBar from './Components/NavBar';

// function App() {
  // !props drilling concept 
  //^ controlled form data will be stored in state and in un-controlled data will be store in the DOM 

//   let [count, setCount] = useState(100);

//   let [data , setData] = useState({name : "Manoj" , age : 24 , gender:"male"}); 

//   return (
//     <>
//       <NavBar count={{count , setCount}} data={{data , setData}}/>
        
//     </>
//   )
// }

// export default App





// !Context API 
// !hooks are used to achieve the functionality hence we will not use the custom hooks 

/**
*^     * ### React Context API - 

**    The **Context API** in React is a mechanism for managing and passing global state between components, eliminating the need for "prop drilling," where props are manually passed down through each layer of components. It allows components to share data without having to explicitly pass props through every intermediate level.

    #### Key Components of the Context API:

 **   1. **Context Creation (`createContext`)**:
      - `React.createContext()` is used to create a new context. This function returns a context object that will hold and manage the shared state.

 **   2. **Provider Component**:
      - The **Provider** is a component that wraps around parts of the app that need access to the context data.
      - It takes a `value` prop, which is the data you want to share with child components.

 **   3. **Consumer Components**:
      - **Consumers** are components that can access the shared context data. In function components, you can use the `useContext` hook to access the context value.

 **   4. **`useContext` Hook**:
      - In functional components, `useContext()` allows components to subscribe to context changes and retrieve the shared data more easily.

  **  #### When to Use Context API:
    - **Global State**: When you need to manage global application state like user authentication, themes, or application settings.
    - **Avoid Prop Drilling**: When state or data needs to be accessed by deeply nested components, Context API simplifies the process.

 **   #### Benefits:
    - Simplifies state management in medium to large-scale apps.
    - Reduces the need for passing props through multiple layers of components.

 */




import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

const App = () => {
  // return (
  //   <UserContextProvider>
  //     <h1>Context API</h1>
  //     <Login/>
  //     <Profile/>
  //   </UserContextProvider>
  // )




  return(
    <Routes>
      
      {/* <Parent /> */}

      {/* //!CRUD Opeartions In react */}

      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/read/:userId' element={<Read/>}/>
      <Route path='/update/:userId' element={<Update/>}/>

    </Routes>
  )
}

export default App




// learned about ths issue that arises while passing the props through the nested components that is props drilling and also learned about the how to solve the props drilling using inbuilt hook that is useContext()

