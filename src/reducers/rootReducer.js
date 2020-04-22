import { createTimer } from "../utils/utils";

const initState = {
  sessionLength: 25,
  breakLength: 5,
  timer: new Date(`August 19, 1975 20:25:00`),
  startStop: false,
  isBreak: false,
};

const rootReducer = (state = initState, action) => {
  if (action.type === "INC_SESSION") {
    return {
      ...state,
      sessionLength: state.sessionLength + 1,
    };
  }
  if (action.type === "DEC_SESSION") {
    return {
      ...state,
      sessionLength: state.sessionLength - 1,
    };
  }
  if (action.type === "INC_BREAK") {
    return {
      ...state,
      sessionLength: state.breakLength + 1,
    };
  }
  if (action.type === "DEC_BREAK") {
    return {
      ...state,
      sessionLength: state.breakLength - 1,
    };
  }
  if (action.type === "UPDATE_TIMER") {
    return {
      ...state,
      timer: action.setTimer,
    };
  }
  if (action.type === "START") {
    return {
      ...state,
      startStop: action.setStartStop,
    };
  }
  if (action.type === "BREAK") {
    return {
      ...state,
      isBreak: action.Break,
    };
  }
  return state;
};

export default rootReducer;
