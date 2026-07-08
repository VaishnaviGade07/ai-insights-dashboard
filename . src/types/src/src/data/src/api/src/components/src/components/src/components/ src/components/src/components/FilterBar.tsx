import type { ReviewStatus } from "../types";

interface FilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  status: ReviewStatus | "all";
  onStatusChange: (value: ReviewStatus | "all") => void;
  datasetName: string | "all";
  onDatasetChange: (value: string | "all") => void;
  datasetOptions: string[];
}

export default function FilterBar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  datasetName,
  onDatasetChange,
  datasetOptions,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <input
        className="input"
        type="text"
        placeholder="Search by ID, label, or annotator…"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search records"
      />

      <select
        className="select"
        value={status}
        onChange={(e) => onStatusChange(e.target.value as ReviewStatus | "all")}
        aria-label="Filter by status"
      >
        <option value="all">All statuses</option>
        <option value="validated">Validated</option>
        <option value="needs-review">Needs review</option>
        <option value="rejected">Rejected</option>
      </select>

      <select
        className="select"
        value={datasetName}
        onChange={(e) => onDatasetChange(e.target.value)}
        aria-label="Filter by dataset"
      >
        <option value="all">All datasets</option>
        {datasetOptions.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
