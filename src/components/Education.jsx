

export default function Education({data,onChange}) {

  function handleChange(e) {
    onChange({
        ...data,
        [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="educationInfo container">
        <form onSubmit={handleSubmit} className="education-form">
          <label htmlFor="qualification">
            Qualification:{" "}
            <input
              type="text"
              name="qualification"
              id="qualification"
              value={data.qualification}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="schoolName">
            School Name:{" "}
            <input
              type="text"
              name="schoolName"
              id="schoolName"
              value={data.schoolName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="field">
            Field:{" "}
            <input
              type="text"
              name="fieldOfStudy"
              id="field"
              value={data.fieldOfStudy}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="location">
            Location:{" "}
            <input
              type="text"
              name="location"
              id="location"
              value={data.location}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="endDate">
            End date:{" "}
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={data.endDate}
              onChange={handleChange}
            />
          </label>
        </form>
    </div>
  );
}
