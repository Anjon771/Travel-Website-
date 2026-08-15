const stats: [string, string][] = [
  ['500+', 'Destinations'],
  ['10K+', 'Happy Travelers'],
  ['150+', 'Travel Experts'],
  ['4.9', 'Average Rating'],
  ['24/7', 'Travel Support'],
];

export function Stats() {
  return (
    <section className="stats" aria-label="Company statistics">
      <div className="page-shell stats-grid">
        {stats.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
