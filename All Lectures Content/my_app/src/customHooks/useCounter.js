import React, { useState } from 'react'

const useCounter = (initialValue = 0 , value) => {

    // lets take the one state 
    let [count , setCount] = useState(initialValue);

    let Increment = (event) => {
        setCount((previousCount) => {
            return (previousCount + value);
        })
    }

    let Decrement = (event) => {
        setCount((previousCount) => {
            return (previousCount - value);
        })
    }

    let Reset = (event) => {
        setCount(initialValue);
    }

    // !this hook will return the one array having the all the states and also the functions 

    return [count , Increment , Decrement , Reset];

}

export default useCounter