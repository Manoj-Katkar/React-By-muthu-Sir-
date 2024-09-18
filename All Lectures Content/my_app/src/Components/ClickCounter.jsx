import React, { Component } from 'react'
import HOC from './HOC';

class ClickCounter extends Component {
  render() {

    console.log(this.props);

    let {count  , handleEvent , name} = this.props;
    
    return (
      <div>
        <button 
        onClick={handleEvent}>
            {name} clicked {count} times
        </button>
      </div>
    )
  }
}


export default HOC(ClickCounter);
