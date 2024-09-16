// !How to fetch the props in Function based component 

// import React from 'react'

// const Child = (props) => {

//     // *each function based component will take the one argument that is props which will be there in the form of the object
//     console.log(props);

//     let {userName , skills , id} = props;

    
//   return (
//     // lets destructure the props object 
//     <div>
//         <h1>userName : {userName}</h1>
//         <p>id : {id}</p>
//         <ul>
//             skills : 
//                 {/* Now I have to iterate over the skills array  */}
//                 {
//                                     skills.map((currentSkill , currentIndex) => {
//                                         return <li key={currentIndex + 1}>{currentSkill}</li>
//                                     })
//                 }

//         </ul>
//     </div>
//   )
// }

// export default Child




// !How to fetch the props in class based component 


// import React, { Component } from 'react'

// export default class Child extends Component {
    
//   render() {

//     console.log(this.props);   //*this are the props in class based component
//     let {userName , skills , id} = this.props;   //*this is the destructuring of the props 

//     return (
//       <div>
//         <h1>userName : {userName}</h1>
//         <p>id : {id}</p>
//         <ul>
//             skills : 
//                 {/* Now I have to iterate over the skills array  */}
//                 {
//                                     skills.map((currentSkill , currentIndex) => {
//                                         return <li key={currentIndex + 1}>{currentSkill}</li>
//                                     })
//                 }

//         </ul>
//       </div>
//     )
//   }
// }




// ?how to receive the function , json , and state value using props 

// import React from 'react'

// const Child = (props) => {
//   // now lets destructure the props object 
//   let {count , products , demo} = props;


//   return (
//     <div>
//       <h1>Child Component : {count[0]}</h1>
//       <h2>{demo()}</h2>
//       <button onClick={() => {
//           // now here I have to call the updater function 
//           count[1]((previousValue) => previousValue + 1)
//       }}>Increment</button>

//       <button onClick={() => {
//           // now here I have to call the updater function 
//           count[1]((previousValue) => previousValue - 1)
//       }}>Decrement</button>


//       <button onClick={() => {
//           // now here I have to call the updater function 
//           count[1](0)
//       }}>Reset</button>

//     </div>
//   )
// }

// export default Child



// !How to set the default props in class based components 


// import React, { Component } from 'react'



// export default class Child extends Component {

//   //*using static defaultProps
//   // static defaultProps ={
//   //   userName : "NA",
//   //   id : "NA",
//   //   company : "NA"
    
//   // }




//   render() {
//     // ^Now How to set the default props in the class based components 
//     //! total there are 3 ways 
//     //*1st) using the static defaultProps in class based component 
//     //*2nd) using the (||) or opearator within the expression 
//     //*3rd) using the className defaultProps outside the class based component 


//     let {userName, id , company} = this.props;  //!destructuring

//     return (
//       <div>
//         <h1>userName : {userName || "NA"}</h1>
//         <h2>id : {id || "NA"}</h2>
//         <h3>company : {company || "NA"}</h3>

//       </div>
//     )
//   }
// }


//* or using the directlly className but outside the class based component 
// Child.defaultProps = {
//   userName : "NA",
//   id : "NA",
//   company : "NA"
// }






// !How to set the default props in function based components 
/**
 * !To set the default props in the function based component there are only 2 ways 
 * *1) using the or operator 
 * *2) using the Function Name
 */


// import React from 'react'

// const Child = (props) => {
//   // lets destructure the props 
//   let {userName , id , company} = props;
//   return (
//     <div>
//            {/*here using the or operator  */}
//           <h1>userName : {userName || "NAd"}</h1>
//           <h2>id : {id || "NAd"}</h2>
//           <h3>company : {company || "NAd"}</h3>
//     </div>
//   )
// }

// export default Child


//*using function name 

// Child.defaultProps = {
//   userName : "NADD",
//   id : "NADD",
//   company : "NADD"
// }






//!29/08/24   (very imp datatypes for the props how to set)


// import React from 'react'
// import PropTypesObject from "prop-types"

// const Child = ({userName , id , skills}) => {
//   return (
//     <div>
//       <h1>Child Component</h1>
//       <h2>userName : {userName}</h2>
//       <h3>id : {id}</h3>

//       <ul>
//         skills : {
//           skills.map((value , index) => {
//             return (
//               <li key={index + 1}>{value}</li>
//             )
//           })
//         }
//       </ul>
//     </div>
//   )
// }

// export default Child

// !then using the function name I can set the data type for the props 
//^ isRequired : we use it because it should be compulsory pass it from the parent component

// Child.propTypes = {  //*propTypes it is the property for the child 
//   userName : PropTypesObject.string.isRequired,
//   id : PropTypesObject.number.isRequired,
//   skills : PropTypesObject.array
// }







// !props.children (how to pass the children to the child from the parent component)


// ^here we will get the all the childrens from the parent with props.children
// ^ All the childrens will get in the props so we have to access it using the props.children or we can destructure it directlly as the children and then access it 
// ^or I can destructure it to children

// import React from 'react'

// const Child = (props) => {

//   console.log(props);  //*it will be there in the form of object of array having total childrens that are got passed from the parent 
  
//   return (
//     <div>{props.children}</div>
//   )
// }

// export default Child







//  !================================Un-Mounting Phase ==========================

// ^How componentWillUnmount() method will work 
// *here I am returning the value from the getDerivedStateFromProps() method 

import React, { Component } from 'react'

export default class Child extends Component {

    // ^Constructor 
    constructor(props){
        super(props);

        this.state = {
            value : 0,
        };

        console.log("constructor child");
        
    }


    static getDerivedStateFromProps(props , state){
        console.log("getDerivedStateFromProps child method");

        return {value : props.count};   //*here I am taking the value from the props that I am reciving 
        

    }

    componentDidMount(){
        console.log("Component Mounted Child");
        
    }

    componentWillUnmount(){
        // * this method will get executed when the that particular component will get removed from the DOM tree 

        console.log("component Un-mounted method child");
        alert("component unmounted");
        
    }






  render() {
    console.log("render child method");
    
    return (
      <div>
           <h2>
            Child Component = {this.state.value}
           </h2>
      </div>
    )
  }
}








