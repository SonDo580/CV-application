import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import School from "./School";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      schools: [""],
    };
  }

  addSchool = () => {
    this.setState((prevState) => ({
      schools: prevState.schools.concat(""),
    }));
  };

  removeSchool = (id) => {
    console.log(id);

    this.setState((prevState) => ({
      // schools: prevState.schools.concat(""),
    }));
  };

  render() {
    return (
      <div className="container">
        <h2>Education</h2>

        {this.state.schools.map(() => {
          return (
            <School
              key={uuidv4()}
              editMode={this.props.editMode}
              deleteSchool={this.removeSchool}
            />
          );
        })}

        {this.props.editMode ? (
          <p className="buttonContainer">
            <button type="button" onClick={this.addSchool}>
              Add School
            </button>
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Education;
