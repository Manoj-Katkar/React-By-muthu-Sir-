import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

  let [currentProductData , setCurrentProductData] = useState({});

  let {userId} = useParams();

  let navigate = useNavigate();

  // lets use the one useEffect to get the data that user want to update 
  useEffect(() => {

    axios.get(`http://localhost:3000/products/${userId}`).then((response) => {
      setCurrentProductData(response.data);
    })
    .catch((error) => {
      console.log(error);
      
    })
    
  } , []);

  let handleSubmit = (event) => {
    event.preventDefault();

    //!now for the update I have to use the put method 
    axios.put(`http://localhost:3000/products/${userId}` , currentProductData).then((response) => {
      console.log(response.data);

      // then I have to re-direct to the user to the another component 
      navigate(`/`);
      window.location.reload();       //*also do referesh the page by reload 
      
    })
    .catch((error) => {
      console.log(error);
      
    })

  }

  let handleChange = (event) => {
    let {name} = event.target

    setCurrentProductData({
      ...currentProductData,[name]:event.target.value
    });
  }

  // lets do the object destructuring 
  let {id , image , title , price} = currentProductData;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Update the Product Price</h1>
        <div>
          <h3>{id}</h3>
          <img src={image} alt="" />
          <h4>{title}</h4>

          <input type="text" 
          id='price'
          name = "price"
          value={price}
          placeholder='price'
          onChange={handleChange}
          />

          <button type='submit'>submit</button>

        </div>


      </form>
    </div>
  )
}

export default Update