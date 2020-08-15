import React from "react";
import "./goal-component.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

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

  const editGoalClickHandler = () => {
    props.editGoalClicked();
  };

  if (!props.editMode) {
    return (
      <div className="goal">
        <div className="title-area">
          <h3 className="goal__title">{props.title}</h3>
        </div>
        <p className="goal__text">{props.text}</p>
      </div>
    );
  }
  return (
    <div className="goal">
      <div className="title-area">
        <h3 className="goal__title">{props.title}</h3>
        <div className="Edit">
          <h5 onClick={() => editGoalClickHandler()}>
            <FontAwesomeIcon icon={faEdit} />
          </h5>
          <h5 onClick={() => deleteGoalClickHandler()}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </h5>
        </div>
      </div>
      <p className="goal__text">{props.text}</p>
    </div>
  );
};

export default Goal;
