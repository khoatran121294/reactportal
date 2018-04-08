import React, { Component } from 'react';
import './MainApp.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import LeftSideBar from './side-bar/LeftSideBar';
import Body from './body/Body';

export default class MainApp extends Component {

  render() {
    return (
      <div className="MainApp">
        <LeftSideBar {...this.props} />
        <div className="MainAppWrapper">
          <Header />
          <Body {...this.props} />
          <Footer />
        </div>
      </div>
    );
  }
}
