import React, { Component } from "react";
import Aux from "../../Containers/Auxiliary/Auxiliary";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import Board from "../../Components/Board/Board";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <Board />
      </Aux>
    );
  }
}

export default Layout;
