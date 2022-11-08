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

        {this.state.editMode ? (
          <div className="container">
            <div className="field">
              <label>Company Name</label>
              <input
                type="text"
                name="company"
                value={this.state.company}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="field">
              <label>Position Title</label>
              <input
                type="text"
                name="position"
                value={this.state.position}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="field">
              <label>Main Tasks</label>
              <input
                type="text"
                name="tasks"
                value={this.state.tasks}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="field">
              <label>Date from and until</label>
              <input
                type="text"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
        ) : (
          <table>
            <tbody>
              <tr>
                <th scope="row">Company Name</th>
                <td>{this.state.company}</td>
              </tr>
              <tr>
                <th scope="row">Position Title</th>
                <td>{this.state.position}</td>
              </tr>
              <tr>
                <th scope="row">Main Tasks</th>
                <td>{this.state.tasks}</td>
              </tr>
              <tr>
                <th scope="row">Date from and until</th>
                <td>{this.state.date}</td>
              </tr>
            </tbody>
          </table>
        )}

        <p className="submitButtonContainer">
          <button>{this.state.editMode ? "Submit" : "Edit"}</button>
        </p>
      </form>
    );
  }
}

export default Experience;
