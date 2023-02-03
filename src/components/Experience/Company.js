import { useState } from "react";

export default function Company(props) {
  const { editMode, id, removeAllowed, removeCompany } = props;

  const [state, setState] = useState({
    company: "",
    position: "",
    tasks: "",
    date: "",
  });

  const { company, position, tasks, date } = state;

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      {editMode ? (
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

          {removeAllowed ? (
            <p className="buttonContainer">
              <button
                type="button"
                className="danger"
                onClick={() => removeCompany(id)}
              >
                Remove this company
              </button>
            </p>
          ) : null}
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
}
