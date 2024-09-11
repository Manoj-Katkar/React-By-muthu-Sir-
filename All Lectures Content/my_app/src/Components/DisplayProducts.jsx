import React from 'react'

const DisplayProducts = ({AllProducts}) => {
    console.log("From products Component");
    
    console.log(AllProducts);
    
  return (
    <>
        {
            AllProducts.map((CurrentProduct , currentIndex) => {
                return(
                    <tr key={currentIndex}>
                        <td>{CurrentProduct.id}</td>
                        <td> <img src={CurrentProduct.image} alt="" /></td>
                        <td>{CurrentProduct.title}</td>
                        <td>{CurrentProduct.price}</td>
                        <td>{CurrentProduct.rating.rate}</td>
                    </tr>
                )
            })
        }
    </>
  )
}

export default DisplayProducts