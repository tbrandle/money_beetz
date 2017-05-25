import React, { Component } from 'react';
import ChoiceWrapper from './ChoiceWrapper';

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      startTime: false,
      status: 'timer',
      timer: {
        min: 0,
        sec: 2
      },
      POM: {
        min: 0,
        sec: 60
      }
    };
  }

  timerCountdown(timeObj){
    if (!this.state.startTime) {
      this.setState({ startTime: true })
      const intervalVariable = setInterval( () => {
        if (timeObj.sec > 0 && timeObj.min >= 0) {
          timeObj.sec --;
        } else if (timeObj.sec === 0 && timeObj.min > 0) {
          timeObj.sec = 59;
          timeObj.min --;
        } else {
          this.setState({ startTime: false })
          // const newState =
          this.setState({ ['timeObj']: { min:0, sec:2 } })
          this.state.status === 'timer' ? this.setState({ status: 'POM' }) : this.setState({ status: 'timer' })
          clearInterval(intervalVariable)
        }
        const { min, sec } = timeObj
        const newState = Object.assign({}, this.state, {['timeObj'] : { sec, min}})
        this.setState(newState)
      }, 1000)
    }

  }

  renderChoiceWrapper() {
    if (this.state.status === 'POM') {
      return <ChoiceWrapper timerCountdown={ (timeObj) => this.timerCountdown(timeObj) } pom={ this.state.POM } />

    }
  }

  render() {
    const { timer, pom, status } = this.state;
    return (
      <div>
        <h2 className='header'>{status}</h2>
        <div className="timer-wrapper">
          <p className='min num'><span className="num-span">{this.state[status].min}</span>m</p>
          <p className='sec num'><span className="num-span">{this.state[status].sec}</span>sec</p>
        </div>
        { this.state.status === "timer" && <button className='btn' onClick={() => this.timerCountdown(this.state[status]) }>Start {status}</button> }
        { this.renderChoiceWrapper() }
      </div>
    );
  }


}
