import React, { Component } from "react";

class Company extends Component {
  render() {
    return (
      <div>
        <div className="company">
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
      </div>
    );
  }
}

export default Company;
