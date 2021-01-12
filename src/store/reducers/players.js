import * as actionTypes from "../actions/actionTypes";

const initialState = {
  players: {
    first: "",
    secound: "",
  },
  score: 0,
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
        score: state.score,
        winner: state.winner,
      };
    case actionTypes.ADD_SCORE:
      return {
        ...state,
        players: {
          ...state.players,
        },
        score: action.score,
        winner: state.winner,
      };
    case actionTypes.ADD_WINNER:
      return {
        ...state,
        players: {
          ...state.players,
        },
        score: state.score,
        winner: action.winner,
      };
    default:
      return state;
  }
};

export default playerReducer;
