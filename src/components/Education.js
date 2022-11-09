import React, { Component } from "react";
import School from "./School";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      schools: [""],
    };
  }

  render() {
    return (
      <div className="container">
        <h2>Education</h2>

        {this.state.schools.map((school) => {
          return <School editMode={this.props.editMode} />;
        })}

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
