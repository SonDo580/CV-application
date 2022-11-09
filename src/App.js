import React, { Component } from "react";
import Information from "./components/Infomation";
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

  render() {
    return (
      <div className="app">
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
      </div>
    );
  }
}

export default App;
