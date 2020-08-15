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
      editGoalMode: false,
      editGoalId: "",
      editGoalTitle: "",
      editGoalText: "",
      toggleActive: false,
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
    this.setState(
      {
        editGoalId: id,
        editGoalTitle: title,
        editGoalText: text,
        editGoalShowing: !showing,
        editGoalMode: false,
      },
      () => this.componentDidMount()
    );
  };

  onNewGoalSubmit = () => {
    this.setState({ newGoalShowing: false, editGoalMode: false }, () => {
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

  editModeHandler = () => {
    const mode = this.state.editGoalMode;
    const toggle = this.state.toggleActive;
    this.setState({ editGoalMode: !mode }, () => this.componentDidMount());
  };

  render() {
    if (this.state.newGoalShowing) {
      return (
        <div>
          <Navbar
            newGoalClicked={() => this.newGoalClickedHandler()}
            editActive={false}
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
            editModeClickHandler={() => this.editModeHandler()}
            editActive={false}
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
          editModeClickHandler={() => this.editModeHandler()}
          editActive={false}
          buttonText="New Goal"
        />
        <div>
          {this.state.goals.map((g) => (
            <Goal
              title={g.title}
              text={g.text}
              id={g._id}
              editMode={this.state.editGoalMode}
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
