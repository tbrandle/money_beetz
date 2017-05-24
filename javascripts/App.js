import React, { Component } from 'react';
import Timer from './Timer';


export default class App extends Component {
  constructor(){
    super()

  }

  render(){
    return (
      <div>
        <h1 className="app-title">Money Beetz</h1>
        <img className='beet-icon' height='100' width='100' src='../images/beetThing.png'></img>
        <Timer />
      </div>
    )
  }

}
