import React, { Component } from 'react';
import ChoiceWrapper from './ChoiceWrapper';

export default class Timer extends Component {
  constructor() {
    super()
    this.state = {
      status: 'timer',
      timer: {
        min: 0,
        sec: 2
      },
      POM: {
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
          this.state.status === 'timer' ? this.setState({ status: 'POM' }) : this.setState({ status: 'timer' })
          clearInterval(intervalVariable)
        }
        const { min, sec } = timeObj
        const newState = Object.assign({}, this.state, {['timeObj'] : { sec, min}})
        this.setState(newState)
      }, 1000)
  }

  renderChoiceWrapper(){
    if (this.state.status === 'POM') {
      return <ChoiceWrapper />
    }
  }

  render() {
    const { timer, pom, status } = this.state;
    return (
      <div>
        <h2 className='header'>{status}</h2>
        <p className='min num'>{this.state[status].min}m</p>
        <p className='sec num'>{this.state[status].sec}sec</p>
        { this.state.status === "timer" && <button className='btn' onClick={() => this.timerCountdown(this.state[status]) }>Start {status}</button> }
        { this.renderChoiceWrapper() }
      </div>
    )
  }


}
