import React, { Component } from "react";
import School from "./School";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      school: "",
      title: "",
      date: "",
    };
  }

  render() {
    return (
      <div className="container">
        <h2>Education</h2>
        <School editMode={this.props.editMode} />

        {this.props.editMode ? (
          <p className="buttonContainer">
            <button>Add School</button>
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Education;
