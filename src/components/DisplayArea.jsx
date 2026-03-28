export default function DisplayArea({ data }) {
  const { general, education, experience } = data;

  return (
    <div className="displayArea container">

      <div className="generalDisplay">
      <p className="name">{general.name}</p>
      <div className="comms">
      <p><span>Email: </span>{general.email}</p>
      <p><span>Phone: </span>{general.phone}</p>
    </div>
    </div>
      <h2>Education Qualification</h2>
      <ul>
        <li>
          <h4>
            <strong>{education.qualification}</strong>
          </h4>
          <ol>
            <li>
              <span>School Name: </span>
              {education.schoolName}
            </li>
            <li>
              <span>Field of Study: </span>
              {education.fieldOfStudy}
            </li>
            <li>
              <span>Location: </span>
              {education.location}
            </li>
            <li>
              <span>End Date: </span>
              {education.endDate}
            </li>
          </ol>
        </li>
      </ul>

      <h2>Work Experience</h2>
      <ul>
        <li>
          <h4>
            <strong>{experience.positionTitle}</strong>
          </h4>
          <ol>
            <li>
              <span>Company Name: </span>
              {experience.companyName}
            </li>
            <li>
              <span>Main Responsibilities: </span>
              {experience.responsibilities}
            </li>
            <li>
              <span>From: </span>
              {experience.dateFrom}
            </li>
            <li>
              <span>Until: </span>
              {experience.dateUntil}
            </li>
          </ol>
        </li>
      </ul>

    </div>
  );
}