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
      <div>
        <div className="companies">
          {this.state.companies.map(() => {
            return <Company editMode={this.props.editMode} />;
          })}
        </div>
        <button>Add Company</button>
      </div>
    );
  }
}

export default Experience;
