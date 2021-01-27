import React, { Component } from "react";
import Aux from "../../Containers/Auxiliary/Auxiliary";
import classes from "./AllPlayers.module.css";
import { connect } from "react-redux";

class AllPlayers extends Component {
  render() {
    console.log(this.props.allPlayers);
    return (
      <Aux>
        {this.props.allPlayers.map((el, index) => (
          <div className={classes.card}>
            <div className={classes.container}>
              <p>
                <b>Player 1: </b>
                {el.players.first}
              </p>
              <p>
                <b>Player 2: </b>
                {el.players.secound}
              </p>
              <h4>
                <b>Winner : {el.winner}</b>
              </h4>
            </div>
          </div>
        ))}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allPlayers: state.allPlayers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    lastState: () => {
      dispatch();
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllPlayers);
