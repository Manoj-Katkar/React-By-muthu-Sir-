import React from 'react'

const HOC = (WrappedComponent) => {
    // creating the new component 
    class NewComponent extends React.Component{

        // ^Constructor 
        constructor(props){
          super(props);

          this.state = {
              count : 0,
          };

          console.log("constructor Higher order Component");

          // *Bind the method to 'this' because inside the constructor this refers to the current component that is NewComponent 
          this.handleEvent = this.handleEvent.bind(this);
          
      }

      handleEvent(){
        this.setState({count: this.state.count + 1});
      }

      render(){
        return(
          <WrappedComponent
            count={this.state.count}
            handleEvent={this.handleEvent}
            {...this.props}
          />
        )
      }
    };

    return NewComponent;
}

export default HOC