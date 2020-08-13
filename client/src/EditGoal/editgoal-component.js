import React from "react";
import axios from "axios";

class EditGoal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      text: props.text,
    };
  }

  onTitleChangedHandler = (e) => {
    this.setState({ title: e.target.value });
  };

  onTextChangedHandler = (e) => {
    this.setState({ text: e.target.value });
  };

  onButtonClicked = () => {
    axios
      .put(`http://localhost:5000/edit-goal/${this.props.id}`, {
        title: this.state.title,
        text: this.state.text,
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err))
      .finally(() => this.props.onGoalEdit());
  };

  render() {
    return (
      <div className="editGoalForm">
        <label htmlFor="editTitle">Title:</label>
        <input
          name="title"
          id="title"
          type="text"
          value={this.state.title}
          onChange={this.onTitleChangedHandler.bind(this)}
        />
        <label htmlFor="text">Text:</label>
        <input
          name="text"
          id="text"
          type="text"
          value={this.state.text}
          onChange={this.onTextChangedHandler.bind(this)}
        />
        <button onClick={() => this.onButtonClicked()}>Create</button>
      </div>
    );
  }
}

export default EditGoal;
