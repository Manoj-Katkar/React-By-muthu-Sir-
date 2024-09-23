import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';

const Login = () => {
    let [userName , setUserName] = useState("");
    let [password , setPassword] = useState("");

    // !step 3 consuming the context using the inbuilt hook useContext()
    let {data , setData} = useContext(UserContext);

    let handleSubmit = (event) => {
        event.preventDefault();
        setData({userName , password});

        console.log(userName , password);
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            name='userName'
            id='userName'
            placeholder='Enter userName'
            value={userName}
            onChange={(event) => {
                setUserName(event.target.value)
            }}
            />
            <input type="password" 
            name='password'
            id='password'
            placeholder='Enter password'
            value={password}
            onChange={(event) => {
                setPassword(event.target.value);
            }}
            />
            <br />
            <br />
            <button type="submit">Log In</button>
        </form>
    </div>
  )
}

export default Login


