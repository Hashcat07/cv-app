

export default function Experience({data,onChange}) {

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
    <div className="experienceInfo container" >
        <form onSubmit={handleSubmit} className="experience-form">
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              value={data.companyName}
              onChange={handleChange}
            />
          </label>

          <label>
            Position Title:
            <input
              type="text"
              name="positionTitle"
              value={data.positionTitle}
              onChange={handleChange}
            />
          </label>

          <label>
            Main Responsibilities:
            <input
              type="text"
              name="responsibilities"
              value={data.responsibilities}
              onChange={handleChange}
            />
          </label>

          <label>
            Date From:
            <input
              type="date"
              name="dateFrom"
              value={data.dateFrom}
              onChange={handleChange}
            />
          </label>

          <label>
            Date Until:
            <input
              type="date"
              name="dateUntil"
              value={data.dateUntil}
              onChange={handleChange}
            />
          </label>
        </form>
    </div>
  );
}