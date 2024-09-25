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
            

            setData(response.data);  //*because inside the data key of the axios object our orginal data will be there 
            
        })
        .catch((error) => {
            console.log(error);
            
        })
    } , []);




    // !lets implement the handleDelete 

    let handleDelete = (id) => {

      //first confirm it from the user that really want to delete that record 
      let confirmResult = window.confirm("Are you sure? Do you want to delete?");

      if(confirmResult){
        //means the value is true then I have to delete that record 
        axios.delete(`http://localhost:3000/users/${id}`)
        .then((response) => {
          console.log(response.data);

          //also page should reload 
          window.location.reload();
          
        })
        .catch((error) => {
          console.log(error);
          
        })
      }
    }



  return (
    <section className="container">
      <article className="table-container">
        <Link to={"/create"} className="add-button">Add++</Link>
        <table className="user-table">
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
                  <td className="actions">
                    <Link to={`/read/${id}`}>Read</Link>
                    <Link to={`/update/${id}`}>Update</Link>
                    <Link onClick={() => {
                      handleDelete(id);
                    }}>Delete</Link>
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






