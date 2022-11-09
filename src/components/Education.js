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
    this.setState((prevState) => ({
      schools: prevState.schools.concat(""),
    }));
  };

  render() {
    return (
      <div className="container">
        <h2>Education</h2>

        {this.state.schools.map((school, index) => {
          return <School editMode={this.props.editMode} key={index} />;
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
