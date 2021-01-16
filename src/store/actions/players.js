import * as actionTypes from "./actionTypes";

export const inputPlayerDetails = (plyers) => {
  let updatingPlayersObject = {
    first: plyers.firstPlayerName.value,
    secound: plyers.secoundPlayerName.value,
  };
  return {
    type: actionTypes.INPUT_PLAYER_DETAILS,
    players: updatingPlayersObject,
  };
};

export const addScoreAndWinner = (wn) => {
  return {
    type: actionTypes.ADD_WINNER,
    winner: wn,
  };
};
