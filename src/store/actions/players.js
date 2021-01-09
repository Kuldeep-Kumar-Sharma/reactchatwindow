import * as actionTypes from "./actionTypes";

export const inputPlayerDetails = (plyers) => {
  return {
    type: actionTypes.INPUT_PLAYER_DETAILS,
    players: plyers,
  };
};
// export const authSuccess = (token, userId) => {
//   return {
//     type: actionTypes.AUTH_SUCCESS,
//     idToken: token,
//     userId: userId,
//   };
// };
