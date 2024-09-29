/**
 * 
 * !What is State : it is the way of string the data in react using state
 * !What is props : it is way how our data is going to transfer from one component to another component in react 
 * 
 * 
 * ^Types of Component : 
 * 
 * !Function based component : 
 *          i)define the state using the useState() hook 
 *          ii)access the props directlly as the parameter
 * 
 * 
 * code : 
 * 
            * import React, { useState } from 'react'
            import Child from './Child';

            const Parent = (props) => {
                let [count ,setCount] = useState(0);

                let handleIncrement = (event) => {
                    setCount(count + 1);
                }

                let handleDecrement = (event) => {
                    setCount(count - 1);
                }
                
                let {name} = props;

            return (
                <div>
                    <span>{name}</span>
                    <h1>{count}</h1>
                    <button onClick={handleIncrement}>Increment</button>
                    <button onClick={handleDecrement}>Decrement</button>

                    <Child count={count}/>
                </div>
            )
            }

            export default Parent
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * !class Based Component : 
 *              i)define the state inside the constructor itself using property this.state or we can directlly define the state using state property like state = {}
 *              ii)access the props in constructor using props and also we can access the props in t he render method using this.props
 * 
 * 
 * code : 
 * 
 * 
        * import React, { Component } from 'react'

        class Child extends React.Component {

            constructor(props){
                super(props);
                
                console.log("props from constructor");
                
                console.log(props);
                

                //* declaring the state 
                this.state = {
                    userName : "Maya",
                    password : "123456"
                }
            }

            

        render() {
            //*accessing the props 
            console.log("props from render method");
            
            console.log(this.props);


            


            return (
            <div>
                <span>userName : {this.state.userName} </span>
                <span>Password : {this.state.password} </span>
            </div>
            )
        }
        }

        export default Child;

 * 



####### CREATING ELEMENT IN REACT ######
two ways :
        1>createElement :
                        // let div = React.createElement( this method is used to create the react element in js,
                        //~ it takes three argument
                        //~ 1> element name
                        //~ 2> object or null (it is used to attributes)
                        //~ 3> content or Children
                            Example : 
                                let div = React.createElement("h1" , null , "Hi I am React Element" );
                                console.log(div);
        2> JSX :
                        // ! jsx stands for JavaScript XML
                        // ! jsx allows to write html code in react
                        // ! jsx allows to write html code in react and place it in the dom tree without any create element or append child
                        // ! jsx converts html tags into react element

                        //^Rules of JSX
                        // ^ Rule 1 : if you have multiple element present, it should wrapped within() i.e paranthesis
                        // ^ Rule 2 : each nd every tag must be closed
                        // ^ Rule 3 : One top level element, if two adjacent element is present,
                        // ^          (sibling tags)mandatory should be wrapped within one parent tag.
                        // ^        : for rule 3 you can use empty tag <>...</>, it is called "fragment" 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * !Note : For further Notes refer to the Parent.jsx and Child.jsx Components Every other concept is covered there 
 * 
 
 */


