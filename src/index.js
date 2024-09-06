import { logDOM } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./global.css";


// !How to create the elements in the React 
// let section = React.createElement(
//     "section",
//     {
//         id : "s1",
//         title : "section 1234",
//         className : "demo",
//     },
//     React.createElement(
//         "table",
//         null,
//         React.createElement(
//             "table",
//             {
//                 className : "table-container",
//             },
//             React.createElement("tr" , 
//                 null ,
//                 React.createElement("th" , {})
//             )

//         )
//     )
// )

// but we will not follow the above approach 

// we will do all the work using the jsx only 
// const s = "python";

// let section = (
//     //this is fragment
//     <>  
//         <h1 className="demo"  title="React">
//                 React Js
//         </h1>
//         <br></br>
//         <h2 id="h2">Hello World </h2>
//     </>
// );

// let isMarried = true;

// let details = (
//     <>
//     <h1>name : sachin</h1>
//     <h2>id : 123</h2>
//     <h3>Married Status : {isMarried ? "Married" : "Unmarried"}</h3>

//     </>
// )

let root = document.querySelector("#root");

let res = ReactDOM.createRoot(root);

// console.log(res);
// res.render(details);

// !Now I have to render the components in the UI 
res.render(<App/>);

// learned about how fetch the json data in the component both class and function , how to pass the default props for component for class total 3 ways and for function 2 ways 
