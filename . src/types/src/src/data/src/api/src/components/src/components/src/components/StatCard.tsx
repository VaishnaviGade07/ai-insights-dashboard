interface StatCardProps {
  label: string;
  value: string | number;
  accent?: "validated" | "review" | "rejected";
}

export default function StatCard({ label, value, accent }: StatCardProps) {
  const accentClass = accent ? `accent-${accent}` : "";

  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className={`stat-value ${accentClass}`}>{value}</div>
    </div>
  );
}
