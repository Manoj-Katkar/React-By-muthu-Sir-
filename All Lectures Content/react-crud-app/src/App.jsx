

// !controlled and un-controlled components forms 
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




import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ControlledForm from './Components/ControlledForm';
import UncontrolledForm from './Components/UncontrolledForm';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  document.title = "React CRUD App";



  return (
    <>
        {/* <ControlledForm/> */}
        <UncontrolledForm/>

    </>
  )
}

export default App


// learned about the ControlledForm where data stored in react state and also learned UncontrolledForm where data stored in the DOM access it using the useRef with element referance using .current property  most we refer the controlled component forms because data get stored in the react state 
