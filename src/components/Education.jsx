import { useState } from "react";

export default function Education() {
  const [formData, setFormData] = useState({
    qualification: "",
    schoolName: "",
    fieldOfStudy: "",
    location: "",
    endDate: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing && (
        <form>
          <label htmlFor="qualification">
            Qualification:{" "}
            <input
              type="text"
              name="qualification"
              id="qualification"
              value={formData.qualification}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="schoolName">
            School Name:{" "}
            <input
              type="text"
              name="schoolName"
              id="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="field">
            Field:{" "}
            <input
              type="text"
              name="fieldOfStudy"
              id="field"
              value={formData.fieldOfStudy}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="location">
            Location:{" "}
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="endDate">
            End date:{" "}
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
          </label>
          <button type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </form>
      )}
      {!isEditing && (
        <>
          <h2>Education Qualification</h2>
          <ul>
            <li>
              <h4>
                <span>
                  <strong>{formData.qualification}</strong>
                </span>
              </h4>
              <br />
              <ol>
                <li>
                  <span>School Name: </span>
                  {formData.schoolName}
                </li>
                <li>
                  <span>Field of Study: </span>
                  {formData.fieldOfStudy}
                </li>
                <li>
                  <span>Location: </span>
                  {formData.location}
                </li>
                <li>
                  <span>End Date: </span>
                  {formData.endDate}
                </li>
              </ol>
            </li>
          </ul>
          <button onClick={()=>setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}
