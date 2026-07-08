import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchDatasetSummaries } from "../api/annotationsApi";
import type { DatasetSummary } from "../types";
import StatCard from "../components/StatCard";
import ConfidenceMeter from "../components/ConfidenceMeter";

export default function Dashboard() {
  const [summaries, setSummaries] = useState<DatasetSummary[] | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchDatasetSummaries().then((data) => {
      if (!cancelled) setSummaries(data);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!summaries) {
    return (
      <main className="main">
        <div className="state-message">Loading dashboard…</div>
      </main>
    );
  }

  const totals = summaries.reduce(
    (acc, s) => ({
      total: acc.total + s.totalRecords,
      validated: acc.validated + s.validated,
      needsReview: acc.needsReview + s.needsReview,
      rejected: acc.rejected + s.rejected,
    }),
    { total: 0, validated: 0, needsReview: 0, rejected: 0 }
  );

  return (
    <main className="main">
      <div className="topbar">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">
            A live view of how AI-labeled samples are moving through human review, aggregated
            across every connected dataset.
          </p>
        </div>
      </div>

      <div className="stat-grid">
        <StatCard label="Total records" value={totals.total} />
        <StatCard label="Validated" value={totals.validated} accent="validated" />
        <StatCard label="Needs review" value={totals.needsReview} accent="review" />
        <StatCard label="Rejected" value={totals.rejected} accent="rejected" />
      </div>

      <div className="panel">
        <div className="filter-bar" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <strong style={{ fontSize: 14 }}>Datasets</strong>
        </div>
        <div className="table-wrapper">
          <table className="records-table">
            <thead>
              <tr>
                <th>Dataset</th>
                <th>Records</th>
                <th>Avg. confidence</th>
                <th>Validated</th>
                <th>Needs review</th>
                <th>Rejected</th>
              </tr>
            </thead>
            <tbody>
              {summaries.map((s) => (
                <tr key={s.id}>
                  <td>
                    <Link to={`/records?dataset=${encodeURIComponent(s.name)}`}>{s.name}</Link>
                  </td>
                  <td>{s.totalRecords}</td>
                  <td>
                    <ConfidenceMeter value={s.averageConfidence} />
                  </td>
                  <td>{s.validated}</td>
                  <td>{s.needsReview}</td>
                  <td>{s.rejected}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
