import * as actionTypes from "../actions/actionTypes";

const initialState = {
  allPlayers: [],
  currentPlayer: {
    players: {
      first: "",
      secound: "",
    },
    winner: "",
  },
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_PLAYER_DETAILS:
      return {
        ...state,
        currentPlayer: {
          ...state.currentPlayer,
          players: {
            ...action.players,
          },
          winner: state.winner,
        },
      };
    case actionTypes.ADD_WINNER:
      return {
        ...state,
        currentPlayer: {
          ...state.currentPlayer,
          players: {
            ...state.players,
          },
          winner: action.winner,
        },
      };
    case actionTypes.ADD_TO_ALL_PLAYERS_AND_CLEAR_CURRENT_PLAYER:
      console.log(state.allPlayers);
      let updatedPlayers = state.allPlayers;
      console.log(updatedPlayers);
      updatedPlayers.push(state.currentPlayer);
      return {
        currentPlayer: {
          ...state.currentPlayer,
          players: {
            first: "",
            secound: "",
          },
          winner: "",
          allPlayers: updatedPlayers,
        },
      };
    default:
      return state;
  }
};

export default playerReducer;
