import React, { useState } from "react";

const Company = (props) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [tasks, setTasks] = useState("");
  const [date, setDate] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "company":
        setCompany(value);
        break;
      case "position":
        setPosition(value);
        break;
      case "tasks":
        setTasks(value);
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
        <div className="input-group company">
          <div className="field">
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Position Title</label>
            <input
              type="text"
              name="position"
              value={position}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Main Tasks</label>
            <input
              type="text"
              name="tasks"
              value={tasks}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Date from and until</label>
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
              <th scope="row">Company Name</th>
              <td>{company}</td>
            </tr>
            <tr>
              <th scope="row">Position Title</th>
              <td>{position}</td>
            </tr>
            <tr>
              <th scope="row">Main Tasks</th>
              <td>{tasks}</td>
            </tr>
            <tr>
              <th scope="row">Date from and until</th>
              <td>{date}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Company;
