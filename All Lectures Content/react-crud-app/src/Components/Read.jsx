import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Read = () => {

  let navigate = useNavigate();                //*used to navigate to the differant component 
  let [data, setData] = useState({});            //*used to navigate to the declare ths state 
  let { userId } = useParams();                 //*used to get url params 
  console.log(userId);



  useEffect(() => {
    
    //!getting the data of that user with its userId 

    axios.get(`http://localhost:3000/users/${userId}`).then(
      (response) => {
        setData(response.data);
      }
    )
    .catch((error) => {
      console.log(error);
      
    })

  }, []);

  
  return  (
    <div className="read-container">
      <h2 className="read-title">User Details</h2>
      <table className="read-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
          </tr>
        </tbody>
      </table>
      <aside className="read-buttons">
        <button onClick={(e) => navigate(`/update/${userId}`)} className="btn update-btn">
          Update data
        </button>
        <button onClick={(e) => navigate("/")} className="btn home-btn">Home</button>
      </aside>
    </div>
  );

}

export default Read