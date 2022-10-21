import React, { Component } from "react";
import School from "./School";

class Education extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div>
        <div className="schools">
          <School editMode={this.props.editMode} />
        </div>
        <button>Add school</button>
      </div>
    );
  }
}

export default Education;
