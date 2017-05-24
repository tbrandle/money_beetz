import React, { Component } from 'react';
import Timer from './Timer';
import Beetz from './Beetz.js';


export default class App extends Component {
  constructor(){
    super()

  }

  render(){
    return (
      <div className="app-title">Money Beetz
        <Timer />
        <Beetz />
      </div>
    )
  }

}
