import React, { Component } from "react";

import Navbar from "./Navbar/navbar-component";
import Goal from "./Goal/goal-component";
import NewGoal from "./NewGoal/newgoal-component";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [],
      newGoalShowing: false,
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

  onNewGoalSubmit = () => {
    this.setState({ newGoalShowing: false }, () => {
      this.componentDidMount();
    });
  };

  onGoalDelete = () => {
    this.componentDidMount();
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
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
