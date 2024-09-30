import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Read = () => {
  // first I require the id that I have to get from the url 

  let {userId} = useParams();

  let [singleProductData , setSingleProductData] = useState({});

  // then I have to also navigate again to the home component 
  let navigate = useNavigate();



  // now lets fetch the data for that I will useEffect()

  useEffect(() => {

    axios.get(`http://localhost:3000/products/${userId}`).then((response) => {

      //then chnage ths state value 
      setSingleProductData(response.data);
    })
    .catch((error) => {
      console.log(error);
      
    })

  } , [])

  let {id , title , price , description} = singleProductData;


  return (
    <div>
      <table>
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
        </thead>

        <tbody>
            <tr>
              <td>{id}</td>
              <td>{title}</td>
              <td>{price}</td>
              <td>{description}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Read