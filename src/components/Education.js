import React, { Component } from "react";

class Education extends Component {
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
      <div className="container">
        <h2>Education</h2>

        {this.props.editMode ? (
          <div className="input-group company">
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
        ) : (
          <table>
            <tbody>
              <tr>
                <th scope="row">School Name</th>
                <td>{this.state.school}</td>
              </tr>
              <tr>
                <th scope="row">Title of Study</th>
                <td>{this.state.title}</td>
              </tr>
              <tr>
                <th scope="row">Date of Study</th>
                <td>{this.state.date}</td>
              </tr>
            </tbody>
          </table>
        )}

        {this.props.editMode ? (
          <p className="buttonContainer">
            <button>Add School</button>
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Education;
