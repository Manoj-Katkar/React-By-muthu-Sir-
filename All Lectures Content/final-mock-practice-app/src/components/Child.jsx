// !class based component 
//!practiced  how to access the props , define the state 

// import React, { Component } from 'react'

// class Child extends React.Component {

//     constructor(props){
//         super(props);
        
//         console.log("props from constructor");
        
//         console.log(props);
        

//         //* declaring the state 
//         this.state = {
//             userName : "Maya",
//             password : "123456"
//         }
//     }

    

//   render() {
//     //*accessing the props 
//     console.log("props from render method");
    
//     console.log(this.props);


    


//     return (
//       <div>
//         <span>userName : {this.state.userName} </span>
//         <span>Password : {this.state.password} </span>
//       </div>
//     )
//   }
// }

// export default Child;





// =========================================================================================================

// !how to set the data types for the props 
// !we can set the data types for the props where that props are getting received that is child component 


// import React from 'react'
// import PropTypeObject from "prop-types"

// const Child = (props) => {

//   let {userName , id , skills} = props;


//   return (
//     <div>
//         <h3>userName : {userName} </h3>
//         <h3>id : {id} </h3>
//         <ul>
//           {skills.map((currentSkill , index) => {
//             return (
//               <li key={index}>
//                 {currentSkill}
//               </li>
//             )
//           })}
//         </ul>
//     </div>
//   )
// }

// export default Child



// // !then using the function name I can set the data type for the props 
// // !and all the data types are going to be present inside the PropTypesObject that I will get it from the package "prop-types"
// //^ isRequired : we use it because it should be compulsory pass it from the parent component


// Child.propTypes = {     //*propTypes it is the property for the child 
//    userName:PropTypeObject.string.isRequired,
//    id:PropTypeObject.number.isRequired,
//    skills:PropTypeObject.array
// }










// ==========================================================================================================================

// !props.childrens
//^ props.children is going to be the array having the elements that you have passed from the parent component 

// import React from 'react'

// const Child = (props) => {

//   //^ props.children is going to be the array having the elements that you have passed from the parent component 
//   console.log(props.children);
  
//   return (
//     <div>
//       {props.children}
//     </div>
//   )
// }

// export default Child




// ==========================================================================================================================



// !How to Set the default props In Both function and class based component 

// !first 
//! In class Based Component : (Total 3 ways) 
//                  i)using static defaultProps = {} keyword (In the form of the object)
//                  ii)using logical OR opeartor within jsx
//                  iii)using ComponentName.defaultProps = {} (in the form of the object )



// import React, { Component } from 'react'


//  class Child extends Component {

//   // !using static keyword

//   // static defaultProps = {
//   //   userName:"NA",
//   //   id:"NA",
//   //   skills:["NA"]

//   // }



//   render() {

//     let {userName , id , skills} = this.props;

//     return (
//       <div>
//         {/*  //*2nd) using the (||) or opearator within the expression  */}


//         <h4>userName : {userName || "NA"} </h4>
//         <h4>id : {id || "NA"} </h4>
//         <ul>
//           {skills.map((currentSkill , index) => {
//             return (
//                 <li key={index}>
//                   {currentSkill || "NA"}
//                 </li>
//             )
//           })}
//         </ul>
//       </div>
//     )
//   }
// }


// export default Child



// //*  iii)using ComponentName.defaultProps = {} (in the form of the object )

// Child.defaultProps = {
//   userName:"NA",
//   id:"Not received",
//   skills:["NA"]
// }









//! In function based component : (2 ways) 
//                  i)using logical OR opeartor within jsx
//                  ii)using ComponentName.defaultProps = {} (in the form of the object )




// import React from 'react'

// const Child = (props) => {

//   let {userName , id , skills} = props;


//   return (
//     <div>
//       {/*//* i)using logical OR opeartor within jsx */}
      
//       <h4>userName : {userName || "NA"} </h4>
//       <h4>id : {id || "NA"} </h4>
//     </div>
//   )
// }

// export default Child



// //* ii)using ComponentName.defaultProps = {} (in the form of the object )

// Child.defaultProps = {
//   userName:"NA",
//   id:"NA",
//   skills:["NA"]
// }















// ==========================================================================================================================

