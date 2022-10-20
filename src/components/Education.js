import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div>
        <div className="school">
          <div className="field">
            <label>School Name</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Title of Study</label>
            <input type="text" />
          </div>
          <div className="field">
            <label>Date of study</label>
            <input type="text" />
          </div>
        </div>

        <button>Add school</button>
      </div>
    );
  }
}

export default Education;
