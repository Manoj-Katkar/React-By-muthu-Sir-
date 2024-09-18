import React, { Component } from 'react'
import HOC from './HOC';


class HoverCounter extends Component {
  render() {
    console.log(this.props);

    let {count  , handleEvent , name} = this.props;

    return (
      <div>
        <h1 onMouseOver={handleEvent}>
          {name} hovered {count} times
        </h1>
      </div>
    )
  }
}


export default HOC(HoverCounter)