import React, { useState } from "react";
import School from "./School";

const Education = (props) => {
  const [schools, setSchools] = useState([""]);

  const addSchool = () => {
    setSchools((prevSchools) => prevSchools.concat(""));
  };

  return (
    <div className="container">
      <h2>Education</h2>

      {schools.map((school, index) => {
        return <School editMode={props.editMode} key={index} />;
      })}

      {props.editMode ? (
        <p className="buttonContainer">
          <button type="button" onClick={addSchool}>
            Add School
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default Education;
