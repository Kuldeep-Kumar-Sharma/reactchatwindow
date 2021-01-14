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
      moves: [],
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

  onCaptureMove = () => {
    this.setState({
      showPlayerInputModal: false,
    });
  };

  render() {
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
            Current player: <span id="current">{this.props.players.first}</span>
          </p>
        </div>
        <div className={classes.board}>
          <div className={classes.field}>1</div>
          <div className={classes.field}>2</div>
          <div className={classes.field}>3</div>
          <div className={classes.field}>4</div>
          <div className={classes.field}>5</div>
          <div className={classes.field}>6</div>
          <div className={classes.field}>7</div>
          <div className={classes.field}>8</div>
          <div className={classes.field}>9</div>
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
