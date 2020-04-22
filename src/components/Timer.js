//https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import React, { useEffect, useContext, useRef } from 'react';
import { TimerContext } from '../hooks/TimerContext';
import RingTones from '../ringtones/bell-ringing-05.mp3';

const ringtone = new Audio(RingTones);
const Timer = () => {
  const contextType = useContext(TimerContext);
  const { sessionLength, breakLength } = contextType;
  const { isBreak, startStop } = contextType;
  const { timer } = contextType;
  const { setTimer, setBreak, setStartStop, reset } = contextType;
  const inputRef = useRef(null);

  const createTimer = (minutes = 25, seconds = 0) => {
    const date = new Date(`August 19, 1975 20:${minutes}:${seconds}`);
    return date;
  };
  //decrement the timer by one
  const decTimer = (timer) => {
    const clock = new Date(Date.parse(timer));
    clock.setSeconds(clock.getSeconds() - 1);
    return clock;
  };

  useEffect(() => {
    if (startStop && isFinished(timer)) {
      let id = setInterval(() => {
        setTimer(decTimer(timer));
      }, 1000);
      return () => clearInterval(id);
    } else if (startStop && !isFinished(timer)) {
      //play sound here
      playRingtone();
      if (!isBreak) {
        setBreak(true);
        setTimer(createTimer(breakLength));
      } else {
        setBreak(false);
        setTimer(createTimer(sessionLength));
      }
    }
  });
  const isFinished = (timer) => {
    const minutes = timer.getMinutes();
    const seconds = timer.getSeconds();
    return minutes + seconds > 0;
  };
  const play = () => {
    console.log('play');
    setStartStop(!startStop);
  };
  const playRingtone = () => {
    if (inputRef.current.paused) {
      inputRef.current.play();
    } else {
      inputRef.current.currentTime = 0;
    }
  };
  const setReset = () => {
    inputRef.current.pause();

    inputRef.current.currentTime = 0;
    reset();
  };
  const getTime = (timer) => {
    return `${timer.getMinutes() < 10 ? '0' : ''}${timer.getMinutes()}:${
      timer.getSeconds() < 10 ? '0' : ''
    }${timer.getSeconds()}`;
  };

  return (
    <div className='timer-container'>
      <h3 id='timer-label'>{isBreak ? 'Break' : 'Session'}</h3>
      <span id='time-left' className='timer'>
        {sessionLength == 60 ? '60:00' : getTime(timer)}
      </span>
      <audio
        id='beep'
        className='clip'
        src={ringtone.src}
        ref={inputRef}
      ></audio>
      <button id='start_stop' onClick={play}>
        PLAY/STOP
      </button>

      <button id='reset' onClick={setReset}>
        RESET
      </button>
    </div>
  );
};

export default Timer;
