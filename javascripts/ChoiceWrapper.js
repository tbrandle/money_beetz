import React, { Component } from 'react';
import YoutubeFetch from './Youtube.js';

export default class ChoiceWrapper extends Component {
  constructor(){
    super()
    this.state = {
      selection: ''
    }
  }

  selectActivity(e){
    this.setState({ selection: e.target.value})
  }

  render(){
    return (
      <div className="btn-wrapper">
        <button onClick={(e) => this.selectActivity(e)} value="youtube" className="btn">YouTube</button>
        <button onClick={(e) => this.selectActivity(e)} value="beetz" className="btn">Fresh Beetz</button>
        { this.state.selection === 'youtube' && <YoutubeFetch />}
      </div>
    )
  }
}
