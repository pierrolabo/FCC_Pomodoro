import React, { useContext } from 'react';
import { TimerContext } from '../hooks/TimerContext';

const Session = () => {
  const contextType = useContext(TimerContext);
  const { sessionLength, setSessionLength } = contextType;
  const { timer, startStop, setTimer } = contextType;

  const createTimer = (minutes = 25, seconds = 0) => {
    const date = new Date(`August 19, 1975 20:${minutes}:${seconds}`);
    return date;
  };
  const handleButtons = (e) => {
    if (e.target.value === '+') {
      if (sessionLength + 1 <= 60 && !startStop) {
        setSessionLength(sessionLength + 1);
        setTimer(createTimer(sessionLength + 1));
      }
    } else {
      if (sessionLength - 1 > 0 && !startStop) {
        setSessionLength(sessionLength - 1);
        setTimer(createTimer(sessionLength - 1));
      }
    }
  };
  return (
    <div className='session-container'>
      <h3 id='session-label'>session length</h3>
      <button id='session-increment' value='+' onClick={handleButtons}>
        +
      </button>
      <span id='session-length'>{sessionLength}</span>
      <button id='session-decrement' value='-' onClick={handleButtons}>
        -
      </button>
    </div>
  );
};

export default Session;
