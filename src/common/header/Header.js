import React, { Component } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import Icon from "../../assets/profile_icon.png";
import {Menu, MenuItem} from '@material-ui/core';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton'


export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuIsOpen: false,
      isLoggedIn: true,
    };
  }

  //on entering the value in search field
  onSearchChangeHandler = (event) => {
    this.props.onSearchTextChange(event.target.value);
  }

  //on clicking on Logout menu option
  onClickLogout = (event) => {
    //Access token to be cleared
    sessionStorage.removeItem("access-token");
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    return (
      <div>
        <div className="app-header">
          <span href='/home' className="app-logo">Image Viewer</span>
          <span className="header-searchbox">
            <SearchIcon id="search-icon"></SearchIcon>
            <Input placeholder="Search…" onChange={this.onSearchChangeHandler} />
          </span>
        </div>
        <div>
          <IconButton>
            <img src={Icon} className="profile-icon" alt="user" />
          </IconButton>
          <Menu>
            {window.location.pathname === "/home" && (
              <MenuItem>My Account</MenuItem>
            )}
            {window.location.pathname === "/home" && <hr />}
            <MenuItem className="menu-items" onClick={this.onClickLogout} >Logout</MenuItem>
          </Menu>
        </div>
      </div>
    )
  }
}