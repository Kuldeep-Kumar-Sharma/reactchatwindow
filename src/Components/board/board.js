import React, { Component } from "react";
import Aux from "../../Containers/Auxiliary/Auxiliary";
import classes from "./Board.module.css";
import Button from "../UI/Button/Button";
import InputModal from "../InputModal/InputModal";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: new Array(9).fill(""),
      showPlayerInputModal: false,
      currentPlayer: this.props.players.first,
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

  onCaptureMove = (index) => {
    this.setState((prevState) => {
      let nextPlayer = "";
      let move = "X;";
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
    console.log(this.state.moves);
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPlayersAdded: (players) => {
      dispatch(actions.inputPlayerDetails(players));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
