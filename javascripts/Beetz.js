import React, { Component } from 'react';
import songs from '../songs/songArray';
const shuffle = require('shuffle-array')

class Beetz extends Component {
  constructor() {
    super();
    this.state = {
      playOneSong: false,
      audio: [],
      pickSong: shuffle.pick(songs)
    };
  }

componentDidMount() {
  this.setState({ playOneSong: false })
}

componentWillUnmount() {
  this.state.pickSong.pause()
}

  playSound() {
    document.addEventListener('keydown', (event) => {
      if(event.keyCode === 32 && this.state.playOneSong === false) {
        this.state.pickSong.play()
        this.setState({ playOneSong: true })
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
