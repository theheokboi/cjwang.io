import { ReactNode } from 'react';

interface NewsItemProps {
  date?: string;
  children: ReactNode;
}

export function NewsItem({ date, children }: NewsItemProps) {
  const badgeClass = `news-badge glide-animation`;

  return (
    <article className="news-item">
      {date ? (
        <time className={badgeClass} dateTime={date} aria-label={`Date: ${date}`}>
          {date}
        </time>
      ) : null}
      <div className="basis-3/4 text-left align-middle">{children}</div>
    </article>
  );
}
