import React, { Component } from 'react';

class Beetz extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  makeNoise(event) {
    console.log(event.keyCode);
  }


  render() {
    this.makeNoise(event)
    return(
      <div>
        <img className='shadow-beet' height='100' width='100' src='../images/beetShadow.png'></img>
      </div>
    )
  }
}

export default Beetz;
