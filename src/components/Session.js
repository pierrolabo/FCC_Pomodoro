import React, { useContext } from 'react';
import { TimerContext } from '../hooks/TimerContext';
import { CreateTimer } from '../utils/utils';

const Session = () => {
  const contextType = useContext(TimerContext);
  const { sessionLength, setSessionLength } = contextType;
  const { startStop, setTimer } = contextType;

  const handleButtons = (e) => {
    let value = e.target.getAttribute('value');
    if (value === '+') {
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
      <div className='session-buttons'>
        <div id='session-increment' onClick={handleButtons}>
          <i class='fas fa-plus-square fa-2x' value='+'></i>
        </div>
        <span id='session-length'>{sessionLength}</span>
        <div id='session-decrement' onClick={handleButtons}>
          <i class='fas fa-minus-square fa-2x' value='-'></i>
        </div>
      </div>
    </div>
  );
};

export default Session;
