import { useState } from "react";

export default function Experience() {
  const [formData, setFormData] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: ""
  });

  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <div className="experienceInfo container" >
      {isEditing && (
        <form onSubmit={handleSubmit} className="experience-form">
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </label>

          <label>
            Position Title:
            <input
              type="text"
              name="positionTitle"
              value={formData.positionTitle}
              onChange={handleChange}
            />
          </label>

          <label>
            Main Responsibilities:
            <input
              type="text"
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
            />
          </label>

          <label>
            Date From:
            <input
              type="date"
              name="dateFrom"
              value={formData.dateFrom}
              onChange={handleChange}
            />
          </label>

          <label>
            Date Until:
            <input
              type="date"
              name="dateUntil"
              value={formData.dateUntil}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      )}

      {!isEditing && (
        <div className="experience-display">
          <h2>Work Experience</h2>
          <ul>
            <li>
              <h4>
                <strong>{formData.positionTitle}</strong>
              </h4>
              <br />
              <ol>
                <li>
                  <span>Company Name: </span>
                  {formData.companyName}
                </li>
                <li>
                  <span>Main Responsibilities: </span>
                  {formData.responsibilities}
                </li>
                <li>
                  <span>From: </span>
                  {formData.dateFrom}
                </li>
                <li>
                  <span>Until: </span>
                  {formData.dateUntil}
                </li>
              </ol>
            </li>
          </ul>

          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}