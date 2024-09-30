import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

  // now in update I have first get the data using that particular id display it in the form and allow user to update it 

  let {userId} = useParams();

  let [oneProductData , setOneProductData] = useState({});

  // for navigate also I have to useNavigate()

  let navigate = useNavigate();


  //using the useEffect to fetch the data 

  useEffect(() => {

    axios.get(`http://localhost:3000/products/${userId}`).then((response) => {
      setOneProductData(response.data);
    })
    .catch((error) => {
      console.log(error);
      
    })
  } , [])


  let handleSubmit = (event) => {
      event.preventDefault();

      // to update the product details I have to use .put method 
      axios.put(`http://localhost:3000/products/${userId}` , oneProductData).then((response) => {
        
        console.log(response.data);

        // then I have to navigate to the home component 
        navigate(`/`);

        // then I have to reload the page also 
        window.location.reload();

        
      })
      .catch((error) => {
        console.log(error);
        
      })
  }


  let handleChange = (event) => {
    let {name , value} = event.target;

    //*now I have to update for that particular value only 
    setOneProductData({
      ...oneProductData,[name]:value
    })
  }

  let {id , title , price , description} = oneProductData;

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <span>Product Id  </span>
            <input type="text" 
            name='id'
            value={id}
            placeholder='ProductId'
            onChange={handleChange}
            />
            <br />
            

            <span>Product Title  </span>
            <input type="text" 
            name='title'
            value={title}
            placeholder='title of Product'
            onChange={handleChange}
            />
            <br />



            <span>Product Price  </span>
            <input type="text" 
            name='price'
            value={price}
            placeholder='Price'
            onChange={handleChange}
            />
            <br />


            <span>Product Description  </span>
            <input type="text" 
            name='description'
            value={description}
            placeholder='description'
            onChange={handleChange}
            />
            <br />

            <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default Update