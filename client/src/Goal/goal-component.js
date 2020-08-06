import React from "react";
import "./goal-component.css";

const Goal = (props) => {
  return (
    <div className="goal">
      <h3 className="goal__title">{props.title}</h3>
      <p className="goal__text">{props.text}</p>
    </div>
  );
};

export default Goal;
