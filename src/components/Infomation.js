import React, { useState } from "react";

const Information = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <h2>Information</h2>

      {props.editMode ? (
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
              pattern="0[0-9]{9}"
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
};

export default Information;
