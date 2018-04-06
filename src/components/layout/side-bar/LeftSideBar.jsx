import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './LeftSideBar.css';

class LeftSideBar extends Component {
  render() {
    return (
      <div className="LeftSideBar">
        <div className="MenuToggle">
          <i className="fa fa-bars" />
        </div>
        <div className="Menus">
          <Link to="/">
            <div className="Menu">
              <i className="fa fa-home actived" aria-hidden="true" />
            </div>
          </Link>
          <Link to="/users">
            <div className="Menu">
              <i className="fa fa-users" aria-hidden="true" />
            </div>
          </Link>
          <Link to="/menu-3">
            <div className="Menu">
              <i className="fa fa-calendar-minus-o" aria-hidden="true" />
            </div>
          </Link>
          <Link to="/menu-4">
            <div className="Menu">
              <i className="fa fa-search-minus" aria-hidden="true" />
            </div>
          </Link>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBar);
