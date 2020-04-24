import React, { useContext } from 'react';
import { TimerContext } from '../hooks/TimerContext';

const Break = () => {
  const contextType = useContext(TimerContext);
  const { breakLength, setBreakLength } = contextType;

  const handleButtons = (e) => {
    let value = e.target.getAttribute('value');
    if (value === '+') {
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
      <div className='break-buttons'>
        <div id='break-increment' onClick={handleButtons}>
          <i class='fas fa-plus-square fa-2x' value='+'></i>
        </div>
        <span id='break-length'>{breakLength}</span>
        <div id='break-decrement' onClick={handleButtons}>
          <i class='fas fa-minus-square fa-2x' value='-'></i>
        </div>
      </div>
    </div>
  );
};

export default Break;
