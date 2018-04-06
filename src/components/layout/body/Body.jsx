import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../pages/home/Home";
import User from "../../pages/user/User";

import "./Body.css";

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={User} />
          <Route render={() => <div className="NotFoundMessage">404 Page Not Found</div>} />
        </Switch>
      </div>
    );
  }

  componentDidMount () {
    // Test jQuery here
  }
}

export default Body;