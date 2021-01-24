import React, { Component } from "react";
import Aux from "../../Containers/Auxiliary/Auxiliary";
import classes from "./Board.module.css";
import Button from "../UI/Button/Button";
import InputModal from "../InputModal/InputModal";
import WinnerModal from "../WinnerModal/WinnerModal";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: new Array(9).fill(""),
      showPlayerInputModal: false,
      currentPlayer: this.props.players.first,
      started: false,
      finished: false,
    };
  }

  onStartGame = () => {
    this.setState({
      ...this.state,
      showPlayerInputModal: true,
      started: true,
    });
  };

  onCapturePlayerDetailClose = () => {
    this.setState({
      showPlayerInputModal: false,
    });
  };

  checkWinner = () => {
    let options = ["O", "X"];
    for (let i = 0; i < options.length; i++) {
      //row 1
      if (
        this.state.moves[0] === options[i] &&
        this.state.moves[1] === options[i] &&
        this.state.moves[2] === options[i]
      ) {
        return true;
      }
      //row 2
      if (
        this.state.moves[3] === options[i] &&
        this.state.moves[4] === options[i] &&
        this.state.moves[5] === options[i]
      ) {
        return true;
      }
      //row 3
      if (
        this.state.moves[6] === options[i] &&
        this.state.moves[7] === options[i] &&
        this.state.moves[8] === options[i]
      ) {
        return true;
      }
      //col 1
      if (
        this.state.moves[0] === options[i] &&
        this.state.moves[3] === options[i] &&
        this.state.moves[6] === options[i]
      ) {
        return true;
      }
      //col 2
      if (
        this.state.moves[1] === options[i] &&
        this.state.moves[4] === options[i] &&
        this.state.moves[7] === options[i]
      ) {
        return true;
      }
      //col 3
      if (
        this.state.moves[2] === options[i] &&
        this.state.moves[5] === options[i] &&
        this.state.moves[8] === options[i]
      ) {
        return true;
      }

      // row diagnol 1
      if (
        this.state.moves[0] === options[i] &&
        this.state.moves[4] === options[i] &&
        this.state.moves[8] === options[i]
      ) {
        return true;
      }
      //row diagnol 2
      if (
        this.state.moves[2] === options[i] &&
        this.state.moves[4] === options[i] &&
        this.state.moves[6] === options[i]
      ) {
        return true;
      }
    }
  };

  onCaptureMove = (index) => {
    this.setState((prevState) => {
      let move = "X";
      let nextPlayer = "";
      if (this.state.currentPlayer === this.props.players.first) {
        nextPlayer = this.props.players.secound;
        move = "O";
      } else {
        move = "X";
        nextPlayer = this.props.players.first;
      }

      const newItems = [...prevState.moves];
      newItems[index] = move;

      return {
        ...prevState,
        currentPlayer: nextPlayer,
        moves: newItems,
      };
    });
    if (this.checkWinner()) {
      this.props.onWinner(this.state.currentPlayer);
      this.setState((prevState) => {
        return {
          ...prevState,
          currentPlayer: "",
          moves: new Array(9).fill(""),
          finished: true,
        };
      });
    }

    console.log(this.state.moves);
  };

  onResetGame = () => {
    this.props.onEndGame();
    this.setState((prevState) => {
      return {
        ...prevState,
        currentPlayer: "",
        moves: [],
        started: false,
        finished: false,
      };
    });
  };

  onStartWarning = () => {
    this.onStartGame();
  };

  render() {
    let boardMap = [];
    for (var i = 0; i < 9; i++) {
      boardMap.push({ key: i });
    }

    let currentPlayer = this.state.started ? (
      <p>
        Current player: <span id="current">{this.state.currentPlayer}</span>
      </p>
    ) : (
      ""
    );
    console.log(this.props.allPlayers);

    return (
      <Aux>
        <InputModal
          show={this.state.showPlayerInputModal}
          onClose={this.onCapturePlayerDetailClose}
          onPlayersAdded={this.props.onPlayersAdded}
        />
        <WinnerModal
          show={this.state.finished}
          winner={this.props.winner}
          onResetGame={this.onResetGame}
        />

        <div className={classes.gameheader}>
          <p>Classic game for two players. O always starts.</p>
          <Button clicked={this.onStartGame}>Start the Game</Button>
          <div className={classes.current}>{currentPlayer}</div>
        </div>
        <div
          className={classes.board}
          style={
            this.state.started
              ? { backgroundColor: "#000" }
              : { backgroundColor: "#eae6e6" }
          }
        >
          {boardMap.map((el, index) => (
            <div
              key={index}
              onClick={
                this.state.started
                  ? () => this.onCaptureMove(el.key)
                  : () => this.onStartWarning()
              }
              className={classes.field}
            >
              {this.state.moves[el.key]}
            </div>
          ))}
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.currentPlayer.players,
    winner: state.currentPlayer.winner,
    allPlayers: state.allPlayers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPlayersAdded: (players) => {
      dispatch(actions.inputPlayerDetails(players));
    },
    onWinner: (winner) => {
      dispatch(actions.addScoreAndWinner(winner));
    },
    onEndGame: () => {
      dispatch(actions.addToAllPlayersAndClearCurrentPlayer());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
