import React, { Component } from "react";
//import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Layout from "./Containers/Layout/Layout";

class App extends Component {
  render() {
    // let routes = (
    //   <Switch>
    //     <Route path="/auth" component={asyncAuth} />
    //     <Route path="/" exact component={BurgerBuilder} />
    //     <Redirect to="/" />
    //   </Switch>
    // );{routes}

    return (
      <div>
        <Layout></Layout>
      </div>
    );
  }
}

export default App;
