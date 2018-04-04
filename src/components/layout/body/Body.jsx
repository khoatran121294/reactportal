import React, { Component } from 'react';
import { connect } from "react-redux";
import './Body.css';
// import jQuery from 'jquery';

class Body extends Component {
  render() {
    const { message } = this.props.demo;
    return (
      <div className="Body">
        <span>{message}</span>
      </div>
    );
  }

  componentDidMount () {
    // Test jQuery here
  }
}

const mapStateToProps = state => ({
  demo: state.demo
});

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);