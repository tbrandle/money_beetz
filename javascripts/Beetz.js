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
    document.removeEventListener('keydown', this.playSong)
    document.removeEventListener('keydown', this.playBeet)
  };

  playSong(event) {
      if (event.keyCode === 32 && this.state.playOneSong === false) {
        this.state.pickSong.play();
        this.setState({ playOneSong: true });
      };
  }

  playBeet(event) {
    const { keyCode } = this.state;
    const beet = dozBeetz[event.keyCode]
    const beetzArray = Object.keys(dozBeetz)
    if(beetzArray.includes(event.keyCode.toString())) {
      this.animateKey(event.keyCode)
      beet.currentTime = 0;
      beet.play()
          .then(something => console.log(something))
          .catch(error => console.log(error));
      console.log(this.refs[event.keyCode]);
    }
  }

  animateKey(keyCode){
    this.refs[keyCode].classList.add('active')
    this.refs[keyCode].addEventListener('transitionend', this.removeClass)
  }

  removeClass(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove('active');

  }

  render() {
    const { keyCode } = this.state
    return (
      <div className="beetz-wrapper">
        <p className="instructions"> Press the space bar to play a fresh beet</p>
        <img className="cat float" src="../images/cat.png" />
        <section className="beat-machine">
          <div ref="81" className="block" >Q</div>
          <div ref="87" className="block">W</div>
          <div ref="69" className="block">E</div>
          <div ref="82" className="block">R</div>
          <div ref="65" className="block">A</div>
          <div ref="83" className="block">S</div>
          <div ref="68" className="block">D</div>
          <div ref="70" className="block">F</div>
        </section>
      </div>
    );
  }
}

export default Beetz;
