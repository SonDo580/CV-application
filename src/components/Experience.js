import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <div className="container">
        <h2>Experience</h2>
        <div className="field">
          <label>Company Name</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Position Title</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Main Tasks</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Date from and until</label>
          <input type="text" />
        </div>
      </div>
    );
  }
}

export default Experience;
