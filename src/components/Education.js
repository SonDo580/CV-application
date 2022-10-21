import React, { Component } from "react";
import School from "./School";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      schools: [""],
    };
  }

  addSchool = () => {
    this.setState((state) => ({
      schools: state.schools.concat(""),
    }));
  };

  render() {
    return (
      <div className="container">
        <h2>Education</h2>
        <div className="schools">
          {this.state.schools.map(() => {
            return <School editMode={this.props.editMode} />;
          })}
        </div>
        <p className="buttonContainer">
          <button onClick={this.addSchool}>Add school</button>
        </p>
      </div>
    );
  }
}

export default Education;
