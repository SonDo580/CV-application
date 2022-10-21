import React, { Component } from "react";
import Company from "./Company";

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      companies: [""],
    };
  }

  addCompany = () => {
    this.setState((state) => ({
      companies: state.companies.concat(""),
    }));
  };

  render() {
    return (
      <div className="container">
        <h2>Experience</h2>
        <div className="companies">
          {this.state.companies.map(() => {
            return <Company editMode={this.props.editMode} />;
          })}
        </div>
        <p className="buttonContainer">
          <button onClick={this.addCompany}>Add Company</button>
        </p>
      </div>
    );
  }
}

export default Experience;
