import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      editMode: true,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitSection = () => {
    this.setState({
      editMode: false,
    });
  };

  editSection = () => {
    this.setState({
      editMode: true,
    });
  };

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h2>Education</h2>

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

        <p className="submitButtonContainer">
          {this.state.editMode ? (
            <button onClick={this.submitSection}>Submit</button>
          ) : (
            <button onClick={this.editSection}>Edit</button>
          )}
        </p>
      </form>
    );
  }
}

export default Education;
