import React, { Component } from 'react';
// import YoutubeFetch from './youtube';

export default class ChoiceWrapper extends Component {
  constructor(){
    super()
    this.state = {
      selection: ''
    }
  }

  render(){
    return (
      <div>
        <button onClick={() => this.setState({ selection: 'youtube'})} className="btn">YouTube</button>
        <button onClick={() => this.setState({ selection: 'fresh beetz'})} className="btn">Fresh Beetz</button>
      </div>
    )
  }
}
