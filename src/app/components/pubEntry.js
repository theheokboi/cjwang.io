function ConferenceBadge({ conference }) {
  if (!conference) return null;
  const badgeClass = `publication-badge glide-animation`;
  return <div className={badgeClass}>{conference}</div>;
}

function PublicationLink({ text, link }) {
  if (!link) return null;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="publication-link glide-animation"
    >
      {text}
    </a>
  );
}

export function PublicationEntry({
  title,
  conference,
  conferenceFullName,
  authors = [],
  components = [],
  highlightAuthors = [],
}) {
  return (
    <div className="publication-entry">
      <div className="flex items-start mt-0.5">
        <ConferenceBadge conference={conference} />
      </div>

      <div className="flex flex-col justify-between">
        <p className="mb-1 text-left font-bold">{title}</p>

        <p className="mb-1">
          {authors.map((author, index) => (
            <span key={index}>
              {highlightAuthors.includes(author) ? (
                <span className="underline">{author}</span>
              ) : (
                author
              )}
              {index < authors.length - 1 && ", "}
            </span>
          ))}
        </p>

        <p className="italic">{conferenceFullName}</p>

        <div className="flex flex-row flex-wrap gap-3 pt-4">
          {components.map((component, index) => (
            <PublicationLink
              key={index}
              text={component.title}
              link={component.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
