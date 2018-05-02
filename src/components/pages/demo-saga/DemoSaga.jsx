import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DEMO_REQUESTING } from "../../../actions";
import './DemoSaga.css';

class DemoSaga extends Component {
  render() {
    const { message, data } = this.props.demo;
    return (
      <div className="DemoSaga">
        <h1>Demo <a href="https://redux-saga.js.org/" target="_blank">Redux-Saga</a></h1>
        <h3 className="Introduction">Redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data 
          fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, 
          simple to test, and better at handling failures.</h3>
        <span>{message}</span>
        <button className="btn btn-default" onClick={() => this.props.demoSaga()}>Dispatch Action</button>
      </div>
    );
  }
  componentDidUpdate () {
    const { data } = this.props.demo;
    // eslint-disable-next-line
    console.log(data);
  }
}

const mapStateToProps = state => ({
  demo: state.demo
});
const mapDispatchToProps = dispatch => {
  return {
    demoSaga: () => {
      dispatch({type: DEMO_REQUESTING})
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoSaga);
