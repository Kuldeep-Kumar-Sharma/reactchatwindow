import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AllPlayers from "./Components/AllPlayers/AllPlayers";
import Board from "./Components/Board/Board";
import Layout from "./Containers/Layout/Layout";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/Players" component={AllPlayers} />
        <Route to="/" exact component={Board} />
      </Switch>
    );

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;
