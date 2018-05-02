import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../../pages/home/Home";
import DemoSaga from "../../../pages/demo-saga/DemoSaga";
import DemoLoadable from "../../../pages/demo-loadable/DemoLoadable";
import DemoGoogleMap from "../../../pages/demo-google-map/DemoGoogleMap";
import DemoUploadFiles from "../../../pages/demo-upload-files/DemoUploadFiles";

import "./Body.css";

class Body extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="Body">
        <Switch>
          <Route exact path={match.url} component={Home} />
          <Route path={match.url + "/demo-saga"} component={DemoSaga} />
          <Route path={match.url + "/demo-loadable"} component={DemoLoadable} />
          <Route path={match.url + "/demo-google-maps"} component={DemoGoogleMap} />
          <Route path={match.url + "/demo-upload-files"} component={DemoUploadFiles} />
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