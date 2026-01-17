import { ReactNode } from 'react';

interface NewsItemProps {
  date?: string;
  children: ReactNode;
}

export function NewsItem({ date, children }: NewsItemProps) {
  return (
    <article className="news-item">
      {date ? (
        <time className="news-badge" dateTime={date} aria-label={`Date: ${date}`}>
          {date}
        </time>
      ) : null}
      <div className="basis-3/4 text-left">
        {children}
      </div>
    </article>
  );
}
