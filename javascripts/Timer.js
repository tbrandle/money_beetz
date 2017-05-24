import React, { Component } from 'react';

export default class Timer extends Component {
  constructor() {
    super()
    this.state = {
      status: 'timer',
      timer: {
        min: 25,
        sec: 0
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
          timeObj.sec = 59;
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
    const { timer, pom, status } = this.state;
    return (

      //  if state.timer is at 0 then render pom timer
        //  else render timer

      <div>
        <h2>{status}</h2>
        <p>{this.state[status].min}m</p>
        <p>{timer.sec}sec</p>
        <h2>POM Timer</h2>
        <p>{pom.min}m</p>
        <p>{pom.sec}sec</p>
        <button onClick={() => this.timerCountdown(timer) }>Start Timer</button>
        <button onClick={() => this.timerCountdown(pom) }>Start Pom</button>
      </div>
    )
  }


}
