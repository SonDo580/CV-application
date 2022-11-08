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

    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
          <button>{this.state.editMode ? "Submit" : "Edit"}</button>
        </p>
      </form>
    );
  }
}

export default Experience;
