import React, { Component } from "react";
import Information from "./components/Infomation";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>My CV</h1>
        <hr />
        <Information />
        <hr />
        <Education />
        <hr />
        <Experience />
      </div>
    );
  }
}

export default App;
