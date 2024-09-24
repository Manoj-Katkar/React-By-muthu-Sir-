import React from 'react'
import { useState } from 'react';


/**
 * 
        * In React, controlled forms and uncontrolled forms refer to two different ways of managing form inputs and their values.

        **1. Controlled Forms
        In a controlled form, the form elements' values are controlled by React's state. Every time a user types something into an input field, the value of that input is stored in the component's state, and any change is reflected by updating the state.

        **Key Characteristics:
        The input value is stored in the component’s state.
        The state is the single source of truth for the form data.
        Every change triggers a re-render to update the state.



        **Benefits of Controlled Forms:
        Full control over form values.
        Easy to validate or format data in real-time.
        Synchronization between input and component state.
        **Downsides:
        Slightly more code and re-renders, which can be inefficient for large forms.



 */

const ControlledForm = () => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
      setInputValue(e.target.value);  // React state controls the input value
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Submitted: ${inputValue}`);
    };


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>ControlledForm data stored in react state</h1>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
        
        <h2>input value : {inputValue}</h2>
        </form>
    </div>
  )
}

export default ControlledForm