import React, { Component } from "react";
import Information from "./components/Information";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      editMode: true,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  };

  render() {
    return (
      <form className="app" onSubmit={this.handleSubmit}>
        <h1>My CV</h1>
        <hr />
        <Information editMode={this.state.editMode} />
        <hr />
        <Education editMode={this.state.editMode} />
        <hr />
        <Experience editMode={this.state.editMode} />
        <hr />
        <p className="submitButtonContainer">
          <button>{this.state.editMode ? "Submit" : "Edit"}</button>
        </p>
      </form>
    );
  }
}

export default App;
