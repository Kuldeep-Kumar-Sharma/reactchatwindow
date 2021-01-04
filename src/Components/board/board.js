import React, { Component } from "react";
import Aux from "../../Containers/Auxiliary/Auxiliary";
import classes from "./Board.module.css";
import Button from "../UI/Button/Button";
import InputModal from "../InputModal/InputModal";

class Board extends Component {
  render() {
    return (
      <Aux>
        <InputModal></InputModal>
        <div className={classes.gameheader}>
          <p>Classic game for two players. O always starts.</p>
          <Button>Start the Game</Button>
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
