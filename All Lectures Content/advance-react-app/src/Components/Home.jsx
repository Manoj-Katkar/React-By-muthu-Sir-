import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    //! now first i have to display the all the data in the table format 
    let [productsData , setProductsData] = useState([]);


    // !lets take the one useEffect to fetch the data from the data.json sever 
    useEffect(() => {
        axios.get(`http://localhost:3000/products`).then((response) => {

            // now here I have to update the state that I have taken to store the data 
            setProductsData(response.data);

        })
        .catch((error) => {
            console.log(error);
            
        })
    } , [])


    // !lets implement the handleDelete 

    let handleDelete = (id) => {
        let userConfirmMessage = window.confirm("Are you Sure ? You want to delete ?");

        if(userConfirmMessage){
            //then I have to delete that record 
            axios.delete(`http://localhost:3000/products/${id}`).then((response) => {
                console.log(response.data);

                //then I have to reload the page 
                window.location.reload();
                
            })
            .catch((error) => {
                console.log(error);
                
            })
        }
    }



  return (
    <div>
        <Link to={`/create`}>Add Products</Link>
        <table className='table-1'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Other Details</th>
                </tr>
            </thead>

            <tbody>
                {productsData.map((currentProduct , index) => {

                    // here I will destructure the each product 
                    let {id , title , price , description} = currentProduct;

                    return (
                        <tr key={index}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{price}</td>
                            <td>{description}</td>
                            <td>
                                <Link to={`/read/${id}`}  >Read</Link>
                                <Link to={`/update/${id}`} >Update</Link>
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