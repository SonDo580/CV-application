import React, { Component } from "react";
import Information from "./components/Infomation";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     editMode: true,
  //   };
  // }

  render() {
    return (
      <div>
        <h1>My CV</h1>
        <Information />
        <Education />
        <Experience />
        <p>
          <button>Submit</button>
        </p>
      </div>
    );
  }
}

export default App;
