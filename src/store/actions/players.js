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

export const addToAllPlayersAndClearCurrentPlayer = () => {
  return {
    type: actionTypes.ADD_TO_ALL_PLAYERS_AND_CLEAR_CURRENT_PLAYER,
  };
};
