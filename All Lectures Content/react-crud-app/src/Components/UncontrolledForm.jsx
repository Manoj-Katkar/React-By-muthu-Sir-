import React from 'react'
import { useRef } from 'react';


/**
 * 
    ** 2. Uncontrolled Forms
    In an uncontrolled form, the form elements manage their own state internally, without relying on React’s state. You access the values of the form elements using refs (via useRef or createRef).

    **Key Characteristics:
    The input’s value is managed by the DOM, not React.
    You retrieve the value only when needed (e.g., on form submission).
    No need to update the state on every keystroke.


   **Benefits of Uncontrolled Forms:
    Less re-rendering, which can be more efficient for large forms.
    Simpler when form values are not needed until submission.
    **Downsides:
    Harder to validate or interact with data in real-time.
    Not fully in sync with React's state system, making validation and conditional rendering trickier.
 */

const UncontrolledForm = () => {

    // !here data get stored internally in the dom only handles that I can get the data using the referance.current.value 


    const inputRef = useRef(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Submitted: ${inputRef.current.value}`);  // Get the value directly from the DOM
    };
    

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>UncontrolledForm data stored in the DOM access it using the useRef with element referance using .current property </h1>

        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
        
        </form>
    </div>
  )
}

export default UncontrolledForm