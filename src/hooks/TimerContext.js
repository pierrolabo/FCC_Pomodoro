import React, { createContext, Component } from 'react';

export const TimerContext = createContext();

class TimerContextProvider extends Component {
  state = {
    sessionLength: 25,
    breakLength: 5,
    timer: new Date(`August 19, 1975 20:25:00`),
    startStop: false,
    isBreak: false,
  };

  setTimer = (date) => {
    this.setState({
      timer: date,
    });
  };
  setBreakLength = (val) => {
    this.setState({
      breakLength: val,
    });
  };
  setSessionLength = (val) => {
    this.setState({
      sessionLength: val,
    });
  };
  setBreak = (val) => {
    this.setState({
      isBreak: val,
    });
  };

  setStartStop = (val) => {
    this.setState({
      startStop: val,
    });
  };
  reset = () => {
    this.setState({
      sessionLength: 25,
      breakLength: 5,
      timer: new Date(`August 19, 1975 20:25:00`),
      startStop: false,
      isBreak: false,
    });
  };
  render() {
    return (
      <TimerContext.Provider
        value={{
          ...this.state,
          setTimer: this.setTimer,
          setBreak: this.setBreak,
          setStartStop: this.setStartStop,
          setBreakLength: this.setBreakLength,
          setSessionLength: this.setSessionLength,
          reset: this.reset,
        }}
      >
        {this.props.children}
      </TimerContext.Provider>
    );
  }
}

export default TimerContextProvider;
