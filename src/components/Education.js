import React, { Component } from "react";
import School from "./School";

class Education extends Component {
  render() {
    return (
      <div>
        <School editMode={this.props.editMode} />
        <button>Add school</button>
      </div>
    );
  }
}

export default Education;
