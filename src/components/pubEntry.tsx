interface PublicationLinkProps {
  text: string;
  link: string;
}

function ConferenceBadge({ conference }: { conference?: string }) {
  if (!conference) return null;
  return (
    <div className="publication-badge" role="text" aria-label={`Conference: ${conference}`}>
      {conference}
    </div>
  );
}

function PublicationLink({ text, link }: PublicationLinkProps) {
  if (!link) return null;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="publication-link"
      aria-label={`${text} (opens in new tab)`}
    >
      {text}
    </a>
  );
}

interface PublicationComponent {
  title: string;
  link: string;
}

interface PublicationEntryProps {
  title: string;
  conference?: string;
  conferenceFullName: string;
  authors?: string[];
  components?: PublicationComponent[];
  highlightAuthors?: string[];
}

export function PublicationEntry({
  title,
  conference,
  conferenceFullName,
  authors = [],
  components = [],
  highlightAuthors = [],
}: PublicationEntryProps) {
  return (
    <article className="publication-entry" aria-labelledby={`pub-title-${title.slice(0, 10).replace(/\s+/g, '-')}`}>
      <div className="flex items-center">
        <ConferenceBadge conference={conference} />
      </div>

      <div className="flex flex-col justify-between">
        <h3 id={`pub-title-${title.slice(0, 10).replace(/\s+/g, '-')}`} className="mb-1 text-left font-bold">
          {title}
        </h3>

        <p className="mb-1" aria-label="Authors">
          {authors.map((author, index) => (
            <span key={index}>
              {highlightAuthors.includes(author) ? (
                <strong className="underline" aria-label={`${author} (highlighted author)`}>
                  {author}
                </strong>
              ) : (
                author
              )}
              {index < authors.length - 1 && ', '}
            </span>
          ))}
        </p>

        <p className="italic" aria-label="Conference">{conferenceFullName}</p>

        <nav className="flex flex-row flex-wrap gap-3 pt-4" aria-label="Publication links">
          {components.map((component, index) => (
            <PublicationLink
              key={index}
              text={component.title}
              link={component.link}
            />
          ))}
        </nav>
      </div>
    </article>
  );
}
