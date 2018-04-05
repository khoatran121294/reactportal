import React, { Component } from 'react';
import { connect } from "react-redux";
import './Body.css';
import { DEMO_REQUESTED } from "../../../actions";
// import jQuery from 'jquery';

class Body extends Component {
  render() {
    const { message } = this.props.demo;
    return (
      <div className="Body">
        <span>{message}</span>
        <button className="btn btn-default" onClick={() => this.props.demoSaga()}>Dispatch Action</button>
      </div>
    );
  }

  componentDidMount () {
    // Test jQuery here
  }
  componentDidUpdate () {
    const { post } = this.props.demo;
    console.log(post);
  }
}

const mapStateToProps = state => ({
  demo: state.demo
});

const mapDispatchToProps = dispatch => {
  return {
    demoSaga: () => {
      dispatch({type: DEMO_REQUESTED})
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);