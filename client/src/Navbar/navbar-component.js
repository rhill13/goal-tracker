import React from "react";

import "./navbar-component.css";

const Navbar = (props) => {
  const newGoalClickHandler = () => {
    console.log("New Goal Button Clicked");
  };

  return (
    <ul className="navbar">
      <li className="navbar__li">
        <h3>Goal Tracker</h3>
      </li>
      <li className="navbar__li" onClick={newGoalClickHandler}>
        <p>New Goal</p>
      </li>
    </ul>
  );
};

export default Navbar;
