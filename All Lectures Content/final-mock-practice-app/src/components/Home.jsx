import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {

    // taking the one state to store the data 
    let [data , setData] = useState([]);


    // let take the one useEffect to get the data from the data.json server 
    useEffect(() => {
        axios.get(`http://localhost:3000/products`).then((response) => {
          setData(response.data);
          console.log(data);
          
        })
        .catch((error) => {
          console.log(error);
          
        })
    } , []);




    // implementing the delete functionality 
    let handleDelete = (id) => {
      let confirmMessage = window.confirm("Are you Sure you want to delete the product");

      if(confirmMessage){
        // then delete it 
        axios.delete(`http://localhost:3000/products/${id}`).then((response) => {
          console.log(response.data);

          // after that I have to reload the my page 
          window.location.reload();
          
        })
        .catch((error) => {
          console.log(error);
          
        })
      }
    }



  return (
    <div>
        <h1>Final Mock Practice </h1>
          <table className='table-1'>
            <thead>
              <tr>
                <th>id</th>
                <th>image</th>
                <th>title</th>
                <th>price</th>
                <th>MORE DETAILS</th>
              </tr>
            </thead>

            <tbody>
              {data.map((currentProduct , index) => {
                // !lets do here the object destructuring 
                let {id , image , title , price} = currentProduct;
                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td> <img src={image} alt="" /> </td>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>
                      <Link to={`/read/${id}`}>Read</Link>
                      <Link to={`/update/${id}`}>Update</Link>
                      <Link onClick={() => {
                        handleDelete(id);
                      }}>Delete</Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
    </div>
  )
}

export default Home