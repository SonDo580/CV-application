import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      school: "",
      title: "",
      date: "",
      editMode: true,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      editMode: false,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
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
          {this.state.editMode ? (
            <input
              type="text"
              name="school"
              value={this.state.school}
              onChange={this.handleChange}
              required
            />
          ) : (
            <p>{this.state.school}</p>
          )}
        </div>

        <div className="field">
          <label>Title of Study</label>
          {this.state.editMode ? (
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          ) : (
            <p>{this.state.title}</p>
          )}
        </div>

        <div className="field">
          <label>Date of study</label>
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
            <button onClick={this.handleSubmit}>Submit</button>
          ) : (
            <button onClick={this.editSection}>Edit</button>
          )}
        </p>
      </form>
    );
  }
}

export default Education;
