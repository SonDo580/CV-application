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
    this.setState((prevState) => ({
      companies: prevState.companies.concat(""),
    }));
  };

  render() {
    return (
      <div className="container">
        <h2>Experience</h2>

        {this.state.companies.map((company, index) => {
          return <Company editMode={this.props.editMode} key={index} />;
        })}

        {this.props.editMode ? (
          <p className="buttonContainer">
            <button type="button" onClick={this.addCompany}>
              Add Company
            </button>
          </p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Experience;
