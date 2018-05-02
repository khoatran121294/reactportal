import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NormalComponent.css';

class NormalComponent extends Component {
  render() {
    return (
      <div className="NormalComponent">
        <h1>Demo <a href="https://github.com/jamiebuilds/react-loadable" target="_blank" rel="noopener noreferrer">Loadable - Code Splitting</a></h1>
        <img alt="" src="https://camo.githubusercontent.com/3bf8b53291826593a5808c9de51059960bb4c067/687474703a2f2f7468656a616d65736b796c652e636f6d2f696d672f72656163742d6c6f616461626c652d6865616465722e706e67" />
        <h3>A higher order component for loading components with dynamic imports.</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(NormalComponent);
