export function NewsItem({ date, children }) {
  const badgeClass = `news-badge glide-animation`;

  return (
    <div className="news-item">
      {date ? <div className={badgeClass}>{date}</div> : null}
      <div className="basis-3/4 text-left align-middle">{children}</div>
    </div>
  );
}
