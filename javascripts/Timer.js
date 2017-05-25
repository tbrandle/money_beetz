import React, { Component } from 'react';
import ChoiceWrapper from './ChoiceWrapper';

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      startTime: false,
      status: 'timer',
      min: 0,
      sec: 2
    };
  }

  timerUpSound(){

  }

  timerCountdown(sec, min){
    if (!this.state.startTime) {
      this.setState({ startTime: true })
      const intervalVariable = setInterval( () => {
        if (sec > 0 && min >= 0) {
          sec --;
        } else if (sec === 0 && min > 0) {
          sec = 59;
          min --;
        } else {
          this.setState({ startTime: false })
          this.state.status === 'timer' ? this.setState({ status: 'POM', min: 0, sec: 2 }) : this.setState({ status: 'timer', min: 1, sec: 0 })
          clearInterval(intervalVariable)
          return
        }
        this.setState({ sec, min })
      }, 1000)
    }
  }

  renderChoiceWrapper() {
    if (this.state.status === 'POM') {
      return <ChoiceWrapper
                timerCountdown={ (sec, min) => this.timerCountdown(sec, min) }
                min={ this.state.min }
                sec={ this.state.sec } />

    }
  }

  render() {
    const { min, sec, status } = this.state;
    return (
      <div>
        <h2 className='header'>{status}</h2>
        <div className="timer-wrapper">
          <p className='min num'><span className="num-span">{min}</span>m</p>
          <p className='sec num'><span className="num-span">{sec}</span>sec</p>
        </div>
        { this.state.status === "timer" && <button className='btn' onClick={() => this.timerCountdown(sec, min) }>Start {status}</button> }
        { this.renderChoiceWrapper() }
      </div>
    );
  }
}
