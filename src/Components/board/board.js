import React, { Component } from "react";
import Aux from "../../Containers/Auxiliary/Auxiliary";
import classes from "./Board.module.css";
import Button from "../UI/Button/Button";
import InputModal from "../InputModal/InputModal";
import Modal from "../../Components/UI/Modal/Modal";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: new Array(9).fill(""),
      showPlayerInputModal: false,
      currentPlayer: this.props.players.first,
      finished: false,
    };
  }

  onStartGame = () => {
    this.setState({
      showPlayerInputModal: true,
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
          moves: [],
          finished: true,
        };
      });
    }

    console.log(this.state.moves);
  };

  onResetGame = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        currentPlayer: "",
        moves: [],
        finished: false,
      };
    });
  };

  render() {
    let boardMap = [];
    for (var i = 0; i < 9; i++) {
      boardMap.push({ key: i });
    }

    return (
      <Aux>
        <InputModal
          show={this.state.showPlayerInputModal}
          onClose={this.onCapturePlayerDetailClose}
          onPlayersAdded={this.props.onPlayersAdded}
        />
        <Modal show={this.state.finished}>
          <b>Winner is : {this.props.winner}</b>
          <Button clicked={this.onResetGame}>OK!</Button>
        </Modal>
        <div className={classes.gameheader}>
          <p>Classic game for two players. O always starts.</p>
          <Button clicked={this.onStartGame}>Start the Game</Button>
          <p className={classes.current}>
            Current player: <span id="current">{this.state.currentPlayer}</span>
          </p>
        </div>
        <div className={classes.board}>
          {boardMap.map((el, index) => (
            <div
              key={index}
              onClick={() => this.onCaptureMove(el.key)}
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
    players: state.players,
    winner: state.winner,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
