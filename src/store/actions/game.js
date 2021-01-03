import * as actionTypes from "./actionTypes";

export const startGame = () => {
  return {
    type: actionTypes.START_GAME,
  };
};

export const endGame = () => {
  return {
    type: actionTypes.END_GAME,
  };
};

export const optionO = () => {
  return {
    type: actionTypes.OPTION_O,
  };
};

export const optionX = () => {
  return {
    type: actionTypes.OPTION_X,
  };
};

export const declareResult = () => {
  return {
    type: actionTypes.DECLARE_RESULT,
  };
};
