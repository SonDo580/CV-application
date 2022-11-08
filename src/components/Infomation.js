import React, { Component } from "react";

class Information extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      phone: "",
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

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h2>Information</h2>

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

export default Information;
