import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import School from "./School";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      schools: [{ id: uuidv4() }],
    };
  }

  addSchool = () => {
    this.setState((prevState) => ({
      schools: prevState.schools.concat({ id: uuidv4() }),
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

        {this.state.schools.map((school) => {
          return (
            <School
              key={school.id}
              editMode={this.props.editMode}
              deleteSchool={this.removeSchool}
              id={school.id}
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
