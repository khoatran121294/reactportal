import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Body from './body/Body';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
