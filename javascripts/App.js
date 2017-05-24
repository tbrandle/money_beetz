import React, { Component } from 'react';
import Timer from './Timer';


export default class App extends Component {
  constructor(){
    super()

  }

  render(){
    return (
      <div className="app-title">Money Beetz
        <Timer />
      </div>
    )
  }

}
