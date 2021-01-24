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
              <p>{el.currentPlayer.players.first}</p>
              <p>{el.currentPlayer.players.secound}</p>
              <h4>
                <b>Winner : {el.currentPlayer.winner}</b>
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

export default connect(mapStateToProps, null)(AllPlayers);
