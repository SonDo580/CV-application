import React, { Component } from "react";

class Information extends Component {
  render() {
    return (
      <div className="container">
        <h2>Information</h2>

        <div className="field">
          <label htmlFor="fullName">Full Name</label>
          {this.props.editMode ? (
            <input type="text" name="fullName" id="fullName" />
          ) : (
            <span>x</span>
          )}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input type="number" name="phone" id="phone" />
        </div>

        <p className="submitButtonContainer">
          {this.props.editMode ? (
            <button onClick={this.submitCV}>Submit</button>
          ) : (
            <button>Edit</button>
          )}
        </p>
      </div>
    );
  }
}

export default Information;
