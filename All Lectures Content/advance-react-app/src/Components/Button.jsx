import React from 'react'

const Button = ({count , data}) => {
    console.log("button component");
    
  return (
    <div>Button
        <h1>Count value = {count.count}</h1>
        {/* <button onClick={count.setCount((previousCount) => {
            return previousCount+1;
        })}>Increment</button> */}
        <button onClick={(event) => {
            count.setCount((previousCount) => {
                return previousCount + 1;
            })
        }}>Increment Value</button>
    </div>
  )
}

export default Button