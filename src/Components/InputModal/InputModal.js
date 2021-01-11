import React, { Component } from "react";
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import Aux from "../../Containers/Auxiliary/Auxiliary";
import Button from "../UI/Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class InputModal extends Component {
  state = {
    playersForm: {
      firstPlayerName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "First Player Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      secoundPlayerName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Secound Player Name",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.playersForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ playersForm: updatedOrderForm, formIsValid: formIsValid });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.playersForm) {
      formElementsArray.push({
        id: key,
        config: this.state.playersForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <Button
          clicked={() => this.props.onPlayersAdded(this.state.playersForm)}
        >
          Begin
        </Button>
        <Button btnType="Danger" clicked={this.props.onClose}>
          Close
        </Button>
      </form>
    );

    return (
      <Aux>
        <Modal show={this.props.show} modalClosed={this.props.onClose}>
          {form}
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
