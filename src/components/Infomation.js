import React, { Component } from "react";

class Information extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      phone: "",
      editMode: true,
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
        <h2>Information</h2>

        {this.state.editMode ? (
          <div className="input-group">
            <div className="field">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={this.state.fullName}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="field">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                pattern="0[0-9]{9}"
                value={this.state.phone}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
        ) : (
          <table>
            <tbody>
              <tr>
                <th scope="row">Full Name</th>
                <td>{this.state.fullName}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <th scope="row">Phone</th>
                <td>{this.state.phone}</td>
              </tr>
            </tbody>
          </table>
        )}

        <p className="submitButtonContainer">
          <button>{this.state.editMode ? "Submit" : "Edit"}</button>
        </p>
      </div>
    );
  }
}

export default Information;
