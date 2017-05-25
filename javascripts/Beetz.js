import React, { Component } from 'react';
import songs from '../songs/songArray'
const shuffle = require('shuffle-array')

class Beetz extends Component {
  constructor() {
    super();
    this.state = {
      audio: []
    };
  }

  playSound() {
    document.addEventListener('keydown', (event) => {
      if(event.keyCode === 32) {
        shuffle.pick(songs).play()
      }
    });
  }

  render() {
    return (
      <div>
        <p className='welcome'>Welcome to Money Beetz</p>
        <p className="instructions"> Press the space bar to play a fresh beet</p>
        { this.playSound() }
        <img className='shadow-beet' height='100' width='100' src='../images/beetShadow.png'></img>
      </div>
    );
  }
}

export default Beetz;
