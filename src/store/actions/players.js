import * as actionTypes from "./actionTypes";

export const inputPlayerDetails = (plyers) => {
  console.log("ACTIONS");
  console.log(plyers);
  let updatingPlayersObject = {
    first: plyers.firstPlayerName.value,
    secound: plyers.secoundPlayerName.value,
  };
  console.log(updatingPlayersObject);
  console.log("ACTIONS--OUT");

  return {
    type: actionTypes.INPUT_PLAYER_DETAILS,
    players: updatingPlayersObject,
  };
};
// export const authSuccess = (token, userId) => {
//   return {
//     type: actionTypes.AUTH_SUCCESS,
//     idToken: token,
//     userId: userId,
//   };
// };
