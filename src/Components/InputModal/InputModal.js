import React, { Component } from "react";
import Modal from "../UI/Modal/Modal";
import Aux from "../../Containers/Auxiliary/Auxiliary";
class InputModal extends Component {
  render() {
    return (
      <Aux>
        <Modal show={true}></Modal>
      </Aux>
    );
  }
}

export default InputModal;
