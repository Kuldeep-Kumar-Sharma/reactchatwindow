import React, { Component } from "react";
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import Aux from "../../Containers/Auxiliary/Auxiliary";
import Button from "../UI/Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class InputModal extends Component {
  render() {
    return (
      <Aux>
        <Modal show={this.props.show} modalClosed={this.props.onClose}>
          Enter the First Player Name:
          <Input elementType="input" />
          Enter the Secound Player Name:
          <Input elementType="input" />
          <Button clicked={this.props.onPlayersAdded}>Begin</Button>
          <Button btnType="Danger" clicked={this.props.onClose}>
            Close
          </Button>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(InputModal);
