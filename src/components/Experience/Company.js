import React, { Component } from "react";

class Company extends Component {
  constructor() {
    super();
    this.state = {
      company: "",
      position: "",
      tasks: "",
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
      <div>
        {this.props.editMode ? (
          <div className="input-group company">
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

            {this.props.removeAllowed ? (
              <p className="buttonContainer">
                <button
                  type="button"
                  className="danger"
                  onClick={() => this.props.removeCompany(this.props.id)}
                >
                  Remove this company
                </button>
              </p>
            ) : null}
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
      </div>
    );
  }
}

export default Company;
