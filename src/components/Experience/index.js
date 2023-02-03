import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Company from "./Company";

class Experience extends Component {
  constructor() {
    super();
    this.state = {
      companies: [{ id: uuidv4() }],
    };
  }

  addCompany = () => {
    this.setState((prevState) => ({
      companies: prevState.companies.concat({ id: uuidv4() }),
    }));
  };

  removeCompany = (id) => {
    this.setState((prevState) => {
      const indexRemove = prevState.companies.findIndex(
        (company) => company.id === id
      );

      return {
        companies: [
          ...prevState.companies.slice(0, indexRemove),
          ...prevState.companies.slice(indexRemove + 1),
        ],
      };
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Experience</h2>

        {this.state.companies.map((company) => {
          return (
            <Company
              key={company.id}
              id={company.id}
              editMode={this.props.editMode}
              removeCompany={this.removeCompany}
              removeAllowed={this.state.companies.length !== 1}
            />
          );
        })}

        {this.props.editMode ? (
          <p className="buttonContainer">
            <button type="button" onClick={this.addCompany}>
              Add Company
            </button>
          </p>
        ) : null}
      </div>
    );
  }
}

export default Experience;
