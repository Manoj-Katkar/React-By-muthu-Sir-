import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

  // !useNavigate() returns a navigate function that you can call to change the current URL.

  let navigate = useNavigate();   //*this is taken to navigate the user to differant component after adding the data to home componenet user should re-direct 

  let [val, setVal] = useState({
    name: "",
    id: "",
    email: "",
    phone: "",
  });

  let handleSubmit = (e) => {
    e.preventDefault();
    // console.log(val);

    // !here adding the data in the json file using the axios 
    //^it will take the second parameter what data needed to be added 

    axios.post("http://localhost:3000/users", val).then(
      (responseData) => {
        console.log("axios post response " , responseData);
        
        navigate("/"); //*means I have successfullt added the data then I have to navigate the user to the home component 

        window.location.reload();  //^and page should also reload to see the updated data 
      },
      (e) => e
    );
  };


  let handleChange = (e) => {
    let { name, value } = e.target;   //here doing the object destructuring so from that targeted element I can get name and actual value that user have typed 

    // ^here doing the object destructuring and whatever the new data is user typing under that name it is getting added 

    setVal({ ...val, [name]: value });   //*each time value will et updated to that corresponding name from the user input 

  };


  let { name, id, email, phone } = val;


  return (
    <div className="form-container">
      <form className="create-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Add User</h2>
        <input
          type="number"
          name="id"
          id="id"
          placeholder="Id"
          className="form-input"
          onChange={handleChange}
          value={id}
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="form-input"
          value={name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="form-input"
          onChange={handleChange}
          value={email}
        />
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          className="form-input"
          onChange={handleChange}
          value={phone}
        />
        <div className="form-buttons">
          <button type="submit" className="submit-btn">Add Data</button>
          <button
            type="button"
            className="home-btn"
            onClick={() => navigate("/")}
          >
            Home
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;