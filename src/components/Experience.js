import React, { Component } from "react";
import Company from "./Company";

class Experience extends Component {
  render() {
    return (
      <div>
        <Company editMode={this.props.editMode} />
        <button>Add workspace</button>
      </div>
    );
  }
}

export default Experience;
