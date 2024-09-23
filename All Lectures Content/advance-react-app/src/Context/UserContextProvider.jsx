import React, { useState } from 'react'
import UserContext from './UserContext';

const UserContextProvider = (props) => {
    // !step 2 providing the context 
    /**
     * *here props re-present the all the childrens UserContextProvider in the object having the array which re-present the hoe many childrens are there 
     * *inside UserContextProvider global kind of  state 
     */

    console.log("props from User Context Provider"); 
    console.log(props);
    
    
    //^lets creating the one state 
    let [data , setData] = useState(null);

  return (

    // ^compulsory you have to pass the data that you want to provide it to the other components in the value attribute only 

    <UserContext.Provider
    value={{data , setData}}
    >
        {/* here mension  which all the children should access the data that I am providing */}
        
        {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider





