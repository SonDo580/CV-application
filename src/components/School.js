import React, { Component } from "react";

class School extends Component {
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
      </div>
    );
  }
}

export default School;
