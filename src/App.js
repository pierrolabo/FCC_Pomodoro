import React from 'react';
import Timer from './components/Timer';
import Break from './components/Break';
import Session from './components/Session';
import TimerContextProvider from './hooks/TimerContext';

function App() {
  return (
    <div className='App'>
      <TimerContextProvider>
        <Timer />
        <div className='length-control-container'>
          <Break />
          <Session />
        </div>
      </TimerContextProvider>
    </div>
  );
}

export default App;
