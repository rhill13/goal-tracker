import React from "react";
import "./goal-component.css";

const Goal = (props) => {
  const deleteGoalClickHandler = () => {
    console.log(`Delete button clicked: ${props.title}`);
  };

  return (
    <div className="goal">
      <div className="title-area">
        <h3 className="goal__title">{props.title}</h3>
        <div className="Edit">
          <h5 onClick={() => deleteGoalClickHandler()}>Delete</h5>
        </div>
      </div>
      <p className="goal__text">{props.text}</p>
    </div>
  );
};

export default Goal;
