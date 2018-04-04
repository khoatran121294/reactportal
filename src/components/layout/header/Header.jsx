import React, { Component } from "react";
import { connect } from "react-redux";
import "./Header.css";
import AppConfig from "../../../config";

class Header extends Component {
  render() {
    return (
      <div className="Header">
          {AppConfig.appName}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);