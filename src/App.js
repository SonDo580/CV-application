import React, { Component } from "react";
import Information from "./components/Infomation";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  render() {
    return (
      <div>
        <Information />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default App;
