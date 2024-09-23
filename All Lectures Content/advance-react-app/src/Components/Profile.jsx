import React, { useContext } from 'react'
import UserContext from '../Context/UserContext';

const Profile = () => {
     // !step 3 consuming the context using the inbuilt hook useContext(passtheNameOf - where that context is created )

    let {data} = useContext(UserContext);

    if(!data){
        return (
            <h1>
                Profile Not Updated
            </h1>
        )
    }
    else{

        return (
            <div>
                <h1>Profile</h1>
                <h3>userName : {data.userName}</h3>
                <h3>password : {data.password}</h3>
            </div>
          )
    }


}

export default Profile



/**
 * Profile.jsx
import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
  let { data } = useContext(UserContext);
  if (!data) return <h1>profile not updated</h1>;
  return (
    <div>
      <h1>
        Profile : {data.username}
         and {data.password}{" "}
      </h1>
    </div>
  );
};

export default Profile;
 */