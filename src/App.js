import { useState } from "react";
import Information from "./components/Information";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

export default function App() {
  const [editMode, setEditMode] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEditMode((prevEditMode) => !prevEditMode);
  };

  return (
    <form className="app" onSubmit={handleSubmit}>
      <h1>My CV</h1>
      <hr />
      <Information editMode={editMode} />
      <hr />
      <Education editMode={editMode} />
      <hr />
      <Experience editMode={editMode} />
      <hr />
      <p className="submitButtonContainer">
        <button>{editMode ? "Submit" : "Edit"}</button>
      </p>
    </form>
  );
}
