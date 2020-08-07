import React from "react";

import "./navbar-component.css";

const Navbar = (props) => {
  const newGoalClickHandler = () => {
    return props.newGoalClicked();
  };

  return (
    <ul className="navbar">
      <li className="navbar__li">
        <h3>Goal Tracker</h3>
      </li>
      <li className="navbar__li" onClick={newGoalClickHandler}>
        <p>{props.buttonText}</p>
      </li>
    </ul>
  );
};

export default Navbar;
