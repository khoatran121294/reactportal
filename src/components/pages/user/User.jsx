import React, { Component } from 'react';
import { connect } from 'react-redux';
import './User.css';

class User extends Component {
  render() {
    return (
      <div className="Home">
        <h1>User Page</h1>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
