import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Layout from "./Containers/Layout/Layout ";

class App extends Component {
  render() {
    // let routes = (
    //   <Switch>
    //     {/* <Route path="/players" component={}></Route>
    //     <Route path="/" component={}></Route> */}
    //   </Switch>
    // );
    // {routes}
    return (
      <div>
        <Layout></Layout>
      </div>
    );
  }
}
//withRouter(
export default App;
