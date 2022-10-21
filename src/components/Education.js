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
      <div>
        <div className="schools">
          {this.state.schools.map(() => {
            return <School editMode={this.props.editMode} />;
          })}
        </div>
        <button>Add school</button>
      </div>
    );
  }
}

export default Education;
