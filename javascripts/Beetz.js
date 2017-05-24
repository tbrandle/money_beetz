import React, { Component } from 'react';

class Beetz extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  playSound() {
    document.addEventListener('keydown', (event) => {
      if(event.keyCode === 70) {
        let audio = new Audio("../wav/60key.wav")
        audio.play()
      }
    })
  }

  render() {
    return(
      <div>
        <p>In the Beetz</p>
        { this.playSound() }
        <img className='shadow-beet' height='100' width='100' src='../images/beetShadow.png'></img>
      </div>
    )
  }
}

export default Beetz;
