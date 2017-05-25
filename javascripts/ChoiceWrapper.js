import React, { Component } from 'react';
import YoutubeFetch from './Youtube.js';
import Beetz from './Beetz';

export default class ChoiceWrapper extends Component {
  constructor() {
    super();
    this.state = {
      selection: ''
    };
  }

  selectActivity(e) {
    const { sec, min } = this.props;
    this.props.timerCountdown(sec, min);
    this.setState({ selection: e.target.value });
  }

  render() {
    return (
      <div>
        <p className='instructions'>Make a selection to start your POM</p>
        <div className="btn-wrapper">
          <button onClick={(e) => this.selectActivity(e)} value="youtube" className="btn">YouTube</button>
          <button onClick={(e) => this.selectActivity(e)} value="beetz" className="btn">Fresh Beetz</button>
        </div>
        { this.state.selection === 'youtube' && <YoutubeFetch />}
        { this.state.selection === 'beetz' && <Beetz defProps={ this.props }/>}
      </div>
    );
  }
}
