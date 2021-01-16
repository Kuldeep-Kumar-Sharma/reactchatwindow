import * as actionTypes from "../actions/actionTypes";

const initialState = {
  players: {
    first: "",
    secound: "",
  },
  winner: "",
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_PLAYER_DETAILS:
      return {
        ...state,
        players: {
          ...action.players,
        },
        winner: state.winner,
      };
    case actionTypes.ADD_WINNER:
      return {
        ...state,
        players: {
          ...state.players,
        },
        winner: action.winner,
      };
    default:
      return state;
  }
};

export default playerReducer;
