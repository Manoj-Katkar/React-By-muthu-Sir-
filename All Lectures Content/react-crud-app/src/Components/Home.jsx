import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    let [data , setData] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3000/users")
        .then((response) => {
            // ^this resonse is a object inside that object there is one key data which is going to have the all the actual users data 
            // so I have to access that using response.data   
            console.log("axios response");
            
            console.log(response);
            

            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
            
        })
    } , [])



  return (
    <section>
      <article>
        <Link to={"/create"}>Add++</Link>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>MORE DETAILS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((currentUserDetails, index) => {

              let { id, name, phone, email } = currentUserDetails;

              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td className="display">
                    <Link to={"/read/:userId"}>Read</Link>
                    <Link to={"/update/:userId"}>Update</Link>
                    <Link to={"/delete/:userId"}>Delete</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </section>
  );

}

export default Home


// learned about the CRUD in react from that learned create (That How to create the data and store in the json file using the axios which is having the two method to get the data axios.get(url)  and to add the data in json file axios.post("http://localhost:3000/users", val) CREATE and ADD DONE)






