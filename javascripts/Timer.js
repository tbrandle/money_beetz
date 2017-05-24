import React, { Component } from 'react';

export default class Timer extends Component {
  constructor() {
    super()
    this.state = {
      timer: {
        min: 1,
        sec: 60
      },
      pom: {
        min: 1,
        sec: 5
      }
    }
  }

  timerCountdown(timeObj){
      const intervalVariable = setInterval( () => {
        if (timeObj.sec > 0 && timeObj.min >= 0) {
          timeObj.sec --;
        } else if (timeObj.sec === 0 && timeObj.min > 0) {
          timeObj.sec = 60;
          timeObj.min --;
        } else {
          clearInterval(intervalVariable)
        }
        const { min, sec } = timeObj
        const newState = Object.assign({}, this.state, {['timeObj'] : { sec, min}})
        this.setState(newState)
      }, 1000)
  }

  render() {
    const { timer, pom } = this.state;
    return (
      <div>
        <h2>Timer</h2>
        <p>{this.state.timer.min}m</p>
        <p>{this.state.timer.sec}sec</p>
        <h2>POM Timer</h2>
        <p>{this.state.pom.min}m</p>
        <p>{this.state.pom.sec}sec</p>
        <button onClick={() => this.timerCountdown(timer) }>Start Timer</button>
        <button onClick={() => this.timerCountdown(pom) }>Start Pom</button>
      </div>
    )
  }


}
