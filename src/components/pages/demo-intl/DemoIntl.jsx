import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DemoIntl.css';

class DemoIntl extends Component {
  render() {
    return (
      <div className="DemoIntl">
        <h1>Demo <a href="https://github.com/yahoo/react-intl" target="_blank" rel="noopener noreferrer">React-Intl</a></h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(DemoIntl);
