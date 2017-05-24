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
        let audio = new Audio("60key.wav")
        audio.play()
      }
    })
  }

  render() {

    return(
      <div>
        <p>In the Beetz</p>
        { this.playSound() }
      </div>
    )
  }
}

export default Beetz;
