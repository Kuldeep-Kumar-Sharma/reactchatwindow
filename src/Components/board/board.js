import React, { Component } from "react";
import Aux from "../../Containers/Auxiliary/Auxiliary";
import classes from "./Board.module.css";
import Button from "../UI/Button/Button";
import InputModal from "../InputModal/InputModal";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlayerInputModal: false,
    };
  }

  onStartGame = () => {
    this.setState({
      showPlayerInputModal: true,
    });
  };

  onEndGame = () => {
    this.setState({
      showPlayerInputModal: false,
    });
  };

  render() {
    return (
      <Aux>
        <InputModal
          show={this.state.showPlayerInputModal}
          modalClosed={this.state.showPlayerInputModal}
        />
        <div className={classes.gameheader}>
          <p>Classic game for two players. O always starts.</p>
          <Button clicked={this.onStartGame}>Start the Game</Button>
          <p className={classes.current}>
            Current player: <span id="current"></span>
          </p>
        </div>
        <div className={classes.board}>
          <div className={classes.field}></div>
          <div className={classes.field}></div>
          <div className={classes.field}></div>
          <div className={classes.field}></div>
          <div className={classes.field}></div>
          <div className={classes.field}></div>
          <div className={classes.field}></div>
          <div className={classes.field}></div>
          <div className={classes.field}></div>
        </div>
      </Aux>
    );
  }
}

export default Board;
