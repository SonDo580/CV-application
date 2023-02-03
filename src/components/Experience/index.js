import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Company from "./Company";

export default function Experience(props) {
  const { editMode } = props;

  const [companies, setCompanies] = useState([{ id: uuidv4() }]);

  const addCompany = () => {
    setCompanies((prevCompanies) => prevCompanies.concat({ id: uuidv4() }));
  };

  const removeCompany = (id) => {
    setCompanies((prevCompanies) => {
      const indexRemove = prevCompanies.findIndex(
        (company) => company.id === id
      );

      return [
        ...prevCompanies.slice(0, indexRemove),
        ...prevCompanies.slice(indexRemove + 1),
      ];
    });
  };

  return (
    <div className="container">
      <h2>Experience</h2>

      {companies.map((company) => {
        return (
          <Company
            key={company.id}
            id={company.id}
            editMode={editMode}
            removeCompany={removeCompany}
            removeAllowed={companies.length !== 1}
          />
        );
      })}

      {editMode ? (
        <p className="buttonContainer">
          <button type="button" onClick={addCompany}>
            Add Company
          </button>
        </p>
      ) : null}
    </div>
  );
}
