import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

  let navigate = useNavigate();            //*used to navigate to the differant component using the path
  let [value, setValue] = useState({});    //*to store the state 
  let { userId } = useParams();           //*to get the userId from path params of the url


  useEffect(() => {
    axios.get("http://localhost:3000/users/" + userId).then((response) => {

      console.log(response.data);

      setValue(response.data)



    })
    .catch((error) => {
      console.log(error);
      
    })
  }, []);


  let handleSubmit = (e) => {

    e.preventDefault();

    axios.put(`http://localhost:3000/users/${userId}`, value).then((response) => {

      console.log(response.data);

      navigate("/");   //*navigate to the home component 
      window.location.reload();       //*also do referesh the page by reload 

    })
    .catch((error) => {
      console.log(error);
      
    })
  };


  let handleChange = (e) => {
    let { name } = e.target;
    setValue({ ...value, [name]: e.target.value });
  };


  return (
    <div className="update-container">
      <form onSubmit={handleSubmit} className="update-form">
        <h1 className="form-title">Update User Data</h1>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={value.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={handleChange}
          value={value.email}
          className="form-input"
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="phone"
          onChange={handleChange}
          value={value.phone}
          className="form-input"
        />
        <button type="submit" className="submit-button">Update Data</button>
      </form>
    </div>
  );

}

export default Update