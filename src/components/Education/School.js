import { useState } from "react";

export default function School(props) {
  const { editMode, removeSchool, removeAllowed, id } = props;

  const [state, setState] = useState({
    school: "",
    title: "",
    date: "",
  });

  const { school, title, date } = state;

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      {editMode ? (
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

          {removeAllowed ? (
            <p className="buttonContainer">
              <button
                type="button"
                className="danger"
                onClick={() => removeSchool(id)}
              >
                Remove this school
              </button>
            </p>
          ) : null}
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
}
