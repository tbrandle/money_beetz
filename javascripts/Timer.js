import React, { Component } from 'react';

export default class Timer extends Component {
  constructor() {
    super()
    this.state = {
      timer: {
        min: 1,
        sec: 2
      },
      pom: {
        min: 1,
        sec: 2
      }
    }
  }

  timerCountdown(sec, min){
      console.log("inside block");
      const intervalVariable = setInterval( () => {
        if (sec > 0 && min >= 0) {
          sec --;
          console.log("subtract SEC: ", sec, min);
        } else if (sec === 0 && min > 0) {
          sec = 2
          min --
          console.log("subtract MIN: ", sec, min);
        } else {
          console.log("END");
          const timer = { sec, min }
          this.setState({ timer })
          console.log(this.state);
          clearInterval(intervalVariable)
        }
        console.log("end of the lin");
      }, 1000)
    return
  }

  runTimer() {
    const { timer, pom } = this.state;
    if (timer.min && timer.sec) {
      this.timerCountdown(timer.sec, timer.min)
    } else {

      //  once user clicks on distraction, trigger countdown for pom

      this.timerCountdown(pom.sec, pom.min)
    }
  }


  render() {
    return (
      <div>
        {this.runTimer()}
      </div>
    )
  }


}
