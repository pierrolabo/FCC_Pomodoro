import React, { useContext } from 'react';
import { TimerContext } from '../hooks/TimerContext';

const Break = () => {
  const contextType = useContext(TimerContext);
  const { breakLength, setBreakLength } = contextType;

  const handleButtons = (e) => {
    if (e.target.value === '+') {
      if (breakLength + 1 <= 60) {
        setBreakLength(breakLength + 1);
      }
    } else {
      if (breakLength - 1 > 0) {
        setBreakLength(breakLength - 1);
      }
    }
  };
  return (
    <div className='break-container'>
      <h3 id='break-label'>Break length</h3>
      <button id='break-increment' value='+' onClick={handleButtons}>
        +
      </button>
      <span id='break-length'>{breakLength}</span>
      <button id='break-decrement' value='-' onClick={handleButtons}>
        -
      </button>
    </div>
  );
};

export default Break;
