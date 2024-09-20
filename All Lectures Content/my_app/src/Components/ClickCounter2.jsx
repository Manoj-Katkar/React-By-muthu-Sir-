import React from 'react'
import useCounter from '../customHooks/useCounter'

const ClickCounter2 = () => {

    // !calling the custom hook by passing the parameter to it what it is going to recieve 

    let [count , Increment , Decrement , Reset] = useCounter(0 , 2);


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default ClickCounter2