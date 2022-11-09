import React, { Component } from "react";

class SchoolInput extends Component {
  constructor() {
    super();
    this.state = {
      school: "",
      title: "",
      date: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="input-group school">
        <div className="field">
          <label>School Name</label>
          <input
            type="text"
            name="school"
            value={this.state.school}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Title of Study</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Date of study</label>
          <input
            type="text"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
            required
          />
        </div>
      </div>
    );
  }
}

export default SchoolInput;
