import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {

  let navigate = useNavigate();

  let [oneNewProductdata , setOneNewProductdata] = useState({
    id:"",
    title:"",
    price:"",
    description:""

  })


  let handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`http://localhost:3000/products` , oneNewProductdata).then((response) => {

      console.log(response.data);

      //then I have to move to Home component 
      navigate(`/`);

      // also I have to do the reload 
      window.location.reload();
      
    })
    .catch((error) => {
      console.log(error);
      
    })
  }




  let handleChange = (event) => {
    let {name , value} = event.target;

    //*now I have to update for that particular value only 
    setOneNewProductdata({
      ...oneNewProductdata,[name]:value
    })
  }

  let {id , title , price , description} = oneNewProductdata;



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
            <button><Link to={`/`} >Home</Link></button>

      </form>
    </div>
  )
}

export default Create