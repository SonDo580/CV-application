import React, { Component } from "react";

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      company: "",
      position: "",
      tasks: "",
      date: "",
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
        <h2>Experience</h2>

        <div className="field">
          <label>Company Name</label>
          {this.state.editMode ? (
            <input
              type="text"
              name="company"
              value={this.state.company}
              onChange={this.handleChange}
              required
            />
          ) : (
            <p>{this.state.company}</p>
          )}
        </div>

        <div className="field">
          <label>Position Title</label>
          {this.state.editMode ? (
            <input
              type="text"
              name="position"
              value={this.state.position}
              onChange={this.handleChange}
              required
            />
          ) : (
            <p>{this.state.position}</p>
          )}
        </div>

        <div className="field">
          <label>Main Tasks</label>
          {this.state.editMode ? (
            <input
              type="text"
              name="tasks"
              value={this.state.tasks}
              onChange={this.handleChange}
              required
            />
          ) : (
            <p>{this.state.tasks}</p>
          )}
        </div>

        <div className="field">
          <label>Date from and until</label>
          {this.state.editMode ? (
            <input
              type="text"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
              required
            />
          ) : (
            <p>{this.state.date}</p>
          )}
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

export default Experience;
