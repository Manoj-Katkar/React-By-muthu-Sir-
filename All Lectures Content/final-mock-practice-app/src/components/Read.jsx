import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Read = () => {

  let [oneProductData , setOneProductData] = useState({});



  let {userId} = useParams();

  let navigate = useNavigate();

  console.log(userId);

  useEffect(() => {
      axios.get(`http://localhost:3000/products/${userId}`).then((response) => {
        setOneProductData(response.data);
      })
      .catch((error) => {
        console.log(error);
        
      })
  } , [])
  

  // lets do the object destructuring 
  let {id , image , title , price} = oneProductData;

  return (
    <div>
          <table className='table-1'>
            <thead>
              <tr>
                <th>id</th>
                <th>image</th>
                <th>title</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{id}</td>
                <td><img src={image} alt="" /></td>
                <td>{title}</td>
                <td>{price}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={() => {
            navigate('/');
          }}>Home</button>
    </div>
  )
}

export default Read