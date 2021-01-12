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
      showPlayerInputModal: false,
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

  render() {
    return (
      <Aux>
        <InputModal
          show={this.state.showPlayerInputModal}
          modalClosed={this.state.showPlayerInputModal}
          onClose={this.onCapturePlayerDetailClose}
          onPlayersAdded={this.props.onPlayersAdded}
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
