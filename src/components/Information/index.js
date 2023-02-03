import { useState } from "react";

export default function Information(props) {
  const { editMode } = props;

  const [state, setState] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const { fullName, email, phone } = state;

  const handleChange = (event) => {
    setState({
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <h2>Information</h2>

      {editMode ? (
        <div className="input-group">
          <div className="field">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="field">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      ) : (
        <table>
          <tbody>
            <tr>
              <th scope="row">Full Name</th>
              <td>{fullName}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th scope="row">Phone</th>
              <td>{phone}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
