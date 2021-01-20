import React, { Component } from "react";
import Modal from "../UI/Modal/Modal";
import Aux from "../../Containers/Auxiliary/Auxiliary";
import Button from "../UI/Button/Button";
import classes from "./WinnerModal.module.css";

class WinnerModal extends Component {
  render() {
    return (
      <Aux>
        <Modal show={this.props.show} modalClosed={this.props.onResetGame}>
          <b className={classes.winnerName}>Winner is : {this.props.winner}</b>
          <center>
            <Button clicked={this.props.onResetGame}>Close!</Button>
          </center>
        </Modal>
      </Aux>
    );
  }
}

export default WinnerModal;
