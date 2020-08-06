import React, { Component } from "react";

import Navbar from "./Navbar/navbar-component";
import Goal from "./Goal/goal-component";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goals: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/goals")
      .then((response) => response.json())
      .then((data) => this.setState({ goals: data.goals }));
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          {this.state.goals.map((g) => (
            <Goal title={g.title} text={g.text} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
