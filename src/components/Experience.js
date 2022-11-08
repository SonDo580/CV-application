import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <form className="container">
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

        <p className="submitButtonContainer">
          {this.props.editMode ? (
            <button onClick={this.submitSection}>Submit</button>
          ) : (
            <button>Edit</button>
          )}
        </p>
      </form>
    );
  }
}

export default Experience;
