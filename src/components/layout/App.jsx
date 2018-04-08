import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainApp from './main/MainApp';
import Login from './login/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainApp} />
          <Route path="/home" component={MainApp} />
          <Route path="/login" component={Login} />
          <Route render={() => <div className="NotFoundMessage">404 Page Not Found</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
