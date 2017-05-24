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
        min: 5,
        sec: 0
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
        <h2 className='header'>{status}</h2>
        <p>{this.state[status].min}m</p>
        <p>{timer.sec}sec</p>
        <h2 className='header'>POM Timer</h2>
        <p>{pom.min}m</p>
        <p>{pom.sec}sec</p>
        <button className='start-btn btn' onClick={() => this.timerCountdown(timer) }>Start Timer</button>
        <button className='pom-btn btn' onClick={() => this.timerCountdown(pom) }>Start Pom</button>
      </div>
    )
  }


}
