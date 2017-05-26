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
    this.playSong = this.playSong.bind(this);
    this.playBeet = this.playBeet.bind(this);
  }

  componentDidMount() {
    this.setState({ playOneSong: false });
    document.addEventListener('keydown', this.playSong)
    document.addEventListener('keydown', this.playBeet)
  };

  componentWillUnmount() {
    this.state.pickSong.pause();
    console.log("Component unmounted!");
    document.removeEventListener('keydown', this.playSong)
    document.removeEventListener('keydown', this.playBeet)
  };

  playSong(event) {
    console.log(event);
      if (event.keyCode === 32 && this.state.playOneSong === false) {
        this.state.pickSong.play();
        this.setState({ playOneSong: true });
      };
  }

  playBeet(event) {
      const beet = dozBeetz[event.keyCode]
      const beetzArray = Object.keys(dozBeetz)
      if(beetzArray.includes(event.keyCode.toString())) {
        beet.currentTime = 0;
        beet.play()
            .then(something => console.log(something))
            .catch(error => console.log(error));
      }
      this.setState({ keyCode: event.keyCode })
  }

  render() {
    return (
      <div className="beetz-wrapper">
        <p className="instructions"> Press the space bar to play a fresh beet</p>
        <img className="cat float" src="../images/cat.png" />
        <section className="beat-machine">
          <div data-key="81" className="block">Q</div>
          <div data-key="87" className="block">W</div>
          <div data-key="69" className="block">E</div>
          <div data-key="82" className="block">R</div>
          <div data-key="65" className="block">A</div>
          <div data-key="83" className="block">S</div>
          <div data-key="68" className="block">D</div>
          <div data-key="70" className="block">F</div>
        </section>
      </div>
    );
  }
}

export default Beetz;
