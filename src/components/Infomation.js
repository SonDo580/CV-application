import React, { Component } from "react";

class Information extends Component {
  render() {
    return (
      <div className="container">
        <div className="field">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" name="fullName" id="fullName" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input type="number" name="phone" id="phone" />
        </div>
      </div>
    );
  }
}

export default Information;
