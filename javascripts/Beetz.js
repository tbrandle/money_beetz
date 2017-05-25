import React, { Component } from 'react';
import songs from '../songs/songArray'
const shuffle = require('shuffle-array')

class Beetz extends Component {
  constructor() {
    super();
    this.state = {
      something: false,
      audio: []
    };
  }

componentDidMount() {
  this.setState({ something: false })
}

  playSound() {
    document.addEventListener('keydown', (event) => {
      if(event.keyCode === 32 && this.state.something === false) {
        shuffle.pick(songs).play()
        this.setState({ something: true })
      }
    });
  }

  render() {
    return (
      <div>
        <p className='welcome pulse'>Welcome to Money Beetz</p>
        <p className="instructions"> Press the space bar to play a fresh beet</p>
        { this.playSound() }
      </div>
    );
  }
}

export default Beetz;
