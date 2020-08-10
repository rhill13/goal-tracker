import React from "react";
import "./goal-component.css";
import axios from "axios";

const Goal = (props) => {
  const deleteGoalClickHandler = () => {
    axios
      .delete(`http://localhost:5000/delete-goal/${props.id}`)
      .then(() => {
        console.log(`Deleted: ${props.id}`);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        props.onGoalDelete();
      });
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
