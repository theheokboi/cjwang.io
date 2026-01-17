
interface ExperienceCardProps {
  logo: string;
  company: string;
  position: string;
  years: string;
}

export function ExperienceCard({
  logo,
  company,
  position,
  years,
}: ExperienceCardProps) {
  return (
    <article className="experience-card" aria-label={`Experience at ${company}`}>
      <div className="experience-entry">
        <div className="experience-logo" aria-hidden="true">
          <img
            src={logo}
            alt={`${company} logo`}
            className="experience-logo__image"
            loading="lazy"
          />
        </div>

        <div className="experience-details">
          <h3 className="experience-company">{company}</h3>
          <p className="experience-position">{position}</p>
          <time className="experience-years" dateTime={years}>
            {years}
          </time>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
