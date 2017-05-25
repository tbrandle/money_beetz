import React, { Component } from 'react';
import songs from '../songs/songArray';
import dozBeetz from '../wav/drummingBeetz';

const shuffle = require('shuffle-array');

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
    this.setState({ playOneSong: false });
  }

  componentWillUnmount() {
    this.state.pickSong.pause();
  }

  playSong() {
    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 32 && this.state.playOneSong === false) {
        this.state.pickSong.play();
        this.setState({ playOneSong: true });
      }
    });
  }

  playBeet() {
    document.addEventListener('keydown', (event) => {
      const beet = dozBeetz[event.keyCode];
      beet.play();
    });
  }

  render() {
    return (
      <div>
        <p className="instructions"> Press the space bar to play a fresh beet</p>
        <img className="cat float" src="../images/cat.png" />
        { this.playSong() }
        { this.playBeet() }
      </div>
    );
  }
}

export default Beetz;
