import React from "react";
import axios from "axios";

import "./newgoal-component.css";

class NewGoal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
    };
  }

  onTitleChangeHandler = (e) => {
    this.setState({ title: e.target.value });
  };

  onTextChangeHandler = (e) => {
    this.setState({ text: e.target.value });
  };

  postGoal = () => {
    axios
      .post("http://localhost:5000/new-goal", {
        title: this.state.title,
        text: this.state.text,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.props.onNewGoalSubmit();
      });
  };

  render() {
    return (
      <div>
        <label htmlFor="title">New Goal Title:</label>
        <input
          name="title"
          id="title"
          type="text"
          onChange={this.onTitleChangeHandler.bind(this)}
        />
        <label htmlFor="text">Text:</label>
        <input
          name="text"
          id="text"
          type="text"
          onChange={this.onTextChangeHandler.bind(this)}
        />
        <button onClick={this.postGoal.bind(this)}>Create</button>
      </div>
    );
  }
}

export default NewGoal;
