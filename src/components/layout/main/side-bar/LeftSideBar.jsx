import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './LeftSideBar.css';

class LeftSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {id: 1, name: "home", to: "/home", icon: "fa fa-home", isActived: true},
        {id: 2, name: "demo saga", to: "/home/demo-saga", icon: "fa fa-paper-plane "},
        {id: 3, name: "demo loadable", to: "/home/demo-loadable", icon: "fa fa-refresh"},
        {id: 4, name: "logout", to: "/login", icon: "fa fa-sign-out"}
      ],
      isToggle: true
    };
  }
  render() {
    const {menus, isToggle} = this.state;
    const classNameToggleMenu = isToggle ? "LeftSideBar IsToggle" : "LeftSideBar";
    return (
      <div className={classNameToggleMenu}>
        <div className="MenuToggle" onClick={() => this.toggleMenu()}>
          <i className="fa fa-bars" />
        </div>
        <div className="Menus">
        {
          menus.map((item, index) => {
            return (
              <Link key={index} to={item.to} onClick={() => this.activeMenu(item.id)}>
                <div className={`Menu ${item.isActived ? 'actived' : ''}`}>
                  <i className={item.icon} aria-hidden="true" />
                  <span className="MenuName">{item.name}</span>
                </div>
              </Link>
            )
          })
        }
        </div>
      </div>
    );
  }

  componentDidMount () {
    const {pathname} = this.props.location;
    this.setState({
      menus: this.state.menus.map(item => {
        item.isActived = (item.to === pathname);
        return item;
      })
    });
  }

  activeMenu (id) {
    this.setState({
      menus: this.state.menus.map(item => {
        item.isActived = (item.id === id);
        return item;
      })
    })
  }

  toggleMenu () {
    this.setState({
      isToggle: !this.state.isToggle
    });
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
