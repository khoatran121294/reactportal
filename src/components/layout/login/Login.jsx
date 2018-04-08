import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
