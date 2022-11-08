import React, { Component } from "react";

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phone: "",
      editMode: this.props.editMode,
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

  submitSection = () => {};

  editSection = () => {};

  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <h2>Information</h2>

        <div className="field">
          <label>Full Name</label>
          {this.state.editMode ? (
            <input
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleChange}
              required
            />
          ) : (
            <p>{this.state.fullName}</p>
          )}
        </div>

        <div className="field">
          <label>Email</label>
          {this.state.editMode ? (
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          ) : (
            <p>{this.state.email}</p>
          )}
        </div>

        <div className="field">
          <label>Phone</label>
          {this.state.editMode ? (
            <input
              type="tel"
              name="phone"
              pattern="0[0-9]{9}"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          ) : (
            <p>{this.state.phone}</p>
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

export default Information;
