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
      pickSong: shuffle.pick(songs),
      keyCode: 0
    };
  };

  componentDidMount() {
    this.setState({ playOneSong: false });
  };

  componentWillUnmount() {
    this.state.pickSong.pause();
  };

  playSong() {
    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 32 && this.state.playOneSong === false) {
        this.state.pickSong.play();
        this.setState({ playOneSong: true });
      };
    });
  };

  playBeet() {
    document.addEventListener('keydown', (event) => {
      const beet = dozBeetz[event.keyCode]
      const beetzArray = Object.keys(dozBeetz)
      if(beetzArray.includes(event.keyCode.toString())) {
        beet.play()
      }
      this.setState({ keyCode: event.keyCode })
    })
  }

  render() {
    return (
      <div>
        <p className="instructions"> Press the space bar to play a fresh beet</p>
        <img className="cat float" src="../images/cat.png" />
        { this.playSong() }
        { this.playBeet() }
        <section className="beat-machine">
          <div id="81" className="block">Q</div>
          <div id="87" className="block">W</div>
          <div id="69" className="block">E</div>
          <div id="82" className="block">R</div>
          <div id="65" className="block">A</div>
          <div id="83" className="block">S</div>
          <div id="68" className="block">D</div>
          <div id="70" className="block">F</div>
        </section>
      </div>
    );
  };
};

export default Beetz;
