import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import School from "./School";

export default function Education(props) {
  const { editMode } = props;

  const [schools, setSchools] = useState([{ id: uuidv4() }]);

  const addSchool = () => {
    setSchools((prevSchools) => prevSchools.concat({ id: uuidv4() }));
  };

  const removeSchool = (id) => {
    setSchools((prevSchools) => {
      const indexRemove = prevSchools.findIndex((school) => school.id === id);

      return [
        ...prevSchools.slice(0, indexRemove),
        ...prevSchools.slice(indexRemove + 1),
      ];
    });
  };

  return (
    <div className="container">
      <h2>Education</h2>

      {schools.map((school) => {
        return (
          <School
            key={school.id}
            id={school.id}
            editMode={editMode}
            removeSchool={removeSchool}
            removeAllowed={schools.length !== 1}
          />
        );
      })}

      {editMode ? (
        <p className="buttonContainer">
          <button type="button" onClick={addSchool}>
            Add School
          </button>
        </p>
      ) : null}
    </div>
  );
}
