import React, { useState } from "react";
import Company from "./Company";

const Experience = (props) => {
  const [companies, setCompanies] = useState([""]);

  const addCompany = () => {
    setCompanies((prevCompanies) => prevCompanies.concat(""));
  };

  return (
    <div className="container">
      <h2>Experience</h2>

      {companies.map((company, index) => {
        return <Company editMode={props.editMode} key={index} />;
      })}

      {props.editMode ? (
        <p className="buttonContainer">
          <button type="button" onClick={addCompany}>
            Add Company
          </button>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Experience;
