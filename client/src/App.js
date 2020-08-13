import React, { Component } from "react";

import Navbar from "./Navbar/navbar-component";
import Goal from "./Goal/goal-component";
import NewGoal from "./NewGoal/newgoal-component";
import EditGoal from "./EditGoal/editgoal-component";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [],
      newGoalShowing: false,
      editGoalShowing: false,
      editGoalId: "",
      editGoalTitle: "",
      editGoalText: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/goals")
      .then((response) => response.json())
      .then((data) => this.setState({ goals: data.goals }));
  }

  newGoalClickedHandler = () => {
    const showing = this.state.newGoalShowing;
    this.setState({ newGoalShowing: !showing });
  };

  editGoalClickedHandler = (id, title, text) => {
    const showing = this.state.editGoalShowing;
    this.setState({
      editGoalId: id,
      editGoalTitle: title,
      editGoalText: text,
      editGoalShowing: !showing,
    });
  };

  onNewGoalSubmit = () => {
    this.setState({ newGoalShowing: false }, () => {
      this.componentDidMount();
    });
  };

  onGoalDelete = () => {
    this.componentDidMount();
  };

  onGoalEdit = () => {
    this.setState(
      {
        editGoalShowing: false,
        editGoalId: "",
        editGoalTitle: "",
        editGoalText: "",
      },
      () => {
        this.componentDidMount();
      }
    );
  };

  render() {
    if (this.state.newGoalShowing) {
      return (
        <div>
          <Navbar
            newGoalClicked={() => this.newGoalClickedHandler()}
            buttonText="Exit"
          />
          <NewGoal onNewGoalSubmit={() => this.onNewGoalSubmit()} />
        </div>
      );
    } else if (this.state.editGoalShowing) {
      return (
        <div>
          <Navbar
            newGoalClicked={() => this.editGoalClickedHandler()}
            buttonText="Exit"
          />
          <EditGoal
            id={this.state.editGoalId}
            title={this.state.editGoalTitle}
            text={this.state.editGoalText}
            onGoalEdit={() => this.onGoalEdit()}
          />
        </div>
      );
    }

    return (
      <div>
        <Navbar
          newGoalClicked={() => this.newGoalClickedHandler()}
          buttonText="New Goal"
        />
        <div>
          {this.state.goals.map((g) => (
            <Goal
              title={g.title}
              text={g.text}
              id={g._id}
              onGoalDelete={() => this.onGoalDelete()}
              editGoalClicked={() =>
                this.editGoalClickedHandler(g._id, g.title, g.text)
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
