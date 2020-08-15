import React, { useState, useEffect } from "react";

import "./navbar-component.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeState: this.props.editActive,
    };
  }

  newGoalClickHandler = () => {
    const isActive = this.state.activeState;
    this.setState({ activeState: !isActive }, () => {
      return this.props.newGoalClicked();
    });
  };

  editModeClickHandler = () => {
    const isActive = this.state.activeState;
    this.setState({ activeState: !isActive }, () => {
      return this.props.editModeClickHandler();
    });
  };

  render() {
    return (
      <div className="navbar-main">
        <ul className="navbar-left">
          <li>
            <h3>Goal Tracker</h3>
          </li>
        </ul>
        <ul className="navbar-right">
          <li
            className={this.state.activeState ? "active" : "navbar__li"}
            onClick={this.editModeClickHandler}
          >
            <p>Edit Mode</p>
          </li>
          <li className="navbar__li" onClick={this.newGoalClickHandler}>
            <p>{this.props.buttonText}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
