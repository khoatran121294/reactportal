import React, { Component } from 'react';
import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import LeftSideBar from './side-bar/LeftSideBar';
import Body from './body/Body';

class App extends Component {

  render() {
    return (
      <div className="App">
        <LeftSideBar />
        <div className="AppWrapper">
          <Header />
          <Body />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
