export function ExperienceCard({ logo, company, position, years }) {
  return (
    <div className="experience-card">
      <div className="experience-entry">
        <div className="experience-logo">
          <img
            src={logo}
            alt={`${company} logo`}
            className="experience-logo__image"
          />
        </div>

        <div className="experience-details">
          <p className="experience-company">{company}</p>
          <p className="experience-position">{position}</p>
          <p className="experience-years">{years}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
