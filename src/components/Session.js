import React, { useContext } from 'react';
import { TimerContext } from '../hooks/TimerContext';
import { CreateTimer } from '../utils/utils';

const Session = () => {
  const contextType = useContext(TimerContext);
  const { sessionLength, setSessionLength } = contextType;
  const { startStop, setTimer } = contextType;

  const handleButtons = (e) => {
    if (e.target.value === '+') {
      if (sessionLength + 1 <= 60 && !startStop) {
        setSessionLength(sessionLength + 1);
        setTimer(CreateTimer(sessionLength + 1));
      }
    } else {
      if (sessionLength - 1 > 0 && !startStop) {
        setSessionLength(sessionLength - 1);
        setTimer(CreateTimer(sessionLength - 1));
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
