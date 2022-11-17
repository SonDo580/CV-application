import React, { useState } from "react";

const School = (props) => {
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "school":
        setSchool(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "date":
        setDate(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {props.editMode ? (
        <div className="input-group school">
          <div className="field">
            <label>School Name</label>
            <input
              type="text"
              name="school"
              value={school}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Title of Study</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Date of study</label>
            <input
              type="text"
              name="date"
              value={date}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      ) : (
        <table>
          <tbody>
            <tr>
              <th scope="row">School Name</th>
              <td>{school}</td>
            </tr>
            <tr>
              <th scope="row">Title of Study</th>
              <td>{title}</td>
            </tr>
            <tr>
              <th scope="row">Date of Study</th>
              <td>{date}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default School;
