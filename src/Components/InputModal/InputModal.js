import React, { Component } from "react";
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import Aux from "../../Containers/Auxiliary/Auxiliary";
import Button from "../UI/Button/Button";

class InputModal extends Component {
  render() {
    return (
      <Aux>
        <Modal show={this.props.show} modalClosed={this.props.modalClosed}>
          Enter the First Player Name:
          <Input elementType="input" />
          Enter the Secound Player Name:
          <Input elementType="input" />
          <Button>Begin</Button>
          <Button>Close</Button>
        </Modal>
      </Aux>
    );
  }
}

export default InputModal;
