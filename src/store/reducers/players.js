import * as actionTypes from "../actions/actionTypes";

// let initialState = localStorage.getItem("persistant-state");
// console.log(initialState);
// if (initialState === "undefined") {
//console.log(initialState);

let initialState = {
  allPlayers: [],
  currentPlayer: {
    players: {
      first: "",
      secound: "",
    },
    winner: "",
  },
};
//}

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_PLAYER_DETAILS:
      console.log(state.allPlayers);
      return {
        ...state,
        currentPlayer: {
          ...state.currentPlayer,
          players: {
            ...action.players,
          },
          winner: state.winner,
        },
        allPlayers: [...state.allPlayers],
      };
    case actionTypes.ADD_WINNER:
      return {
        ...state,
        currentPlayer: {
          players: {
            first: state.currentPlayer.players.first,
            secound: state.currentPlayer.players.secound,
          },
          winner: action.winner,
        },
        allPlayers: [...state.allPlayers],
      };
    case actionTypes.ADD_TO_ALL_PLAYERS_AND_CLEAR_CURRENT_PLAYER:
      let updatedPlayers = state.allPlayers;
      updatedPlayers.push(state.currentPlayer);
      let stateUpdated = {
        currentPlayer: {
          ...state.currentPlayer,
          players: {
            first: "",
            secound: "",
          },
          winner: "",
        },
        allPlayers: [...updatedPlayers],
      };
      return stateUpdated;
    default:
      return state;
  }
};

export default playerReducer;
