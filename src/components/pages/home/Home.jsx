import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DEMO_REQUESTING } from "../../../actions";
import './Home.css';

class Home extends Component {
  render() {
    const { message } = this.props.demo;
    return (
      <div className="Home">
        <h1>Demo Saga</h1>
        <span>{message}</span>
        <button className="btn btn-default" onClick={() => this.props.demoSaga()}>Dispatch Action</button>
      </div>
    );
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
      dispatch({type: DEMO_REQUESTING})
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
